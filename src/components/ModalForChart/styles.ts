import styled from "styled-components";

const BACKGROUND_COLOR = "rgba(0, 0, 0, 0.7)";
const WIDTH = 350;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.small}px;
  cursor: pointer;
  float: right;
`;

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
    width: ${WIDTH}px;
  }
  @media (max-width: ${({ theme }) => theme.sizes.xl8}px) {
    width: ${({ theme }) => theme.sizes.xl5}px;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  margin: 0;
`;
