import styled, { css } from 'styled-components';

export const SearchBarContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 400px;
    background-color: ${theme.colors.background.secondary};
    padding: 5px 10px;
  `}
`;

export const SearchBarInput = styled.input`
  ${({ theme }) => css`
    background-color: ${theme.colors.background.secondary};
  `}

  flex-grow: 1;
  outline: none;
  border: none;
`;
