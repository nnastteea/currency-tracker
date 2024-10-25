import React, { useEffect, useState } from "react";
import { quotes as defaultQuotes, stocks } from "@constants/Constants";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { fetchCurrencyData } from "@store/sliceCurrency";

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
  const dispatch = useAppDispatch();
  const { quotes, loading, error } = useAppSelector((state) => state.currency);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchCurrencyData());
    };

    fetchData();
  }, [dispatch]);

  const processedQuotes = defaultQuotes.map((quote) => ({
    ...quote,
    value: quotes[quote.abbreviation]
      ? `R$ ${quotes[quote.abbreviation].value}`
      : "loading...",
  }));

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
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <Footer />
    </>
  );
}

export default Home;
