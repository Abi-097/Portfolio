import React from 'react';
import "./style.css"
import EducationCard  from '../../Cards/Education_Card';
import { Grid } from '@mui/material';
const Education = () => {
    const data=[
        {course: "HND in Software Engineering",
        year: "2022 - Current",
        college: "Esoft Metro Campus- Colombo",
       },
        {course: "Bachelor of Commerce with Computer Application",
         year: "2017 - 2020",
         college: "Nehru Memorial College, India",
        },
       
       {course: "Advance Level in Commerce",
       year: "2016",
       college: "S.Thomas College, Mount Lavinia",
      },
      {course: "Ordinary Level",
         year: "2013",
      college: "S.Thomas College, Mount Lavinia",
     },
    ]
    return (
        <div>
        
            <h1 className='edu-h1'>Education Qualification</h1>
                <Grid container spacing={1}>
 {data.map((item) => (
  <Grid item lg={3} md={4} sm={6} xs={12} >
  <EducationCard item={item}/>

  </Grid>
        
      ))}
  </Grid>
           
        </div>
    );
}

export default Education;
