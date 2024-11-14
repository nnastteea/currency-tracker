export interface CurrencyRate {
  time_period_start: string;
  time_period_end: string;
  rate_open: number;
  rate_high: number;
  rate_low: number;
  rate_close: number;
}

export interface State {
  selectedCurrency: string;
  startDate: string;
  endDate: string;
  showMessage: boolean;
  isModalOpen: boolean;
}

export interface Props {
  fetchCurrencyHistory: (data: {
    currencyCode: string;
    dayCount: number;
  }) => void;
  currencyData: CurrencyRate[];
  loading: boolean;
  error: string | null;
}
