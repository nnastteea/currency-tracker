export interface SelectCurrencyProps {
  fetchCurrencyData: (params: {
    currency: string;
    startDate: string;
    endDate: string;
  }) => void;
  currencyData: Array<{ time: string; rate: number }>;
  loading: boolean;
  error: string | null;
}

export interface SelectCurrencyState {
  selectedCurrency: string;
  startDate: string;
  endDate: string;
}
