"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useMenuMobileModal } from "../hooks/use-menu-mobile-modal";
import NavGroupLinkMobile from "../_components/nav/group-link-mobile";
import Overlay from "../_components/Overlay";

const MenuMobileModal = () => {
  const menuMobile = useMenuMobileModal();
  
  return (
    <div 
      className={`fixed top-0 left-0 flex justify-end h-screen w-screen z-[40] transition-all duration-500 bg-transparent ${
        menuMobile.isOpen ? "opacity-100 left-0" : "opacity-0 left-[100%]"
      }`}
      style={{ pointerEvents: menuMobile.isOpen ? "auto" : "none" }} // Impede interação quando fechado
    >
      <Overlay onClick={() => menuMobile.onClose()} />
      <div className="absolute z-50 bg-white h-full w-full max-w-[80%] ">
        <Button
          onClick={() => menuMobile.onClose()}
          className="absolute p-0 h-10 w-10 bg-primary rounded-full top-6 border -left-5"
          variant="default"
        >
          <X />
        </Button>
        
        <NavGroupLinkMobile />

      </div>
    </div>
  );
};

export default MenuMobileModal;
