import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid, Stack } from '@mui/material';
import "./style.css"

const EducationCard = ({ item }) => {
  return (
    // <div className='edu-container'>
    


          <Card className="education-card5" sx={{ maxWidth: 350, height: "300px", ml: 2 }}>
            <Box sx={{ width: "90%", height: "90%" }} className="education-card5-content">
              <CardContent>
                <h1 className='education-h1'>
                  {item.course}
                </h1>
                <hr />
                <h3 className='education-h3' variant="body1">
                  {item.college} <span>{item.year}</span>
                </h3>
              </CardContent>
            </Box>
          </Card>
 
   
    // </div>
  );
}

export default EducationCard;
