import { Paper } from "@mui/material";
import FilledGeneral from "./FilledGeneral";
import FilledExperience from "./FilledExperience";
import FilledEducation from "./FilledEducation";
import '../styles/completed.css'

import React from 'react'

export default function CompletedCV({personalInfo, experience,education}) {
  return (
    <Paper className="container" elevation={3}>
          <FilledGeneral personalInfo={personalInfo} />
          <FilledExperience experience={experience} />
          <FilledEducation education={education} />
        </Paper>
  )
}
