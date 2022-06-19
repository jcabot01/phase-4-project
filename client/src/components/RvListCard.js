import { React, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom'
import styled from '@emotion/styled';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Box, Link, ToggleButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';

function RvListCard({ rv }) {
  const [selected, setSelected] = useState(true);

//Styling Box and Wrapper are probably redundant.  Might want to do grid that flexs to column on mobile
//try and add a summary serializer for the description
  return (
    <Box display="flex">
    <Wrapper>
     
      <Box>
        {selected ? (
          <ToggleButton
            value="check"
            selected={selected}
            onChange={() => setSelected(!selected)}>
            <FavoriteIcon 
              color='disabled'/>
          </ToggleButton>
        ) : (
          <ToggleButton
            value="check"
            selected={selected}
            onChange={() => setSelected(!selected)}>
            <FavoriteIcon 
              sx={{ color: "darkmagenta"}}/>
          </ToggleButton>
        )}
      <Link underline='none' component={RouterLink} to={`/rvs/${rv.name}`}>
      <Card key={rv.id} component="div" textAlign='center' sx={{ maxWidth: 345, margin: 2, backgroundColor: '#f6f6f8' }}>
        <CardActionArea>
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
  margin: 50px auto;
`;

export default RvListCard