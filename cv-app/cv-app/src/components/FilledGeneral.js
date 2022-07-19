import React from 'react'
import { Box } from '@mui/material';

export default function FilledGeneral({personalInfo}) {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: '#189AB4',
          height: 175,
          width: "100%",
          
          
        }}
        className='header-box'
      >
        <h2>{personalInfo.name}</h2>
        
        
        <p>{personalInfo.email}</p>
        <p>{personalInfo.title}</p>
          <p>{personalInfo.number}</p>
          
      </Box>
      
    </div>
  )
}
