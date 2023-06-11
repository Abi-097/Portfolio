import React from 'react';
import ExtraCard from '../../Cards/ExtraCard';
import { Stack } from '@mui/material';
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
            <h1>Extra </h1>
            <Stack 
  direction={{ xs: 'column', sm: 'column', l:'column', xl:'row'}}
  spacing={{ xs: 1, sm: 2, md: 4,l:2, xl:2 }}
>
            {data.map((item) => (

            <ExtraCard item={item}/>
            
            ))}
            </Stack>
        </div>
    );
}

export default Extra;
