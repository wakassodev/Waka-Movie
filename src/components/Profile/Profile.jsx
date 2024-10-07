// import React from 'react';
// import { useSelector } from 'react-redux';


// const Profile = () => {
//   console.log('Profile');
//   return <div>Profile</div>;
// };

// export default Profile;

import React from 'react';
import { useSelector } from 'react-redux';
import { Typography, Box } from '@mui/material';

const Profile = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <Box display="flex" justifyContent="center">
      <Box>
        <Typography variant="h4" gutterBottom>
          Profile
        </Typography>
        {user ? (
          <Typography variant="h6">
            Welcome, {user.username || user.id}!
          </Typography>
        ) : (
          <Typography variant="h6">
            Please log in to view your profile.
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Profile;

