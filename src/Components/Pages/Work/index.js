import React from 'react';
import "./style.css"
import WorkCard from '../../Cards/Work_Card';
import { Grid, Stack } from '@mui/material';
import { info } from '../../../util';
// import info from "../../../util"
const data=[
    {company: "Infomate Pvt Ltd - John Keells Holdings",
      image: info,
     position: "Process Associate",
     experience: "2021 - Current",
     description: [
      <ul>
        <li>Entering customer and account data from source documents within time limits.</li>
        <li>Compiling, verifying accuracy and sorting information to prepare source data for computer entry.</li>
        <li>Reviewing data for deficiencies or errors, correcting any incompatibilities and checking output.</li>
        <li>Checking out the mails and processing as their requirements.</li>
      </ul>]
    },

]

function Working() {
  return (
<div className='Work-h1Customized'>
<h1 className='Work-h1'>Working Experience</h1>

 <Grid container spacing={1}>
 {data.map((item) => (
  <Grid item xs={12} lg={4} md={4} sm={12}>
<WorkCard item={item}/>

  </Grid>
        
      ))}
  </Grid>
</div>
  );
}

export default Working;
