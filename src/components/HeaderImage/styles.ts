import React from "react";
import styled from "styled-components";

const HEIGHT = 350;
const SMALL_SIZE = 250;
const SMALL_WIDTH = 150;
const EXTRA_SMALL_WIDTH = 120;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.sizes.xs4}px;
  width: ${({ theme }) => theme.sizes.xl3}vw;
  gap: ${({ theme }) => theme.sizes.xl}px;
  height: ${HEIGHT}px;
  background: linear-gradient(
    45deg,
    ${({ theme }) => theme.colors.black} 10%,
    rgba(36, 121, 64, 0.7) 50%,
    ${({ theme }) => theme.colors.black} 100%
  );
  @media (max-width: ${({ theme }) => theme.sizes.xl11}px) {
    height: ${({ theme }) => theme.sizes.xl5}px;
  }
  @media (max-width: ${({ theme }) => theme.sizes.xl9}px) {
    height: ${SMALL_SIZE}px;
    gap: ${({ theme }) => theme.sizes.s}px;
  }
`;

export const TextSection = styled.div`
  color: white;
  max-width: ${({ theme }) => theme.sizes.l}%;
  text-align: right;
`;

export const Title = styled.h1`
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.green},
    ${({ theme }) => theme.colors.limeGreen},
    ${({ theme }) => theme.colors.limeGreen2}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: ${({ theme }) => theme.fontSizes.extraLarge5}px;
  color: #00ff40;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.sizes.xl11}px) {
    font-size: ${({ theme }) => theme.fontSizes.extraLarge4}px;
  }
  @media (max-width: ${({ theme }) => theme.sizes.xl9}px) {
    font-size: ${({ theme }) => theme.fontSizes.extraLarge3}px;
  }
  @media (max-width: ${({ theme }) => theme.sizes.xl7}px) {
    font-size: ${({ theme }) => theme.fontSizes.extraLarge2}px;
  }
`;

export const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small}px;
  color: ${({ theme }) => theme.colors.lightGray};
  @media (max-width: ${({ theme }) => theme.sizes.xl11}px) {
    font-size: ${({ theme }) => theme.fontSizes.extraSmall}px;
  }
  @media (max-width: ${({ theme }) => theme.sizes.xl7}px) {
    font-size: ${({ theme }) => theme.fontSizes.extraSmall2}px;
  }
`;
export const DiagramContainer = styled.div`
  img {
    width: ${SMALL_SIZE}px;
    height: auto;
  }
  @media (max-width: ${({ theme }) => theme.sizes.xl11}px) {
    img {
      width: ${({ theme }) => theme.sizes.xl4}px;
    }
  }
  @media (max-width: ${({ theme }) => theme.sizes.xl9}px) {
    img {
      width: ${SMALL_WIDTH}px;
    }
  }
  @media (max-width: ${({ theme }) => theme.sizes.xl7}px) {
    img {
      width: ${EXTRA_SMALL_WIDTH}px;
    }
  }
`;
