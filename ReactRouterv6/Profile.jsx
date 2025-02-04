import React from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { userId } = useParams();
  return <h2>Profile Page of User {userId}</h2>;
};

export default Profile;