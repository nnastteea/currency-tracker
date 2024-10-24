import styled from "styled-components";

const PADDING1 = 10;
const PADDING2 = 15;
const PADDING3 = 20;
const PADDING4 = 135;
const PADDING5 = 180;

export const SelectCurrency = styled.select`
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  font-weight: ${({ theme }) => theme.sizes.xl7};
  font-size: ${({ theme }) => theme.fontSizes.small}px;
  padding: ${PADDING1}px;
  cursor: pointer;
  position: relative;

  &:active {
    border: none;
  }
`;

export const OptionCurrency = styled.option`
  font-size: ${({ theme }) => theme.fontSizes.extraSmall}px;
`;

export const SelectCurrencyContainer = styled.div`
  padding: ${PADDING3}px ${PADDING5}px;
  @media (max-width: ${({ theme }) => theme.sizes.xl11}px) {
    padding: ${PADDING2}px ${PADDING4}px;
  }
  @media (max-width: ${({ theme }) => theme.sizes.xl9}px) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
