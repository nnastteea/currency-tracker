import { createGlobalStyle, styled } from "styled-components";

const NULL_P_M = 0;

export const GlobalStyle = createGlobalStyle`
body{
    margin:${NULL_P_M};
    padding:${NULL_P_M};
    font-family: "Poppins", sans-serif;
    background:${({ theme }) => theme.colors.black};
}
#root{
    margin:${NULL_P_M};
    padding:${NULL_P_M};
}

&::-webkit-scrollbar {
    width: ${({ theme }) => theme.sizes.xs7}px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gray}; 
    border-radius: ${({ theme }) => theme.sizes.xs7}px; 
  }
`;
