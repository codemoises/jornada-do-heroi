import * as React from 'react';
import * as Styled from './styles';
import { useEffect, useState } from 'react';
import { Box, styled } from '@mui/material';
import CardButton from '../../components/CardButton';
import CardComponent from '../../components/Card';
import Toolbar from '@mui/material/Toolbar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Heading } from '../../components/Heading';
import ModalComponent from '../../components/Modal';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '15px',
  border: '1px solid #5355F9',
  marginLeft: 0,
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('lg')]: {
      width: '172px',
      '&:focus': {
        width: '200px',
      },
    },
  },
}));

export function Home() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

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
  }, []);


  const dataFilter = () => {
  const lowerSearch = search.toLocaleLowerCase();
    return data
    .filter(p => String(p.name).toLocaleLowerCase().includes(lowerSearch));
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
      <Toolbar
        sx={{
          display: 'flex',
          flexDirection: [ 'column', 'row', 'row', 'row', 'row' ],
          gap: [ '24px', '0', '0', '0', '0' ],
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1600px',
          margin: '0 auto',
          padding: '10px 10px',
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <AccountCircleIcon
            sx={{ color: '#5355F9', fontSize: 40, marginBottom: '4px' }}
          />
          <Heading size={'small'}>{'username'}</Heading>
        </Box>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            value={search}
            onChange={(ev)=> setSearch(ev.target.value)}
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
      </Toolbar>
    </Box>
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
        <ModalComponent />
        <Styled.Grid>
          {dataFilter().map((data) => (
            <CardComponent key={data.id} src={data.images.md} name={data.name} power={data.powerstats.power} intelligence={data.powerstats.intelligence} strenght={data.powerstats.strenght} speed={data.powerstats.speed} durability={data.powerstats.durability} combat={data.powerstats.combat} />
          ))}
        </Styled.Grid>
      </Box>
    </Box>
    </>
  );
}
