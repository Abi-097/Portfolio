import React from 'react';
// import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./style.css"
import { Grid } from '@mui/material';

const WorkCard = ({item}) => {
    return (
   
    <Card className="Working-card5" sx={{ maxWidth: 400, height: "450px",ml:2 }}>
      <Box sx={{ width: "90%", height: "90%" }} className="Working-card5-content">
        <CardContent>
          <h1 className='Working-h1'>
            <span><img className="Working-img" src={item.image} width="50px" height="50px" /> </span>&nbsp; {item.company}
          </h1>
          <hr />
          <h3 className='Working-h3' variant="body1">
            {item.position} <span> {item.experience}</span>
          </h3>
          <p className='Working-p'>
            {/* "Entering customer and account data from source documents within time limits.",
            "Compiling, verifying accuracy and sorting information to prepare source data for computer entry.",
            "Reviewing data for deficiencies or errors, correcting any incompatibilities and checking output.",
            "Checking out the mails and processing as their requirements." */}
            {item.description.map((desc, index) => (
                    <span key={index}>{desc}</span>
                  ))}
          </p>
        </CardContent>
      </Box>
    </Card>

    );
}
export default WorkCard;
