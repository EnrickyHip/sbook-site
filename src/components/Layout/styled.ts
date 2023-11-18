import styled, { css } from 'styled-components';

export const Content = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    color: ${theme.colors.text.primaryDarker};
    margin-top: 62px;
  `}
`;
