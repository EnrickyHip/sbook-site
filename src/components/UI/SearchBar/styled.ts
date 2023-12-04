import styled, { css } from 'styled-components';

export const SearchBarContainer = styled.div.attrs({ id: 'search-bar' })`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 400px;
    background-color: ${theme.colors.background.secondary};
    padding: 5px 10px;
  `}

  @media (max-width: 800px) {
    min-width: 100%;
    height: 42px;
    border-bottom: 1px solid gray;
    font-size: 20px;
    border-radius: 5px;
  }
`;

export const SearchBarInput = styled.input`
  ${({ theme }) => css`
    background-color: ${theme.colors.background.secondary};
  `}

  flex-grow: 1;
  outline: none;
  border: none;
`;
