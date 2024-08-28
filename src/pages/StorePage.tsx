"use client"
import PaymentInfo from '@/components/infoPay/PaymentInfo';
import React from 'react';


const StorePage: React.FC = () => {

  return (
    <section className='container mx-0'>
      <h2 className="underline text-[#0e1c85] text-2xl lg:text-3xl lg:text-start lg:ml-5 text-center my-[3.5rem] ">Productos de nuestro negocio elegidos</h2>
      <p className="text-center mb-4">El carrito está vacío.</p>

      <div className=" bg-[#06a2d8] p-1 opacity-50  my-7 mx-4 h-2"></div>
      <div className=" bg-[#06a2d8] p-1 opacity-50 my-7 mx-4 h-2"></div>
      <div className=" bg-[#06a2d8] p-1 opacity-50 my-7 mx-4 h-2"></div>
      <div className=" bg-[#06a2d8] p-1 opacity-50 my-7 mx-4 h-2"></div>

      <section className="grid grid-cols-1 lg:grid-cols-3">
        <div>
          <img src='/assets/images/MediosPago.webp' alt='image' className='w-auto h-auto lg:w-80 lg:h-[200px]' />
        </div>

        <div>
          <img src='/assets/images/hero-asset.webp' alt='image' className='w-auto h-auto lg:w-80 lg:h-[200px]' />
        </div>

        <div>
          <img src='/assets/images/mobile.webp' alt='image' className='w-auto h-auto lg:w-80 lg:h-[200px]' />
        </div>
      </section>
      <section>
        <p className="text-2xl text-[#0e1c85] font-bold mt-2.5 mx-auto mb-7 text-center">Dirección</p>
      </section>

      <article className='grid grid-cols-1 lg:grid-cols-4 gap-5 justify-center lg:w-full'>
        <div className="text-sm text-[#585656] bg-[#eeeeee]  border-2 border-[#585656] rounded-s w-full max-w-[320px] my-5 p-5 mx-auto">Mitre 914</div>
        <div className="text-sm text-[#585656] bg-[#eeeeee]  border-2 border-[#585656] rounded-s w-full max-w-[320px] my-5 p-5 mx-auto">Ciudad: Villa Rosa</div>
        <div className="text-sm text-[#585656] bg-[#eeeeee]  border-2 border-[#585656] rounded-s w-full max-w-[320px] my-5 p-5 mx-auto">Provincia: Buenos Aires</div>
        <div className="text-sm text-[#585656] bg-[#eeeeee]  border-2 border-[#585656] rounded-s w-full max-w-[320px] my-5 p-5 mx-auto">Codigo Postal: B1228</div>
      </article>

      <p className="text-2xl text-center text-[#0e1c85] font-bold mt-1.5 mx-auto mb-7 ">¡Envío gratis!</p>

      <PaymentInfo />

    </section>
  );
};

export default StorePage;
