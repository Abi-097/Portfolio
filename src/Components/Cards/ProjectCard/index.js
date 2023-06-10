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

const ProjectCard = () => {
    return (
        <div>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={6} l={3} lg={3} >
                <Card className="Project-card" sx={{ maxWidth: 345 , height: "450px"}}>
      <CardContent>
     
          <div className="Project-card-img">   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:
          ANd9GcRG4GhPxWDI7EGR3Eabeq12YFWo6qfSUtf12WEkfs5l&s" alt="Image" width="345px" height="100%"/> 
          </div>
  <Box className="Project-card-info">
    <p className="Project-title">Name</p>
    <p className="Project-subtitle">Web Dev</p>
  </Box>
      </CardContent>

    </Card>

                </Grid>
                <Grid item xs={12} sm={6} l={3} lg={3} >
                <Card className="Project-card" sx={{ maxWidth: 345 , height: "450px"}}>
      <CardContent>
     
          <div className="Project-card-img">   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:
          ANd9GcRG4GhPxWDI7EGR3Eabeq12YFWo6qfSUtf12WEkfs5l&s" alt="Image" width="345px" height="100%"/> 
          </div>
  <Box className="Project-card-info">
    <p className="Project-title">Name</p>
    <p className="Project-subtitle">Web Dev</p>
  </Box>
      </CardContent>

    </Card>

                </Grid>
                <Grid item xs={12} sm={6} l={3} lg={3}>
                <Card className="Project-card" sx={{ maxWidth: 345 , height: "450px"}}>
      <CardContent>
     
          <div className="Project-card-img">   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:
          ANd9GcRG4GhPxWDI7EGR3Eabeq12YFWo6qfSUtf12WEkfs5l&s" alt="Image" width="345px" height="100%"/> 
          </div>
  <Box className="Project-card-info">
    <p className="Project-title">Name</p>
  </Box>
      </CardContent>

    </Card>

                </Grid>
            </Grid>
        </div>
    );
}

export default ProjectCard; 
