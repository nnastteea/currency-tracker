import styled from "styled-components";

export const SwitchContainer = styled.label`
  padding: 10px 0;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

export const SwitchInput = styled.input`
  display: none;
`;

export const SwitchSlider = styled.span`
  width: 50px;
  height: 25px;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 25px;
  position: relative;
  transition: background-color 0.4s;

  &::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: transparent;
    border: 2px solid white;
    border-radius: 25px;
    top: 1px;
    left: 3px;
    transition: transform 0.2s;
  }

  ${SwitchInput}:checked + & {
    &::before {
      transform: translateX(22px);
    }
  }

  @media (max-width: 860px) {
    width: 40px;
    height: 20px;

    &::before {
      width: 15px;
      height: 15px;
    }

    ${SwitchInput}:checked + & {
      &::before {
        transform: translateX(16px);
      }
    }
  }
`;
