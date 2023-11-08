import { StyledHeading } from './styled';

export interface HeadingProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: number;
}

export function Heading({ children, as = 'h1', size = 30 }: HeadingProps) {
  return (
    <StyledHeading as={as} size={size}>
      {children}
    </StyledHeading>
  );
}
