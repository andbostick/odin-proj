import React from 'react'
import { Box } from '@mui/material';

export default function FilledGeneral({personalInfo}) {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: '#189AB4',
          minHeight: 175,
          width: "100%",
          
          
        }}
        className='header-box'
      >
        <div>
        <h2>{personalInfo.name}</h2>
        <p>{personalInfo.title}</p>
        </div>
        <div>
        <p>{personalInfo.email}</p>
        
          <p>{personalInfo.number}</p>
          </div>
          
      </Box>
      
    </div>
  )
}
