import { React } from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material'


function RvProfileCard({ rv }) {
 
  return (
    <Card key={rv.id} component="div" textAlign='center' sx={{ maxWidth: 345, margin: 6, backgroundColor: '#f6f6f8' }}>
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
  
  )
}



export default RvProfileCard