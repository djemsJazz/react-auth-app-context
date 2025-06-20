import { NavLink, Outlet } from 'react-router-dom';

const UsersLayout = () => {
  return (
    <div>
      <h1>UsersLayout NAV</h1>
      <NavLink to="/" end>Home -</NavLink>
      <NavLink to="/users" end> Users -</NavLink>
      <NavLink to="/users/create" end> Create User</NavLink>
      <Outlet />
      <h1>UsersLayout Footer</h1>
    </div>
  );
};

export default UsersLayout;
