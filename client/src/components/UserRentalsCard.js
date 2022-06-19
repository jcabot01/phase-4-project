import React from 'react'
import ReviewCRUDDialogForm from './ReviewCRUDDialogForm'
import { Box, Typography, Card, CardMedia, CardContent, CardActionArea  } from '@mui/material'
import styled from '@emotion/styled'

function UserRentalsCard({ review, onEditedReview, onDeleteClick }) {

  return (
    <Box>
      <Box display="flex">
        <Wrapper>
          <Card key={review.id} component="div" textAlign='center' sx={{ width: 345, margin: 2, backgroundColor: '#f6f6f8' }}>
            
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
                <Typography>{review.created_at.slice(0, 10)}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ backgroundColor: 'white' }}>
                  {review.review}
                </Typography>
                <CardActionArea>
                  <ReviewCRUDDialogForm review={review} onEditedReview={onEditedReview} onDeleteClick={onDeleteClick}/>
                </CardActionArea>
              </CardContent>
            
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