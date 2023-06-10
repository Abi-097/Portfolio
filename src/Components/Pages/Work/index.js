import React from 'react';
import "./style.css"
import WorkCard from '../../Cards/Work_Card';

const data=[
    {company: "Infomate Pvt Ltd - John Keells Holdings",
     position: "Process Associate",
     experience: "2021 - Current",
     description: ["Entering customer and account data from source documents within time limits.", 
                  "Compiling, verifying accuracy and sorting information to prepare source data for computer entry." ,
                  "Reviewing data for deficiencies or errors, correcting any incompatibilities and checking output. ",
                  "Checking out the mails and processing as their requirements."]
    }
]

function Working() {
  return (
<div>
<h1>Working Experience</h1>
    <WorkCard/>

</div>
  );
}

export default Working;
