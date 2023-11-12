import styled, { css } from 'styled-components';

export const ShowPasswordButton = styled.button`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.gray2};
    border-left: none;
    border-top-right-radius: ${theme.borderRadius};
    border-bottom-right-radius: ${theme.borderRadius};
  `}

  cursor: pointer;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
`;
