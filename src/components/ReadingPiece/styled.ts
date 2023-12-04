import styled, { css } from 'styled-components';

export const ProgressContainer = styled.div`
  text-align: left;
`;

const getValueColor = (strength: number): string => {
  if (strength >= 100) return '#49B442';
  if (strength >= 75) return '#90CF4F';
  if (strength >= 50) return '#E3CD56';
  if (strength >= 25) return '#E69750';
  return '#DA5454';
};

interface PieceProgressProps {
  strength: number;
}

export const PieceProgress = styled.progress<PieceProgressProps>`
  -webkit-appearance: none;
  border: none;
  appearance: none;
  width: 100%;
  height: 4px;
  margin-top: 8px;

  &::-webkit-progress-bar {
    ${({ theme }) => css`
      background-color: ${theme.colors.gray3};
    `}
    border-radius: 2px;
  }

  ${({ strength }) => css`
    &::-webkit-progress-value {
      background-color: ${getValueColor(strength)};
      border-radius: 2px;
      background-size:
        35px 20px,
        100% 100%,
        100% 100%;
    }

    &::-moz-progress-bar {
      background-color: ${getValueColor(strength)};
      border-radius: 2px;
      background-size:
        35px 20px,
        100% 100%,
        100% 100%;
    }
  `}
`;
