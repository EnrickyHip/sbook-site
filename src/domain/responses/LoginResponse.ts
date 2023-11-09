import { User } from '../entity/User';
import { FetchReponse } from './FetchResponse';

export interface LoginResponse extends FetchReponse {
  user?: User;
}
