import styled from "styled-components";

const PADDING_MARGIN1 = 0;
const PADDING_MARGIN2 = 5;
const PADDING_MARGIN3 = 10;
const PADDING_MARGIN4 = 20;

export const CardContainer = styled.div`
  display: flex;
  width: calc(40% - 10px);
  align-items: center;
  gap: ${({ theme }) => theme.sizes.xs4}px;
  padding: ${PADDING_MARGIN3}px ${PADDING_MARGIN4}px;
  background-color: ${({ theme }) => theme.colors.DarkGray};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.sizes.xs6}px;
  margin: ${PADDING_MARGIN4}px ${PADDING_MARGIN1};
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
    margin: ${PADDING_MARGIN2}px ${PADDING_MARGIN1};
  }
`;
