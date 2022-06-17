import React from 'react'
import { Card, CardContent, Typography, Box, Button, Stack } from '@mui/material'

function RvReviewCard({ rv, user }) {
const reviews = rv.reviews
const users = rv.users

function handleClick(){
  //POST /reviews   send up to App so that RvProfilePage=>RvReviewCard can receive the review
console.log(user)
}
  //handle patch up here

  //handle deleteCallback here, send upstream via props to UserProfile

  //card contains rv: id info
  //card contains EITHER a review or a blank submission form
  //review contains state of description & edit button (dialog popup containing form), delete (onClick)
  // RvReviewCard
  //     {console.log(rv.reviews)}  these are objects, but convert to array and map over
  //     {console.log(rv.users)}
  console.log(users)
  console.log(reviews)
  console.log(rv)

  return (
   
    <Box sx={{marginTop: 6, marginRight: 2}}>
      <Stack>
      <Button variant="contained" color='primary' onClick={handleClick} >Click to Rent this RV!</Button> 
      <Typography variant='h5' sx={{marginTop: 6}}>What our clients have to say:</Typography>

      {reviews.map((review) => (
      <Card key={review.id} sx={{ minWidth: 275, marginTop: 6 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         {review.created_at}
        </Typography>
        <Typography variant="body2">
          {review.review}
        </Typography>
      </CardContent>
    </Card>
    ))}
    </Stack>
    </Box>
  )
}
//this is exported to UserProfile
export default RvReviewCard