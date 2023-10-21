import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FaqGroupItem = ({ title, items }) => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={2}>
        <Typography fontWeight={700} variant={'h5'}>
          {title}
        </Typography>
      </Box>
      <Box>
        {items.map((item, i) => (
          <Box
            component={Accordion}
            key={i}
            padding={1}
            marginBottom={i === item.length - 1 ? 0 : 2}
            borderRadius={`${theme.spacing(1)} !important`}
            sx={{
              '&::before': {
                display: 'none',
              },
            }}
          >
            <Box
              component={AccordionSummary}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id={`panel1a-header--${i}`}
            >
              <Typography fontWeight={600}>{item.title}</Typography>
            </Box>
            <AccordionDetails>
              <Typography color="text.secondary">{item.subtitle}</Typography>
            </AccordionDetails>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

FaqGroupItem.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

const Content = () => {
  return (
    <Box>
      <Box marginBottom={6}>
        <FaqGroupItem
          title={'General Questions'}
          items={[
            {
              title: 'How long is your waiting list?',
              subtitle:
                `My waiting list is currently only two weeks but it also depends on the project of each client. If it's something small I can find a gap and if it's something bigger or special it can take up to a month.`,
            },
            {
              title: 'Which are your tattooing days availability?',
              subtitle:
                `Normally from Tuesday to Saturday, but if you want to get tattooed an very interesting project I'm also available on Sundays.`,
            },
            {
              title: 'Are you doing guest spots?',
              subtitle:
                `Yes, please feel free to send me your request. Use my E-mail or WhatsApp and I'll be back ASAP.`,
            },
            {
              title: 'Do you work with colors?',
              subtitle:
                `No normally I do not work colors but depending on the project I could work white and red.`,
            },
            {
              title: 'Do you do group tattoos?',
              subtitle:
                `Yes very glad too and there is always special offer in those kind of tattoos.`,
            },
            {
              title: 'Do you do tattoo collaborations?',
              subtitle:
                `Yes, very glad to. Please use my WhatsApp for a quick answer.`,
            },
          ]}
        />
      </Box>
    </Box>
  );
};

export default Content;
