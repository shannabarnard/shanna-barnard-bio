import React from 'react'

function User({ user }) {
  return (
    <div className="user">
      <div className="user__image">
        <img src={user.avatar} alt="Shanna Barnard avatar" />
      </div>
      <div className="user__details">
        <h1>{user.name} </h1>
        <h3>{user.position}</h3>
      </div>
    </div>
  )
}

export default User
