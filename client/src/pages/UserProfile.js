import React from 'react'

function UserProfile({ user }) {

  //make a fetch to backend

  return (
    <div>{user.username}</div>
  )
}

export default UserProfile