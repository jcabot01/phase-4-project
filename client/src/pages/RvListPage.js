import { React, useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom'
import styled from '@emotion/styled';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Box, Link } from '@mui/material'


function RvListPage() {
  const [rvs, setRvs] = useState([]);

  useEffect(() => {
    fetch("/rvs")
    .then((r) => r.json())
    .then((rvs) => setRvs(rvs));
  }, []);

//Styling Box and Wrapper are probably redundant.  Might want to do grid that flexs to column on mobile
//try and add a summary serializer for the description
  return (
    <Box display="flex">
    <Wrapper>
     {rvs.map((rv) => (
      <Link component={RouterLink} to={`/reviews/${rv.id}`}>
      <Card key={rv.id} component="div" textAlign='center' sx={{ maxWidth: 345, margin: 2, backgroundColor: '#f6f6f8' }}>
        <CardActionArea>
          <Typography gutterBottom variant="h5" component="div" textAlign={'right'} sx={{ backgroundColor: '#f6f6f8', marginRight: 2 }}>
            {rv.region}
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
          </CardContent>
        </CardActionArea>
      </Card>
      </Link>
    ))}
    </Wrapper>
    </Box>
  )
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 300px auto;
`;



export default RvListPage