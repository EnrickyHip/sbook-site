import styled, { css } from 'styled-components';

export const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.gray8};
  `}

  font-size: 14px;
  margin-bottom: 0.5rem;
  font-weight: 400;
  display: inline-block;
`;
