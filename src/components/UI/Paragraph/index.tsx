import { P } from './styled';

export interface ParagraphProps {
  children: React.ReactNode;
  size?: number;
  className?: string;
}

export function Paragraph({ children, size = 15, className = '' }: ParagraphProps) {
  return (
    <P className={className} size={size}>
      {children}
    </P>
  );
}
