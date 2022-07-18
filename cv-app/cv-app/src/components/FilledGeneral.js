import React from 'react'

export default function FilledGeneral({personalInfo}) {
  return (
    <div>
      <h2>{personalInfo.name}</h2>
      <p>{personalInfo.email}</p>
      <p>{personalInfo.title}</p>
      <p>{personalInfo.number}</p>
    </div>
  )
}
