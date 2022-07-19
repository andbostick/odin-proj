import React from 'react'
import { Box } from '@mui/material';

export default function FilledEducation({ education }) {
  return (
      <div>
          <Box sx={{
            width: '100%',
            height: 250
          }}
          className='education-box'>
              <h2 className='title'>Education</h2>
              <div>
                  <h2>-{education.university},</h2>
                  
                  <p>{education.city}</p>
              </div>
              <div>
          <p>{education.degree}</p>
                  <p>{education.subject}</p>
              </div>
              <div>
                  <p>{education.graduated}</p>
                  </div>
              </Box>
      </div>
  )
}
