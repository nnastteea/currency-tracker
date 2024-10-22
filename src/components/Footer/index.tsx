import React from "react";
import Logo from "@assets/Logo.svg";
import { sections } from "@constants/Constants";

import * as S from "./styles";

function Footer() {
  return (
    <S.FooterContainer>
      <section>
        <S.ContainerTitleAndLogo>
          <S.ImgLogo src={Logo} />
          <S.TitleFooter>Modsen Currency Tracker</S.TitleFooter>
        </S.ContainerTitleAndLogo>
        <S.TextFooter>
          Since then, the company has grown organically to. Starsup is the
          world`s largest trading platform, with $12 billion worth of currency
          trading and 500.000 tickets sold daily to tens of thousands of traders
          worldwide.
        </S.TextFooter>
      </section>
      <S.SectionSecond>
        {sections.map(({ id, title, items }) => (
          <div key={id}>
            <S.TitleOfSectionSecond>{title}</S.TitleOfSectionSecond>
            {items.map(({ id, name }) => (
              <S.TextOfSectionSecond key={id}>{name}</S.TextOfSectionSecond>
            ))}
          </div>
        ))}
      </S.SectionSecond>
    </S.FooterContainer>
  );
}

export default Footer;
