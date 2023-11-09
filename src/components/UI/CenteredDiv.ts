import styled, { css } from 'styled-components';

interface CenteredDivProps {
  gap?: number;
}

export const CenteredScreenDiv = styled.div`
  ${({ gap }: CenteredDivProps) => css`
    gap: ${gap}px;
  `}

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const CenteredDiv = styled.div`
  ${({ gap }: CenteredDivProps) => css`
    gap: ${gap}px;
  `}

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
