import styled, { css } from 'styled-components';

export const Select = styled.select`
  ${({ theme }) => css`
    border-radius: ${theme.borderRadius};
    border: 1px solid ${theme.colors.gray3};

    &:focus {
      border: 1px solid ${theme.colors.text.primary};
    }
  `}

  &[disabled] {
    cursor: not-allowed;
  }

  width: 100%;
  padding: 9px;
  outline: none;
  font-size: 16px;
  line-height: 16px;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  font-weight: 400;
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  appearance: none;

  &::placeholder {
    font-size: 14px;
  }
`;
