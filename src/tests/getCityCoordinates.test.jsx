import {
  getCityCoordinates,
  MINSK_COORDS,
  VITEBSK_COORDS,
} from "@helpers/getCityCoordinates";

describe("getCityCoordinates", () => {
  it("should return MINSK_COORDS for Minsk", () => {
    const cityMinsk = getCityCoordinates("Minsk");
    expect(cityMinsk).toEqual(MINSK_COORDS);
  });
  it("should return VITEBSK_COORDS for Витебск", () => {
    const cityVitebsk = getCityCoordinates("Витебск");
    expect(cityVitebsk).toEqual(VITEBSK_COORDS);
  });
  it("should return null for an empty string", () => {
    const result = getCityCoordinates("");
    expect(result).toBeNull();
  });
});
