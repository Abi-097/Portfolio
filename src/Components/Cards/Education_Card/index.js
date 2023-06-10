import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid } from '@mui/material';
import "./style.css"
const EducationCard = () => {
    return (
        <div>
         <Grid container spacing={1} >
  <Grid item xs={12} sm={6} l={3} lg={3}>

            <Card className="education-card5" sx={{ maxWidth: 400, height: "450px", ml:2 }}>
      <Box sx={{ width: "90%", height: "90%" }} className="education-card5-content">
        <CardContent>
          <h1 className='education-h1'>
            B.com
          </h1>
          <hr />
          <h3 className='education-h3' variant="body1">
            Process Associate <span>2022- Curr</span>
          </h3>
          <p className='education-p'>
            "Entering customer and account data from source documents within time limits.",
            "Compiling, verifying accuracy and sorting information to prepare source data for computer entry.",
            "Reviewing data for deficiencies or errors, correcting any incompatibilities and checking output.",
            "Checking out the mails and processing as their requirements."
          </p>
        </CardContent>
      </Box>
    </Card>
    </Grid>
  </Grid>
        </div>
    );
}

export default EducationCard;
