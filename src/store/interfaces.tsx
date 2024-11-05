export interface CurrencyData {
  [key: string]: {
    code: string;
    value: number;
  };
}

export interface CurrencyState {
  data: Array<{ time: string; rate: number }>;
  loading: boolean;
  error: string | null;
}

export interface CurrencyDataItem {
  time_period_start: string;
  rate_close: number;
}

// export interface USDState {
//   usdRate: number | null;
//   loading: boolean;
//   error: string | null;
// }

// export interface CurrencyDataItem {
//   time_period_start: string;
//   rate_close: number;
// }
