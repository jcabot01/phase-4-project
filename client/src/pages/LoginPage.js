import { React, useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import styled from '@emotion/styled';
import { Button, Box, Typography, Paper } from '@mui/material';
import Image from '../images/rv-gc9b58d3ec_1920.jpg';


function LoginPage({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true)

  const styles = {
    paperContainer: { 
        backgroundImage: `url(${Image})`
    }
  };

  return(
    <Box sx={{width: '522px', margin: 'auto' }}>
      <Paper style={styles.paperContainer} sx={{height: 920, marginRight: 1, borderRadius: 5, backgroundRepeat: 'no-repeat'}}>
      <Box component={'div'} textAlign={'center'} sx={{ margin: 2 }}>
        <Logo>RV'n B</Logo>
      </Box>
      <Box textAlign={'center'} sx={{backgroundColor: "#868686", borderRadius: 7}}>
        <Typography variant='h4' sx={{color: '#f3f6f4'}}>RV rentals in TX</Typography>
      </Box>
      <Wrapper>
        {showLogin ? (
          <>
            <LoginForm onLogin={onLogin} />
            <Divider />
            <Box component={'div'} textAlign={'center'}> 
              Don't have an account? &nbsp;
              <Button color="secondary" onClick={() => setShowLogin(false)}>
                  Sign Up
              </Button>
            </Box>
          </>
        ) : (
          <>
            <SignupForm onLogin={onLogin}/>
            <Divider  />
            <Box component={'div'} textAlign={'center'}> 
              Already have an account? &nbsp;
              <Button color="secondary" onClick={() => setShowLogin(true)}>
                  Login
              </Button>
            </Box>
          </>
        )}     
      </Wrapper>  
      </Paper> 
    </Box> 
  );
}

const Wrapper = styled.section`
  width: 350px;
  display: "flex";
  flexDirection: "column";
  margin: auto;
  background-color: #f3f6f4; 
  margin-top: 100px;
  padding: 5px; 
  border-radius: 7px;
  opacity: 0.9
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`;

const Logo = styled.h1`
  font-family: "Over the Rainbow", cursive;
  font-size: 6rem;
  color: white;
`;

export default LoginPage;