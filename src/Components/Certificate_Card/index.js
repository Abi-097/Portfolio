import { Grid } from '@mui/material';
import React from 'react';
// import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./style.css"

const CertificateCard = ({item}) => {
    return (
                <Card className="Certificate-card" sx={{ maxWidth: 400 , height: "450px", ml:2, borderRadius:3}}>
      <CardContent>
     
          <div className="Certificate-card-img">   <img src={item.image} alt="Image" width="100%" height="100%"/> 
          </div>
  <Box className="Certificate-card-info">
    <p className="Certificate-title">{item.name}</p>
  </Box>
      </CardContent>
    </Card> 
    );
}

export default CertificateCard; 
