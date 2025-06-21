import { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AuthContextR } from '../../../contexts/AuthReducer';


const ProtectedLayout = () => {
  const { state: { isAuthenticated } } = useContext(AuthContextR);
  const { pathname } = useLocation();
  return (
    isAuthenticated ? <Outlet /> : <Navigate to={`/login?origin=${pathname}`} replace />
  );
};

export default ProtectedLayout;
