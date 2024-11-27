import { NavLink } from "react-router-dom";
import styled from "styled-components";

const LOGO_PADDING_HORIZONTAL = 0;
const LOGO_PADDING_SMALL = 5;
const LOGO_PADDING_MEDIUM = 7;
const HEADER_VERTICAL_PADDING = 10;
const HEADER_HORIZONTAL_PADDING_LARGE = 30;
const HEADER_HORIZONTAL_PADDING_EXTRA_LARGE = 40;

export const WrapperHeader = styled.div`
  overflow-x: hidden;
`;

export const HeaderContainer = styled.header`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-between;
  padding: ${HEADER_VERTICAL_PADDING}px
    ${HEADER_HORIZONTAL_PADDING_EXTRA_LARGE}px;

  @media (max-width: ${({ theme }) => theme.sizes.xl9}px) {
    padding: ${HEADER_VERTICAL_PADDING}px ${HEADER_HORIZONTAL_PADDING_LARGE}px;
  }

  @media (max-width: ${({ theme }) => theme.sizes.xl8}px) {
    padding: ${HEADER_VERTICAL_PADDING}px
      ${HEADER_HORIZONTAL_PADDING_EXTRA_LARGE}px;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSizes.small}px;
  font-weight: ${({ theme }) => theme.sizes.xl5};

  @media (max-width: ${({ theme }) => theme.sizes.xl10}px) {
    font-size: ${({ theme }) => theme.fontSizes.extraSmall}px;
  }
`;

export const MenuItem = styled(NavLink)`
  color: ${({ theme }) => theme.colors.white};
  transition: 0.5s ease;
  cursor: pointer;
  text-decoration: none;
  padding: ${HEADER_VERTICAL_PADDING}px
    ${HEADER_HORIZONTAL_PADDING_EXTRA_LARGE}px;

  transition: 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }
  &.active {
    transform: scale(1.07);
    color: ${({ theme }) => theme.colors.lightGray};
  }

  @media (max-width: ${({ theme }) => theme.sizes.xl10}px) {
    padding: ${HEADER_VERTICAL_PADDING}px ${HEADER_HORIZONTAL_PADDING_LARGE}px;
  }

  @media (max-width: ${({ theme }) => theme.sizes.xl9}px) {
    padding: ${HEADER_VERTICAL_PADDING}px ${HEADER_VERTICAL_PADDING}px;
  }
`;

export const LogoContainer = styled.div`
  @media (max-width: ${({ theme }) => theme.sizes.xl10}px) {
    img {
      width: ${({ theme }) => theme.sizes.xs}px;
      height: ${({ theme }) => theme.sizes.xs}px;
      padding: ${LOGO_PADDING_SMALL}px ${LOGO_PADDING_HORIZONTAL};
    }
  }

  @media (max-width: ${({ theme }) => theme.sizes.xl18}px) {
    img {
      width: ${({ theme }) => theme.sizes.xs2}px;
      height: ${({ theme }) => theme.sizes.xs2}px;
      padding: ${LOGO_PADDING_MEDIUM}px ${LOGO_PADDING_HORIZONTAL};
    }
  }
`;

export const DropDownMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: ${({ theme }) => theme.sizes.xl2}px;
  left: ${({ theme }) => theme.sizes.xl}%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.colors.black};
`;

export const DropDownItem = styled(NavLink)`
  padding: ${HEADER_VERTICAL_PADDING}px ${HEADER_HORIZONTAL_PADDING_LARGE}px;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  transition: 0.5s ease;
  &:hover {
    transform: scale(1.05);
  }
  &.active {
    transform: scale(1.07);
    color: ${({ theme }) => theme.colors.lightGray};
  }
`;

export const HeaderImage = styled.img`
  width: calc(100% - 20px);
  padding: ${LOGO_PADDING_HORIZONTAL} ${HEADER_VERTICAL_PADDING}px;
  height: auto;
  object-fit: cover;
`;

export const MenuImgContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Burger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${({ theme }) => theme.sizes.xs2}px;
  height: ${({ theme }) => theme.sizes.xs4}px;
`;

export const Line = styled.div`
  height: ${({ theme }) => theme.sizes.xs8}px;
  width: ${({ theme }) => theme.sizes.xl3}%;
  border-radius: ${({ theme }) => theme.sizes.xs6}px;
  background-color: ${({ theme }) => theme.colors.white};
  transition: all 0.3s ease;
`;
