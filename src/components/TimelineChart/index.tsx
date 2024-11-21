import React, { Component } from "react";
import { Chart } from "react-chartjs-2";
import { Chart as ChartJS, ChartOptions, registerables } from "chart.js";
import { enUS } from "date-fns/locale";

import * as S from "./styles";

import "chartjs-adapter-date-fns";

ChartJS.register(...registerables);

import {
  CandlestickController,
  CandlestickElement,
} from "chartjs-chart-financial";
ChartJS.register(CandlestickController, CandlestickElement);

import { Props, State } from "./interfaces";

const WHITE_COLOR = "#fff";
const GRAY_COLOR = "rgba(255, 255, 255, 0.2)";
const BLACK_COLOR = "rgba(255, 255, 255, 1)";

class TimelineChart extends Component<Props, State> {
  state: State = {
    selectedItem: null,
    open: 0,
    high: 0,
    low: 0,
    close: 0,
    data: this.props.currencyData,
    windowWidth: window.innerWidth,
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.currencyData !== this.props.currencyData) {
      console.log("New currency data received:", this.props.currencyData);
      this.setState({ data: this.props.currencyData });
    }
  }

  handleChartClick = (event: any) => {
    const chartInstance = event.chart;
    const elements = chartInstance.getElementsAtEventForMode(
      event.native,
      "nearest",
      { intersect: false },
      true,
    );

    if (elements.length > 0) {
      const index = elements[0].index;
      const selectedData = this.props.currencyData[index];

      this.setState({
        selectedItem: index,
        open: selectedData.open,
        high: selectedData.high,
        low: selectedData.low,
        close: selectedData.close,
      });
    }
  };

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: parseFloat(value),
    }));
  };

  handleSubmit = () => {
    const { selectedItem, open, high, low, close } = this.state;
    if (selectedItem !== null) {
      const updatedData = [...this.state.data];
      updatedData[selectedItem] = {
        ...updatedData[selectedItem],
        open,
        high,
        low,
        close,
      };
      this.setState({
        data: updatedData,
        selectedItem: null,
      });
    }
  };

  handleResize = () => {
    this.setState({ windowWidth: window.innerWidth });
  };

  render() {
    const { loading, error } = this.props;
    const { selectedItem, open, high, low, close, data, windowWidth } =
      this.state;

    if (loading) {
      return <S.InfoP>Loading data...</S.InfoP>;
    }

    if (error) {
      return <S.InfoP>Error: {error}</S.InfoP>;
    }

    const dataPoints = data.map((item) => ({
      x: new Date(item.time).getTime(),
      o: item.open,
      h: item.high,
      l: item.low,
      c: item.close,
    }));
    const chartData = {
      datasets: [
        {
          label: "Currency Prices",
          data: dataPoints,
          borderColor: BLACK_COLOR,
          borderWidth: 1,
          maxBarThickness: 20,
        },
      ],
    };

    const fontSize = windowWidth < 700 ? 8 : 12;

    const options: ChartOptions<"candlestick"> = {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: WHITE_COLOR,
          },
        },
      },
      scales: {
        x: {
          type: "time",
          time: {
            unit: "day",
          },
          grid: {
            color: GRAY_COLOR,
          },
          ticks: {
            color: WHITE_COLOR,
            maxTicksLimit: data.length,
            autoSkip: false,
            callback: (value) => {
              const date = new Date(value);
              return date.toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
              });
            },
            font: {
              size: fontSize,
            },
          },
          title: {
            display: false,
          },
          bounds: "data",
        },
        y: {
          grid: {
            color: GRAY_COLOR,
          },
          ticks: {
            color: WHITE_COLOR,
            font: {
              size: fontSize,
            },
          },
          title: {
            display: true,
            text: "Value",
            color: WHITE_COLOR,
          },
        },
      },
      onClick: this.handleChartClick,
      events: ["click", "mousemove"],
    };

    const inputs = [
      { label: "Open", name: "open", value: open },
      { label: "High", name: "high", value: high },
      { label: "Low", name: "low", value: low },
      { label: "Close", name: "close", value: close },
    ];

    return (
      <S.Container>
        {selectedItem !== null && (
          <S.InputContainer>
            <h4>Edit Values for Day {selectedItem + 1}</h4>
            {inputs.map(({ label, name, value }) => (
              <S.LabelContainer key={name}>
                {label}:
                <S.InputField
                  type="number"
                  name={name}
                  value={value}
                  onChange={this.handleInputChange}
                />
              </S.LabelContainer>
            ))}
            <S.SubmitButton onClick={this.handleSubmit}>Submit</S.SubmitButton>
          </S.InputContainer>
        )}
        <S.ChartContainer>
          <Chart type="candlestick" data={chartData} options={options} />
        </S.ChartContainer>
      </S.Container>
    );
  }
}

export default TimelineChart;
