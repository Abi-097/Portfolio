import "./style.css";
import React from "react";
import Navbar from "../../Navbar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardOne from "../../Cards/Card1";
import SocialLinks from "../../Social-Links";
import { Card, CardContent, Typography } from "@mui/material";
import { html, css, js, boot, react, git } from "../../../util";

export const CoverPage = () => {
  return (
    <div>
      <h1 className="cover-h1"> Portfolio</h1>

      {/* <Navbar/> */}

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} s={12} md={5} lg={5}></Grid>
          <Grid item xs={12} s={12} md={4} lg={6}>
            {/* career object */}

            {/* me */}

            {/* career object */}
          </Grid>
        </Grid>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} s={12} md={4} lg={4}>
          {/* left */}
          <CardOne />
          <SocialLinks />
        </Grid>
        <Grid item xs={12} s={12} md={6} lg={4}>
          <Card sx={{ background: "#fff3e0", mb: 1, borderRadius: "15px" }}>
            <CardContent>
              <Typography gutterBottom variant="h4" component="div" sx={{display:"flex", justifyContent:"center",fontFamily:'-apple-system'}}>
                Career Objective
              </Typography>
              <Typography variant="body1" color="text.primary">
              Seeking a software development internship to build a strong foundation for a career in the field. 
              Eager to gain hands-on experience in developing software applications while learning from experienced professionals. 
              Committed to continuously improving skills and contributing to the growth of the organization. <br/>
              <q>The only way to do great work is to love what you do.</q>  <br/> <strong className="Jobs">Steve Jobs </strong>
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ background: "#fff3e0", borderRadius: "15px", mb: 1 }}>
            <CardContent>
              <Typography gutterBottom variant="h4" component="div" sx={{display:"flex", justifyContent:"center",fontFamily:'-apple-system'}}>
                About Me
              </Typography>
              <Typography variant="body1" color="text.primary" sx={{lineHeight:1.7}}>
                Hello everyone, I'm Abishek Mahenderaraja, currently pursuing <strong> <abbr title="Higher National Diploma">HND </abbr>in Software Engineering </strong> from Esoft Metro Campus. 
                I have also completed an <strong> Advanced Web development certification </strong> course. Although I graduated with <strong> a Bachelor of Commerce with Computer Application </strong> from Nehru Memorial College in India.
                I am currently <strong> undergoing training in web development for three months.</strong> I am eager to apply the knowledge and skills I have gained from my education and training in a professional setting.
                <br /> 
                I excel in front-end technologies such as <q> HTML, CSS, and JavaScript, and specialize in ReactJS </q> and also use UI/UX principles to build dynamic and efficient web applications.
                I thoroughly enjoy the process of turning design concepts into reality through coding. I'm currently expanding my knowledge by learning Redux.
                I tackle problems systematically by breaking them down into smaller parts, using a logical and analytical mindset. 
                This approach has been crucial to my self-learning journey, 
                as I enjoy seeking out new challenges and concepts to master.

              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} s={12} md={4} lg={4}>
          <Card
            sx={{
              background: "#fff3e0",
              mb: 1,
              borderRadius: "15px",

              ml: 1,
              mr: 1,
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h4" component="div" sx={{display:"flex", justifyContent:"center", fontFamily:'-apple-system'}}>
                Skills
              </Typography>
              <Typography variant="body1" color="text.primary">
                <span>
                  <img src={html} width="55px" height="60px" /> &nbsp; &nbsp;
                </span>
                <span>
                  <img src={css} width="55px" height="60px" /> &nbsp; &nbsp;
                </span>
                <span>
                  <img src={js} width="60px" height="60px" /> &nbsp; &nbsp;
                </span>
                <span>
                  <img src={react} width="60px" height="60px" /> &nbsp; &nbsp;
                </span>
                <span>
                  <img src={boot} width="60px" height="60px" /> &nbsp; &nbsp;
                </span>
                <span>
                  <img src={git} width="55px" height="60px" /> &nbsp; &nbsp;
                </span>
                <ul>
                  <li className="ul">
                  Passionate about clean, maintainable code and always learning new tools and approaches to improve.
                  </li>
                  <li className="ul">
                  Strong communication and collaboration skills, both verbal and written, are essential for effective teamwork, 
                  understanding project requirements, and presenting work. Being a good team player is also highly valued.
                  </li>
                  
                  <li className="ul">
                  Continuous learning and a growth mindset are crucial in software engineering. 
                  Being open to new technologies, frameworks, and tools, and staying updated with industry trends and advancements is essential.
                  </li>
                  <li className="ul">
                    {/* {" "} */}
                    I am skilled in analyzing and solving front-end development challenges effectively. In previous projects, 
                    I have resolved complex problems such as optimizing page load times, debugging cross-browser compatibility issues, and fixing layout inconsistencies.
                  </li>
                  <li className="ul">
                    {/* {" "} */}
                    Skilled in Redux with a deep understanding of its core concepts, 
                    I have effectively leveraged it to manage and centralize application state logic in previous projects.
                  </li>
                  <li className="ul">
                    {/* {" "} */}
                   Strong understanding regarding UI/UX principles.
                  </li>
                </ul>
              </Typography>
            </CardContent>
          </Card>

          {/* </Grid>
      <Grid item xs={12} s={12} md={6} lg={12}> */}
        </Grid>
      </Grid>
    </div>
  );
};
