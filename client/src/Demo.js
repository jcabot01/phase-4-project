import { React, useState }from 'react';
import { Typography, Button, IconButton, Box, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function Demo() {
  const [name, setName] = useState("")
  return (
  <div>
    <Box textAlign={'center'}>
      <Button 
        onClick={() => alert("clicked")}
        color="success"
        variant="contained" 
        sx={{ borderRadius: 2, margin: 3}}
        >
          Hello World
      </Button>
    
      <Typography variant='h4' fontFamily={'cursive'} sx={{ color: "blue", }}>Hello World</Typography>

      <IconButton aria-label="delete" >
        <DeleteIcon />
      </IconButton>
      <form>
        <TextField 
          value={name} onChange={(e) => setName(e.target.value)}
          required='true'
          type={'text'}
          sx={{ margin: 3 }} 
          placeholder='Name' 
          variant='outlined'/>
        <TextField 
          type={'email'}
          sx={{ margin: 3 }} 
          placeholder='Email' 
          variant='standard'/>
        <TextField 
          type={'password'}
          sx={{ margin: 3 }} 
          placeholder='Password' 
          variant='filled'/>
        <Button 
          type='submit'
          color="secondary"
          variant="contained" 
          sx={{ borderRadius: 2, margin: 3}}
          >
            Submit
        </Button>
      </form>     
        <Typography>{name}</Typography> 
    </Box>
  </div>

  )
}

export default Demo;