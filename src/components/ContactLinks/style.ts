import styled from "styled-components";

const LINE_HEIGHT = 1.3;
const PADDING_LARGE = 80;
const PADDING_EXTRA_LARGE = 100;

export const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.sizes.s}px ${PADDING_EXTRA_LARGE}px;
  gap: ${({ theme }) => theme.sizes.xs2}px;
  @media (max-width: ${({ theme }) => theme.sizes.xl11}px) {
    padding: ${({ theme }) => theme.sizes.s}px ${PADDING_LARGE}px;
  }

  @media (max-width: ${({ theme }) => theme.sizes.xl9}px) {
    padding: ${({ theme }) => theme.sizes.xs4}px
      ${({ theme }) => theme.sizes.s}px;
  }

  @media (max-width: ${({ theme }) => theme.sizes.xl7}px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ImageContainer = styled.div`
  display: inline;
  justify-content: center;
`;

export const LinkContainer = styled.a`
  padding: 0 ${({ theme }) => theme.sizes.xs6}px;
  svg {
    cursor: pointer;
    width: ${({ theme }) => theme.sizes.xl}px;
    height: auto;
    color: ${({ theme }) => theme.colors.limeGreen};
    transition: 0.5s;
  }
  svg:hover {
    color: ${({ theme }) => theme.colors.limeGreen3};
  }
  @media (max-width: ${({ theme }) => theme.sizes.xl11}px) {
    width: ${({ theme }) => theme.sizes.s}px;
  }
`;

export const ContactHeader = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.extraLarge}px;
`;

export const ContactParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small}px;
  line-height: ${LINE_HEIGHT};
`;

export const LinkImg = styled.img`
  width: ${({ theme }) => theme.sizes.l}px;
  height: auto;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  @media (max-width: ${({ theme }) => theme.sizes.xl11}px) {
    width: ${({ theme }) => theme.sizes.s}px;
  }
`;

export const ImageLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
