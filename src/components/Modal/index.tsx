import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Modal from '@mui/material/Modal';
import { Heading } from '../Heading';



const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '30px',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  height: '70%',
  bgcolor: '#19191E',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalComponent() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Heading size="small">WINNER</Heading>
          </Box>
          <Box
            display={{
              display: 'flex',
              justifyContent: 'space-between',
              margin: '30px 40px',
            }}
          >
            <Box maxWidth={'200px'}>
              <Box>
                <img width={'100%'} src="https://images.unsplash.com/photo-1569091791842-7cfb64e04797?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Imagem do heroi" />
              </Box>
              <Box sx={{ margin: '10px 0' }}>ola</Box>
            </Box>
            <Box display={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: '8px', width: '400px', margin: '0 18px'}}>
              <Box>
                <Box display={'flex'} alignItems={'center'}>ola<ArrowDropDownIcon /></Box>
              </Box>
              <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                <Box><Heading uppercase={false}>Intelligence</Heading></Box>
                <Box><Heading uppercase={false}>Strength</Heading></Box>
                <Box><Heading uppercase={false}>Speed</Heading></Box>
                <Box><Heading uppercase={false}>Durability</Heading></Box>
                <Box><Heading uppercase={false}>Power</Heading></Box>
                <Box><Heading uppercase={false}>Combat</Heading></Box>
              </Box>
              <Box>
                <Box><ArrowDropDownIcon /></Box>
              </Box>
            </Box>
            <Box maxWidth={'200px'}>
              <Box>
                  <img width={'100%'} src="https://images.unsplash.com/photo-1569091791842-7cfb64e04797?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Imagem do heroi" />
              </Box>
              <Box
                sx={{
                  width: '200px',
                  display: 'flex',
                  margin: '10px 0',
                  justifyContent: 'flex-end',
                }}
              >
                ola
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
