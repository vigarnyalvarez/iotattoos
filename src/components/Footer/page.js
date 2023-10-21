'use client'
import React from 'react';
import Box from '@mui/material/Box';
import Container from '../../components/ContainerBase/Container';
import ContactFooter from './Contact/Contact';

export default function Footer (){

  return (
    <Box position={'relative'} bgcolor={'alternate.main'}>
        <Container>
            <ContactFooter />
        </Container>
    </Box>
  );
};


