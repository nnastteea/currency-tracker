import React, { Component } from "react";
import { Chart } from "react-chartjs-2";
import Observer from "@observer/Observer";
import { Chart as ChartJS, ChartOptions, registerables } from "chart.js";
import styled from "styled-components";

import * as S from "./styles";

import "chartjs-adapter-date-fns";

ChartJS.register(...registerables);

import {
  CandlestickController,
  CandlestickElement,
} from "chartjs-chart-financial";
ChartJS.register(CandlestickController, CandlestickElement);

import ModalForChart from "../ModalForChart";

interface ChartDataItem {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

interface Props {
  currencyData: ChartDataItem[];
  loading: boolean;
  error: string | null;
}

interface State {
  selectedItem: number | null;
  open: number;
  high: number;
  low: number;
  close: number;
  isModalOpen: boolean;
  data: ChartDataItem[];
  windowWidth: number;
}

class TimelineChart extends Component<Props, State> {
  state: State = {
    selectedItem: null,
    open: 0,
    high: 0,
    low: 0,
    close: 0,
    isModalOpen: false,
    data: this.props.currencyData,
    windowWidth: window.innerWidth,
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    Observer.subscribe("openModal", this.handleOpenModal);
    Observer.subscribe("closeModal", this.handleCloseModal);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.currencyData !== this.props.currencyData) {
      this.setState({ data: this.props.currencyData });
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
    Observer.unsubscribe("openModal", this.handleOpenModal);
    Observer.unsubscribe("closeModal", this.handleCloseModal);
  }

  handleResize = () => {
    this.setState({ windowWidth: window.innerWidth });
  };

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
        isModalOpen: true,
        selectedItem: null,
      });
      Observer.notify("openModal");
    }
  };

  handleOpenModal = () => {
    console.log("Opening modal");
    this.setState({ isModalOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { loading, error } = this.props;
    const { selectedItem, open, high, low, close, data } = this.state;

    if (loading) {
      return <p>Loading data...</p>;
    }

    if (error) {
      return <p>Error: {error}</p>;
    }

    const dataPoints = data.map((item) => ({
      x: new Date(item.time),
      o: item.open,
      h: item.high,
      l: item.low,
      c: item.close,
    }));

    // Опции для графика
    const chartData = {
      datasets: [
        {
          label: "Currency Prices",
          data: dataPoints,
          borderColor: "rgba(255, 255, 255, 1)",
          borderWidth: 1,
          maxBarThickness: 20,
        },
      ],
    };

    const options: ChartOptions<"candlestick"> = {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: "#fff",
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
            color: "rgba(255, 255, 255, 0.2)",
          },
          ticks: {
            color: "#fff",
            autoSkip: true,
            maxTicksLimit: 100,
            callback: (value) => {
              const date = new Date(value);
              return date.toLocaleDateString(undefined, {
                day: "numeric",
                month: "short",
              });
            },
          },
          title: {
            display: true,
            text: "Day",
            color: "#fff",
          },
        },
        y: {
          grid: {
            color: "rgba(255, 255, 255, 0.2)",
          },
          ticks: {
            color: "#fff",
          },
          title: {
            display: true,
            text: "Value",
            color: "#fff",
          },
        },
      },
      onClick: this.handleChartClick,
      events: ["click", "mousemove"],
    };

    return (
      <S.Container>
        {selectedItem !== null && (
          <S.InputContainer>
            <h4>Edit Values for Day {selectedItem + 1}</h4>
            <S.LabelContainer>
              Open:
              <S.InputField
                type="number"
                name="open"
                value={open}
                onChange={this.handleInputChange}
              />
            </S.LabelContainer>
            <S.LabelContainer>
              High:
              <S.InputField
                type="number"
                name="high"
                value={high}
                onChange={this.handleInputChange}
              />
            </S.LabelContainer>
            <S.LabelContainer>
              Low:
              <S.InputField
                type="number"
                name="low"
                value={low}
                onChange={this.handleInputChange}
              />
            </S.LabelContainer>
            <S.LabelContainer>
              Close:
              <S.InputField
                type="number"
                name="close"
                value={close}
                onChange={this.handleInputChange}
              />
            </S.LabelContainer>
            <S.SubmitButton onClick={this.handleSubmit}>Submit</S.SubmitButton>
          </S.InputContainer>
        )}
        <S.ChartContainer>
          <Chart type="candlestick" data={chartData} options={options} />
        </S.ChartContainer>
        <ModalForChart
          isOpen={this.state.isModalOpen}
          handleClose={this.handleCloseModal}
        />
      </S.Container>
    );
  }
}

export default TimelineChart;
