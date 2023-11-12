import { User } from '../entity/User';
import { FetchReponse } from './FetchResponse';

export interface RegisterUserResponse extends FetchReponse {
  user?: User;
  username?: string[];
}
