import React from 'react'
import { Box } from '@mui/material';

export default function FilledExperience({experience}) {
  return (
      <section >
          <h2 className='title'>Experience</h2>
          <Box sx={{
              width: '100%',
              minHeight: 200
          }}
              className='experience-box'>
              <div>
          <h2> - {experience.position}</h2>
          <p> {experience.company},</p>
                  <p>{experience.city}</p>
              </div>
              <div>
                  <p>{experience.from}</p>
                  -
                  <p>{experience.to}</p>
              </div>
              <div>{experience.tasks}</div>
              </Box>
      </section>
  )
}
