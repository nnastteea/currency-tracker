import styled from "styled-components";

const DEFAULT_PADDING = 8;
const DEFAULT_MARGIN = 10;
const SELECT_WIDTH = 220;
const BUTTON_WIDTH = 350;

export const SelectCurrency = styled.select`
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  font-weight: ${({ theme }) => theme.sizes.xl7};
  font-size: ${({ theme }) => theme.fontSizes.small}px;
  padding: ${DEFAULT_MARGIN}px;
  cursor: pointer;
  position: relative;
  margin-right: ${DEFAULT_MARGIN}px;
  max-width: ${SELECT_WIDTH}px;
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
    flex-direction: column;
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
  width: ${BUTTON_WIDTH}px;
  padding: ${DEFAULT_PADDING}px;
  background: ${({ theme }) => theme.colors.limeGreen};
  color: black;
  font-size: ${({ theme }) => theme.fontSizes.extraSmall}px;
  border: none;
  border-radius: ${({ theme }) => theme.sizes.xs7}px;
  cursor: pointer;
  margin-top: ${DEFAULT_MARGIN}px;
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
  padding: ${DEFAULT_PADDING}px;
  margin-right: ${DEFAULT_MARGIN}px;
  max-width: ${SELECT_WIDTH}px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.white};
  }

  &:focus {
    outline: none;
    background: ${({ theme }) => theme.colors.black};
  }

  &::-webkit-calendar-picker-indicator {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.sizes.xs7}px;
    padding: ${({ theme }) => theme.sizes.xs9}px;
    margin-left: 5px;
  }
`;
export const InfoP = styled.p`
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.small}px;
  margin-top: 30px;
`;

export const InfoPHeader = styled.p`
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.extrasmall}px;
  margin-top: 30px;
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.lightGray};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.extraSmall}px;
  margin-top: 15px;
`;
