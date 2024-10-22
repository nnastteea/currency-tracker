import React, { useState } from "react";
import HeaderImg from "@assets/Header.svg";
import Logo from "@assets/Logo.svg";
import Menu from "@assets/Menu.svg";

import Switch from "../SwitchButton";
import * as S from "./styles";
import { useMediaQuery } from "./useMediaQuery";

function Header() {
  const { isMobile } = useMediaQuery();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <S.HeaderContainer>
        <S.LogoContainer>
          <img src={Logo} alt="logo" />
        </S.LogoContainer>
        {isMobile ? (
          <>
            <S.MenuImgContainer onClick={openMenu}>
              <img src={Menu} alt="menu" />
            </S.MenuImgContainer>
            {isMenuOpen && (
              <S.DropDownMenu>
                <S.DropDownItem>Home</S.DropDownItem>
                <S.DropDownItem>TimeLine</S.DropDownItem>
                <S.DropDownItem>Bank card</S.DropDownItem>
                <S.DropDownItem>Contact</S.DropDownItem>
              </S.DropDownMenu>
            )}
          </>
        ) : (
          <S.NavContainer>
            <S.MenuItem>Home</S.MenuItem>
            <S.MenuItem>TimeLine</S.MenuItem>
            <S.MenuItem>Bank card</S.MenuItem>
            <S.MenuItem>Contact</S.MenuItem>
          </S.NavContainer>
        )}

        <div>
          <Switch />
        </div>
      </S.HeaderContainer>
      <S.HeaderImage src={HeaderImg} />
    </>
  );
}

export default Header;
