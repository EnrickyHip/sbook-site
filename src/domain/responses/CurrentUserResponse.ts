import { User } from '../entity/User';
import { FetchReponse } from './FetchResponse';

export interface CurrentUserResponse extends FetchReponse {
  user: User | null;
}
