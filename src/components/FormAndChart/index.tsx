import React, { Component } from "react";
import { connect } from "react-redux";
import { quotes } from "@constants/Constants";
import { fetchCurrencyHistory } from "@store/currencySlice";

import TimelineChart from "../TimelineChart";
import { CurrencyRate, Props, State } from "./interfaces";
import * as S from "./styles";

class SelectCurrency extends Component<Props, State> {
  state: State = {
    selectedCurrency: "",
    startDate: "",
    endDate: "",
    showMessage: true,
  };

  componentDidMount() {
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 10);
    const endDate = today;
    const formattedStartDate = startDate.toISOString().split("T")[0];
    const formattedEndDate = endDate.toISOString().split("T")[0];

    this.setState({ startDate: formattedStartDate, endDate: formattedEndDate });
    this.props.fetchCurrencyHistory({ currencyCode: "BYN", dayCount: 10 });
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

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const { selectedCurrency, startDate, endDate } = this.state;
    if (selectedCurrency && startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const timeDifference = end.getTime() - start.getTime();
      const dayCount = Math.ceil(timeDifference / (1000 * 3600 * 24));
      console.log("Fetching data for:", {
        currencyCode: selectedCurrency,
        dayCount: dayCount,
        startDate: startDate,
        endDate: endDate,
      });
      if (dayCount > 0) {
        this.props.fetchCurrencyHistory({
          currencyCode: selectedCurrency,
          dayCount: dayCount,
        });
        this.setState({ showMessage: false });
      } else {
        alert("End date must be after start date!");
      }
    } else {
      alert("Please fill all fields!");
    }
  };

  render() {
    const { selectedCurrency, startDate, endDate, showMessage } = this.state;
    const { currencyData, loading, error } = this.props;

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
            />
            <S.DateInput
              type="date"
              value={endDate}
              onChange={this.handleEndDateChange}
              placeholder="End Date"
            />
          </div>
          <S.BuildButton type="submit">Create a chart</S.BuildButton>
        </S.FormInputInfo>
        <div>
          {showMessage && (
            <S.InfoPHeader>
              Belarusian ruble exchange rate for the last 10 days
              <br />
              (USD is taken as the base currency)
            </S.InfoPHeader>
          )}
          {loading && <S.InfoP>Loading data...</S.InfoP>}
          {error && <S.InfoP>Error: {error}</S.InfoP>}
          {currencyData.length > 0 && (
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
