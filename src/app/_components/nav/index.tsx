import React from "react";
import { NavBettewen, NavComponent, NavContainer } from "./components";
import Logo from "../Logo";
import NavGroupLink from "./group-link";

const NavBar = () => {
    return (
        <NavComponent>
            <NavContainer>
                <NavBettewen>
                    <Logo />
                    <NavGroupLink />
                </NavBettewen>
            </NavContainer>
        </NavComponent>
    );
}

export default NavBar;