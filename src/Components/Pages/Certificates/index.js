import {Grid } from "@mui/material";
import React from "react";
import "./style.css";
import CertificateCard from "../../Certificate_Card";
import image from "../../../Assets/Images/Certificate.jpg";
const data = [{ image: image, name: "Advanced Web Application" }];
const Certificates = () => {
  return (
    <div>
      <h1 className="Work-h1">Other Certification</h1>

      <Grid container spacing={1}>
        {data.map((item) => (
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <CertificateCard item={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Certificates;
