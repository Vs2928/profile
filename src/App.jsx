import React from 'react';
import { CssBaseline, Box } from '@mui/material';
import Profile from './components/Profile'; // Ensure the path is correct

function App() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: '#f4f6f8',
      }}
    >
      <CssBaseline />
      <Profile />
    </Box>
  );
}

export default App;
