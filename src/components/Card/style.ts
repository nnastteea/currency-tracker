import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  width: calc(40% - 10px);
  align-items: center;
  gap: 20px;
  padding: 10px 20px;
  background-color: #202025;
  border: 1px solid #474747;
  border-radius: 6px;
  margin: 20px 0;
  cursor: pointer;
  transition: 0.5s ease;

  &:hover {
    transform: scale(1.03);
  }
  img {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 550px) {
    width: 100%;
  }
`;

export const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: white;

  & > p:first-child {
    font-weight: 300;
    font-size: 25px;
  }

  & > p:nth-child(2) {
    font-weight: 200;
    font-size: 20px;
    color: #a7b2c3;
  }

  & > * {
    margin: 5px 0;
  }
`;
