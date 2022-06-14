import React from 'react'
import { TextField, Stack } from '@mui/material';
import styled from '@emotion/styled';

function LoginForm() {
  return (
    <>
      <Title>Login</Title>
     
        <Stack
          component="form"
          sx={{
            width: '25ch',
          }}
          spacing={2}
          noValidate
          autoComplete="off"          
        >
          <TextField 
            id="outlined-basic"  
            variant="outlined"
            defaultValue="Username"
          />
          <TextField 
            id="outlined-basic"  
            variant="outlined"
            defaultValue="Password"
          />
        </Stack>
     
    </>
  )
}

const Title = styled.h4`
  font-family: "Permanent Marker", cursive;
  font-size: 2rem;
  color: black;
  margin: 8px 0 16px;
`;
export default LoginForm
