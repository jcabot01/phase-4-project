import { React, useState } from 'react';
import { useLocation } from "react-router-dom"; //useParams not needed,
import { Card, CardMedia, CardContent, Typography, Box, Button, Link } from '@mui/material'
import styled from '@emotion/styled';

function RvProfileCard({ user }) {
  const location = useLocation();
  const [rv] = useState(location.state)
  const [errors, setErrors] = useState([])
  const reviewObject = {
    review: "**THE USER HAS NOT LEFT A REVIEW YET**",
    rv_id: rv.id,
    user_id: user.id
  };

  function handleClick(){ 
    setErrors([]);
    fetch("/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewObject)
    }).then((r) => {
      if (r.ok) {
        r.json().then((blankReview) => console.log(blankReview));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });  
  };
  
  return (
    <Box component="div">
      <Wrapper>
        <Card key={rv.id} component="div" sx={{ maxWidth: 345, marginTop: 3, backgroundColor: '#f6f6f8' }}>
          <Typography gutterBottom variant="h5" component="div" align={'right'} sx={{ backgroundColor: '#f6f6f8', marginRight: 2 }}>
            Region: {rv.region}
          </Typography>
          <CardMedia
            component="img"
            height="180"
            image={rv.image_url}
            alt="recreation vehicle"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" align="center" sx={{ backgroundColor: 'white' }}>
              {rv.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ backgroundColor: 'white' }}>
              {rv.description}
            </Typography>
            <Typography variant="body2" color="text.secondary" align={'right'} sx={{ backgroundColor: 'white' }}>
              Est. Mileage - {rv.mileage}
            </Typography>
          </CardContent>
        </Card>
      </Wrapper>
      <Box textAlign={'center'} sx={{marginTop: 6}}>
        <Link href="/user_profile">
          <Button variant="contained" color='primary' onClick={handleClick} >Click to Rent this RV!</Button>
        </Link>
        <Typography>...and leave a review!</Typography>
        <Wrapper>
            {errors.map((err) => (
              <Typography key={err} >{err}</Typography>
            ))}
        </Wrapper>      
      </Box>
      <Box sx={{marginTop: 6, marginLeft: 4, marginBottom: 4, marginRight: 4}}>
        <Typography variant='h6' sx={{marginLeft: 3,}}>What our clients have to say:</Typography>
          {rv.reviews.map((review) => (
            <Card key={review.id} sx={{ marginTop: 3, minWidth: '400px', backgroundColor: '#eeeeee' }} >
              <Typography>{review.created_at.slice(0, 10)}</Typography>
              <Typography>@{review.user.username}</Typography>
              <span></span><br />
              <Typography>"{review.review}"</Typography>
            </Card>
          ))}    
      </Box>        
    </Box>
  )
}

const Wrapper = styled.section`
  max-width: 304px;
  margin: auto
`;

export default RvProfileCard