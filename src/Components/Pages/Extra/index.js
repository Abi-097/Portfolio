import React from 'react';
import ExtraCard from '../../Cards/ExtraCard';
import { Grid } from '@mui/material';
const Extra = () => {
    const data =[{
        institute: "S.Thomas College, Mount Lavinia",
        extras: "Tamil Drama Society - Asst. Treasurer",
    },
{
    institute: "S.Thomas College, Mount Lavinia",
    extras: "Red Cross Society - Committee member",
   
},{
    institute: "Institute Of Western Music & Speech",
    extras: "Written English up to Grade Six",
},
{
    institute: "Institute Of Western Music & Speech",
    extras: "Spoken English up to Grade Six",
}]
    return (
        <div>
            <h1 className='Work-h1'>Extras </h1>

            <Grid container spacing={1}>
 {data.map((item) => (
  <Grid item lg={3} md={4} sm={6} xs={12} >
  <ExtraCard item={item} className="ExtraCard"/>
  </Grid>
 
      ))}
  </Grid>
  <br/>
        </div>
    );
}

export default Extra;
