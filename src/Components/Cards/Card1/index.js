import React from 'react';
import "./style.css"
import image from "../../../Assets/Images/fotor_2023-6-10_11_42_7.jpg"
import { Card, CardContent } from '@mui/material';
const CardOne = () => {
  return (
    <Card sx={{ width:"60%", ml:2, borderRadius:"10px",
    height:{
      xxl:"71.1%",
      xl:"54%",
      lg:"37%",
      md:"16.2%",
      sm:"85.9%",
      xs:"76.4%"
    }}}>
    <div className="card-container">
      <CardContent className="card" sx={{mb:1, p:0}}>
        <div className="img-content">
          <img src={image} width="100%" height="100%"/>
        </div>
        <div className="CardOne_content">
          <p className="CardOne_heading">Abishek Mahenderaraja</p>
          <p className="CardOne_Subheading">
          Hello everyone, This is Abishek Mahenderaraja, pursuing an HND (Higher National Diploma) in Software Engineering, 
          where I am acquiring a comprehensive understanding of various aspects of software development.
          </p>
        </div>
      </CardContent>
    </div>
    </Card>
  );
};

export default CardOne;
