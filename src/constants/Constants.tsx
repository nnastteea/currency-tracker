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

import { Bank } from "../components/CurrencyMap/interfaces";

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

export const banks: {
  name: string;
  coordinates: [number, number];
  currencies: string[];
  description: string;
  telephone: string;
  city: string;
}[] = [
  {
    name: "Belinvest",
    coordinates: [30.22652319612948, 55.17775576718036],
    currencies: ["Commercial Dollar", "Euro", "Canadian Dollar"],
    description: "Moskovsky Prospect 33, Vitebsk, Vitebsk Region 210035",
    telephone: "80172390239",
    city: "Витебск",
  },
  {
    name: "Paritetbank",
    coordinates: [30.207719686976418, 55.18277301445995],
    currencies: [
      "Commercial Dollar",
      "Libra",
      "Yen",
      "Australian Dollar",
      "Euro",
    ],
    description: "Moskovsky Prospect 12, Vitebsk, Vitebsk Region 210000",
    telephone: "80173114444",
    city: "Витебск",
  },
  {
    name: "Belagroprombank",
    coordinates: [30.212522335117917, 55.20545523071107],
    currencies: [
      "Euro",
      "Canadian Dollar",
      "Commercial Dollar",
      "Argentine Perso",
    ],
    description: "Smolenskaya sq. 18, Vitebsk, Vitebsk region 210000",
    telephone: "80172185777",
    city: "Витебск",
  },
  {
    name: "Belarusbank",
    coordinates: [30.23293557457128, 55.18633102264295],
    currencies: ["Commercial Dollar", "Libra", "Yen", "Yuan"],
    description: "Smolenskaya st. 9a, Vitebsk, Vitebsk region",
    telephone: "80172188431",
    city: "Витебск",
  },
  {
    name: "National Bank of the Republick of Belarus",
    coordinates: [30.205827322254592, 55.18984761709268],
    currencies: [
      "Commercial Dollar",
      "Argentine Perso",
      "Euro",
      "Canadian Dollar",
      "Yen",
      "Yuan",
      "Libra",
    ],
    description: "Lenin street 17, Vitebsk, Vitebsk region",
    telephone: "80212297408",
    city: "Витебск",
  },
  {
    name: "Priorbank",
    coordinates: [27.547241449355806, 53.90235971943836],
    currencies: [
      "Commercial Dollar",
      "Argentine Perso",
      "Euro",
      "Canadian Dollar",
      "Yen",
      "Yuan",
      "Libra",
    ],
    description: "Nemiga st. 30k1, Minsk, Minsk region 220018",
    telephone: "80172899090",
    city: "Minsk",
  },
  {
    name: "Neo bank",
    coordinates: [27.566921726464162, 53.92290118863559],
    currencies: [
      "Commercial Dollar",
      "Libra",
      "Yen",
      "Australian Dollar",
      "Euro",
    ],
    description: "V. Khoruzhey st. 20, Minsk, Minsk region 220000",
    telephone: "80173113232",
    city: "Minsk",
  },
  {
    name: "Sber bank",
    coordinates: [27.530529514550185, 53.91329683686644],
    currencies: [
      "Euro",
      "Canadian Dollar",
      "Commercial Dollar",
      "Argentine Perso",
    ],
    description: "Masherova ave. 80, Minsk, Minsk region 220035",
    telephone: "80295148148",
    city: "Minsk",
  },
  {
    name: "Belinvest",
    coordinates: [27.549246167333663, 53.89377487321464],
    currencies: ["Commercial Dollar", "Euro", "Canadian Dollar"],
    description: "9 Bobruiskaya St., Minsk, Minsk Region",
    telephone: "80172390239",
    city: "Minsk",
  },
  {
    name: "VTB bank",
    coordinates: [27.593019818456796, 53.88477090163297],
    currencies: [
      "Commercial Dollar",
      "Argentine Perso",
      "Euro",
      "Yen",
      "Yuan",
      "Libra",
    ],
    description: "Partizansky Prospekt 23, Minsk, Minsk Region",
    telephone: "80172469156",
    city: "Minsk",
  },
];
