import { Piece } from '../entity/Piece';
import { FetchReponse } from './FetchResponse';
import { Publisher } from '../entity/Publisher';
import { User } from '../entity/User';
import { Author } from '../entity/Author';

export interface SearchResponse extends FetchReponse {
  authors: Author[];
  pieces: Piece[];
  publishers: Publisher[];
  users: User[];
}
