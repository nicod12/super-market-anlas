"use client"
import Link from "next/link";
import { menuItems } from "./NavBar";
import { MdMenu, MdClose } from "react-icons/md";

import { useState } from "react";


const DropDown = () => {
    return(
        <ul className="mobmenu w-[192px] flex flex-col items-center p-2 border-t border-gray-200">
            {menuItems.map((link, index) => (
                <li key={index} className="w-full p-2 dropdown-item flex items-center gap-2 text-white uppercase">
                <Link href={link.path} className="flex items-center gap-4">
                  {link.icon} <span>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul> 
    );
}

const MobMenu = () => {
    const [open, setOpen] = useState(false);

    const handleClick  = () => {
        setOpen((prev) => !prev);
    }
    return (
        <section className="flex justify-between items-center w-full max-w-[960px] sm:hidden py-3 text-gray-200 relative">
        <div className="">
          <h1 className="text-[20px]  font-bold">SUPERMERCADO ANLAS</h1>
        </div>
        <nav>
         <button aria-label="MobMenu" onClick={handleClick} className="text-[30px] py-1 px-2 border border-white">
            {
              open ? <MdClose /> : <MdMenu/>
            }
        </button>
         {
            open ? <DropDown /> : null
         }
        </nav>
      </section>
    );
}

export default MobMenu;