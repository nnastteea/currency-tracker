import React, { useState } from "react";
import Logo from "@assets/Logo.svg";
import { useMediaQuery } from "@hooks/useMediaQuery";
import routes from "@routes/routes";

import ModsenCurrencyTracker from "../HeaderImage";
import Switch from "../SwitchButton";
import * as S from "./styles";

function Header() {
  const { isMobile } = useMediaQuery();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <S.WrapperHeader>
      <S.HeaderContainer>
        <S.LogoContainer>
          <img src={Logo} alt="logo" />
        </S.LogoContainer>
        {isMobile ? (
          <>
            <S.MenuImgContainer onClick={openMenu}>
              <S.Burger>
                <S.Line />
                <S.Line />
                <S.Line />
              </S.Burger>
            </S.MenuImgContainer>
            {isMenuOpen && (
              <S.DropDownMenu>
                <S.DropDownItem to={routes.HOME}>Home</S.DropDownItem>
                <S.DropDownItem to={routes.TIMELINE}>TimeLine</S.DropDownItem>
                <S.DropDownItem to={routes.CARDBANK}>Bank card</S.DropDownItem>
                <S.DropDownItem to={routes.CONTACT}>Contact</S.DropDownItem>
              </S.DropDownMenu>
            )}
          </>
        ) : (
          <S.NavContainer>
            <S.MenuItem to={routes.HOME}>Home</S.MenuItem>
            <S.MenuItem to={routes.TIMELINE}>TimeLine</S.MenuItem>
            <S.MenuItem to={routes.CARDBANK}>Bank card</S.MenuItem>
            <S.MenuItem to={routes.CONTACT}>Contact</S.MenuItem>
          </S.NavContainer>
        )}
        <div>
          <Switch />
        </div>
      </S.HeaderContainer>
      <ModsenCurrencyTracker />
    </S.WrapperHeader>
  );
}

export default Header;
