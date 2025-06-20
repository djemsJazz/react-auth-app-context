import { Link } from 'react-router-dom';

const ListUsersPage = () => {
  return (
    <div>
      <p>ListUsersPage</p>
      <Link to="/users/1">User 1 details</Link>
    </div>
  )
}

export default ListUsersPage;
