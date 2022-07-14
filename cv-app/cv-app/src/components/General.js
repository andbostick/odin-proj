import React from "react";
import '../styles/Input.css'
import { TextField } from '@mui/material';

export default function General() {
  return (
    <section>
      <h2>Personal Information</h2>
      <form>
        <TextField variant="filled" size="small" margin="dense" type="text" placeholder="name" />

        <TextField variant="filled" size="small" margin="dense" placeholder="email" />

        <TextField variant="filled" size="small" margin="dense" placeholder="title" />

        <TextField variant="filled" size="small" margin="dense" placeholder="phone number" />
      </form>
    </section>
  );
}
