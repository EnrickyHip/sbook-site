import { PieceStatus } from '../entity/PieceStatus';
import { FetchReponse } from './FetchResponse';

export interface GetAllStatusResponse extends FetchReponse {
  status: PieceStatus[];
}

export interface GetPieceStatusResponse extends FetchReponse {
  status: PieceStatus | null;
}
