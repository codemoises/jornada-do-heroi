import * as React from 'react';
import Box from '@mui/material/Box';
import CardButton from '../CardButton';
import GridCard from '../GridCard';

export default function GridContent() {
  return (
    <Box
      sx={{
        maxWidth: '1600px',
        flexGrow: 1,
        margin: '6px auto',
        padding: '8px 24px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: ['column', 'row', 'row', 'row', 'row'],
          alignItems: ['center', 'normal', 'normal', 'normal', 'normal'],
          gap: ['24px', 0, 0, 0, 0]
        }}
      >
        <Box>
          <CardButton />
        </Box>
        <GridCard />
      </Box>
    </Box>
  );
}
