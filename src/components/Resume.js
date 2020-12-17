import React from 'react'

function Resume ({ resume }) {
  return (
    <div className="info">
      <div className="info--left">
        <h2>
          Career history
        </h2>
      </div>
      <div className="info--right">
        <p>{resume}</p>
      </div>
    </div>
  )
}

export default Resume
