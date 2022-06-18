import React from 'react'
import { Box, Typography, Card, CardMedia, CardContent, CardActionArea  } from '@mui/material'
import styled from '@emotion/styled'

function UserRentalsCard({ review, user }) {
//users to RVS
// console.log(user)
// console.log(review)


  //
  //DELETE fetch to db => send reviews state up APP and return ...rvs.filter((rv) => rv.id !== id) 
  //PATCH fetch here for update

  return (
    // <Box>
    //   <Typography>{review.rv.name}</Typography>
    //   <Typography>{review.rv.image_url}</Typography>
    //   <
    //   <Typography>{review.review}</Typography>
      
    //   <Typography></Typography>
    // </Box>
    <Box>
      
      <Box display="flex">
    <Wrapper>
      <Card key={review.id} component="div" textAlign='center' sx={{ width: 345, margin: 2, backgroundColor: '#f6f6f8' }}>
        <CardActionArea>
          <Typography gutterBottom variant="h5" component="div" textAlign={'right'} sx={{ backgroundColor: '#f6f6f8', marginRight: 2 }}>
            Region: {review.rv.region}
          </Typography>
          <CardMedia
            component="img"
            height="180"
            image={review.rv.image_url}
            alt="recreation vehicle"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" textAlign="center" sx={{ backgroundColor: 'white' }}>
              {review.rv.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ backgroundColor: 'white' }}>
              {review.review}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Wrapper>
    </Box>
    </Box>
  )
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 20px auto;
`;

export default UserRentalsCard