import { themes } from "@themes/theme";

export interface ChartDataItem {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

export interface Props {
  currencyData: ChartDataItem[];
  loading: boolean;
  error: string | null;
}

export interface State {
  selectedItem: number | null;
  open: number;
  high: number;
  low: number;
  close: number;
  data: ChartDataItem[];
  windowWidth: number;
}
