import styled, { css } from 'styled-components';
import { SbookDropdownItem } from '../UI/Dropdown';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

export const InnerNav = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 20px;
`;

interface InnerMenuItemProps {
  active?: boolean;
}

export const InnerMenuItem = styled.li<InnerMenuItemProps>`
  ${({ active }) => css`
    font-weight: ${active ? '600' : 'auto'};
  `}
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 800px) {
    gap: 10px;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.text.colorHover};
    transition: 0.2s ease-in-out;
  }
`;

export const ThemeIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 42px;
  height: 42px;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.background.primaryDarker};
  }
`;

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.background.primary};
  padding: 10px 30px;
  position: fixed;
  width: 100%;
  z-index: 2;
  color: white;
  top: 0;
  right: 0;
  left: 0;
  height: 62px;

  .search-icon {
    display: none;
  }

  a {
    text-decoration: none;
    color: white;
  }

  @media (max-width: 800px) {
    padding: 10px;

    ${SbookDropdownItem} {
      font-size: 20px;
    }

    .search-icon {
      display: flex;
    }
  }
`;
