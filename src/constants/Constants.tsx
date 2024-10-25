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

export const MILLISECONDS_IN_A_DAY = 86400000;

export const stocks = [
  {
    id: 1,
    title: "Bovespa Index",
    value: "0.15%",
    image: Bovespa,
    abbreviation: "Bovespa",
  },
  {
    id: 2,
    title: "IFIX",
    value: "0.15%",
    image: IFIX,
    abbreviation: "IFIX",
  },
];

export const quotes = [
  {
    id: 3,
    title: "Commercial Dollar",
    value: "",
    image: Dollar,
    abbreviation: "USD",
  },
  {
    id: 4,
    title: "Argentine Perso",
    value: "",
    image: PesoArgentino,
    abbreviation: "ARS",
  },
  {
    id: 5,
    title: "Canadian Dollar",
    value: "",
    image: CanadianDollar,
    abbreviation: "CAD",
  },
  { id: 6, title: "Yen", value: "", image: Yen, abbreviation: "JPY" },
  {
    id: 7,
    title: "Australian Dollar",
    value: "",
    image: AustralianDollar,
    abbreviation: "AUD",
  },
  { id: 8, title: "Yuan", value: "", image: Won, abbreviation: "CNY" },
  { id: 9, title: "Euro", value: "", image: Euro, abbreviation: "EUR" },
  { id: 10, title: "Bitcoin", value: "", image: Bitcoin, abbreviation: "BTC" },
  { id: 11, title: "Libra", value: "", image: Libra, abbreviation: "GBP" },
];

export const sections = [
  {
    id: 1,
    title: "General",
    items: [
      { id: 2, name: "Market" },
      { id: 3, name: "Service" },
    ],
  },
  {
    id: 4,
    title: "Product",
    items: [
      { id: 5, name: "Sparks" },
      { id: 6, name: "Snaps" },
    ],
  },
  {
    id: 7,
    title: "Community",
    items: [
      { id: 5, name: "Ideas" },
      { id: 6, name: "Streams" },
    ],
  },
];
