import styled from "styled-components";

const PADDING = 8;
const PADDING_MARGIN = 10;
const WIDTH1 = 210;
const WIDTH2 = 350;

export const SelectCurrency = styled.select`
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  font-weight: ${({ theme }) => theme.sizes.xl7};
  font-size: ${({ theme }) => theme.fontSizes.small}px;
  padding: ${PADDING_MARGIN}px;
  cursor: pointer;
  position: relative;
  margin-right: ${PADDING_MARGIN}px;
  max-width: ${WIDTH1}px;
  &:active {
    border: none;
  }
`;

export const OptionCurrency = styled.option`
  font-size: ${({ theme }) => theme.fontSizes.extraSmall}px;
`;

export const SelectCurrencyContainer = styled.div`
  width: 100%;
  @media (max-width: ${({ theme }) => theme.sizes.xl9}px) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const FormInputInfo = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const BuildButton = styled.button`
  width: ${WIDTH2}px;
  padding: ${PADDING}px;
  background: ${({ theme }) => theme.colors.limeGreen};
  color: black;
  font-size: ${({ theme }) => theme.fontSizes.extraSmall}px;
  border: none;
  border-radius: ${({ theme }) => theme.sizes.xs7}px;
  cursor: pointer;
  margin-top: ${PADDING_MARGIN}px;
  transition: 0.5s ease;

  &:hover {
    transform: scale(1.02);
    background: ${({ theme }) => theme.colors.limeGreen2};
  }
`;

export const DateInput = styled.input`
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.small}px;
  padding: ${PADDING}px;
  margin-right: ${PADDING_MARGIN}px;
  max-width: ${WIDTH1}px;
  cursor: pointer;

  &::placeholder {
    color: ${({ theme }) => theme.colors.white};
  }

  &:focus {
    outline: none;
    background: ${({ theme }) => theme.colors.black};
  }

  &::-webkit-calendar-picker-indicator {
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.sizes.xs7}px;
    padding: ${({ theme }) => theme.sizes.xs9}px;
  }
`;
export const InfoP = styled.p`
  color: ${({ theme }) => theme.colors.white};
`;
