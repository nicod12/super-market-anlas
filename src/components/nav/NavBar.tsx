"use client";
import { IoMdHome } from "react-icons/io";
import { FaListUl } from "react-icons/fa6";
import { FaShoppingCart, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

const menuItems = [
  { name: "Inicio", path: "/", icon: <IoMdHome /> },
  { name: "Productos", path: "/products", icon: <FaListUl /> },
  { name: "Tienda", path: "/", icon: <FaShoppingCart /> },
  { name: "Contacto", path: "/contact", icon: <FaEnvelope /> },
];

const NavBar = () => {
  return (
    <section className="bg-[#07a2d8]">
      <section className="flex justify-center items-center w-[95%] max-w-[960px] my-0 mx-auto gap-10">
        <div className="float-left">
          <h1 className="text-[40px]">SUPERMERCADO ANLAS</h1>
        </div>
        <nav>
          <ul className="flex list-none gap-4 pt-3">
            {menuItems.map((link, index) => (
              <li key={index} className="inline-block">
                <Link href={link.path}>
                  {link.icon} {link.name}
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
