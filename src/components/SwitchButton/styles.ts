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
  width: ${({ theme }) => theme.sizes.xl}px;
  height: ${({ theme }) => theme.sizes.xs3}px;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.sizes.xs3}px;
  position: relative;
  transition: background-color 0.4s;

  &::before {
    content: "";
    position: absolute;
    width: ${({ theme }) => theme.sizes.xs4}px;
    height: ${({ theme }) => theme.sizes.xs4}px;
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.sizes.xs3}px;
    top: ${({ theme }) => theme.sizes.xs10}px;
    left: ${({ theme }) => theme.sizes.xs8}px;
    transition: transform 0.2s;
  }

  ${SwitchInput}:checked + & {
    &::before {
      transform: translateX(22px);
    }
  }

  @media (max-width: ${({ theme }) => theme.sizes.xl10}px) {
    width: ${({ theme }) => theme.sizes.s}px;
    height: ${({ theme }) => theme.sizes.xs4}px;

    &::before {
      width: ${({ theme }) => theme.sizes.xs5}px;
      height: ${({ theme }) => theme.sizes.xs5}px;
    }

    ${SwitchInput}:checked + & {
      &::before {
        transform: translateX(16px);
      }
    }
  }
`;
