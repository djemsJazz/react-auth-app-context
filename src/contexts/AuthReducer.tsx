import { createContext, Dispatch, ReactNode, useMemo, useReducer } from 'react';
import { LOGIN, LOGOUT } from './helpers/auth.action';

type Props = {
  children: ReactNode,
};

type AuthState = {
  isAuthenticated: boolean,
  user: IUser,
}
type AuthAction = {
  type: string,
  payload?: Partial<AuthState>,
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: undefined,
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case LOGIN:
      return { isAuthenticated: true, user: action.payload.user };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

type AuthContextType = {
  state: AuthState,
  dispatch: Dispatch<AuthAction>,
}

export const AuthContextR = createContext<AuthContextType>({ state: initialState, dispatch: () => undefined });


const AuthReducerProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  return (
    <AuthContextR.Provider value={contextValue}>
      {children}
    </AuthContextR.Provider>
  );
};

export default AuthReducerProvider;
