import { React, useState } from 'react';
// import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Box, Link } from '@mui/material';


function LoginForm({ onLogin }) {
  // const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault()
    setErrors([]);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username, password})
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
      // navigate('/rvlist');
    });
  }

  return (
    <Box component="div" sx={{}}>
        <Box textAlign={'center'}>     
          <Typography variant='h4' fontFamily={'cursive'} sx={{ color: "black", }}>Log In</Typography>
          <form onSubmit={handleSubmit}>
              <TextField 
                value={username} onChange={(e) => setUsername(e.target.value)}
                id="Username"  
                variant="outlined"
                placeholder="Username"
                sx={{width: '28ch', margin: 2, backgroundColor: '#ffffff' }}
              />
              <TextField 
                value={password} onChange={(e) => setPassword(e.target.value)}
                id="Password"
                type={'password'}  
                variant="outlined"
                placeholder="Password"
                sx={{width: '28ch', margin: 1, backgroundColor: '#ffffff' }}
              />
              <Link href="/">
                <Button 
                  type='submit'
                  color="secondary"
                  variant="contained" 
                  sx={{ borderRadius: 2, margin: 3}}
                >
                  Submit
                </Button>
              </Link>
              {errors.map((err) => (
                <Typography key={err} >{err}</Typography>
              ))}
          </form>
          
              {errors.map((err) => (
                <Typography key={err} >{err}</Typography>
              ))}
               
        </Box>
  </Box>
  )
}



export default LoginForm
