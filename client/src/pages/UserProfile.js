import {React, useState, useEffect } from 'react'
import UserRentalsCard from '../components/UserRentalsCard'
import { Box, Typography } from '@mui/material' //, Card, CardMedia, CardContent, CardActionArea 
// import styled from '@emotion/styled'

function UserProfile({ user }) {
  const [reviews, setReviews] = useState([])
  // console.log(user) //user has everything; user(singluar) data, reviews made, rvs rented
  // console.log(user.rvs) //needs to be mapped
  // console.log(user.reviews) //needs to be mapped

    useEffect(() => {
      fetch("/reviews")
      .then((r) => r.json())
      .then((reviews) => setReviews(reviews));
    }, []); 

 
    function onEditedReview(updatedReviewObj) {
      const updatedReviews = reviews.map((review) => {
        if (review.id === updatedReviewObj.id) {
          return updatedReviewObj
        } else {
          return review;
        }
      });
      setReviews(updatedReviews)
    }

  return (
    <>
    <Box>
    <Typography variant='h5' textAlign='center'>Hey {user.username}! These are the vehicles you've rented previously...</Typography>
    <Typography variant='body2' textAlign='center'>Please leave review after your rental</Typography>
      {reviews
      .filter((review) => review.user_id === user.id) 
      .map((review) => (
        <Box component='div' key={review.id}>
          <UserRentalsCard review={review} user={user} onEditedReview={onEditedReview} />
          
        </Box>
      ))}
    </Box>
    </>
  )
}

export default UserProfile