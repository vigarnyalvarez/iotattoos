/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import PhoneIcon from '@mui/icons-material/Phone';
import Mail from '@mui/icons-material/Mail';
import LocationOn from '@mui/icons-material/LocationOn';

const mock = [
  {
    label: 'Phone',
    value: '+49 172 2393128',
    icon: (<PhoneIcon/>),
  },
  {
    label: 'Email',
    value: 'info@iotattoos.com',
    icon: (<Mail/>),
  },
  {
    label: 'Address',
    value: 'Urbanstraße 70A, 10967 Berlin',
    icon: (<LocationOn/>),
  },
];

export default function ContactFooter () {
  const theme = useTheme();

  return (
    <>
      <Box marginBottom={2}>
        <Typography
          variant={'h4'}
          sx={{ fontWeight: 700 }}
          gutterBottom
          align={'center'}
        >
          IOTattoos.
        </Typography>
        {/* <Typography color="text.secondary" align={'center'}>
          Keep track of what's happening with your data, change permissions, and
          run reports against your data anywhere in the world. Keep track of
          what's happening with your data, change permissions.
        </Typography> */}
      </Box>
      <Box
        display={'flex'}
        flexDirection={{ xs: 'column', md: 'row' }}
        justifyContent={'space-between'}
        marginBottom={4}
      >
        {mock.map((item, i) => (
          <Box
            key={i}
            component={ListItem}
            disableGutters
            width={'auto'}
            padding={0}
          >
            <Box
              component={ListItemAvatar}
              minWidth={'auto !important'}
              marginRight={2}
            >
              <Box
                component={Avatar}
                bgcolor={theme.palette.secondary.main}
                width={40}
                height={40}
              >
                {item.icon}
              </Box>
            </Box>
            <ListItemText primary={item.label} secondary={item.value} />
          </Box>
        ))}
      </Box>
    </>
  );
};

