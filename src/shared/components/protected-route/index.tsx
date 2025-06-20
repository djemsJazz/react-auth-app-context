import { ReactNode, useContext } from 'react';
import { AuthContext } from '../../../contexts/Auth';
import { Navigate, useLocation } from 'react-router-dom';

type Props = {
  children: ReactNode,
}

const ProtectedRoute = ({ children }: Props) => {
  const { isAuthenticated } = useContext(AuthContext);
  const { pathname } = useLocation();
  return (
    isAuthenticated ? children : <Navigate to={`/login?origin=${pathname}`} replace />
  );
};

export default ProtectedRoute;
