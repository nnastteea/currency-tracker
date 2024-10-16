import styled from "styled-components";

export const HeaderContainer = styled.header`
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 10px 40px;

  @media (max-width: 700px) {
    padding: 10px 30px;
  }

  @media (max-width: 550px) {
    padding: 10px 40px;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 300;

  @media (max-width: 860px) {
    font-size: 18px;
  }
`;

export const MenuItem = styled.a`
  cursor: pointer;
  text-decoration: none;
  padding: 10px 40px;

  transition: 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }
  &.active {
    transform: scale(1.07);
  }

  @media (max-width: 860px) {
    padding: 10px 30px;
  }

  @media (max-width: 700px) {
    padding: 10px 10px;
  }
`;

export const LogoContainer = styled.div`
  @media (max-width: 860px) {
    img {
      width: 35px;
      height: 35px;
      padding: 5px 0;
    }
  }

  @media (max-width: 550px) {
    img {
      width: 30px;
      height: 30px;
      padding: 7px 0;
    }
  }
`;

export const MenuImgContainer = styled.div`
  img {
    width: 50px;
    height: 45px;
  }
`;

export const DropDownMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
  background: black;
`;

export const DropDownItem = styled.a`
  padding: 10px 30px;
  &:hover {
    transform: scale(1.05);
  }
  &.active {
    transform: scale(1.07);
  }
`;

export const HeaderImage = styled.img`
  width: calc(100% - 20px);
  padding: 0 10px;
  height: auto;
  object-fit: cover;
`;
