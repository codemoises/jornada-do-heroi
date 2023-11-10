import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Heading } from '../Heading';

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

export default function SearchAppBar() {

  return (
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
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
      </Toolbar>
    </Box>
  );
}
