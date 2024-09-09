"use client";

import { fetchProducts } from "@/utils/api";
import { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";
import ModalAddCart from "../modals/ModalAddCart";

interface ProductList {
  id: number;
  name: string;
  price: string;
  stock: number;
  image: string;
};

const GalleryProducts: React.FC = () => {
  const [products, setProducts] = useState<ProductList[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [modal, setModal] = useState(false);
  const [cart, setCart] = useState<ProductList[]>([]);
  const [quantity, setQuantity] = useState<{ [key: number]: number }>({});
  const [availableStock, setAvailableStock] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);

        const initialQuantities: { [key: number]: number } = data.reduce((acc: { [key: number]: number }, product: ProductList) => {
          acc[product.id] = 0;
          return acc;
        }, {});

        const initialStock: { [key: number]: number } = data.reduce((acc: { [key: number]: number }, product: ProductList) => {
          acc[product.id] = product.stock;
          return acc;
        }, {}); setQuantity(initialQuantities);
        setAvailableStock(initialStock);

      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Error fetching products. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleQuantityChange = (id: number, change: number) => {
    setQuantity((prev) => {
      const newQuantity = Math.max(prev[id] + change, 0); // Evitar que la cantidad sea negativa
      if (newQuantity <= availableStock[id]) {
        return {
          ...prev,
          [id]: newQuantity
        };
      }
      return prev;
    });
  };

  const handleAddToCart = (product: ProductList) => {
    setCart((prevCart) => [...prevCart, { ...product, quantity: quantity[product.id] }]);
    setModal(true);
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-5 px-5 my-12 lg:px-4">
          {products.map(product => {
            return (
              <div key={product.id} className="flex flex-col justify-between bg-white border rounded-lg shadow-sm p-4 h-full">
                <img
                  src={product.image}
                  alt={`Image of ${product.name}`}
                  className="w-[18rem] lg:w-full h-auto mb-4"
                />
                <div className="flex flex-col flex-grow">
                  <h2 className="text-xl lg:text-[15px] text-center font-semibold mb-1">{product.name}</h2>
                  <p className="text-base lg:text-[12px] text-center opacity-90 mb-1">
                    Stock: {availableStock[product.id] - quantity[product.id]}
                  </p>
                  <p className="text-base lg:text-[12px] text-center opacity-90 mb-4">
                    ${product.price} por unidad
                  </p>
                  <div className="flex flex-col">
                    <span className="flex items-center justify-center gap-4 mb-2">
                      <button
                        onClick={() => handleQuantityChange(product.id, -1)}
                        className="py-2 px-4 bg-[#51c2f1] text-white rounded-md"
                      >
                        -
                      </button>
                      <input
                        type="text"
                        readOnly
                        value={quantity[product.id]}
                        className="text-center w-10 py-2 px-1 rounded-md border border-gray-300"
                      />
                      <button
                        onClick={() => handleQuantityChange(product.id, 1)}
                        className="py-2 px-4 bg-[#51c2f1] text-white rounded-md"
                      >
                        +
                      </button>
                    </span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="py-2 px-4 bg-[#51c2f1] text-white rounded-md mt-2"
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
      {modal && <ModalAddCart onClose={() => setModal(false)} />}
    </div>
  );
};

export default GalleryProducts;
