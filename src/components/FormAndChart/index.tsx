import React from "react";
import { connect } from "react-redux";
import { quotes, stocks } from "@constants/Constants";
import { fetchCurrencyData } from "@store/currencySlice";

import TimelineChart from "../TimelineChart";
import { SelectCurrencyProps, SelectCurrencyState } from "./interfaces";
import * as S from "./styles";

class SelectCurrency extends React.Component<
  SelectCurrencyProps,
  SelectCurrencyState
> {
  constructor(props: SelectCurrencyProps) {
    super(props);
    this.state = {
      selectedCurrency: "",
      startDate: "",
      endDate: "",
    };
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
      this.props.fetchCurrencyData({
        currency: selectedCurrency,
        startDate,
        endDate,
      });
    } else {
      alert("Пожалуйста, введите данные!");
    }
  };

  render() {
    const { currencyData, loading, error } = this.props;
    const currencies = [...quotes];
    return (
      <S.SelectCurrencyContainer>
        <S.FormInputInfo onSubmit={this.handleSubmit}>
          <div>
            <S.SelectCurrency onChange={this.handleCurrencyChange}>
              <S.OptionCurrency value="">Select currency</S.OptionCurrency>
              {currencies.map((currency) => (
                <S.OptionCurrency
                  key={currency.id}
                  value={currency.abbreviation}
                >
                  {currency.title}
                </S.OptionCurrency>
              ))}
            </S.SelectCurrency>
            <S.DateInput
              type="date"
              value={this.state.startDate}
              onChange={this.handleStartDateChange}
              placeholder="Начальная дата"
            />
            <S.DateInput
              type="date"
              value={this.state.endDate}
              onChange={this.handleEndDateChange}
              placeholder="Конечная дата"
            />
          </div>
          <S.BuildButton type="submit">Create a chart</S.BuildButton>
        </S.FormInputInfo>
        {loading && <S.InfoP>Loading data...</S.InfoP>}
        {error && <S.InfoP>Error: {error}</S.InfoP>}
        {currencyData.length > 0 && (
          <TimelineChart
            currencyData={currencyData}
            loading={loading}
            error={error}
          />
        )}
      </S.SelectCurrencyContainer>
    );
  }
}
const mapStateToProps = (state: any) => ({
  currencyData: state.currency.data,
  loading: state.currency.loading,
  error: state.currency.error,
});

const mapDispatchToProps = {
  fetchCurrencyData,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectCurrency);
