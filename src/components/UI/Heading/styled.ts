import styled, { css } from 'styled-components';
import { HeadingProps } from '.';

export const StyledHeading = styled.h1<HeadingProps>`
  ${({ size }) => css`
    font-size: ${size}px;
  `}
`;
