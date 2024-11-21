import React from "react";
import { ReactComponent as Search } from "@assets/Search.svg";
import { quotes } from "@constants/Constants";

import * as S from "./styles";

interface SearchCurrencyProps {
  onCurrencySelect: (currency: string) => void;
}

interface SearchCurrencyState {
  query: string;
  filteredCurrencies: string[];
}

class SearchCurrency extends React.Component<
  SearchCurrencyProps,
  SearchCurrencyState
> {
  state: SearchCurrencyState = {
    query: "",
    filteredCurrencies: [],
  };

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    this.setState({ query: inputValue });

    if (inputValue.length > 0) {
      const filteredCurrencies = quotes
        .filter((quote) => {
          const title = quote.title.toLowerCase();
          const words = title.split(" ");

          if (words.length >= 2) {
            return (
              words[1].startsWith(inputValue.toLowerCase()) ||
              title.startsWith(inputValue.toLowerCase())
            );
          }
          return title.startsWith(inputValue.toLowerCase());
        })
        .map((quote) => quote.title);

      this.setState({ filteredCurrencies });
    } else {
      this.setState({ filteredCurrencies: [] });
    }
  };

  handleCurrencySelect = (currency: string) => {
    this.setState({ query: currency, filteredCurrencies: [] });
    this.props.onCurrencySelect(currency);
  };

  render() {
    const { query, filteredCurrencies } = this.state;
    return (
      <S.ContainerSearch>
        <S.SearchCurrencyHeader>
          Search currency in the bank
        </S.SearchCurrencyHeader>
        <S.ContainerSearchInput>
          <S.SearchCurrencyInput
            type="text"
            placeholder="Currency search"
            value={query}
            onChange={this.handleInputChange}
          />
          <S.IconContainer>
            <Search alt="search icon" />
          </S.IconContainer>
        </S.ContainerSearchInput>
        {filteredCurrencies.length > 0 && (
          <S.ResultList>
            {filteredCurrencies.map((currency) => (
              <S.ResultItem
                key={currency}
                onClick={() => this.handleCurrencySelect(currency)}
              >
                {currency}
              </S.ResultItem>
            ))}
          </S.ResultList>
        )}
      </S.ContainerSearch>
    );
  }
}

export default SearchCurrency;
