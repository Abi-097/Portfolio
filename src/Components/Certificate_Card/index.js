import React, { useState } from 'react';
import "./style.css"
import { Button, Card, CardContent, Dialog, DialogActions, DialogContent, } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
  boxSizing: 'border-box',
  width: '100%',
  height: '100%',
  background: 'transparent',
  border: '1px solid white',
  boxShadow: '12px 17px 51px rgba(0, 0, 0, 0.22)',
  backdropFilter: 'blur(6px)',
  borderRadius: '17px',
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'all 0.5s',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  userSelect: 'none',
  fontWeight: 'bolder',
  color: 'black',
  marginLeft: '12px',
  '&:hover': {
    border: '1px solid black',
    transform: 'scale(1.05)',
  },

  '&:active': {
    transform: 'scale(0.95) rotateZ(1.7deg)',
  },
}));
const CertificateCard = ({item}) => {
  const [open, setOpen] = useState (false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


    return ( 
<div>
  <StyledCard onClick={handleOpen}>
      <CardContent>
          <img src={item.image} alt="Image" width="340px" height="200px"/> 
          <label className="label">{item.name}</label>
        </CardContent>
        
    </StyledCard>
    
    <Dialog open={open} onClose={handleClose} maxWidth="lg">
        <DialogContent>
          
          <img src={item.image} alt="Image" width="700px" height="500px"/> 
        
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
</div>
    );
}

export default CertificateCard; 
