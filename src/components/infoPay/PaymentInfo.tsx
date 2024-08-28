import { useState } from 'react';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';

type LinksItems = {
  text: string;
  description: string;
}

const links: LinksItems[] = [
  {
    text: "¿Cómo realizo el pago si no tengo cuenta de Mercado Libre?",
    description: "¡Crear un cuenta es muy fácil! Al momento de comprar, te redirigiremos a Mercado Libre para que la crees. Sólo tenés que ingresar un e-mail, una clave y continuar con tu compra."
  },
  {
    text: "¿Dónde veo el costo de envío y el tiempo de entrega?",
    description: "En la página del producto que quieras comprar verás la opción de calcular cuándo llega, con la información sobre el costo de envío y el tiempo de entrega."
  },
  {
    text: "¿Puedo pagar en cuotas?",
    description: "Podrás ver en la página del producto si se puede pagar en cuotas y con qué medios. Si decidís comprarlo, antes de pagar podrás elegir la cantidad de cuotas y te informaremos el valor de cada una."
  },
  {
    text: "¿Cómo puedo realizar cambios y devoluciones?",
    description: "Los cambios y devoluciones de productos se realizan a través de Mercado Libre. Podés hacerlo en tu computadora o en la aplicación desde la sección Mis Compras, seleccionando el producto y luego eligiendo la opción Devolver el producto. Te daremos una etiqueta de envío para que imprimas y pegues en el paquete para llevarlo al correo ¡y listo!"
  }
]

const PaymentInfo = () => {
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  const toggleInfo = () => {
    setIsInfoVisible(!isInfoVisible);
  };

  return (
    <section className="flex flex-col justify-center items-center">
      <div className='py-2 boder-y-blue boder-2'>
        <button
          onClick={toggleInfo}
          className="py-2 px-5 text-sm text-[#06A2D8] flex items-center"
        >
          ¿Cómo realizo el pago si no tengo cuenta de Mercado Libre?
          {isInfoVisible ? <SlArrowUp /> : <SlArrowDown />}
        </button>
      </div>
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
