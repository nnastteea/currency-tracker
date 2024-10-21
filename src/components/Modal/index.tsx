import React, { useEffect, useState } from "react";

import { quotes, stocks } from "../../constCurrency";
import * as S from "./style";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  currencyData: {
    title: string;
    value: string;
  };
}

const Modal = ({ isOpen, onClose, currencyData }: ModalProps) => {
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
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      setResult("Пожалуйста, введите корректное количество валюты.");
      return;
    }
    const sanitizedValue = currencyData.value.replace(/[^0-9.]/g, "");
    const currentValue = parseFloat(sanitizedValue);

    const currencies = [...stocks, ...quotes];
    const currencyMap = Object.fromEntries(
      currencies.map((currency) => [
        currency.title,
        parseFloat(currency.value.replace(/[^0-9.]/g, "")),
      ]),
    );

    const conversionRate = currencyMap[selectedCurrency] || 1;
    const amountInBaseCurrency = parsedAmount * currentValue;
    const totalValue = amountInBaseCurrency / conversionRate;
    setResult(`Результат: ${totalValue.toFixed(2)} ${selectedCurrency}`);
  };

  const handleClose = () => {
    setAmount("");
    setSelectedCurrency("");
    setResult(null);
    onClose();
  };

  if (!isOpen) return null;

  const currencies = [...stocks, ...quotes];
  const filteredCurrencies = currencies.filter(
    (currency) => currency.title !== currencyData.title,
  );

  return (
    <S.ModalOverlay>
      <S.ModalContainer>
        <S.CloseButton onClick={handleClose}>✖</S.CloseButton>
        <S.Title>{currencyData.title}</S.Title>
        <S.Content>
          <p>Текущий курс: {currencyData.value}</p>
          <S.InputContainer>
            <label htmlFor="amount">
              Введите сумму, которую хотите конвертировать:
            </label>
            <S.Input
              type="number"
              id="amount"
              max="10000"
              value={amount}
              onChange={handleAmountChange}
            />
            <label htmlFor="currencySelect">Выберите валюту:</label>
            <S.Select
              id="currencySelect"
              value={selectedCurrency}
              onChange={handleCurrencyChange}
            >
              <option value="" disabled>
                Выберите купюру
              </option>
              {filteredCurrencies.map((currency) => (
                <option key={currency.id} value={currency.title}>
                  {currency.title}
                </option>
              ))}
            </S.Select>
            <S.CalculateButton onClick={handleCalculate}>
              Рассчитать
            </S.CalculateButton>
            {result && <p>{result}</p>}
          </S.InputContainer>
        </S.Content>
      </S.ModalContainer>
    </S.ModalOverlay>
  );
};

export default Modal;
