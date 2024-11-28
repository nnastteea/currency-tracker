import styled, { keyframes } from "styled-components";

const BORDER_SIZE = 3;
const MARGIN_TOP = 30;
const LOADER_SIZE = 48;
const BORDER_RADIUS = 50;

const rotation = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

export const LoaderStyles = styled.span`
  width: ${LOADER_SIZE}px;
  height: ${LOADER_SIZE}px;
  border-radius: ${BORDER_RADIUS}%;
  display: inline-block;
  margin-top: ${MARGIN_TOP}px;
  margin: ${MARGIN_TOP}px auto;
  border-top: ${BORDER_SIZE}px solid #aedf23;
  border-right: ${BORDER_SIZE}px solid transparent;
  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;
`;
