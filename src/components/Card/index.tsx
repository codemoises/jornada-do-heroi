import Box from '@mui/material/Box';
import { Heading } from '../Heading';

export type CardComponentProps = {
  src: string;
  name: string;
  power: string;
  intelligence: string;
  strenght: string;
  speed: string;
  durability: string;
  combat: string;
};

export default function CardComponent({ src, name, power, intelligence, strenght, speed, durability, combat }: CardComponentProps) {

  return (
    <Box
      sx={{
        background: '#132719',
        display: 'flex',
        alignItems: 'flex-start',
        maxWidth: '154px',
        height: '215px',
        margin: '0 8px',
        padding: '0 8px',
        border: '1px solid #234a2e',
        borderRadius: '8px',
      }}
    >
      <Box sx={{ width: '110px', height: '165px', boxShadow: `1px 2px 6px 0px #31563d;` }}>
        <img
          width={'100%'}
          src={src}
        />
        <Box margin={'7px 0'} textAlign={'center'}>
          <Heading size='xsmall'>{name}</Heading>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '7px' }}>
          <SwordIcon /> <Heading size='xsmall' >{power}</Heading>
        </Box>
      </Box>
    </Box>
  );
}

const SwordIcon = () => {
  return (
    <img width={12} height={9} src='/assets/images/sword.svg' alt='Icone das cartas' />
  );
}
