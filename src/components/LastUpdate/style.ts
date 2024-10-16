import styled from "styled-components";

export const LastUpdateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 20px;
  font-size: 20px;

  @media (max-width: 860px) {
    font-size: 18px;
  }

  @media (max-width: 550px) {
    font-size: 16px;
  }
`;

export const UpdateImage = styled.img`
  width: 30px;
  height: 30px;

  @media (max-width: 860px) {
    width: 25px;
    height: 25px;
  }

  @media (max-width: 550px) {
    width: 20px;
    height: 20px;
  }
`;
