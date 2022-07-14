import React from 'react'
import { TextField } from '@mui/material';

export default function Experience() {
  return (
      <section>
          <h2>Experience</h2>
          <form>
          
              <TextField variant="filled" size="small" margin="dense" placeholder="position" />
              
          <TextField variant="filled" size="small" margin="dense" placeholder="Company"/>
          
              <TextField variant="filled" size="small" margin="dense" placeholder="City" />

            
              <TextField variant="filled" size="small" margin="dense" placeholder="From" />
              <TextField variant="filled" size="small" margin="dense" placeholder="To"/>
          </form>
      </section>
  )
}
