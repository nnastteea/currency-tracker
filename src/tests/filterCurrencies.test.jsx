import { quotes } from "@constants/Constants";
import { filterCurrencies } from "@helpers/filterCurrencies";

// Моковые данные
jest.mock("@constants/Constants", () => ({
  quotes: [
    { title: "Commercial Dollar" },
    { title: "Argentine Perso" },
    { title: "Canadian Dollar" },
    { title: "Australian Dollar" },
    { title: "Yuan" },
    { title: "Yen" },
    { title: "Euro" },
    { title: "Libra" },
  ],
}));

describe("filterCurrencies", () => {
  it("should filter by second word if input matches", () => {
    const result = filterCurrencies("D");
    expect(result).toEqual([
      "Commercial Dollar",
      "Canadian Dollar",
      "Australian Dollar",
    ]);
  });

  it("should filter currencies by first letter", () => {
    const result = filterCurrencies("Y");
    expect(result).toEqual(["Yuan", "Yen"]);
  });

  it("should filter currencies ignoring case sensitivity", () => {
    const result = filterCurrencies("euro");
    expect(result).toEqual(["Euro"]);
  });

  it("should return an empty array if no matches are found", () => {
    const result = filterCurrencies("i");
    expect(result).toEqual([]);
  });
});
