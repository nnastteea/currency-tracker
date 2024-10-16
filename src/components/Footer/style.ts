import styled from "styled-components";

export const FooterContainer = styled.article`
  color: white;
  display: flex;
  padding: 40px 100px;
  justify-content: space-between;

  section {
    flex: 1;
    max-width: calc(46%);
  }

  @media (max-width: 1024px) {
    padding: 40px 80px;
  }

  @media (max-width: 860px) {
    padding: 40px 50px;
    display: block;
    section {
      max-width: calc(100%);
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
    padding-left: 30px;
  }
`;

export const TitleFooter = styled.p`
  font-size: 26px;
  background: linear-gradient(90deg, #00ce2c, #aedf23, #a3dc00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
  @media (max-width: 1024px) {
    font-size: 22px;
  }
`;

export const ImgLogo = styled.img`
  padding: 25px 0;
  width: 40px;
  height: 40px;
`;

export const TextFooter = styled.p`
  font-size: 20px;
`;

export const TitleOfSectionSecond = styled.h3`
  font-size: 26px;
  font-weight: 500;
  padding-bottom: 20px;
  @media (max-width: 1024px) {
    font-size: 22px;
  }
`;

export const TextOfSectionSecond = styled.p`
  font-size: 20px;
  color: #898989;
`;
