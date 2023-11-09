import { User } from '@/domain/entity/User';
import { SessionState, initialState } from './initialState';

export enum SessionTypeAction {
  LOGIN,
  LOGOUT,
  REQUEST_UPDATE,
  CANCEL_UPDATE,
}

export type SessionAction = {
  type: SessionTypeAction;
  payload?: User;
};

export const reducer = (state: SessionState = { ...initialState }, action: SessionAction): SessionState => {
  switch (action.type) {
    case SessionTypeAction.LOGIN:
      return {
        ...state,
        loggedIn: true,
        user: action.payload ?? null,
      };

    case SessionTypeAction.LOGOUT:
      return { ...state, user: null, loggedIn: false };

    case SessionTypeAction.REQUEST_UPDATE:
      return { ...state, updateRequested: true };

    case SessionTypeAction.CANCEL_UPDATE:
      return { ...state, updateRequested: false };

    default:
      return { ...state };
  }
};
