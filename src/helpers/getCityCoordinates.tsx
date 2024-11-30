export const VITEBSK_COORDS = {
  longitude: 30.2099,
  latitude: 55.1931,
  zoom: 12,
};
export const MINSK_COORDS = { longitude: 27.5615, latitude: 53.9023, zoom: 11 };

export const getCityCoordinates = (city: string) => {
  if (city === "Minsk") {
    return MINSK_COORDS;
  } else if (city === "Витебск") {
    return VITEBSK_COORDS;
  }
  return null;
};
