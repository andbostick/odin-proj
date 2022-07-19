import React from "react";
import { TextField } from "@mui/material";

export default function Education({ setEducation, education }) {
  function handleChange(e) {
    let key = e.target.name;
    let value = e.target.value;
    setEducation({ ...education, [key]: value });
  }
  return (
    <section>
      <h2>Education</h2>
      <form>
        <TextField
          onChange={handleChange}
          variant="filled"
          size="small"
          margin="dense"
          label="University name"
          name="university"
        />
        <TextField
          onChange={handleChange}
          variant="filled"
          size="small"
          margin="dense"
          label="City"
          name="city"
        />
        <TextField
          onChange={handleChange}
          variant="filled"
          size="small"
          margin="dense"
          label="Degree"
          name="degree"
        />
        <TextField
          onChange={handleChange}
          variant="filled"
          size="small"
          margin="dense"
          label="Subject"
          name="subject"
        />
        <TextField
          onChange={handleChange}
          variant="filled"
          size="small"
          margin="dense"
          label="Year Graduated"
          name="graduated"
        />
      </form>
    </section>
  );
}
