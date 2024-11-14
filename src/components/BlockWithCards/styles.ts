import styled from "styled-components";

const PADDING_HORIZONTAL_NONE = 0;
const PADDING_SMALL = 30;
const PADDING_MEDIUM = 40;
const PADDING_LARGE = 60;
const PADDING_EXTRA_LARGE = 100;

export const BlockContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const SectionTitle = styled.h2`
  font-weight: ${({ theme }) => theme.sizes.xl6};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.small}px;
`;

export const Line = styled.div`
  width: ${({ theme }) => theme.sizes.m}%;
  height: ${({ theme }) => theme.sizes.xs9}px;
  background-color: ${({ theme }) => theme.colors.gray};
  margin-bottom: ${({ theme }) => theme.sizes.xs4}px;

  @media (max-width: ${({ theme }) => theme.sizes.xl8}px) {
    width: ${({ theme }) => theme.sizes.xl3}%;
  }
`;

export const BlockWithCardsContainer = styled.div`
  padding: ${PADDING_HORIZONTAL_NONE} ${PADDING_EXTRA_LARGE}px;
  @media (max-width: ${({ theme }) => theme.sizes.xl10}px) {
    padding: ${PADDING_HORIZONTAL_NONE} ${PADDING_LARGE}px;
  }
  @media (max-width: ${({ theme }) => theme.sizes.xl9}px) {
    padding: ${PADDING_HORIZONTAL_NONE} ${PADDING_SMALL}px;
  }
  @media (max-width: ${({ theme }) => theme.sizes.xl18}px) {
    padding: ${PADDING_HORIZONTAL_NONE} ${PADDING_MEDIUM}px;
  }
`;
