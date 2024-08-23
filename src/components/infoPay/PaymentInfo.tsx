import { useState } from 'react';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';

const PaymentInfo = () => {
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  const toggleInfo = () => {
    setIsInfoVisible(!isInfoVisible);
  };

  return (
    <section className="flex flex-col justify-center items-center gap-5">
      <button
        onClick={toggleInfo}
        className="py-4 px-5 text-sm text-[#06A2D8] flex items-center"
      >
        ¿Cómo realizo el pago si no tengo cuenta de Mercado Libre?
        {isInfoVisible ? <SlArrowUp /> : <SlArrowDown />}
      </button>

      {isInfoVisible && (
        <div className="text-gray-700 text-center">
          <p> ¡Crear una cuenta es muy fácil! Al momento de
            comprar, te
            redirigiremos a Mercado
            Libre para que la crees. Sólo tenés que ingresar un e-mail, una
            clave y continuar
            con tu compra.</p>
        </div>
      )}
    </section>
  );
};

export default PaymentInfo;
