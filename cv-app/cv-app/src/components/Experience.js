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
          placeholder="Position"
          name="position"
        />

        <TextField
          onChange={handleChange}
          variant="filled"
          size="small"
          margin="dense"
          placeholder="Company"
          name="company"
        />

        <TextField
          onChange={handleChange}
          variant="filled"
          size="small"
          margin="dense"
          placeholder="City"
          name="city"
        />

        <TextField
          onChange={handleChange}
          variant="filled"
          size="small"
          margin="dense"
          placeholder="From"
          name="from"
        />
        <TextField
          onChange={handleChange}
          variant="filled"
          size="small"
          margin="dense"
          placeholder="To"
          name="to"
        />
      </form>
    </section>
  );
}
