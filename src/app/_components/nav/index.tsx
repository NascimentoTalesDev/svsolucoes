"use client"
import React from "react";
import { NavBettewen, NavComponent, NavContainer } from "./components";
import Logo from "../Logo";
import NavGroupLinkDesk from "./group-link";
import { AlignJustify } from "lucide-react";
import { useMenuMobileModal } from "@/app/hooks/use-menu-mobile-modal";

const NavBar = () => {
    const menuMobile = useMenuMobileModal()

    return (
        <NavComponent>
            <NavContainer>
                <NavBettewen>
                    <Logo />

                    <NavGroupLinkDesk className={"hidden md:flex"} />
                    <div onClick={()=> menuMobile.onOpen() } className="md:hidden p-2">
                        <AlignJustify width={30} className="text-white" />
                    </div>
                </NavBettewen>
            </NavContainer>
        </NavComponent>
    );
}

export default NavBar;