"use client"
import Link from "next/link";
import { menuItems } from "../nav/NavBar";


const Footer = () => {
  return (
    <footer>
    <div className="grid grid-cols-1 lg:grid-cols-3 items-center w-full bottom-0 relative bg-[#51c2f1] text-white" >
      <div className="flex justify-center pt-[4px] lg:my-3">
        <img
          src="../../assets/icons/logo-sa.png"
          alt="Logo Supermercado Anlas"
          width={150}
          className="w-28"
        />
      </div>

      <div id="menu__inf">
        <nav>
          <ul className="text-center text-[20px] lg:text-[18px] mb-[16px] opacity-80">
          {menuItems.map((link, index) => (
              <li key={index}>
                <Link href={link.path}> <span>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div>
        <p className="text-center p-[1%] text-[16px] lg:text-[18px] mt-0 mx-0 mb-[16px] opacity-80">
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

