import { Box, Card, CardContent, Grid, Stack } from '@mui/material';
import React from 'react';
import "./style.css";
import CertificateCard from '../../Certificate_Card';
import image from "../../../Assets/Images/Certificate.jpg"
const data =[
    {   image: image,
        name:"Advanced Web Application"

    }
]
const Certificates = () => {
    return (
        <div>
            <h1>Other Certification</h1>
            <Stack  
  direction={{ xs: 'column', sm: 'column', l:'column', xl:'row'}}
  spacing={{ xs: 1, sm: 2, md: 4,l:2, xl:2 }}
>
            {data.map((item) => (
           <CertificateCard item={item}/>
           ))}
           </Stack>
        </div>
    );
}

export default Certificates;
