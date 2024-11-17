import React from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import LastUpdate from "../components/LastUpdate";
import SearchCurrency from "../components/SearchCurrency";
import * as S from "../GlobalStyles";

class CardBank extends React.Component {
  render() {
    return (
      <>
        <S.GlobalStyle />
        <Header />
        <LastUpdate />
        <SearchCurrency />
        <Footer />
      </>
    );
  }
}

export default CardBank;
