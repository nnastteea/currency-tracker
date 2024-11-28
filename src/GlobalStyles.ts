import { createGlobalStyle, styled } from "styled-components";

const NULL_P_M = 0;

export const GlobalStyle = createGlobalStyle`
body{
    margin:${NULL_P_M};
    padding:${NULL_P_M};
    font-family: "Poppins", sans-serif;
    overflow-x: hidden;
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

export const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black};
`;
