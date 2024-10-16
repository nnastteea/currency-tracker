import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    margin:0;
    padding:0;
    font-family: "Poppins", sans-serif;
    background:black;
}
#root{
    margin:0;
    padding:0;
}

&::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #474747; 
    border-radius: 4px; 
  }
`;
