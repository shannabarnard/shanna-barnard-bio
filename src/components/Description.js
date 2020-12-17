import React from 'react'

function Description ({ description }) {
  return (
    <div className="info">
      <div className="info--left">
        <h2>
          Why we should work together
        </h2>
      </div>
      <div className="info--right">
        <p>{ description }</p>
      </div>
    </div>
  )
}

export default Description
