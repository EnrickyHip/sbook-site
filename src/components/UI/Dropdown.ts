import { Dropdown } from 'react-bootstrap';
import styled, { css } from 'styled-components';

//TODO tem que descobrir porque na primeira ele não faz a

export const SbookDropdownToggle = styled.div`
  cursor: pointer;
  &::after {
    display: none !important;
  }
`;

export const SbookDropdownMenu = styled(Dropdown.Menu)`
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  transition:
    max-height 0.3s,
    opacity 0.1s 0.2s,
    visibility 0s 0.2s;
  max-height: 0;
  display: block;
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
`;

interface SkoobDropdownProps {
  maxHeight?: number;
}

export const SbookDropdown = styled(Dropdown)<SkoobDropdownProps>`
  &.show ${SbookDropdownMenu} {
    ${({ maxHeight = 200 }) => css`
      max-height: ${maxHeight}px;
      transition:
        max-height 0.5s,
        opacity 0.2s,
        visibility 0s;
    `}
    display: block;
    opacity: 1;
    visibility: visible;
  }

  &.show > .dropdown-toggle:not(.dropdown-item):after {
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
  }

  .dropdown-toggle:after {
    will-change: transform;
    transition: transform 150ms linear;
  }
`;

export const SbookDropdownItem = styled(Dropdown.Item)`
  ${({ theme }) => css`
    color: ${theme.colors.gray8} !important;

    &:hover {
      color: ${theme.colors.text.primary};
      transition: ease-in-out 0.1s;
    }

    &:active {
      background-color: rgba(100, 38, 120, 0.15);
    }
  `}

  font-size: 14px;
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const SbookDropdownText = styled(Dropdown.ItemText)`
  ${({ theme }) => css`
    color: ${theme.colors.gray7};
  `}

  font-size: 14px;
  display: flex;
  gap: 10px;
  align-items: center;
  white-space: nowrap;
`;
