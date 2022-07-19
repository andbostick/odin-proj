
import { Paper } from "@mui/material";
import { Container } from "@mui/material";
import FilledGeneral from "./FilledGeneral";
import FilledExperience from "./FilledExperience";
import FilledEducation from "./FilledEducation";
import "../styles/completed.css";

import React from "react";

const CompletedCV = React.forwardRef(({personalInfo,experience,education}, ref) => {
    return (
        <Container maxWidth="md" >
          <Paper elevation={3} ref={ref}>
            <FilledGeneral personalInfo={personalInfo} />
    
            <FilledExperience experience={experience} />
            <FilledEducation education={education} />
              </Paper>
              
        </Container>
      );
})

export default CompletedCV;
