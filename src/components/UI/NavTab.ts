import Link from 'next/link';
import { Tabs } from 'react-bootstrap';
import styled, { css } from 'styled-components';

export const MenuLink = styled(Link)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    font-weight: 400;
    gap: 8px;
    padding: 8px;
    text-decoration: none;
    color: ${theme.colors.gray8};
    transition: ease-in-out 0.1s;

    &:hover {
      color: ${theme.colors.text.primary};
    }
  `}
`;

export const SbookNavTab = styled(Tabs)`
  padding: 0;
`;

interface SbookMenuLiProps {
  active: boolean;
}

export const SbookTabLi = styled.li<SbookMenuLiProps>`
  display: flex;
  align-items: center;
  font-size: 17px;

  ${({ theme, active }) => css`
    ${active &&
    css`
      border-bottom: 4px solid ${theme.colors.text.primary};
      background-color: transparent;
      box-shadow: none;
      font-weight: 600;

      ${MenuLink} {
        font-weight: 600;
        color: ${theme.colors.text.primary};
      }

      ${TabButton} {
        font-weight: 600;
        color: ${theme.colors.text.primary};
      }
    `}
  `};
`;

export const TabList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
`;

export const TabButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 8px;
    color: ${theme.colors.gray7};
    transition: ease-in-out 0.1s;
    background-color: ${theme.colors.white};
    font-size: 14px;
    border: none;

    &:hover {
      color: ${theme.colors.deepBlack};
    }
  `}
`;
