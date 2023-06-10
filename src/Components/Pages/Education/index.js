import React from 'react';


import EducationCard  from '../../Cards/Education_Card';
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
            <h1>Education Qualification</h1>
            <EducationCard/>
           
        </div>
    );
}

export default Education;
