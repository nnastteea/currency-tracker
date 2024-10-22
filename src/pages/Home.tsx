import React from "react";
import { quotes, stocks } from "@constants/Constants";

import BlockWithCards from "../components/BlockWithCards";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LastUpdate from "../components/LastUpdate";
import * as S from "../GlobalStyles";

function Home() {
  return (
    <>
      <S.GlobalStyle />
      <Header />
      <LastUpdate />
      <BlockWithCards titleSection="Stocks" cards={stocks} />
      <BlockWithCards titleSection="Quotes" cards={quotes} />
      <Footer />
    </>
  );
}

export default Home;
