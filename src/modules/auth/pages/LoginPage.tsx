import { useContext } from 'react';
import { AuthContext } from '../../../contexts/Auth';
import { useLocation, useNavigate } from 'react-router-dom';


const LoginPage = () => {
  const { setUser, setIsAuthenticated } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();


  const searchParams = new URLSearchParams(location.search);
  const origin = searchParams.get('origin');

  const handleLogin = () => {
    setUser({ id: "1", name: 'Djamel', email: "email@gmail.com", phoneNumber: '514-944-3147', birthday: '02-07-1992' });
    setIsAuthenticated(true);
    navigate(origin);
  };

  return (
    <div>
      <h2>LoginPage</h2>
      <button onClick={handleLogin}>Click To Login</button>
    </div>
  );
};

export default LoginPage;
