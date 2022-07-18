import React from 'react'

export default function FilledEducation({ education }) {
  return (
      <div>
          <h2>{education.university}</h2>
          <p>{education.city}</p>
          <p>{education.degree}</p>
          <p>{education.subject}</p>
          <p>{education.graduated}</p>
      </div>
  )
}
