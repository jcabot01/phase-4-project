import { React, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom'
import styled from '@emotion/styled';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Box, Link, ToggleButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';



function RvListCard({ rv }) {
  const [isLiked, setIsLiked] = useState(true);

  return (
    <Box display="flex">
      <Wrapper>
        <Box sx={{backgroundColor: "lightgray"}}>
          {isLiked ? (
            <ToggleButton
              sx={{display: 'contents', alignSelf: 'flex-end'}}
              value="check"
              selected={isLiked}
              onChange={() => setIsLiked(!isLiked)}>
              <FavoriteIcon 
                color='disabled'/>
            </ToggleButton>
          ) : (
            <ToggleButton
              sx={{display: 'flow'}}
              value="check"
              selected={isLiked}
              onChange={() => setIsLiked(!isLiked)}>
              <FavoriteIcon 
                sx={{ color: "darkmagenta"}}/>
            </ToggleButton>
          )}
          <Link underline='none' component={RouterLink} state={rv} to={`/rvs/${rv.name}`}>
            <Card key={rv.id} component="div" sx={{ maxWidth: 345, marginLeft: 1, marginRight: 1, marginBottom: 3, backgroundColor: '#f6f6f8' }}>
              <CardActionArea>
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
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </Box>
      </Wrapper>
    </Box>
  )
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 15px auto;
`;

export default RvListCard