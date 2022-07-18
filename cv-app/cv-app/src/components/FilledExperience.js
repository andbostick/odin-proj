import React from 'react'

export default function FilledExperience({experience}) {
  return (
      <div>
          <h2>{experience.position}</h2>
          <p>{experience.company}</p>
          <p>{experience.city}</p>
          <p>{experience.from}</p>
          <p>{experience.to}</p>
      </div>
  )
}
