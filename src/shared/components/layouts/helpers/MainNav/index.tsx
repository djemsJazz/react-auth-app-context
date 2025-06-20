import { NavLink } from 'react-router-dom';
import styles from './main-nav.module.css';
import { useContext } from 'react';
import { AuthContext } from '../../../../../contexts/Auth';

const MainNav = () => {
  const { user, isAuthenticated, setIsAuthenticated, setUser } = useContext(AuthContext);
  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(undefined);
  }
  return (
    <nav className={styles.nav}>
      <p>AppLayout NAV</p>
      <menu className={styles.menu}>
        <NavLink className={({ isActive }) => isActive ? styles.active : undefined} to="/" end>Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? styles.active : undefined} to="/users" end>Users</NavLink>
        <NavLink className={({ isActive }) => isActive ? styles.active : undefined} to="/users/create" end>Create User</NavLink>
        {(user && isAuthenticated) && <button onClick={handleLogout}>Logout</button>}
      </menu>
    </nav>
  )
}

export default MainNav
