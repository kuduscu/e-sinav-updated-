import React from 'react'

const OgrenciData = ({name1, score1, category1, difficulty1} ) => {
  return (
    <div>
      <ul>{name1} - {category1} - {difficulty1} - {score1}</ul>
    </div>
  )
}

export default OgrenciData;