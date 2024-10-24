import styled from "styled-components";

const PADDING1 = 0;
const PADDING2 = 25;
const PADDING3 = 40;
const PADDING4 = 50;
const PADDING5 = 80;
const PADDING6 = 100;

export const FooterContainer = styled.article`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  padding: ${PADDING3}px ${PADDING6}px;
  justify-content: space-between;

  section {
    flex: 1;
    max-width: calc(46%);
  }

  @media (max-width: ${({ theme }) => theme.sizes.xl11}px) {
    padding: ${PADDING3}px ${PADDING5}px;
  }

  @media (max-width: ${({ theme }) => theme.sizes.xl10}px) {
    padding: ${PADDING3}px ${PADDING4}px;
    display: block;
    section {
      max-width: ${({ theme }) => theme.sizes.xl3}%;
    }
  }
`;

export const SectionSecond = styled.section`
  display: flex;
  justify-content: space-between;
  .div {
    flex: 1;
  }
`;

export const ContainerTitleAndLogo = styled.div`
  display: flex;
  p {
    padding-left: ${({ theme }) => theme.sizes.xs2}px;
  }
`;

export const TitleFooter = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.extraLarge}px;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.green},
    ${({ theme }) => theme.colors.limeGreen},
    ${({ theme }) => theme.colors.limeGreen2}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: ${({ theme }) => theme.sizes.xl8};
  @media (max-width: ${({ theme }) => theme.sizes.xl11}px) {
    font-size: ${({ theme }) => theme.fontSizes.medium}px;
  }
`;

export const ImgLogo = styled.img`
  padding: ${PADDING2}px ${PADDING1};
  width: ${({ theme }) => theme.sizes.xs}px;
  height: ${({ theme }) => theme.sizes.xs}px;
`;

export const TextFooter = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small}px;
`;

export const TitleOfSectionSecond = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.extraLarge}px;
  font-weight: ${({ theme }) => theme.sizes.xl7};
  padding-bottom: ${({ theme }) => theme.sizes.xs4}px;
  @media (max-width: ${({ theme }) => theme.sizes.xl11}px) {
    font-size: ${({ theme }) => theme.fontSizes.medium}px;
  }
`;

export const TextOfSectionSecond = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small}px;
  color: ${({ theme }) => theme.colors.lightGray};
`;

export const StartsupText = styled.p`
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: ${({ theme }) => theme.fontSizes.extraSmall2}px;
  text-align: center;
  @media (max-width: ${({ theme }) => theme.sizes.xl11}px) {
    font-size: ${({ theme }) => theme.fontSizes.extraSmall3}px;
  }
`;
