import * as React from 'react';
import Container from '@mui/material/Container';
import Image from 'next/image';

export default function HomePage() {
  return (
    <Container sx={{ 
      display: 'flex', 
      justifyContent: 'center',
      marginTop: '4rem',
      }}>
      <Image src={'/iologo.png'} width={500} height={500} alt='iotattoos'/>
    </Container>
  );
}
