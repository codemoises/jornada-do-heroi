import * as React from 'react';
import * as Styled from './styles';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import { Box } from '@mui/material';
import CardButton from '../../components/CardButton';
import CardComponent from '../../components/Card';

export function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetch(
          'http://homologacao3.azapfy.com.br/api/ps/metahumans',
        );
        const json = await data.json();
        setData(json);
      } catch {
        setData(undefined);
      }
    };
    load();
    console.log(data);



  }, []);

  return (
    <>
      <Header />
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
        <Styled.Grid>
          {data.map((data) => (
            <CardComponent key={data.id} src={data.images.md} name={data.name} power={data.powerstats.power} />
          ))}
        </Styled.Grid>
      </Box>
    </Box>
    </>
  );
}
