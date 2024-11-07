import styled from "styled-components";

const PADDING_VERTICAL = 10;
const INPUT_CONTAINER_PADDING_LARGE = 150;
const INPUT_CONTAINER_PADDING_HORIZONTAL = 190;
const CHART_WIDTH_LARGE = 80;
const CHART_WIDTH_MEDIUM = 90;
const CHART_WIDTH_SMALL = 95;
const BUTTON_WIDTH = 165;

export const Container = styled.div`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputContainer = styled.div`
  padding: ${PADDING_VERTICAL}px ${INPUT_CONTAINER_PADDING_HORIZONTAL}px;
  font-size: ${({ theme }) => theme.fontSizes.small}px;
  display: flex;
  margin-top: ${({ theme }) => theme.sizes.xs4}px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.sizes.xl11}px) {
    padding: ${PADDING_VERTICAL}px ${INPUT_CONTAINER_PADDING_LARGE}px;
  }

  @media (max-width: ${({ theme }) => theme.sizes.xl9}px) {
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
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
  width: 350px;
  transition: 0.5s ease;

  &:hover {
    transform: scale(1.02);
    background: ${({ theme }) => theme.colors.limeGreen2};
  }

  @media (max-width: ${({ theme }) => theme.sizes.xl9}px) {
    width: ${BUTTON_WIDTH}px;
  }
`;

export const ChartContainer = styled.div`
  width: ${CHART_WIDTH_LARGE}%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: ${({ theme }) => theme.sizes.xl}px;

  @media (max-width: ${({ theme }) => theme.sizes.xl9}px) {
    width: ${CHART_WIDTH_MEDIUM}%;
  }

  @media (max-width: ${({ theme }) => theme.sizes.xl8}px) {
    width: ${CHART_WIDTH_SMALL}%;
  }
`;

export const InputField = styled.input`
  margin-left: ${({ theme }) => theme.sizes.xs4}px;
  padding: ${({ theme }) => theme.sizes.xs6}px;
`;

export const InfoP = styled.p`
  color: ${({ theme }) => theme.colors.white};
`;

export const LabelContainer = styled.label`
  max-width: ${({ theme }) => theme.sizes.xl7}px;
`;
