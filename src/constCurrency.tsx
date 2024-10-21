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

export const stocks = [
  { id: 1, title: "Bovespa Index", value: "0.15%", image: Bovespa },
  {
    id: 2,
    title: "IFIX",
    value: "0.15%",
    image: IFIX,
  },
];

export const quotes = [
  {
    id: 3,
    title: "Commercial Dollar",
    value: "R$ 5.13",
    image: Dollar,
  },
  {
    id: 4,
    title: "Argentine Perso",
    value: "R$ 0.02",
    image: PesoArgentino,
  },
  {
    id: 5,
    title: "Canadian Dollar",
    value: "R$ 3.78",
    image: CanadianDollar,
  },
  { id: 6, title: "Yen", value: "R$ 0.03", image: Yen },
  {
    id: 7,
    title: "Australian Dollar",
    value: "R$ 3.48",
    image: AustralianDollar,
  },
  { id: 8, title: "Yuan", value: "R$ 0.74", image: Won },
  { id: 9, title: "Euro", value: "R$ 5.43", image: Euro },
  { id: 10, title: "Bitcoin", value: "R$ 122148.71", image: Bitcoin },
  { id: 11, title: "Libra", value: "R$ 6.16", image: Libra },
];
