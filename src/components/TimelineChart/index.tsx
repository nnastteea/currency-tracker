import React, { ChangeEvent, Component } from "react";
import { Bar } from "react-chartjs-2";
import Observer from "@observer/Observer";
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
import { TimelineChartProps, TimelineChartState } from "./interfaces";
import * as S from "./styles";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

class TimelineChart extends Component<TimelineChartProps, TimelineChartState> {
  constructor(props: TimelineChartProps) {
    super(props);

    const initialData = props.currencyData.map((item) => item.rate);
    this.state = {
      day: 1,
      inputValue: "",
      isModalOpen: false,
      windowWidth: window.innerWidth,
      modifiedData: initialData,
      selectedDayIndex: null,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    Observer.subscribe("openModal", this.handleOpenModal);
    Observer.subscribe("closeModal", this.handleCloseModal);
  }

  componentDidUpdate(prevProps: TimelineChartProps) {
    if (prevProps.currencyData !== this.props.currencyData) {
      const initialData = this.props.currencyData.map((item) => item.rate);
      this.setState({ modifiedData: initialData });
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

  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = () => {
    const { selectedDayIndex, inputValue, modifiedData } = this.state;
    if (selectedDayIndex !== null && inputValue) {
      const updatedData = [...modifiedData];
      updatedData[selectedDayIndex] = parseFloat(inputValue);

      this.setState({
        modifiedData: updatedData,
        inputValue: "",
        selectedDayIndex: null,
      });
      Observer.notify("openModal");
    }
  };

  handleChartClick = (event: any, elements: any[]) => {
    if (elements.length > 0) {
      const clickedIndex = elements[0].index;
      const selectedValue = this.state.modifiedData[clickedIndex];

      this.setState({
        selectedDayIndex: clickedIndex,
        inputValue: selectedValue.toString(),
      });
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
    const { inputValue, isModalOpen, windowWidth, modifiedData } = this.state;

    const chartData = {
      labels: Array.from(
        { length: modifiedData.length },
        (_, i) => `Day ${i + 1}`,
      ),
      datasets: [
        {
          label: "Value",
          data: modifiedData,
          backgroundColor: modifiedData.map((value, index) => {
            if (index === 0) return "grey";
            return value > (modifiedData[index - 1] || 0) ? "green" : "red";
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
      onClick: this.handleChartClick,
    };

    return (
      <S.Container>
        <S.InputContainer>
          {this.state.selectedDayIndex !== null && (
            <>
              <label>
                Day {this.state.selectedDayIndex + 1}: Enter Value:{" "}
                <S.InputField
                  type="number"
                  value={inputValue}
                  onChange={this.handleInputChange}
                />
              </label>
              <S.SubmitButton
                onClick={this.handleSubmit}
                disabled={!inputValue}
              >
                Submit
              </S.SubmitButton>
            </>
          )}
        </S.InputContainer>
        <S.ChartContainer>
          <Bar data={chartData} options={chartOptions} />
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
