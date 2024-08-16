"use client";
import Carousel from "../components/carousel/Carousel";

const HomePage = () => {
  return (
    <>
      <main className=" mx-auto">
        <h1 className="text-center text-[22px] text-[#0e1c85] mt-[50px] mb-5">
          Un poco de nuestra historia
        </h1>
        <h2 className="text-[18px] text-center w-full mx-auto font-light">
          Nos dedicamos a la venta de productos alimenticios al por menor y por
          mayor de la mejor calidad brindándoles siempre el mejor servicio.
        </h2>

        <section className="w-full h-auto mt-[50px]">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-12 lg:px-10 lg:w-[80%] lg:mx-auto">
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <img
                src="../assets/images/descarga.webp"
                alt="Nosotros"
                className="w-[250px] lg:w-[300px]"
              />
            </div>
            <div className="lg:w-1/2">
              <h5 className="text-[#0e1c85] text-center text-[20px] pt-5 lg:pt-0 ">
                Nosotros
              </h5>
              <p className="text-[14px] mt-5 mx-5 lg:mx-0 lg:text-[15px] lg:pr-20">
                Somos un supermercado comprometido con la excelencia y la
                satisfacción de nuestros clientes. Ofrecemos una amplia variedad
                de productos frescos, saludables y de alta calidad, siempre
                buscando superar las expectativas de nuestros consumidores.
                Creemos en la importancia de brindar un ambiente acogedor y
                seguro, donde la experiencia de compra sea siempre agradable y
                eficiente. Nos enorgullecemos de ser una parte esencial de la
                comunidad, trabajando día a día para mejorar y adaptarnos a sus
                necesidades.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-12 lg:px-10 lg:w-[80%] lg:mx-auto">
            <div className="lg:w-1/2 order-last lg:order-first">
              <h5 className="text-[#0e1c85] text-center text-[20px] pt-5 lg:pt-0">
                Nuestra misión
              </h5>
              <p className="text-[14px] mt-5 mx-5 lg:mx-0 lg:text-[15px] lg:pl-20">
                Nuestra misión es ofrecer productos de alta calidad a precios
                justos, asegurando una experiencia de compra positiva y
                satisfactoria para nuestros clientes. Nos comprometemos a
                mantener un servicio al cliente excepcional, promoviendo la
                sostenibilidad y la responsabilidad social. Trabajamos para
                crear un ambiente acogedor y seguro donde todos puedan encontrar
                lo que necesitan con facilidad y confianza. Agradecemos su
                preferencia y lealtad, y nos esforzamos por ser su supermercado
                de elección.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center lg:justify-start">
              <img
                src="../assets/images/descarga1.webp"
                alt="Nuestra misión"
                className="w-[250px] lg:w-[300px]"
              />
            </div>
          </div>
        </section>

        <section className="w-full my-8 lg:hidden">
          <Carousel />
        </section>

        <section className="w-full h-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-12 lg:px-10 lg:w-[80%] lg:mx-auto">
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <img
                src="../assets/images/descarga2.webp"
                alt="Ustedes"
                className="w-[250px] lg:w-[300px]"
              />
            </div>
            <div className="lg:w-1/2">
              <h5 className="text-[#0e1c85] text-center text-[20px] pt-5 lg:pt-0">
                Ustedes
              </h5>
              <p className="text-[14px] mt-5 mx-5 lg:mx-0 lg:text-[15px] lg:pr-20">
                Ustedes son el corazón de nuestro supermercado. Cada día
                trabajamos para ofrecerles productos y servicios que se adapten
                a sus necesidades y preferencias. Apreciamos su confianza y
                lealtad, y nos esforzamos continuamente por mejorar para
                ustedes. Nos inspira su apoyo y estamos aquí para hacer su
                experiencia de compra lo más satisfactoria posible. ¡Gracias por
                ser parte de nuestra comunidad!
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-12 lg:px-10 lg:w-[80%] lg:mx-auto">
            <div className="lg:w-1/2 order-last lg:order-first">
              <h5 className="text-[#0e1c85] text-center text-[20px] pt-5 lg:pt-0">
                Mejores ofertas
              </h5>
              <p className="text-[14px] mt-5 mx-5 lg:mx-0 lg:text-[12px] lg:text-justify lg:pl-20">
                En nuestro supermercado, nos comprometemos a ofrecer las mejores
                ofertas en una amplia gama de productos. Constantemente buscamos
                oportunidades para proporcionarle a usted, nuestro valioso
                cliente, precios competitivos y promociones irresistibles. Desde
                productos frescos hasta artículos del hogar, estamos aquí para
                asegurar que obtenga el mejor valor por su dinero. Estamos
                dedicados a hacer que su experiencia de compra sea aún más
                gratificante con nuestras ofertas exclusivas y atractivas.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center lg:justify-start">
              <img
                src="../assets/images/descarga3.webp"
                alt="Mejores ofertas"
                className="w-[250px] lg:w-[300px]"
              />
            </div>
          </div>
        </section>

        <section className="bg-[#06a2d8] py-2 mb-[32px] text-[16px]">
          <div>
            <h2 className="text-gray-200 font-semibold whitespace-nowrap animate-marquee text-center">
              Aprovechá nuestro 20% de descuento en efectivo comprando más de $100.000.
            </h2>
          </div>
        </section>

      </main>
    </>
  );
};

export default HomePage;
