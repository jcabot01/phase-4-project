import { React, useState } from 'react';
import { Typography, TextField, Box, Button } from '@mui/material';
import styled from '@emotion/styled';

function SignupForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  function handleSubmit(e){
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
    <Wrapper>
      <Box textAlign={'center'}> 
        <Logo>RV'n B</Logo>     
        <Typography variant='h4' fontFamily={'cursive'} sx={{ color: "black", }}>Sign Up</Typography>
        <form onSubmit={handleSubmit}>
          <TextField 
            value={username} onChange={(e) => setUsername(e.target.value)}
            type={'text'}
            sx={{ margin: 1 }} 
            placeholder='Username' 
            variant='outlined'/>
          <TextField 
            value={password} onChange={(e) => setPassword(e.target.value)}
            type={'password'}
            sx={{ margin: 1 }} 
            placeholder='Password' 
            variant='outlined'/>
          <TextField 
            value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
            type={'password'}
            sx={{ margin: 1 }} 
            placeholder='Confirm Password' 
            variant='outlined'/>
          <Button 
            type='submit'
            color="secondary"
            variant="contained" 
            sx={{ borderRadius: 2, margin: 3}}
            >
              Submit
          </Button>
        </form>
          <Wrapper>
            {errors.map((err) => (
              <Typography key={err} align='center'>{err}</Typography>
            ))}
          </Wrapper>     
      </Box>
    </Wrapper>
  </div>
  )
}

const Wrapper = styled.section`
  max-width: 296px;
  margin: auto;
`;

const Logo = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 3rem;
  color: deeppink;
  margin: 8px 0 16px;
`;

export default SignupForm