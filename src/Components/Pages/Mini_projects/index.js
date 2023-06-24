import React from 'react';
import ProjectCard from '../../Cards/ProjectCard';
import nic from "../../../Assets/Images/nic.JPG";
import qa from "../../../Assets/Images/qa.JPG";
import cv from "../../../Assets/Images/cv.JPG";
import imdb from "../../../Assets/Images/imdb.JPG";
import { Grid } from '@mui/material';
import "./style.css";
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
         url: " ",
        },
    ]
    
    return (
        <div>
            <h1 className='Work-h1'>Projects</h1>
            <Grid container spacing={1}>
        {data.map((item) => (
          <Grid item lg={3} md={4} sm={6} xs={12}>
          <a key={item.name} href={item.url} target="_blank" rel="url" className='project-a'>
          <ProjectCard item={item}/>
          </a>
          </Grid>
        ))}
      </Grid>
        </div>
    );
}

export default MiniProjects;
