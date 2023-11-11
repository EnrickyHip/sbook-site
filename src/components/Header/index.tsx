import Link from 'next/link';
import { useThemeContext } from '@/Context/ThemeContext';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { MdAccountCircle, MdLogout, MdPersonOutline } from 'react-icons/md';
import { Dropdown } from 'react-bootstrap';
import { HiOutlineBookOpen } from 'react-icons/hi2';
import { HeaderContainer, HeaderItem, Logo, Nav, ThemeIcon } from './styled';
import { Heading } from '../UI/Heading';
import { SbookDropdown, SbookDropdownItem, SbookDropdownMenu, SbookDropdownToggle } from '../UI/Dropdown';

function Header() {
  const { mode, toggleTheme } = useThemeContext();

  return (
    <HeaderContainer>
      <Nav>
        <HeaderItem>
          <Link href="/">
            <Logo>
              <HiOutlineBookOpen size={30} />
              <Heading size={20} as="h1">
                Sbook
              </Heading>
            </Logo>
          </Link>
        </HeaderItem>

        <HeaderItem>
          <SbookDropdown>
            <Dropdown.Toggle aria-label="minha conta" as={SbookDropdownToggle}>
              <MdAccountCircle size={30} />
            </Dropdown.Toggle>

            <SbookDropdownMenu>
              <SbookDropdownItem>
                <MdPersonOutline size={25} />
                Minha Estante Virtual
              </SbookDropdownItem>
              <SbookDropdownItem href="/logout">
                <MdLogout size={25} />
                Sair
              </SbookDropdownItem>
            </SbookDropdownMenu>
          </SbookDropdown>

          <ThemeIcon onClick={toggleTheme}>
            {mode === 'DARK' ? <BsFillMoonFill size={20} /> : <BsFillSunFill size={20} />}
          </ThemeIcon>
        </HeaderItem>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
