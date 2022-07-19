import React from "react";
import { TextField } from "@mui/material";

export default function Experience({ setExperience, experience }) {
  function handleChange(e) {
    let key = e.target.name;
    let value = e.target.value;
    setExperience({ ...experience, [key]: value });
  }

  return (
    <section>
      <h2>Experience</h2>
      <form>
        <TextField
          onChange={handleChange}
          variant="filled"
          size="small"
          margin="dense"
          label="Position"
          name="position"
        />

        <TextField
          onChange={handleChange}
          variant="filled"
          size="small"
          margin="dense"
          label="Company"
          name="company"
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
          label="From"
          name="from"
        />
        <TextField
          onChange={handleChange}
          variant="filled"
          size="small"
          margin="dense"
          label="To"
          name="to"
        />
        <TextField
          label="Tasks"
          name="tasks"
          multiline
          variant="filled"
          onChange={handleChange}
          rows={4}
          margin="dense"
        />
      </form>
    </section>
  );
}
