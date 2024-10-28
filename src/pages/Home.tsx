import React, { useEffect, useState } from "react";
import { quotes as defaultQuotes, stocks } from "@constants/Constants";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useFetchCurrencyDataQuery } from "@store/currencyApi";

import BlockWithCards from "../components/BlockWithCards";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LastUpdate from "../components/LastUpdate";
import * as S from "../GlobalStyles";

export interface CurrencyCard {
  id: number;
  title: string;
  value: string;
  image: string;
  abbreviation: string;
}

function Home() {
  const { data: quotes = {}, isLoading, error } = useFetchCurrencyDataQuery();

  const processedQuotes = defaultQuotes.map((quote) => {
    const quoteData = quotes[quote.abbreviation];
    const value = quoteData ? quoteData.value.toFixed(5) : "loading...";

    return {
      ...quote,
      value: value !== "loading..." ? `R$ ${value}` : value,
    };
  });

  function hasMessage(
    error: FetchBaseQueryError | SerializedError,
  ): error is FetchBaseQueryError & { message: string } {
    return "message" in error;
  }

  const loadingMessage = isLoading ? <p>Loading...</p> : null;
  const errorMessage = error ? (
    <p>
      Error:{" "}
      {hasMessage(error) ? error.message : "An unexpected error occurred"}
    </p>
  ) : null;

  return (
    <>
      <S.GlobalStyle />
      <Header />
      <LastUpdate />
      <BlockWithCards titleSection="Stocks" cards={stocks} isQuote={false} />
      <BlockWithCards
        titleSection="Quotes"
        cards={processedQuotes}
        isQuote={true}
      />
      {loadingMessage}
      {errorMessage}
      <Footer />
    </>
  );
}

export default Home;
