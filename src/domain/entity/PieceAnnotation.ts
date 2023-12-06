import { Piece } from './Piece';
import { User } from './User';

export interface PieceAnnotation {
  id: number;
  summary: string | null;
  page_number: number | null;
  created_at: string;
  updated_at: string;
  user: User;
  chapter: null;
  page: null;
  piece: Piece;
}
