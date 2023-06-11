import React from 'react';
import ProjectCard from '../../Cards/ProjectCard';
import nic from "../../../Assets/Images/nic.JPG";
import qa from "../../../Assets/Images/qa.JPG";
import cv from "../../../Assets/Images/cv.JPG";
import imdb from "../../../Assets/Images/imdb.JPG";
import { Stack } from '@mui/material';
import "./style.css"
const MiniProjects = () => {
    const data=[
        {image: nic,
         name: "NIC tracker",
         url: "https://nic-tracker.vercel.app/",
        },
        {image: qa,
         name: "Question Form- using API",
         url: "https://question-form-five.vercel.app/",
        },
        {image: imdb,
         name: "IMDb site Clone- include API",
         url: "https://clone-imdb-a5at.vercel.app/",
        },
        {image: cv,
         name: "CV Portfolio",
         url: "www.facebook.com",
        },
    ]
    
    return (
        <div>
            <h1>Mini Projects</h1>
            <Stack 
  direction={{ xs: 'column', sm: 'column', l:'column', xl:'row'}}
  spacing={{ xs: 1, sm: 2, md: 4,l:2, xl:1 }}
>
            {data.map((item) => (
                <a key={item.name} href={item.url} target="_blank" rel="url" className='project-a'>
                <ProjectCard item={item}/>
                </a>
            ))}
            
            </Stack>
        </div>
    );
}

export default MiniProjects;
