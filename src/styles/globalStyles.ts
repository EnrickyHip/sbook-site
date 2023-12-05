import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: system-ui, Arial, sans-serif;
    scroll-behavior: smooth;
  }


  body {
    background-color: ${({ theme }) => theme.colors.background.secondary};
    transition: background-color 0.2s ease-in-out;
  }
`;
