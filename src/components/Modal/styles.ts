import styled from "styled-components";

const BACKGROUND_COLOR = "rgba(0, 0, 0, 0.4)";
const CONTENT_MARGIN = 10;
const INPUT_PADDING = 8;
const CALCULATE_BUTTON_WIDTH = 105;
const CONTENT_WIDTH = 95;
const MODAL_WIDTH_WIDTH = 350;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${BACKGROUND_COLOR};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: ${({ theme }) => theme.colors.DarkGray};
  padding: ${({ theme }) => theme.sizes.xs4}px;
  border-radius: ${({ theme }) => theme.sizes.xs7}px;
  width: ${({ theme }) => theme.sizes.xl6}px;

  @media (max-width: ${({ theme }) => theme.sizes.xl9}px) {
    width: ${MODAL_WIDTH_WIDTH}px;
  }
  @media (max-width: ${({ theme }) => theme.sizes.xl8}px) {
    width: ${({ theme }) => theme.sizes.xl5}px;
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.small}px;
  cursor: pointer;
  float: right;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
`;

export const Content = styled.div`
  margin-top: ${CONTENT_MARGIN}px;
  color: ${({ theme }) => theme.colors.white};
  width: ${CONTENT_WIDTH}%;
`;

export const InputContainer = styled.div`
  margin-top: ${({ theme }) => theme.sizes.xs5}px;

  label {
    display: block;
    margin-bottom: ${({ theme }) => theme.sizes.xs6}px;
  }
`;

export const Input = styled.input`
  width: ${({ theme }) => theme.sizes.xl3}%;
  padding: ${INPUT_PADDING}px;
  margin-bottom: ${CONTENT_MARGIN}px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.sizes.xs7}px;
`;

export const Select = styled.select`
  width: ${CALCULATE_BUTTON_WIDTH}%;
  padding: ${INPUT_PADDING}px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.sizes.xs7}px;
`;

export const CalculateButton = styled.button`
  width: ${CALCULATE_BUTTON_WIDTH}%;
  padding: ${INPUT_PADDING}px;
  background: ${({ theme }) => theme.colors.limeGreen};
  color: black;
  font-size: ${({ theme }) => theme.fontSizes.extraSmall}px;
  border: none;
  border-radius: ${({ theme }) => theme.sizes.xs7}px;
  cursor: pointer;
  margin-top: ${CONTENT_MARGIN}px;
  transition: 0.5s ease;

  &:hover {
    transform: scale(1.02);
    background: ${({ theme }) => theme.colors.limeGreen2};
  }
`;
