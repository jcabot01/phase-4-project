import { React, useState } from 'react';
// import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Box, Link } from '@mui/material';
import styled from '@emotion/styled';

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
    <div>
      <Wrapper>
        <Box textAlign={'center'}>    
          <Logo>RV'n B</Logo>  
          <Typography variant='h4' fontFamily={'cursive'} sx={{ color: "black", }}>Log In</Typography>
          <form onSubmit={handleSubmit}>
              <TextField 
                value={username} onChange={(e) => setUsername(e.target.value)}
                id="Username"  
                variant="outlined"
                placeholder="Username"
                sx={{width: '28ch', margin: 2 }}
              />
              <TextField 
                value={password} onChange={(e) => setPassword(e.target.value)}
                id="Password"
                type={'password'}  
                variant="outlined"
                placeholder="Password"
                sx={{width: '28ch', margin: 1 }}
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
          <Wrapper>
              {errors.map((err) => (
                <Typography key={err} >{err}</Typography>
              ))}
          </Wrapper>     
        </Box>
      </Wrapper>
  </div>
  )
}

const Logo = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 3rem;
  color: deeppink;
  margin: 8px 0 16px;
`;

const Wrapper = styled.section`
  max-width: 296px;
  margin: auto;
`;

export default LoginForm
