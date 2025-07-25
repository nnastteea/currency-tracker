import React, { useState } from "react";
import { quotes as currencyList } from "@constants/Constants";
import { useFetchCurrencyDataQuery } from "@store/currencyApi";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { closeModal } from "@store/modalSlice";

import * as S from "./styles";

interface ModalProps {
  currencyData: {
    title: string;
    value: string;
    abbreviation: string;
  };
}

const Modal = ({ currencyData }: ModalProps) => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.modal.isOpen);
  const { data: quotes = {} } = useFetchCurrencyDataQuery(undefined, {
    refetchOnMountOrArgChange: false,
  });
  const [amount, setAmount] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value === "" || !isNaN(Number(value))) {
      setAmount(value);
    }
  };

  const handleCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSelectedCurrency(event.target.value);
  };

  const handleCalculate = () => {
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0 || parsedAmount > 10000) {
      setResult("Please enter the correct amount of currency (up to 10000)");
      return;
    }

    const baseCurrencyRate =
      parseFloat(currencyData.value.replace(/[^0-9.]/g, "")) || 1;
    const selectedCurrencyRate = quotes[selectedCurrency]?.value;

    if (isNaN(baseCurrencyRate) || isNaN(selectedCurrencyRate)) {
      setResult("Unable to obtain correct exchange rate");
      return;
    }

    const totalValue = (parsedAmount * baseCurrencyRate) / selectedCurrencyRate;
    setResult(
      `Результат: ${totalValue.toFixed(2)} ${currencyData.abbreviation}`,
    );
  };

  const handleClose = () => {
    setAmount("");
    setSelectedCurrency("");
    setResult(null);
    dispatch(closeModal());
  };

  if (!isOpen) return null;

  const filteredCurrencies = currencyList.filter(
    (quote) => quote.abbreviation !== currencyData.abbreviation,
  );

  return (
    <S.ModalOverlay>
      <S.ModalContainer className="modal-overlay">
        <S.CloseButton onClick={handleClose}>✖</S.CloseButton>
        <S.Title>{currencyData.title}</S.Title>
        <S.Content>
          <p>Текущий курс: {currencyData.value}</p>
          <S.InputContainer>
            <label htmlFor="amount">Enter the amount to convert:</label>
            <S.Input
              type="number"
              id="amount"
              max="10000"
              value={amount}
              onChange={handleAmountChange}
            />
            <label htmlFor="currencySelect">Select currency:</label>
            <S.Select
              id="currencySelect"
              value={selectedCurrency}
              onChange={handleCurrencyChange}
            >
              <option value="" disabled>
                Select currency
              </option>
              {filteredCurrencies.map(({ abbreviation, title }) => (
                <option key={abbreviation} value={abbreviation}>
                  {title}
                </option>
              ))}
            </S.Select>
            <S.CalculateButton
              onClick={handleCalculate}
              disabled={!selectedCurrency}
            >
              Calculate
            </S.CalculateButton>
            {result && <p>{result}</p>}
          </S.InputContainer>
        </S.Content>
      </S.ModalContainer>
    </S.ModalOverlay>
  );
};

export default Modal;
