import "./style.css"    
import React from "react"
import Navbar from "../../Navbar";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardOne from "../../Cards/Card1";
import SocialLinks from "../../Social-Links";
import { Card, CardContent, Typography } from "@mui/material";



export const CoverPage = () => {
    return (
        <div>
         {/* <div className="backGround-overlay">
         <div className="backGround-after_overlay"> */}
            <Navbar/>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={12} s={12} md={5} lg={5} >
          <CardOne/>
        <SocialLinks/>
        </Grid>
        <Grid item xs={12} s={12} md={4} lg={6}>
        {/* career object */}
        <Card sx={{ background:"orange" }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          Career Objective
        </Typography>
        <Typography variant="body1" color="text.primary">
        I'm looking for an entry-level position in the IT industry where I can apply my abilities to use and keep learning new things. 
        I also want to join an organization that will support my personal development while allowing me to contribute to the company's success.
        </Typography>
      </CardContent>
    </Card>
    {/* me */}
          <Card sx={{ background:"orange" }}>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          About Me
        </Typography>
        <Typography variant="body1" color="text.primary">
        Hello everyone, I'm Abishek Mahenderaraja, and I'm thrilled to introduce myself. 
        Currently, I am pursuing an HND (Higher National Diploma) in Software Engineering, 
        where I am acquiring a comprehensive understanding of various aspects of software development. 
        <br/><br/> I have developed a strong proficiency in front-end technologies such as HTML, CSS, and JavaScript. 
        These languages enable me to create visually appealing and interactive web interfaces. 
        I thoroughly enjoy the process of turning design concepts into reality through coding.
        <br/> One area of specialization that I have developed is in ReactJS, a popular JavaScript library for building user interfaces.
         I have honed my skills in ReactJS, allowing me to create dynamic and efficient web applications. Moreover, 
         I am currently expanding my knowledge by delving into Redux, a state management library commonly used with ReactJS.
        Being a problem solver at heart, I thrive on overcoming challenges and finding effective solutions. 
        I approach problems with a logical and analytical mindset, breaking them down into smaller parts to address them systematically. 
        This approach has been instrumental in my self-learning journey, as I constantly seek out new problems to solve and new concepts to grasp.
        </Typography>
      </CardContent>
    </Card>
        </Grid>
      </Grid>
    </Box>
    {/* // </div>
    // </div> */}
   
    {/* 
    <h1>Other Certification</h1>
    <h1>Extra-Activities</h1>     */}
    
        </div>
    );
}



