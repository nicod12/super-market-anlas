import { useState } from 'react';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';

type LinksItems = {
  text: string;
  description: string;
}

const links: LinksItems[] = [
  {
    text: "┬┐C├│mo realizo el pago si no tengo cuenta de Mercado Libre?",
    description: "┬íCrear un cuenta es muy f├ícil! Al momento de comprar, te redirigiremos a Mercado Libre para que la crees. S├│lo ten├®s que ingresar un e-mail, una clave y continuar con tu compra."
  },
  {
    text: "┬┐D├│nde veo el costo de env├¡o y el tiempo de entrega?",
    description: "En la p├ígina del producto que quieras comprar ver├ís la opci├│n de calcular cu├índo llega, con la informaci├│n sobre el costo de env├¡o y el tiempo de entrega."
  },
  {
    text: "┬┐Puedo pagar en cuotas?",
    description: "Podr├ís ver en la p├ígina del producto si se puede pagar en cuotas y con qu├® medios. Si decid├¡s comprarlo, antes de pagar podr├ís elegir la cantidad de cuotas y te informaremos el valor de cada una."
  },
  {
    text: "┬┐C├│mo puedo realizar cambios y devoluciones?",
    description: "Los cambios y devoluciones de productos se realizan a trav├®s de Mercado Libre. Pod├®s hacerlo en tu computadora o en la aplicaci├│n desde la secci├│n Mis Compras, seleccionando el producto y luego eligiendo la opci├│n Devolver el producto. Te daremos una etiqueta de env├¡o para que imprimas y pegues en el paquete para llevarlo al correo ┬íy listo!"
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
          ┬┐C├│mo realizo el pago si no tengo cuenta de Mercado Libre?
          {isInfoVisible ? <SlArrowUp /> : <SlArrowDown />}
        </button>
      </div>
      {isInfoVisible && (
        <div className="text-gray-700 text-center">
          <p> ┬íCrear una cuenta es muy f├ícil! Al momento de
            comprar, te
            redirigiremos a Mercado
            Libre para que la crees. S├│lo ten├®s que ingresar un e-mail, una
            clave y continuar
            con tu compra.</p>
        </div>
      )}
    </section>
  );
};

export default PaymentInfo;

