import styled from "styled-components";

const CARD_MARGIN_HORIZONTAL = 0;
const TEXT_MARGIN_SMALL = 5;
const CARD_PADDING_TOP_BOTTOM = 10;
const CARD_PADDING_LEFT_RIGHT = 20;

export const CardContainer = styled.div`
  display: flex;
  width: calc(40% - 10px);
  align-items: center;
  gap: ${({ theme }) => theme.sizes.xs4}px;
  padding: ${CARD_PADDING_TOP_BOTTOM}px ${CARD_PADDING_LEFT_RIGHT}px;
  background-color: ${({ theme }) => theme.colors.DarkGray};
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.sizes.xs6}px;
  margin: ${CARD_PADDING_LEFT_RIGHT}px ${CARD_MARGIN_HORIZONTAL};
  cursor: pointer;
  transition: 0.5s ease;

  &:hover {
    transform: scale(1.03);
  }
  img {
    width: ${({ theme }) => theme.sizes.xl}px;
    height: ${({ theme }) => theme.sizes.xl}px;
  }

  @media (max-width: ${({ theme }) => theme.sizes.xl8}px) {
    width: ${({ theme }) => theme.sizes.xl3}%;
  }
`;

export const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white};

  & > p:first-child {
    font-weight: ${({ theme }) => theme.sizes.xl5};
    font-size: ${({ theme }) => theme.fontSizes.medium}px;
  }

  & > p:nth-child(2) {
    font-weight: ${({ theme }) => theme.sizes.xl4};
    font-size: ${({ theme }) => theme.fontSizes.small}px;
    color: ${({ theme }) => theme.colors.BlueGray};
  }

  & > * {
    margin: ${TEXT_MARGIN_SMALL}px ${CARD_MARGIN_HORIZONTAL};
  }
`;
