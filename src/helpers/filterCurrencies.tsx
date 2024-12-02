import { quotes } from "@constants/Constants";

export const filterCurrencies = (inputValue: string) => {
  return quotes
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
};
