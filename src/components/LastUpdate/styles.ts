import styled from "styled-components";

export const LastUpdateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.sizes.xs4}px;
  font-size: ${({ theme }) => theme.fontSizes.small}px;

  @media (max-width: ${({ theme }) => theme.sizes.xl10}px) {
    font-size: ${({ theme }) => theme.fontSizes.extraSmall}px;
  }

  @media (max-width: ${({ theme }) => theme.sizes.xl8}px) {
    font-size: ${({ theme }) => theme.fontSizes.extraSmall2}px;
  }
`;

export const UpdateImage = styled.img`
  width: ${({ theme }) => theme.sizes.xs2}px;
  height: ${({ theme }) => theme.sizes.xs2}px;

  @media (max-width: ${({ theme }) => theme.sizes.xl10}px) {
    width: ${({ theme }) => theme.sizes.xs3}px;
    height: ${({ theme }) => theme.sizes.xs3}px;
  }

  @media (max-width: ${({ theme }) => theme.sizes.xl8}px) {
    width: ${({ theme }) => theme.sizes.xs4}px;
    height: ${({ theme }) => theme.sizes.xs4}px;
  }
`;
