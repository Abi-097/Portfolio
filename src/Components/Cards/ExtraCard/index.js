import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid } from '@mui/material';
import "./style.css"
const ExtraCard = ({item}) => {
    return (
      
            <Card className="education-card5" sx={{ maxWidth: 400, height: "300px", ml:2 }}>
      <Box sx={{ width: "90%", height: "90%" }} className="education-card5-content">
        <CardContent>
          <h1 className='education-h1'>
          {item.institute}
          </h1>
          <hr />
          <h3 className='education-h3' variant="body1">
          {item.extras}
          </h3>
          
        </CardContent>
      </Box>
    </Card>
    );
}

export default ExtraCard;
