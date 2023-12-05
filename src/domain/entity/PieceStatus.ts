import { Piece } from './Piece';
import { User } from './User';

export type Status = 'finished' | 'abandoned' | 'in_progress' | 'paused' | 'hoping_to_start';

export interface PieceStatus {
  id: number;
  status: Status;
  rating: number | null;
  summary: string | null;
  user: User;
  piece: Piece;
  last_page: number | null;
}
