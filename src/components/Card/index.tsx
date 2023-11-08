import Box from '@mui/material/Box';
import { Heading } from '../Heading';

const borderColor = '#132719';

export default function CardComponent() {
  return (
    <Box
      sx={{
        background: `${borderColor}`,
        display: 'flex',
        alignItems: 'flex-start',
        maxWidth: '154px',
        height: '215px',
        margin: '0 8px',
        padding: '0 8px',
        border: `1px solid rgb(52,255,114,0.2)`,
        borderRadius: '8px',
      }}
    >
      <Box sx={{ width: '110px', height: '165px', boxShadow: '1px 2px 6px 0px rgba(11,145,73,0.75);' }}>
        <img
          width={'100%'}
          src="https://images.unsplash.com/photo-1699247193226-c9c5a7717013?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <Box margin={'7px 0'} textAlign={'center'}>
          <Heading size='xsmall'>nightwing</Heading>
        </Box>
        <Box textAlign={'center'}>
          <Heading size='xsmall' >277</Heading>
        </Box>
      </Box>
    </Box>
  );
}
