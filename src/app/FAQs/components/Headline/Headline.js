import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Headline = () => {
  return (
    <Box>
      <Typography variant="h2" align={'center'} fontWeight={700} gutterBottom>
        Frequently Asked Questions
      </Typography>
      <Typography variant="h6" align={'center'} color={'textSecondary'}>
        Search our FAQ for answers to anything you might ask.
      </Typography>
    </Box>
  );
};

export default Headline;
