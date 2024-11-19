import React from "react";
import { HeaderComponent, HeaderContainer } from "./components";
import NavBar from "../nav";
import CenterContent from "../CenterContent";

const Header = () => {
    return (
        <HeaderComponent>
            <HeaderContainer>
                <CenterContent>
                    <NavBar />
                </CenterContent>
            </HeaderContainer>
        </HeaderComponent>
    );
}

export default Header;