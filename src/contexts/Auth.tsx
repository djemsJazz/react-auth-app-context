import { createContext, ReactNode, useMemo, useState } from 'react';

type Props = {
  children: ReactNode
}

type AuthContextType = {
  isAuthenticated: boolean,
  user: IUser,
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>,
  setUser: React.Dispatch<React.SetStateAction<IUser>>,
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false, user: undefined, setUser: () => null, setIsAuthenticated: () => null
});

const AuthProvider = ({ children }: Props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<IUser>(undefined);

  const contextValues = useMemo(() => ({ 
    isAuthenticated, user, setIsAuthenticated, setUser
   }), [isAuthenticated, user, setIsAuthenticated, setUser]);

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
