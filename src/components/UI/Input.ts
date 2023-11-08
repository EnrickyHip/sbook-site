import ReactInputMask from 'react-input-mask';
import styled, { css } from 'styled-components';

const inputStyles = (invalid = false) => css`
  ${({ theme }) => css`
    border-radius: ${theme.borderRadius};
    border: 1px solid ${invalid ? theme.colors.error : theme.colors.gray3};

    &:focus {
      border: 1px solid ${invalid ? theme.colors.error : theme.colors.background.primary};
    }
  `}

  &[disabled] {
    cursor: not-allowed;
  }

  width: 100%;
  padding: 8px;
  outline: none;
  font-size: 16px;
  line-height: 16px;
  cursor: auto;
  transition: all 0.15s ease-in-out;
  font-weight: 400;
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;

  &::placeholder {
    font-size: 14px;
  }
`;

export interface InputProps {
  invalid?: boolean;
}

export const MaskedInput = styled(ReactInputMask)<InputProps>`
  ${({ invalid }) => inputStyles(invalid)}
`;

export const Input = styled.input<InputProps>`
  ${({ invalid }) => inputStyles(invalid)}
`;
