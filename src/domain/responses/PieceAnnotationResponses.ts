import { PieceAnnotation } from '../entity/PieceAnnotation';
import { FetchReponse } from './FetchResponse';

export interface GetAllAnnotationsResponse extends FetchReponse {
  annotations: PieceAnnotation[];
}
