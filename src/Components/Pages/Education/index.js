import React from 'react';
import "./sstyle.css"

import EducationCard  from '../../Cards/Education_Card';
import { Stack } from '@mui/material';
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
            {/* <div className='edu-container'> */}
            <Stack  
  direction={{ xs: 'column', sm: 'column', l:'column', xl:'row'}}
  spacing={{ xs: 1, sm: 2, md: 4,l:2, xl:2 }}
>
            {data.map((item) => (
                <EducationCard item={item}/>
                ))}
                </Stack>
                {/* </div> */}
           
        </div>
    );
}

export default Education;
