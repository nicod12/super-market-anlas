"use client";
import { FaHome } from "react-icons/fa";
import { FaListUl } from "react-icons/fa6";
import { FaShoppingCart, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import MobMenu from "./MobMenu";

export const menuItems = [
  { name: "Inicio", path: "/", icon: <FaHome /> },
  { name: "Productos", path: "/products", icon: <FaListUl /> },
  { name: "Tienda", path: "/cart", icon: <FaShoppingCart /> },
  { name: "Contacto", path: "/contact", icon: <FaEnvelope /> },
];




const NavBar = () => {
  return (
    <section className="bg-[#07a2d8] p-1 text-gray-200  shadow-c">
      <section className="flex justify-center items-center w-[95%] max-w-[960px] my-0 mx-auto gap-12">
        <div className="hidden sm:block float-left">
          <h1 className="text-[30px]  font-bold">SUPERMERCADO ANLAS</h1>
        </div>
        <MobMenu />
        <nav className="hidden sm:block">
          <ul className="flex list-none gap-4 pt-2 text-[12px] uppercase">
            {menuItems.map((link, index) => (
              <li key={index} className="inline-block">
                <Link href={link.path} className="flex items-center gap-2">
                  {link.icon} <span>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </section>
  );
};
export default NavBar;
