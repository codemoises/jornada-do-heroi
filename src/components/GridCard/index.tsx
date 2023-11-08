import * as React from 'react';
import * as Styled from './styles';
import CardComponent from '../Card';

export default function GridCard() {
  return (
    <Styled.Grid>
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
    </Styled.Grid>
  );
}
