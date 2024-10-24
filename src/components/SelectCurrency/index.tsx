import React from "react";
import { quotes, stocks } from "@constants/Constants";

import * as S from "./styles";

class SelectCurrency extends React.Component {
  render() {
    const currencies = [...stocks, ...quotes];
    return (
      <S.SelectCurrencyContainer>
        <S.SelectCurrency>
          {currencies.map((currency) => (
            <S.OptionCurrency key={currency.id} value={currency.title}>
              {currency.title}
            </S.OptionCurrency>
          ))}
        </S.SelectCurrency>
      </S.SelectCurrencyContainer>
    );
  }
}

export default SelectCurrency;
