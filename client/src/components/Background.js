import React from 'react';
import { Box } from '@mui/material';


function Background() {
  return (
    <>
    <Box
      sx={{
        width: 300,
        height: 300,
        borderRadius: 5,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
    </>
  )
}

export default Background