import React, { useState } from 'react';
import "./style.css";
import { Box } from '@mui/material';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const SocialLinks = () => {
        const [open, setOpen] = useState(false);
      
        const handleOpen = () => {
          setOpen(true);
        };
      
        const handleClose = () => {
          setOpen(false);
        };
  return (
    <Box className="SocialLinks_card" sx={{mt:1, ml:15,}}>
    {/* //GitHubIcon */}
    <a className="social-link5" href="https://github.com/Abi-097"> 
        <svg
          viewBox="0 0 16 16"
          className="bi bi-instagram"
          fill="currentColor"
          height="20"
          width="20"
          style={{ color: 'white' }}
        >
        <GitHubIcon/>
        </svg>
      </a>

          {/* //Linkedin */}
          <a className="social-link3" href="https://www.linkedin.com/in/abishek-mahenderaraja-188286169/">
        <svg
          viewBox="0 0 16 16"
          className="bi bi-instagram"
          fill="currentColor"
         height="20"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
          style={{ color: 'white' }}
        >
        <LinkedInIcon/> 
        </svg>
      </a>
      {/* //email */}
    <a className="social-link2" href="mailto:abimahen0312@gmail.com"> 
        <svg
          viewBox="0 0 16 16"
          className="bi bi-instagram"
          fill="currentColor"
          height="20"
          width="20"
          style={{ color: 'white' }}
        >
        <EmailIcon/>
        </svg>
      </a>
      {/* //whatsapp */}
      <a className="social-link4"  onClick={handleOpen}>
        <svg
          viewBox="0 0 16 16"
          className="bi bi-whatsapp"
          fill="currentColor"
          height="20"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
          style={{ color: 'white' }}
        >
         <WhatsAppIcon/>
        </svg>
      </a>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Contact Information</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Phone: +94-764004274
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default SocialLinks;
