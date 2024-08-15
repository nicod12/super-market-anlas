"use client"
import Carousel from "../components/carousel/Carousel";



const HomePage = () => {
  return (
    <>
      <main>
        <h1 className="text-center text-[22px] text-[#0e1c85] mt-[50px] mx-auto mb-5 ">Un poco de nuestra historia</h1>
        <h2 className="text-[18px] text-center w-[80%] m-auto font-light">
          Nos dedicamos a la venta de productos alimenticios al por menor y por
          mayor de la mejor calidad brindándoles siempre el mejor servicio.
        </h2>
        <section className="w-full h-auto">
          <div className="flex items-center justify-center w-[80%] mt-[50px] mx-auto mb-[30px] flex-col">
            <div><img src="../assets/images/descarga.webp" alt="img" width={300} className="w-[250px] sm:w-[300px]" /></div>

            <div>
              <h5 className="text-[#0e1c85] text-center text-[20px] pt-5">Nosotros</h5>
              <p className="text-[14px] mt-5 mx-5 mb-[-30px]">
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
          <div className="flex items-center justify-center w-[80%] mt-[50px] mx-auto mb-30px flex-col">
            <div>
              <h5 className="text-[#0e1c85] text-center text-[20px] pt-5">Nuestra misión</h5>
              <p className="mt-5 mx-5 mb-[30px] py-0 pr-5 pl-[10px] text-[14px]">
                Nuestra misión es ofrecer productos de alta calidad a precios
                justos, asegurando una experiencia de compra positiva y
                satisfactoria para nuestros clientes. Nos comprometemos a mantener
                un servicio al cliente excepcional, promoviendo la sostenibilidad
                y la responsabilidad social. Trabajamos para crear un ambiente
                acogedor y seguro donde todos puedan encontrar lo que necesitan
                con facilidad y confianza. Agradecemos su preferencia y lealtad, y
                nos esforzamos por ser su supermercado de elección.
              </p>
            </div>
            <div><img src="../assets/images/descarga1.webp" alt="img" width={300} className="w-[250px] sm:w-[300px]" /></div>
          </div>
        </section>

         <section className="carousel__home lg:hidden md-hidden">
          <Carousel />
         </section> 



        <section className="w-full h-auto">
          <div className="flex items-center justify-center w-[80%] mt-[50px] mx-auto mb-[30px] flex-col">
            <div><img src="../assets/images/descarga2.webp" alt="img" width={300} className="w-[250px] sm:w-[300px]" /></div>

            <div>
              <h5 className="text-[#0e1c85] text-center text-[20px] pt-5">Ustedes</h5>
              <p className="text-[14px] mt-5 mx-5 mb-[-30]">
                Ustedes son el corazón de nuestro supermercado. Cada día
                trabajamos para ofrecerles productos y servicios que se adapten a
                sus necesidades y preferencias. Apreciamos su confianza y lealtad,
                y nos esforzamos continuamente por mejorar para ustedes. Nos
                inspira su apoyo y estamos aquí para hacer su experiencia de
                compra lo más satisfactoria posible. ¡Gracias por ser parte de
                nuestra comunidad!
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center w-[80%] mt-[50px] mx-auto mb-[30px] flex-col">
            <div>
              <h5 className="text-[#0e1c85] text-center text-[20px] pt-5">Mejores ofertas</h5>
              <p className="text-[14px] mt-5 mx-5 mb-[30px] py-0 pr-5 pl-[10px]">
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
            <div><img src="../assets/images/descarga3.webp" alt="img" width={300} className="w-[250px] sm:w-[300px]" /></div>
          </div>
        </section>

        <section className="w-full bg-[#06a2d8] py-4 mb-[32px] text-[16px]">
          <div className="marquee w-full overflow-hidden h-auto">
            <h2 className="text-white font-semibold whitespace-nowrap animate-marquee">
              Aprovechá nuestro 20% de descuento en efectivo comprando más de $100.000.
            </h2>
          </div>
        </section>

      </main>
    </>
  )
}

export default HomePage;