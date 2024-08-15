

const Footer = () => {
  return (
    <footer>
    <div className="grid grid-cols-1 items-center w-full bottom-0 relative bg-[#51c2f1] text-white" >
      <div className="flex justify-center pt-[4px]">
        <img
          src="../../assets/icons/logo-sa.png"
          alt="Logo Supermercado Anlas"
          width="25%"
        />
      </div>

      <div id="menu__inf">
        <nav>
          <ul className="text-center text-[20px] mb-[16px]">
            <li className="focusHover"><a href="index.html"> Inicio </a></li>
            <li className="focusHover">
              <a href="pages/productos.html"> Productos </a>
            </li>
            <li className="focusHover">
              <a href="pages/contacto.html"> Contacto </a>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <p className="text-center p-[1%] text-[16px] mt-0 mx-0 mb-[16px]">
          Copyright © | 2024 | SUPERMERCADO ANLAS<br />
          Todos los Derechos Reservados <br />
          Diseño y Desarrollo por<br />
          Andrea Guinder y Nicolás Dume
        </p>
      </div>
    </div>
  </footer>
  )
}

export default Footer;