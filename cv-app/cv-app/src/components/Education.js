import React from "react";
import { TextField } from "@mui/material";

export default function Education() {
  return (
    <section>
      <h2>Education</h2>
      <form>
        <TextField variant="filled" size="small" margin="dense" placeholder="University name" />
        <TextField variant="filled" size="small" margin="dense" placeholder="City" />
        <TextField variant="filled" size="small" margin="dense" placeholder="Degree" />
        <TextField variant="filled" size="small" margin="dense" placeholder="Subject" />
        <TextField variant="filled" size="small" margin="dense" placeholder="Year Graduated" />
      </form>
    </section>
  );
}
