import React from 'react';
import "./style.css"
import WorkCard from '../../Cards/Work_Card';
import { Grid, Stack } from '@mui/material';
import { info,HotCat } from '../../../util';
// import info from "../../../util"
const data=[
  {company: "HotCat Technologies Pvt Ltd",
      image: HotCat,
     position: "Training Front- End Developer (ReactJS)",
     experience: "May 2023 - July 2023",
     description: [
      <ul>
        <li>Created visually appealing and user-friendly responsive UI using HTML, CSS, JS and ReactJS.</li>
        <li>Proficient in ReactJS for performing API CRUD operations.</li>
        <li>Collaborated with cross-functional teams to ensure seamless integration of front-endcomponents.</li>
        <li>Familiar with modern front-end frameworks and libraries such as Bootstrap, MUI.</li>
        <li>Contributed to the development of interactive web applications.</li>
        <li>Worked on real-world projects to gain practical experience - Adiya Admin Panel - Restaurant.</li>
      </ul>]
    },
    
    {company: "Infomate Pvt Ltd - John Keells Holdings",
      image: info,
     position: "Process Associate",
     experience: "2021 - 2023",
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
