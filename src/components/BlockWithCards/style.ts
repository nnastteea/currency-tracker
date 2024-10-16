import styled from "styled-components";

export const BlockContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const SectionTitle = styled.h2`
  font-weight: 400;
  color: white;
  font-size: 20px;
`;

export const Line = styled.div`
  width: 42%;
  height: 2px;
  background-color: #474747;
  margin-bottom: 20px;

  @media (max-width: 550px) {
    width: 100%;
  }
`;

export const BlockWithCardsContainer = styled.div`
  padding: 0 100px;
  @media (max-width: 860px) {
    padding: 0 60px;
  }
  @media (max-width: 700px) {
    padding: 0 30px;
  }
  @media (max-width: 550px) {
    padding: 0 40px;
  }
`;
