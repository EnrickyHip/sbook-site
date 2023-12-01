import { Piece } from '../entity/Piece';
import { FetchReponse } from './FetchResponse';

export interface GetPieceResponse extends FetchReponse {
  piece: Piece;
}
