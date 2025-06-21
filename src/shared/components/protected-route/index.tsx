import { ReactNode, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContextR } from '../../../contexts/AuthReducer';

type Props = {
  children: ReactNode,
}

const ProtectedRoute = ({ children }: Props) => {
  const { state: { isAuthenticated } } = useContext(AuthContextR);
  const { pathname } = useLocation();
  return (
    isAuthenticated ? children : <Navigate to={`/login?origin=${pathname}`} replace />
  );
};

export default ProtectedRoute;
