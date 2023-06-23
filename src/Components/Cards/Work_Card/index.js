import React from 'react';
import "./style.css"
import { Card, CardContent } from '@material-ui/core';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
  boxSizing: 'border-box',
  // maxWidth:'390px',
  width: '100%',
  height: '100%',
  background: 'transparent',
  border: '1px solid white',
  boxShadow: '12px 17px 51px rgba(0, 0, 0, 0.22)',
  backdropFilter: 'blur(6px)',
  borderRadius: '17px',
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'all 0.5s',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  userSelect: 'none',
  fontWeight: 'bolder',
  color: 'black',
  marginLeft: '12px',
  '&:hover': {
    border: '1px solid black',
    transform: 'scale(1.05)',
  },

  '&:active': {
    transform: 'scale(0.95) rotateZ(1.7deg)',
  },
}));

const WorkCard = ({item}) => {
    return (
 <StyledCard>
      <CardContent>
          <h1 className='Working-h1'>
            <span><img src={item.image} width="50px" height="50px" /> </span>&nbsp; {item.company}
          </h1>
          <hr />
          <h3 variant="body1" className='Working-h3'>
            {item.position} <span> {item.experience}</span>
          </h3>
          <p className='Working-p'>
            {item.description.map((desc, index) => (
                    <span key={index}>{desc}</span>
                  ))}
          </p>
        </CardContent>   
    </StyledCard>
    
    );
}
export default WorkCard;
