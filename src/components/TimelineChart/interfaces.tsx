export interface TimelineChartProps {
  currencyData: Array<{ time: string; rate: number }>;
  loading: boolean;
  error: string | null;
}

export interface TimelineChartState {
  day: number;
  inputValue: string;
  isModalOpen: boolean;
  windowWidth: number;
  modifiedData: number[];
  selectedDayIndex: number | null;
}
