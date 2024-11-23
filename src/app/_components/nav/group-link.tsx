"use client"

import { checkPathname } from "@/lib/check-pathname";
import { usePathname } from "next/navigation";
import { NavLink, NavLinks } from "./components";

interface NavGroupLinkDeskProps {
 className: string
}

const NavGroupLinkDesk = ({ className }: NavGroupLinkDeskProps) => {
  const pathname = usePathname()

  return (
    <NavLinks className={className}>
      <NavLink active={pathname === "/"} path="/" >Início</NavLink>
      <NavLink active={checkPathname(pathname, "/equipamentos")} path="/equipamentos" >Equipamentos</NavLink>
      <NavLink active={checkPathname(pathname, "/sobre")} path="/sobre" >Sobre</NavLink>
      <NavLink active={checkPathname(pathname, "/#contact")} path="#contact">Contato</NavLink>
    </NavLinks>
  );
};

export default NavGroupLinkDesk;