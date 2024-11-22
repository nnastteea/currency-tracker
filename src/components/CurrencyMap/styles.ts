import styled from "styled-components";

const INPUT_PADDING = 8;
const SIDE_INDENTS = 10;
const FONT_SIZE = 12;
const VERTICAL_INDENTS = 30;
const WIDTH_INPUT = 90;
const BUTTON_WIDTH_ADAPTIVE = 298;
const BUTTON_WIDTH = 345;
const CONTAINER_WIDTH_INPUT = 350;

export const MarkerCircle = styled.div`
  background-color: green;
  width: ${({ theme }) => theme.sizes.xs5}px;
  height: ${({ theme }) => theme.sizes.xs5}px;
  border-radius: ${({ theme }) => theme.sizes.xl}%;
  cursor: pointer;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.sizes.xs6}px ${SIDE_INDENTS}px;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin: ${({ theme }) => theme.sizes.xs7}px 0;
`;

export const HeadText = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.extraSmall}px;
  text-align: center;
`;

export const Icon = styled.img`
  margin-right: ${SIDE_INDENTS}px;
  width: ${({ theme }) => theme.sizes.xs4}px;
  height: ${({ theme }) => theme.sizes.xs4}px;
`;

export const InfoText = styled.p`
  font-size: ${FONT_SIZE}px;
  margin: 0;
  overflow-wrap: break-word;
`;

export const CityInput = styled.input`
  border: none;
  border-radius: ${({ theme }) => theme.sizes.xs7}px;
  background: ${({ theme }) => theme.colors.DarkGray2};
  padding: ${({ theme }) => theme.sizes.xs5}px;
  width: ${WIDTH_INPUT}%;
  font-size: ${({ theme }) => theme.fontSizes.extraSmall2}px;
  color: ${({ theme }) => theme.colors.white};
  outline: none;
`;

export const ContainerCityInput = styled.div`
  width: ${CONTAINER_WIDTH_INPUT}px;

  @media (max-width: ${({ theme }) => theme.sizes.xl6}px) {
    width: ${({ theme }) => theme.sizes.xl5}px;
  }
`;

export const ContainerCityForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: ${VERTICAL_INDENTS}px;
  margin: ${VERTICAL_INDENTS}px 0;
`;

export const SearchButton = styled.button`
  width: ${BUTTON_WIDTH}px;
  margin-right: ${({ theme }) => theme.sizes.xs7}px;
  padding: ${INPUT_PADDING}px;
  background: ${({ theme }) => theme.colors.limeGreen};
  color: black;
  font-size: ${({ theme }) => theme.fontSizes.extraSmall}px;
  border: none;
  border-radius: ${({ theme }) => theme.sizes.xs7}px;
  cursor: pointer;
  margin-top: ${SIDE_INDENTS}px;
  transition: 0.5s ease;

  &:hover {
    transform: scale(1.02);
    background: ${({ theme }) => theme.colors.limeGreen2};
  }
  @media (max-width: ${({ theme }) => theme.sizes.xl6}px) {
    width: ${BUTTON_WIDTH_ADAPTIVE}px;
    margin-right: 0;
  }
`;

export const InfoP = styled.p`
  color: ${({ theme }) => theme.colors.lightGray};
  margin-top: ${SIDE_INDENTS}px;
  text-align: center;
`;
