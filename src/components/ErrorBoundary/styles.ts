import styled, { createGlobalStyle, keyframes } from "styled-components";

const colors = {
  background: "#474747",
  bearBackground: "#fff",
  textColor: "white",
  earColor: "#cfecf9",
  faceColor: "#000",
};

const dimensions = {
  bearWidth: 160,
  bearHeight: 185,
  earWidth: 100,
  earHeight: 125,
};

const FONT_SIZE = 26;

const faceLift = keyframes`
  0% {
    transform: translateX(-60%);
  }
  100% {
    transform: translateX(-30%);
  }
`;

const earLift = keyframes`
  0% {
    transform: translateX(10px);
  }
  100% {
    transform: translateX(0px);
  }
`;

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${colors.background};
    flex-direction: column;
    color: ${colors.textColor};
  }

  * {
    box-sizing: border-box;
  }
`;

export const ErrorBear = styled.div`
  width: ${dimensions.bearWidth}px;
  height: ${dimensions.bearHeight}px;
  position: relative;
  background: ${colors.bearBackground};
  border-radius: 100px 100px 0 0;
  margin: 0 auto;

  &:after {
    content: "";
    position: absolute;
    width: ${dimensions.earWidth}px;
    height: ${dimensions.earHeight}px;
    left: 50%;
    top: 25px;
    transform: translateX(-50%);
    background-image: radial-gradient(
        circle,
        ${colors.faceColor} 48%,
        transparent 55%
      ),
      radial-gradient(circle, ${colors.faceColor} 48%, transparent 55%),
      radial-gradient(circle, ${colors.bearBackground} 30%, transparent 45%),
      radial-gradient(circle, ${colors.faceColor} 48%, transparent 51%),
      linear-gradient(${colors.faceColor} 20px, transparent 0),
      linear-gradient(${colors.earColor} 60px, transparent 0),
      radial-gradient(circle, ${colors.earColor} 50%, transparent 51%),
      radial-gradient(circle, ${colors.earColor} 50%, transparent 51%);
    background-repeat: no-repeat;
    background-size:
      16px 16px,
      16px 16px,
      10px 10px,
      42px 42px,
      12px 3px,
      50px 25px,
      70px 70px,
      70px 70px;
    background-position:
      25px 10px,
      55px 10px,
      36px 44px,
      50% 30px,
      50% 85px,
      50% 50px,
      50% 22px,
      50% 45px;
    animation: ${faceLift} 3s linear infinite alternate;
  }

  &:before {
    content: "";
    position: absolute;
    width: 140%;
    height: 125px;
    left: -20%;
    top: 0;
    background-image: radial-gradient(
        circle,
        ${colors.bearBackground} 48%,
        transparent 50%
      ),
      radial-gradient(circle, ${colors.bearBackground} 48%, transparent 50%);
    background-repeat: no-repeat;
    background-size: 65px 65px;
    background-position:
      0px 12px,
      145px 12px;
    animation: ${earLift} 3s linear infinite alternate;
  }
`;

export const ErrorMessage = styled.p`
  font-size: ${FONT_SIZE}px;
`;
