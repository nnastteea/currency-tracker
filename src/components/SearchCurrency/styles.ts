import styled from "styled-components";

const FONT_WEIGHT = 600;
const VERTICAL_INDENTS = 30;
const INDENTS_TOP = 10;
const WIDTH_INPUT = 90;
const CONTAINER_WIDTH_INPUT = 350;
const ICON_CONTAINER_LEFT = 260;
const RESULT_LIST_WIDTH = 343;

export const ContainerSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: ${VERTICAL_INDENTS}px;
  margin: ${VERTICAL_INDENTS}px 0;
`;

export const SearchCurrencyHeader = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${FONT_WEIGHT};
  margin-top: ${INDENTS_TOP}px;
  font-size: ${({ theme }) => theme.fontSizes.large}px;

  @media (max-width: ${({ theme }) => theme.sizes.xl7}px) {
    font-size: ${({ theme }) => theme.fontSizes.medium}px;
  }
`;

export const SearchCurrencyInput = styled.input`
  border: none;
  border-radius: ${({ theme }) => theme.sizes.xs7}px;
  background: ${({ theme }) => theme.colors.DarkGray2};
  padding: ${({ theme }) => theme.sizes.xs5}px;
  width: ${WIDTH_INPUT}%;
  font-size: ${({ theme }) => theme.fontSizes.extraSmall2}px;
  color: ${({ theme }) => theme.colors.white};
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.whiteAndGray};
  }
`;

export const ContainerSearchInput = styled.div`
  position: relative;
  width: ${CONTAINER_WIDTH_INPUT}px;

  @media (max-width: ${({ theme }) => theme.sizes.xl6}px) {
    width: ${({ theme }) => theme.sizes.xl5}px;
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.sizes.xl}%;
  left: ${({ theme }) => theme.sizes.xl5}px;
  transform: translateY(-50%);
  pointer-events: none;

  svg {
    width: ${({ theme }) => theme.sizes.xs3}px;
    height: auto;
    color: ${({ theme }) => theme.colors.whiteAndGray};
  }

  @media (max-width: ${({ theme }) => theme.sizes.xl6}px) {
    left: ${ICON_CONTAINER_LEFT}px;
  }
`;

export const ResultList = styled.ul`
  list-style: none;
  text-align: center;
  padding: 0;
  width: ${RESULT_LIST_WIDTH}px;
  color: ${({ theme }) => theme.colors.white};
  margin-top: ${({ theme }) => theme.sizes.xs7}px;
  margin-right: ${({ theme }) => theme.sizes.xs8}px;
  border: none;

  @media (max-width: ${({ theme }) => theme.sizes.xl6}px) {
    width: ${({ theme }) => theme.sizes.xl5}px;
  }
`;

export const ResultItem = styled.li`
  padding: ${INDENTS_TOP}px 0;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.DarkGray3};
  &:hover {
    background-color: ${({ theme }) => theme.colors.DarkGray2};
  }
`;
