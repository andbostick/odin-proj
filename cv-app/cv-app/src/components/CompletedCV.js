import { Paper } from "@mui/material";
import { Container } from "@mui/material";
import FilledGeneral from "./FilledGeneral";
import FilledExperience from "./FilledExperience";
import FilledEducation from "./FilledEducation";
import "../styles/completed.css";

import React from "react";

export default function CompletedCV({ personalInfo, experience, education }) {
  return (
    <Container maxWidth="sm" >
      <Paper elevation={3} >
              <FilledGeneral personalInfo={personalInfo} />
              
        <FilledExperience experience={experience} />
        <FilledEducation education={education} />
      </Paper>
    </Container>
  );
}
