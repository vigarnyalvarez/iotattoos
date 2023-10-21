'use client'
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Form } from './components';

export default function ContactPageSidebarMap () {
  const theme = useTheme();

  return (
    <Box sx={{
      paddingTop: '4rem',
    }}>
      <Form />
    </Box>
  );
};
