import React from 'react'
import { Input } from "@mui/material";

export default function Experience() {
  return (
      <section>
          <h2>Experience</h2>
          <form>
          
              <Input type='text' placeholder="position" />
              
          <Input type='text' placeholder="Company"/>
          
              <Input type='text' placeholder="City" />

            
              <Input type='text' placeholder="From" />
              <Input type='text' placeholder="To"/>
          </form>
      </section>
  )
}
