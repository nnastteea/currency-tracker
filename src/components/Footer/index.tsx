import React from "react";
import Logo from "@assets/logo.svg";

import * as S from "./style";

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
        <div>
          <S.TitleOfSectionSecond>General</S.TitleOfSectionSecond>
          <S.TextOfSectionSecond>Market</S.TextOfSectionSecond>
          <S.TextOfSectionSecond>Service</S.TextOfSectionSecond>
        </div>
        <div>
          <S.TitleOfSectionSecond>Product</S.TitleOfSectionSecond>
          <S.TextOfSectionSecond>Sparks</S.TextOfSectionSecond>
          <S.TextOfSectionSecond>Snaps</S.TextOfSectionSecond>
        </div>
        <div>
          <S.TitleOfSectionSecond>Community</S.TitleOfSectionSecond>
          <S.TextOfSectionSecond>Ideas</S.TextOfSectionSecond>
          <S.TextOfSectionSecond>Streams</S.TextOfSectionSecond>
        </div>
      </S.SectionSecond>
    </S.FooterContainer>
  );
}

export default Footer;
