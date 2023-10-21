'use client'
import React from 'react';
import Link from 'next/link';
import { AppBar, Tabs, Tab, Toolbar, Typography, Box } from '@mui/material';
import Image from 'next/image';


export default function Page() {
        const [value, setValue] = React.useState(0);

        const handleChange = (event, newValue) => {
                setValue(newValue);
        };

        return (
                <AppBar position="fixed" sx={{ zIndex: 2000 }}>
                    <Toolbar sx={{ backgroundColor: 'background.paper' }}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}>
                            <Image src={'/iologo.png'} width={25} height={25} alt='iotattoos'/>
                            <Typography variant="h6" noWrap color="black" component={Link} href="/" sx={{ textDecoration: 'none',  marginLeft: '16px', marginRight: '16px' }}>
                                IOTattoos.
                            </Typography>
                        </Box>
                        <Tabs value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary">
                            <Tab label="About" component={Link} href="/" />
                            <Tab label="Portofolio" component={Link} href="/Portfolio" />
                            <Tab label="Book" component={Link} href="/ContactUs" />
                            <Tab label="FAQs" component={Link} href="/FAQs" />
                        </Tabs>
                    </Toolbar>
                </AppBar>
        );
}

