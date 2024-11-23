"use client"
import React from "react";
import { NavBettewen, NavComponent, NavContainer } from "./components";
import NavGroupLinkDesk from "./group-link";
import { AlignJustify } from "lucide-react";
import { useMenuMobileModal } from "@/app/hooks/use-menu-mobile-modal";
import Logo from "@/components/icons/Logo";

const NavBar = () => {
    const menuMobile = useMenuMobileModal()

    return (
        <NavComponent>
            <NavContainer>
                <NavBettewen>
                    <Logo />
                    <Logo />
                    <NavGroupLinkDesk className={"hidden md:flex"} />
                    <div onClick={()=> menuMobile.onOpen()} className="md:hidden p-4 cursor-pointer">
                        <AlignJustify width={30} className="text-white" />
                    </div>
                </NavBettewen>
            </NavContainer>
        </NavComponent>
    );
}

export default NavBar;