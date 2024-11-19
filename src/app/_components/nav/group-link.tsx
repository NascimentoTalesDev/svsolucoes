"use client"

import { checkPathname } from "@/lib/check-pathname";
import { usePathname } from "next/navigation";
import { NavLink, NavLinks } from "./components";

const NavGroupLink = () => {
  const pathname = usePathname()

  return (
    <NavLinks>
      <NavLink active={pathname === "/"} path="/" >Início</NavLink>
      <NavLink active={checkPathname(pathname, "/equipamentos")} path="/equipamentos" >Equipamentos</NavLink>
      <NavLink active={checkPathname(pathname, "/sobre")} path="/sobre" >Sobre</NavLink>
      <NavLink active={checkPathname(pathname, "/#contato")} path="/#contato">Contato</NavLink>
    </NavLinks>
  );
};

export default NavGroupLink;