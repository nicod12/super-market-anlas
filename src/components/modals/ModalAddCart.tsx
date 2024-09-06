
interface Props {
  onClose: () => void;

}

const ModalAddCart: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-lg">
        <h2 className="text-xl font-semibold mb-4">Producto agregado al carrito</h2>
        <p className="mb-4">El producto ha sido añadido exitosamente a tu carrito de compras.</p>
        <button
          className="py-2 px-4 bg-[#51c2f1] text-white rounded-md"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ModalAddCart;
