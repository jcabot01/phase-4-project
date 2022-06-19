import { React, useState } from 'react';
// import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Box, Stack, Button, Link } from '@mui/material'
import styled from '@emotion/styled';

function RvProfileCard({ user, rv, onReviewPost }) {
  const [errors, setErrors] = useState([])
  const reviewObject = {
    review: "", //`NO REVIEW YET FROM ${user.username}.`,
    rv_id: rv.id,
    user_id: user.id
  };

  function handleClick(){
    //POST /reviews   send up to App so that RvProfilePage=>RvReviewCard can receive the review
    
      setErrors([]);
      fetch("/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewObject)
      }).then((r) => {
        if (r.ok) {
          r.json().then((blankReview) => onReviewPost(blankReview));
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });  
  };
  
  return (
    <Box component="div">
      <Card key={rv.id} component="div" textAlign='center' sx={{ maxWidth: 345, marginLeft: 4, marginTop: 6, marginRight: 6, backgroundColor: '#f6f6f8' }}>
            <Typography gutterBottom variant="h5" component="div" textAlign={'right'} sx={{ backgroundColor: '#f6f6f8', marginRight: 2 }}>
              Region: {rv.region}
            </Typography>
            <CardMedia
              component="img"
              height="180"
              image={rv.image_url}
              alt="recreation vehicle"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" textAlign="center" sx={{ backgroundColor: 'white' }}>
                {rv.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ backgroundColor: 'white' }}>
                {rv.description}
              </Typography>
              <Typography variant="body2" color="text.secondary" textAlign={'right'} sx={{ backgroundColor: 'white' }}>
                Est. Mileage - {rv.mileage}
              </Typography>
            </CardContent>
      </Card>

        <Box sx={{marginTop: 6, marginRight: 2}}>
          <Stack>
            <Link href="/users">
              <Button variant="contained" color='primary' onClick={handleClick} >Click to Rent this RV!</Button>
            </Link>
            <Wrapper>
                {errors.map((err) => (
                  <Typography key={err} >{err}</Typography>
                ))}
            </Wrapper> 
            <Typography variant='h5' sx={{marginTop: 6}}>What our clients have to say:</Typography>
          {rv.reviews.map((review) => (
            <Card sx={{ marginTop: 4 }} >
              <Typography>{review.created_at.slice(0, 10)}</Typography>
              <Typography>{review.review}</Typography>
              <Typography>{review.user.username}</Typography>
            </Card>
          ))}
          </Stack>
        </Box>        
      </Box>
  )
}

const Wrapper = styled.section`
  max-width: 296px;
  margin: auto;
`;

export default RvProfileCard