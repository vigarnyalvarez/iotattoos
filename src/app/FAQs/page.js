'use client'
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '../../components/ContainerBase/Container';
import { Content, Footer, Headline } from './components';

export default function FAQs (){
  const theme = useTheme();
  return (
      <Box>
        <Box
          sx={{
            backgroundColor: theme.palette.alternate.main,
            backgroundImage: `linear-gradient(120deg, ${theme.palette.background.paper} 0%, ${theme.palette.alternate.main} 100%)`,
            paddingTop: 13,
          }}
        >
          <Container>
            <Headline />
          </Container>
        </Box>
        <Container maxWidth={800}>
          <Content />
        </Container>
      </Box>
  );
};

