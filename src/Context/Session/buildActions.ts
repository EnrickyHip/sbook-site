import { Dispatch } from 'react';
import { SessionAction, SessionTypeAction } from './reducer';
import { User } from '@/domain/entity/User';

export interface SessionBuildActions {
  login: (user: User) => void;
  logout: () => void;
  update: () => void;
  cancelUpdate: () => void;
}

export const buildActions = (dispatch: Dispatch<SessionAction>): SessionBuildActions => {
  return {
    login: (user: User) => dispatch({ type: SessionTypeAction.LOGIN, payload: user }),
    logout: () => dispatch({ type: SessionTypeAction.LOGOUT }),
    update: () => dispatch({ type: SessionTypeAction.REQUEST_UPDATE }),
    cancelUpdate: () => dispatch({ type: SessionTypeAction.CANCEL_UPDATE }),
  };
};
