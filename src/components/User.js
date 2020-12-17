import React from 'react'

function User({ user }) {
  return (
    <div>
      <div>
        <img src={user.avatar} alt="Shanna Barnard avatar" />
      </div>
      <div>
        <h1>{user.name} </h1>
        <p>{user.position}</p>
      </div>
    </div>
  )
}

export default User
