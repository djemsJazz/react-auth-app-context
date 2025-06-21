import { NavLink } from 'react-router-dom';
import styles from './main-nav.module.css';
import { useContext } from 'react';
import { AuthContextR } from '../../../../../contexts/AuthReducer';
import { LOGOUT } from '../../../../../contexts/helpers/auth.action';

const MainNav = () => {
  const { state: { user, isAuthenticated }, dispatch } = useContext(AuthContextR);
  const handleLogout = () => {
    dispatch({ type: LOGOUT });
  };
  return (
    <nav className={styles.nav}>
      <p>AppLayout NAV</p>
      <menu className={styles.menu}>
        <NavLink className={({ isActive }) => isActive ? styles.active : undefined} to="/" end>Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? styles.active : undefined} to="/users" end>Users</NavLink>
        <NavLink className={({ isActive }) => isActive ? styles.active : undefined} to="/users/create" end>Create User</NavLink>
        {(user && isAuthenticated) ? <button onClick={handleLogout}>Logout</button> : (
          <NavLink className={({ isActive }) => isActive ? styles.active : undefined} to="/login" end>
            <button >login</button>
          </NavLink>
        )}
      </menu>
    </nav>
  );
};

export default MainNav;
