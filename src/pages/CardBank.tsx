import React from "react";

import BankMap from "../components/CurrencyMap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchCurrency from "../components/SearchCurrency";
import * as S from "../GlobalStyles";

interface StateCardBank {
  selectedCurrency: string;
}

class CardBank extends React.Component {
  state: StateCardBank = {
    selectedCurrency: "Commercial Dollar",
  };

  handleCurrencySelect = (currency: string) => {
    this.setState({ selectedCurrency: currency });
  };

  render() {
    const { selectedCurrency } = this.state;
    return (
      <>
        <S.GlobalStyle />
        <Header />
        <SearchCurrency onCurrencySelect={this.handleCurrencySelect} />
        <BankMap selectedCurrency={selectedCurrency} />
        <Footer />
      </>
    );
  }
}

export default CardBank;
