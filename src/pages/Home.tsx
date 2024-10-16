import React from "react";
import AustralianDollar from "@assets/AustralianDollar.svg";
import Bitcoin from "@assets/Bitcoin.svg";
import Bovespa from "@assets/Bovespa.svg";
import CanadianDollar from "@assets/CanadianDollar.svg";
import Dollar from "@assets/Dollar.svg";
import Euro from "@assets/Euro.svg";
import IFIX from "@assets/IFIX.svg";
import Libra from "@assets/Libra.svg";
import PesoArgentino from "@assets/PesoArgentino.svg";
import Won from "@assets/Won.svg";
import Yen from "@assets/Yen.svg";
import { v4 as uuidv4 } from "uuid";

import BlockWithCards from "../components/BlockWithCards";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LastUpdate from "../components/LastUpdate";
import * as S from "../GlobalStyles";

function Home() {
  const stocks = [
    { id: uuidv4(), title: "Bovespa Index", value: "0.15%", image: Bovespa },
    {
      id: uuidv4(),
      title: "IFIX",
      value: "0.15%",
      image: IFIX,
    },
  ];

  const quotes = [
    {
      id: uuidv4(),
      title: "Commercial Dollar",
      value: "R$ 5.13",
      image: Dollar,
    },
    {
      id: uuidv4(),
      title: "Argentine Perso",
      value: "R$ 0.02",
      image: PesoArgentino,
    },
    {
      id: uuidv4(),
      title: "Canadian Dollar",
      value: "R$ 3.78",
      image: CanadianDollar,
    },
    { id: uuidv4(), title: "Yen", value: "R$ 0.03", image: Yen },
    {
      id: uuidv4(),
      title: "Australian Dollar",
      value: "R$ 3.48",
      image: AustralianDollar,
    },
    { id: uuidv4(), title: "Yuan", value: "R$ 0.74", image: Won },
    { id: uuidv4(), title: "Euro", value: "R$ 5.43", image: Euro },
    { id: uuidv4(), title: "Bitcoin", value: "R$ 122148.71", image: Bitcoin },
    { id: uuidv4(), title: "Libra", value: "R$ 6.16", image: Libra },
  ];

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
