import styled, { DefaultTheme, css } from 'styled-components';
//TODO seria interessante fazer um disabled no botão pra quando alguma ação for realizada o botão estar disabled enquanto a requisição é feita, para evitar o envio novamente

interface SbookButtonProps {
  light?: boolean;
}

const normalStyle = (theme: DefaultTheme) => css`
  background-color: ${theme.colors.background.primary};
  color: ${theme.colors.white};
  border: none;

  &:hover {
    background-color: ${theme.colors.background.primaryDarker};
  }
`;

const lightStyle = (theme: DefaultTheme) => css`
  background-color: ${theme.colors.white};
  color: ${theme.colors.gray8};
  border: 2px solid ${theme.colors.gray3};

  &:hover {
    border: 2px solid ${theme.colors.background.primary};
  }
`;

export const SbookButton = styled.button<SbookButtonProps>`
  ${({ theme, light = false }) => css`
    ${light ? lightStyle(theme) : normalStyle(theme)}
    border-radius: ${theme.borderRadius};
    transition: ease-in-out 0.1s;
  `}

  padding: 7px 15px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 15px;

  @media (max-width: 800px) {
    font-size: 18px;
  }
`;
