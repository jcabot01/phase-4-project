import React from 'react'
import { Box } from '@mui/material'

function UserProfile({ user }) {

  //make a fetch to backend
  //create a review input card
  //PATCH fetch here for update

  return (
    <>
    <Box>
    <div>{console.log(user.username)}</div>
    <div>{console.log(user.reviews)}</div>
    <div>{console.log(user.rvs)}</div>
    </Box>
    </>
  )
}

export default UserProfile