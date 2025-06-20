import { useParams } from 'react-router-dom';

const UserDetailsPage = () => {
  const { id } = useParams();
  return (
    <div>
      <p>UserDetailsPage</p>
      this the details of User <strong>{id}</strong>
    </div>
  );
};

export default UserDetailsPage;
