import {React, useState, useEffect } from 'react'
import UserRentalsCard from '../components/UserRentalsCard'
import { Box, Typography } from '@mui/material'


function UserProfile({ user }) {
  const [reviews, setReviews] = useState([])
  
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
  };

  function onDeleteClick(id) {
    const remainingReviews = reviews.filter((review) => review.id !== id)
    setReviews(remainingReviews)
  }

  return (
    
    <Box component={'div'} sx={{marginTop: 5}}>
      <Typography variant='h6' textAlign='center' >Hey @{user.username}! These are the vehicles you've rented previously...</Typography>
      <Typography variant='body2' textAlign='center'>Please leave review after your rental</Typography>
        {reviews
        .filter((review) => review.user_id === user.id) 
        .map((review) => (
          <Box component='div' key={review.id}>
            <UserRentalsCard review={review} user={user} onEditedReview={onEditedReview} onDeleteClick={onDeleteClick} />
          </Box>
        ))}
    </Box>
    
  )
}

export default UserProfile