import { React, useState } from 'react';
import { Typography, TextField, Box, Button, Link, Grid } from '@mui/material';


function SignupForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  
  function handleSubmit(e){ //users#create => set session hash to user_id
    e.preventDefault()
    setErrors([]);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        password_confirmation: confirmPassword
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors))
      }
    });
  }

  return (
    <div>
      <Box textAlign={'center'}> 
        <Typography variant='h4'>Sign Up</Typography>
        <form onSubmit={handleSubmit}>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={16}>
            <TextField 
                value={username} onChange={(e) => setUsername(e.target.value)}
                type={'text'}
                sx={{ margin: 1, backgroundColor: '#ffffff' }} 
                placeholder='Username' 
                variant='outlined'
                textAlign='center'/>
          </Grid>
          <Grid item xs={16}>
            <TextField 
                value={password} onChange={(e) => setPassword(e.target.value)}
                type={'password'}
                sx={{ margin: 1, backgroundColor: '#ffffff' }} 
                placeholder='Password' 
                variant='outlined'
                textAlign='center'/>
          </Grid>
          <Grid item xs={16}>
            <TextField 
                value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                type={'password'}
                sx={{ margin: 1, backgroundColor: '#ffffff' }} 
                placeholder='Confirm Password' 
                variant='outlined'
                textAlign='center'/>
          </Grid>
          <Grid item xs={16}>
            <Link href="/">
                <Button 
                  type='submit'
                  color="secondary"
                  variant="contained" 
                  sx={{ borderRadius: 2, margin: 3}}
                  textAlign='center'
                >
                  Submit
                </Button>
              </Link>
          </Grid>
        </Grid>
          {errors.map((err) => (
            <Typography key={err} align='center'>{err}</Typography>
          ))}
        </form>
      </Box>
  </div>
  )
}




export default SignupForm