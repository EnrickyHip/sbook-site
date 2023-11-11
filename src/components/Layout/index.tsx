import Header from '../Header';
import { Content } from './styled';

interface LayoutInterface {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutInterface) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
};
