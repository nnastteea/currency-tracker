import React, { lazy, Suspense } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";
import SearchCurrency from "../components/SearchCurrency";
import * as S from "../GlobalStyles";

interface StateCardBank {
  selectedCurrency: string;
}

const BankMap = lazy(() => import("../components/CurrencyMap"));

class CardBank extends React.Component {
  state: StateCardBank = {
    selectedCurrency: "Commercial Dollar",
  };

  handleCurrencySelect = (currency: string) => {
    const { selectedCurrency } = this.state;
    if (selectedCurrency !== currency) {
      this.setState({ selectedCurrency: currency });
    }
  };

  render() {
    const { selectedCurrency } = this.state;
    return (
      <>
        <S.GlobalStyle />
        <Header />
        <SearchCurrency onCurrencySelect={this.handleCurrencySelect} />
        <Suspense fallback={<Loader />}>
          <BankMap selectedCurrency={selectedCurrency} />
        </Suspense>
        <Footer />
      </>
    );
  }
}

export default CardBank;
