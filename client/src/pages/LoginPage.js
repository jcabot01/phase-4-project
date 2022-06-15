import { React, useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import styled from '@emotion/styled';
import { Button, Box } from '@mui/material';


function LoginPage({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true)

  return(
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
  );
}

const Wrapper = styled.section`
  max-width: 380px;
  display: "flex";
  flexDirection: "column";
  margin: auto;
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`;


export default LoginPage;