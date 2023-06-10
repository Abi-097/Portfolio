import React from 'react';
import ProjectCard from '../../Cards/ProjectCard';

const MiniProjects = () => {
    const data=[
        {image: "Infomate Pvt Ltd - John Keells Holdings",
         name: "Process Associate",
        },
        {image: "Infomate Pvt Ltd - John Keells Holdings",
         name: "Process Associate",
        },
        {image: "Infomate Pvt Ltd - John Keells Holdings",
         name: "Process Associate",
        },
        {image: "Infomate Pvt Ltd - John Keells Holdings",
         name: "Process Associate",
        },
    ]
    
    return (
        <div>
            <h1>Mini Projects</h1>
            <ProjectCard/>
        </div>
    );
}

export default MiniProjects;
