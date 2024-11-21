export interface Bank {
  name: string;
  coordinates: [number, number];
  currencies: string[];
  description: string;
  telephone: string;
  city: string;
}

export interface BankMapProps {
  selectedCurrency: string;
  userCity: string | null;
  fetchLocation: (coords: { latitude: number; longitude: number }) => void;
  status: "idle" | "loading" | "succeeded" | "failed";
}

export interface BankMapState {
  selectedBank: Bank | null;
  viewState: { longitude: number; latitude: number; zoom: number };
}

export interface LocationState {
  userCity: string | null;
  status: "idle" | "loading" | "succeeded" | "failed";
}

export interface RootState {
  location: LocationState;
}
