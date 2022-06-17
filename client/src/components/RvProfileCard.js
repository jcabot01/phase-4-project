import { React } from 'react';
import { useParams } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material'


function RvProfileCard({ rv }) {
  const { name } = useParams();
  console.log(name)
  console.log(rv)
  return (
    <Box>
    
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
      
      </Box>
  )
}



export default RvProfileCard