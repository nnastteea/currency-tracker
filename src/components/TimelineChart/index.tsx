import React, { ChangeEvent, Component, createRef } from "react";
import { Bar } from "react-chartjs-2";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";

import ModalForChart from "../ModalForChart";
import * as S from "./styles";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

interface TimelineChartState {
  currencyData: (number | null)[];
  day: number;
  inputValue: string;
  isModalOpen: boolean;
  windowWidth: number;
}

class TimelineChart extends Component<{}, TimelineChartState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      currencyData: Array(31).fill(null),
      day: 1,
      inputValue: "",
      isModalOpen: false,
      windowWidth: window.innerWidth,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({ windowWidth: window.innerWidth });
  };

  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = () => {
    const { currencyData, day, inputValue } = this.state;
    const value = parseFloat(inputValue);

    if (isNaN(value)) {
      alert("Пожалуйста, введите значение!");
      return;
    }

    const updatedData = [...currencyData];
    updatedData[day - 1] = value;

    this.setState({
      currencyData: updatedData,
      day: day + 1,
      inputValue: "",
    });

    if (day === this.getDaysInMounth()) {
      this.setState({ day: 1, inputValue: "", isModalOpen: true });
    }
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
  };

  getDaysInMounth = () => {
    const date = new Date();
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  render() {
    const { currencyData, day, inputValue, isModalOpen, windowWidth } =
      this.state;

    const validData = currencyData.map((value) => (value !== null ? value : 0));

    const chartData = {
      labels: Array.from(
        { length: this.getDaysInMounth() },
        (day, i) => `Day ${i + 1}`,
      ),
      datasets: [
        {
          label: "Value",
          data: validData,
          backgroundColor: validData.map((value, index) => {
            if (index === 0) return "grey";
            return value > validData[index - 1] ? "green" : "red";
          }),
          borderColor: "rgba(255, 255, 255, 0.2)",
          borderWidth: 1,
        },
      ],
    };

    const chartOptions = {
      scales: {
        x: {
          grid: {
            display: true,
            color: "rgba(255, 255, 255, 0.2)",
          },
          title: {
            display: windowWidth > 550,
            text: "Day",
            color: "white",
          },
          ticks: {
            display: false,
          },
          border: {
            color: "white",
            width: 3,
          },
        },
        y: {
          grid: {
            display: true,
            color: "rgba(255, 255, 255, 0.2)",
          },
          title: {
            display: windowWidth > 550,
            text: "Value",
            color: "white",
          },
          beginAtZero: true,
          border: {
            color: "white",
            width: 3,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
      responsive: true,
    };

    return (
      <S.Container>
        <S.InputContainer>
          <label>
            Day {day}: Enter Value:{" "}
            <S.InputField
              type="number"
              value={inputValue}
              onChange={this.handleInputChange}
            />
          </label>
          <S.SubmitButton onClick={this.handleSubmit} disabled={!inputValue}>
            Submit
          </S.SubmitButton>
        </S.InputContainer>
        <S.ChartContainer>
          <Bar data={chartData} options={chartOptions} />
        </S.ChartContainer>
        <ModalForChart
          isOpen={isModalOpen}
          handleClose={this.handleCloseModal}
        />
      </S.Container>
    );
  }
}

export default TimelineChart;
