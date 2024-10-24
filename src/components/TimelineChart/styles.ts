import styled from "styled-components";

const PADDING1 = 10;
const PADDING2 = 150;
const PADDING3 = 190;
const WIDTH1 = 80;
const WIDTH2 = 90;
const WIDTH3 = 95;
const WIDTH4 = 165;
const WIDTH5 = 170;

export const Container = styled.div`
  color: ${({ theme }) => theme.colors.white};
`;

export const InputContainer = styled.div`
  padding: ${PADDING1}px ${PADDING3}px;
  font-size: ${({ theme }) => theme.fontSizes.small}px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.sizes.xl11}px) {
    padding: ${PADDING1}px ${PADDING2}px;
  }

  @media (max-width: ${({ theme }) => theme.sizes.xl9}px) {
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const SubmitButton = styled.button`
  background: ${({ theme }) => theme.colors.limeGreen};
  color: black;
  font-size: ${({ theme }) => theme.fontSizes.small}px;
  border: none;
  border-radius: ${({ theme }) => theme.sizes.xs7}px;
  cursor: pointer;
  margin-top: ${({ theme }) => theme.sizes.xs4}px;
  padding: ${({ theme }) => theme.sizes.xs6}px;
  width: ${WIDTH5}px;
  transition: 0.5s ease;

  &:hover {
    transform: scale(1.02);
    background: ${({ theme }) => theme.colors.limeGreen2};
  }

  @media (max-width: ${({ theme }) => theme.sizes.xl9}px) {
    width: ${WIDTH4}px;
  }
`;

export const ChartContainer = styled.div`
  width: ${WIDTH1}%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.sizes.xl}px;

  @media (max-width: ${({ theme }) => theme.sizes.xl9}px) {
    width: ${WIDTH2}%;
  }

  @media (max-width: ${({ theme }) => theme.sizes.xl8}px) {
    width: ${WIDTH3}%;
  }
`;

export const InputField = styled.input`
  margin-left: ${({ theme }) => theme.sizes.xs4}px;
  padding: ${({ theme }) => theme.sizes.xs6}px;
`;
