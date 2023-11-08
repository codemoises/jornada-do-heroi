import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Button, ButtonProps } from '@mui/material'

const ColorButton = styled(Button)<ButtonProps>(() => ({
  color: '#FFFFFF',
  backgroundColor: '#5355F9',
  fontFamily: "'Exo 2', sans-serif",
  '&:hover': {
    backgroundColor: '#4143cd',
  },
}));

const SaturnIcon = () => {
  return (
    <img width={18} src='/assets/images/saturn.svg' alt='Icone do botão das cartas' />
  );
}

export default function CardButton() {
  return (
    <ColorButton variant="contained" startIcon={<SaturnIcon />}>cartas</ColorButton>
  );
}
