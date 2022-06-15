import { React, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Box } from '@mui/material'


function RvListPage() {
  const [rvs, setRvs] = useState([]);

  useEffect(() => {
    fetch("/rvs")
    .then((r) => r.json())
    .then((rv) => setRvs(rv));
  }, []);


  return (
    <Box display="flex">
    <Wrapper>
     {rvs.map((rv) => (
      <Card key={rv.id} component="div" textAlign='center' sx={{ maxWidth: 345, margin: 2, backgroundColor: '#dcdde3' }}>
        <CardActionArea>
        <Typography gutterBottom variant="h5" component="div" textAlign={'right'} sx={{ backgroundColor: '#dcdde3', marginRight: 2 }}>
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