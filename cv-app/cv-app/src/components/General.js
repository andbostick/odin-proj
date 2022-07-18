import React from "react";
import '../styles/Input.css'
import { TextField } from '@mui/material';




export default function General({personalInfo, setPersonalInfo}) {
  
  

  function handleChange(e) {
    let key = e.target.name;
    let value = e.target.value;
    setPersonalInfo({...personalInfo, [key]: value})
    
  }
  
  return (
    <section>
      <h2>Personal Information</h2>
      <form>
      <TextField  onChange={handleChange} variant="filled" size="small" margin="dense" name="name" placeholder="Name" />
      <TextField onChange={handleChange} variant="filled" size="small" margin="dense" name="email" placeholder="Email" />
      <TextField onChange={handleChange} variant="filled" size="small" margin="dense" name="title" placeholder="Title" />
      <TextField onChange={handleChange} variant="filled" size="small" margin="dense" name="number" placeholder="Phone Number" />

    
             

      </form>
    </section>
  );
}
