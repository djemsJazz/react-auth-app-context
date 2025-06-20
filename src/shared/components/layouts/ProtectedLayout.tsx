import { useContext } from 'react';
import { AuthContext } from '../../../contexts/Auth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';


const ProtectedLayout = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { pathname } = useLocation();
  return (
    isAuthenticated ? <Outlet /> : <Navigate to={`/login?origin=${pathname}`} replace />
  );
};

export default ProtectedLayout;
