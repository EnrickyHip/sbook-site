import { createContext, useContext, useMemo, useReducer, useRef } from 'react';
import { SessionState, initialState } from './initialState';
import { reducer } from './reducer';
import { SessionLoader } from '@/components/SessionLoader';
import { SessionBuildActions, buildActions } from './buildActions';

interface SessionContextInterface extends SessionState, SessionBuildActions {}

interface ModalContextProps {
  children: React.ReactNode;
}

const Context = createContext<SessionContextInterface | null>(null);

export const SessionContextProvider = ({ children }: ModalContextProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actionsRef = useRef(buildActions(dispatch));
  const actions = actionsRef.current;

  const context = useMemo(() => ({ ...state, ...actions }), [state, actions]);

  return (
    <Context.Provider value={context}>
      <SessionLoader>{children}</SessionLoader>
    </Context.Provider>
  );
};

export const useSession = (): SessionContextInterface => {
  const context = useContext(Context);

  if (!context) {
    throw new Error('You should use useSession inside <SessionContextProvider />');
  }
  return context;
};
