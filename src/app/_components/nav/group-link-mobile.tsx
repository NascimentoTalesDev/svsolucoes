"use client"

import { checkPathname } from "@/lib/check-pathname";
import { usePathname } from "next/navigation";
import { NavLinkMobile, NavLinksMobile } from "./components";
import { useMenuMobileModal } from "@/app/hooks/use-menu-mobile-modal";

interface NavGroupLinkMobileProps {
 className?: string
}

const NavGroupLinkMobile = ({ className }: NavGroupLinkMobileProps) => {
  const pathname = usePathname()
  const menuMobile = useMenuMobileModal()

  return (
    <NavLinksMobile className={className}>
      <NavLinkMobile onClick={() => menuMobile.onClose()} active={pathname === "/"} path="/" >Início</NavLinkMobile>
      <NavLinkMobile onClick={() => menuMobile.onClose()} active={checkPathname(pathname, "/equipamentos")} path="/equipamentos" >Equipamentos</NavLinkMobile>
      <NavLinkMobile onClick={() => menuMobile.onClose()} active={checkPathname(pathname, "/sobre")} path="/sobre" >Sobre</NavLinkMobile>
      <NavLinkMobile onClick={() => menuMobile.onClose()} active={checkPathname(pathname, "/#contact")} path="#contact">Contato</NavLinkMobile>
    </NavLinksMobile>
  );
};

export default NavGroupLinkMobile;