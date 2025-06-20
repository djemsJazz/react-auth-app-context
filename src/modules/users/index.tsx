import { Route, Routes } from 'react-router'
import ListUsersPage from './pages/ListUsersPage';
import CreateUserPage from './pages/CreateUserPage';
import UsersLayout from '../../shared/components/layouts/UsersLayout';
import UserDetailsPage from './pages/UserDetailsPage';

const UsersRouter = () => {
  return (
    <Routes>
      <Route element={<UsersLayout />}>
        <Route index element={<ListUsersPage />} />
        <Route path="/create" element={<CreateUserPage />} />
        <Route path="/:id" element={<UserDetailsPage />} />
      </Route>
    </Routes>
  )
}

export default UsersRouter;
