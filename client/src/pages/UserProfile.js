import React from 'react'

function UserProfile({ user }) {

  //make a fetch to backend
  //create a review input card

  return (
    <>
    <div>{user.username}</div>
    <div>{console.log(user.reviews)}</div>
    <div>{console.log(user.rvs)}</div>
    </>
  )
}

export default UserProfile