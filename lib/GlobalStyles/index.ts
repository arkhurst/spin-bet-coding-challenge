import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
    padding: 0;
    margin: 0;
    font-family: Barlow;
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
  }

  .scrollContainer::-webkit-scrollbar {
    width: 7px;
  }
  
  /* Track */
  .scrollContainer::-webkit-scrollbar-track {
    background: transparent;
  }
  
  /* Handle */
  .scrollContainer::-webkit-scrollbar-thumb {
    background: #bdbbbb;
    border-radius: 500px;
  }
  
  /* Handle on hover */
  .scrollContainer::-webkit-scrollbar-thumb:hover {
    background: #DBDBDB;
  }
`;
