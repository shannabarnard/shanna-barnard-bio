import React from 'react'

function Highlights ({ highlights }) {
  return (
    <div className="info">
      <div className="info--left">
        <h2>
          Career highlights
        </h2>
      </div>
      <div className="info--right">
        <p>{highlights}</p>
      </div>
    </div>
  )
}

export default Highlights
