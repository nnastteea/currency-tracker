import styled from "styled-components";

const PADDING1 = 0;
const PADDING2 = 5;
const PADDING3 = 7;
const PADDING4 = 10;
const PADDING5 = 30;
const PADDING6 = 40;

export const HeaderContainer = styled.header`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-between;
  padding: ${PADDING4}px ${PADDING6}px;

  @media (max-width: ${({ theme }) => theme.sizes.xl9}px) {
    padding: ${PADDING4}px ${PADDING5}px;
  }

  @media (max-width: ${({ theme }) => theme.sizes.xl8}px) {
    padding: ${PADDING4}px ${PADDING6}px;
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

export const MenuItem = styled.a`
  cursor: pointer;
  text-decoration: none;
  padding: ${PADDING4}px ${PADDING6}px;

  transition: 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }
  &.active {
    transform: scale(1.07);
  }

  @media (max-width: ${({ theme }) => theme.sizes.xl10}px) {
    padding: ${PADDING4}px ${PADDING5}px;
  }

  @media (max-width: ${({ theme }) => theme.sizes.xl9}px) {
    padding: ${PADDING4}px ${PADDING4}px;
  }
`;

export const LogoContainer = styled.div`
  @media (max-width: ${({ theme }) => theme.sizes.xl10}px) {
    img {
      width: ${({ theme }) => theme.sizes.xs}px;
      height: ${({ theme }) => theme.sizes.xs}px;
      padding: ${PADDING2}px ${PADDING1};
    }
  }

  @media (max-width: ${({ theme }) => theme.sizes.xl18}px) {
    img {
      width: ${({ theme }) => theme.sizes.xs2}px;
      height: ${({ theme }) => theme.sizes.xs2}px;
      padding: ${PADDING3}px ${PADDING1};
    }
  }
`;

export const MenuImgContainer = styled.div`
  img {
    width: ${({ theme }) => theme.sizes.xl}px;
    height: ${({ theme }) => theme.sizes.l}px;
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

export const DropDownItem = styled.a`
  padding: ${PADDING4}px ${PADDING5}px;
  &:hover {
    transform: scale(1.05);
  }
  &.active {
    transform: scale(1.07);
  }
`;

export const HeaderImage = styled.img`
  width: calc(100% - 20px);
  padding: ${PADDING1} ${PADDING4}px;
  height: auto;
  object-fit: cover;
`;
