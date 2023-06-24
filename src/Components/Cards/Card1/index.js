import "./style.css"
import image from "../../../Assets/Images/fotor_2023-6-10_11_42_7.jpg"
import React from 'react';
import { Card, Typography } from '@mui/material';
import { styled } from '@mui/system';



const CustomCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  borderRadius: '10px',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  '&:before': {
    content: '""',
    zIndex: -1,
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(-45deg, #fc00ff 0%, #00dbde 100%)',
    transform: 'translate3d(0, 0, 0) scale(0.95)',
    filter: 'blur(20px)',
  },
  '& .img-content': {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(-45deg, #fc00ff 0%, #00dbde 100%)',
    transition: 'transform 0.6s, filter 1s',
    transformOrigin: 'center',
  },
  '& .img-content svg': {
    width: '50px',
    height: '50px',
    fill: '#212121',
    transition: 'all 0.6s cubic-bezier(0.23, 1, 0.320, 1)',
  },
  '& .content': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height:' 100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    gap: '10px',
    color:' #e8e8e8',
    /* padding: 20px; */
    lineHeight: 1.5,
    borderRadius: '5px',
    opacity: 0,
    pointerEvents: 'none',
    transform: 'translateY(50px)',
    transition: 'all 0.6s cubic-bezier(0.23, 1, 0.320, 1)', 
    color: 'black',
  },
  '& .content .heading': {
    fontSize: '32px',
    fontWeight: 700,
   
  },
  '&:hover .content': {
    opacity: 1,
    transform: 'translateY(0)',
  },
  '&:hover .img-content': {
    transform: 'scale(2.5) rotate(30deg)',
    filter: 'blur(7px)',
  },
  '&:hover .img-content svg': {
    fill: 'transparent',
  },
}));


const CardOne = () => {
  return (
 
    <CustomCard>
    <div className="img-content">
    <img src={image} width="100%" height="100%"/>
    </div>
    <div className="content">
      <Typography variant="h6" component="p" className="heading">
      Abishek Mahenderaraja
      </Typography>
      <Typography variant="body2" className="content-p">
      Hello everyone, This is Abishek Mahenderaraja, pursuing an HND (Higher National Diploma) in Software Engineering, 
          where I am acquiring a comprehensive understanding of various aspects of software development.
          
      </Typography>
    </div>
  </CustomCard>
  );
};

export default CardOne;
