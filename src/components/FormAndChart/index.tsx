import React, { Component } from "react";
import { connect } from "react-redux";
import { quotes } from "@constants/Constants";
import Observer from "@observer/Observer";
import { fetchCurrencyHistory } from "@store/currencySlice";

import ModalForChart from "../ModalForChart";
import TimelineChart from "../TimelineChart";
import { CurrencyRate, Props, State } from "./interfaces";
import * as S from "./styles";

class SelectCurrency extends Component<Props, State> {
  state: State = {
    selectedCurrency: "ARS",
    startDate: "",
    endDate: "",
    showMessage: true,
    isModalOpen: false,
  };

  setInitialDates = () => {
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 10);

    return {
      startDate: this.formatDate(startDate),
      endDate: this.formatDate(today),
    };
  };

  formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  componentDidMount() {
    const { startDate, endDate } = this.setInitialDates();
    this.setState({ startDate, endDate });
    this.props.fetchCurrencyHistory({ currencyCode: "ARS", dayCount: 10 });
    Observer.subscribe("openModal", this.handleOpenModal);
    Observer.subscribe("closeModal", this.handleCloseModal);
  }

  componentWillUnmount() {
    Observer.unsubscribe("openModal", this.handleOpenModal);
    Observer.unsubscribe("closeModal", this.handleCloseModal);
  }

  handleCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedCurrency: event.target.value });
  };

  handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ startDate: event.target.value });
  };

  handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ endDate: event.target.value });
  };

  handleOpenModal = () => {
    this.setState({ isModalOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
  };

  handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const { selectedCurrency } = this.state;
    let { startDate, endDate } = this.state;

    if (!startDate || !endDate) {
      const initialDates = this.setInitialDates();
      startDate = startDate || initialDates.startDate;
      endDate = endDate || initialDates.endDate;
    }

    if (selectedCurrency && startDate && endDate) {
      const start = new Date(startDate + "T00:00:00");
      const end = new Date(endDate + "T23:59:59");

      const timeDifference = end.getTime() - start.getTime();
      const dayCount = Math.ceil(timeDifference / (1000 * 3600 * 24));

      const action = await this.props.fetchCurrencyHistory({
        currencyCode: selectedCurrency,
        dayCount,
      });

      if (fetchCurrencyHistory.fulfilled.match(action)) {
        const { currencyData } = action.payload;

        if (currencyData && currencyData.length > 0) {
          const actualStartDate = new Date(currencyData[0].time_period_start);
          const actualEndDate = new Date(
            currencyData[currencyData.length - 1].time_period_start,
          );

          this.setState({
            startDate: this.formatDate(actualStartDate),
            endDate: this.formatDate(actualEndDate),
            showMessage: false,
          });

          const actualDayCount = Math.ceil(
            (actualEndDate.getTime() - actualStartDate.getTime()) /
              (1000 * 3600 * 24),
          );

          if (actualDayCount === 10) {
            Observer.notify("openModal");
          }
        } else {
          alert("No data available for the selected currency and date range.");
        }
      } else {
        alert("Failed to fetch currency history.");
      }
    } else {
      alert("Please fill all fields!");
    }
  };

  render() {
    const { selectedCurrency, startDate, endDate, showMessage } = this.state;
    const { currencyData, loading, error } = this.props;
    const today = this.formatDate(new Date());

    return (
      <S.SelectCurrencyContainer>
        <S.FormInputInfo onSubmit={this.handleSubmit}>
          <div>
            <S.SelectCurrency
              onChange={this.handleCurrencyChange}
              value={selectedCurrency}
            >
              <S.OptionCurrency value="">Select currency</S.OptionCurrency>
              {quotes.map(({ id, abbreviation, title }) => (
                <S.OptionCurrency key={id} value={abbreviation}>
                  {title}
                </S.OptionCurrency>
              ))}
            </S.SelectCurrency>
            <S.DateInput
              type="date"
              value={startDate}
              onChange={this.handleStartDateChange}
              placeholder="Start Date"
              max={today}
            />
            <S.DateInput
              type="date"
              value={endDate}
              onChange={this.handleEndDateChange}
              placeholder="End Date"
              max={today}
            />
          </div>
          <S.BuildButton type="submit">Create a chart</S.BuildButton>
        </S.FormInputInfo>
        <div>
          {showMessage && (
            <S.InfoPHeader>
              Argentine Peso exchange rate for the last 10 days
              <br />
              (USD is taken as the base currency)
            </S.InfoPHeader>
          )}
          {loading && <S.InfoP>Loading data...</S.InfoP>}
          {error && <S.InfoP>Error: {error}</S.InfoP>}
          {currencyData.length > 0 && !loading && (
            <TimelineChart
              currencyData={currencyData.map((item: CurrencyRate) => ({
                time: item.time_period_start,
                open: item.rate_open,
                high: item.rate_high,
                low: item.rate_low,
                close: item.rate_close,
              }))}
              loading={loading}
              error={error}
            />
          )}
        </div>
        <ModalForChart
          isOpen={this.state.isModalOpen}
          handleClose={this.handleCloseModal}
        />
      </S.SelectCurrencyContainer>
    );
  }
}

const mapStateToProps = (state: any) => ({
  currencyData: state.currency.history,
  loading: state.currency.status === "loading",
  error: state.currency.error,
});

const mapDispatchToProps = {
  fetchCurrencyHistory,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectCurrency);
