import { Author } from './Author';
import { Genre } from './Genre';
import { Publisher } from './Publisher';
import { User } from './User';

type OfficialChoices = 'Official' | 'Anonymous';
type PieceType = 'Manga' | 'Manhwa' | 'Manwa' | 'Novel' | 'Comic' | 'Book' | 'Magazine';
type WritingStatus =
  | 'Published'
  | 'Announced'
  | 'Completed'
  | 'Deleted'
  | 'Dropped'
  | 'Editing'
  | 'Hiatus'
  | 'On-going'
  | 'One Shot'
  | 'Translating';

export const translatedStatus = {
  Published: 'Publicado',
  Announced: 'Anunciado',
  Completed: 'Completado',
  Deleted: 'Deletado',
  Dropped: 'Cancelado',
  Editing: 'Em Edição',
  Hiatus: 'Em Hiato',
  'On-going': 'Em Andamento',
  'One Shot': 'História Rápida',
  Translating: 'Em Tradução',
} as const;

export interface Piece {
  id: number;
  name: string;
  introduction: string;
  created_at: string;
  updated_at: string;
  published_at: string;
  is_official: OfficialChoices;
  status: WritingStatus;
  piece_type: PieceType;
  publisher: Publisher;
  users: User[];
  authors: Author[];
  genres: Genre[];
  isbn: string | null;
  pages: number | null;
  cover_picture: string | null;
}
