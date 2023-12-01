import { PieceStatus } from '../entity/PieceStatus';
import { FetchReponse } from './FetchResponse';

export interface GetAllStatusResponse extends FetchReponse {
  status: PieceStatus[];
}
