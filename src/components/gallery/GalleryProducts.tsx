"use client";

import { fetchProducts } from "@/utils/api";
import { useReducer, useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";
import CartReducer, { CartState, CartItem } from "@/features/CartReducer";

interface ProductList {
  id: number;
  name: string;
  price: string;
  stock: number;
  image: string;
};

const initialCartState: CartState = {
  items: [],
};


const GalleryProducts: React.FC = () => {

  const [cartState, dispatch] = useReducer(CartReducer, initialCartState);
  const [products, setProducts] = useState<ProductList[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Error fetching products. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  const handleAddToCart = (product: ProductList) => {
    dispatch({
      type: "Add",
      payload: {
        id: product.id,
        name: product.name,
        price: parseFloat(product.price),
        quantity: 1,
        stock: product.stock
      }
    });
  };


  const handleIncreaseQuantity = (id: number) => {
    dispatch({ type: "Increase", payload: { id } });
  };

  const handleDecreaseQuantity = (id: number) => {
    dispatch({ type: "Decrease", payload: { id } });
  };
  return (
    <div>
      {loading ? (
        <div className="h-screen flex justify-center mt-12">
          <MoonLoader />
        </div>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-5 px-5 my-3 lg:px-4">
          {products.map(product => {
            const cartItem = cartState.items.find(item => item.id === product.id);

            return (
              <div key={product.id} className="flex flex-col justify-between bg-white border rounded-lg shadow-sm p-4 h-full">
                <img
                  src={product.image}
                  alt={`Image of ${product.name}`}
                  className="w-[18rem] lg:w-full h-auto mb-4"
                />
                <div className="flex flex-col flex-grow">
                  <h2 className="text-xl lg:text-[15px] text-center font-semibold mb-1">{product.name}</h2>
                  <p className="text-base lg:text-[12px] text-center opacity-90 mb-1"></p>
                  <p className="text-base lg:text-[12px] text-center opacity-90 mb-4">
                    ${product.price} por unidad
                  </p>
                  <div className="flex flex-col">
                    <span className="flex items-center justify-center gap-4 mb-2">
                      <button
                        className="py-2 px-4 bg-[#51c2f1] text-white rounded-md"
                        onClick={() => handleDecreaseQuantity(product.id)}
                        disabled={!cartItem || cartItem.quantity <= 1}
                      >
                        -
                      </button>
                      <input
                        type="text"
                        readOnly
                        value={cartItem ? cartItem.quantity : 0}
                        className="text-center w-10 py-2 px-1 rounded-md border border-gray-300"
                      />
                      <button
                        className="py-2 px-4 bg-[#51c2f1] text-white rounded-md"
                        onClick={() => handleIncreaseQuantity(product.id)}
                        disabled={!cartItem || cartItem.quantity >= product.stock}
                      >
                        +
                      </button>
                    </span>
                    <button
                      className="py-2 px-4 bg-[#51c2f1] text-white rounded-md mt-2"
                      onClick={() => handleAddToCart(product)}
                    >
                      Agregar al carrito
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default GalleryProducts;
