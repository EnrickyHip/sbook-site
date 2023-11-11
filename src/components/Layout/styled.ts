import styled, { css } from 'styled-components';

export const Content = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    display: grid;
    grid-template-columns: 7fr 2fr;
    min-height: calc(100vh - 65px);
    color: ${theme.colors.text.primaryDarker};
    margin-left: 250px;
    margin-top: 65px;
  `}
`;
