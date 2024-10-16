import styled from "styled-components";

const PADDING1 = 0;
const PADDING2 = 30;
const PADDING3 = 40;
const PADDING4 = 60;
const PADDING5 = 100;

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
  padding: ${PADDING1} ${PADDING5}px;
  @media (max-width: ${({ theme }) => theme.sizes.xl10}px) {
    padding: ${PADDING1} ${PADDING4}px;
  }
  @media (max-width: ${({ theme }) => theme.sizes.xl9}px) {
    padding: ${PADDING1} ${PADDING2}px;
  }
  @media (max-width: ${({ theme }) => theme.sizes.xl18}px) {
    padding: ${PADDING1} ${PADDING3}px;
  }
`;
