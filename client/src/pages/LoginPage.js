import { React, useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import styled from '@emotion/styled';
import { Button } from '@mui/material';



function LoginPage({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true)

  return(
      <Wrapper>
        <Logo>RV'n B</Logo>
        {showLogin ? (
          <>
            <LoginForm onLogin={onLogin} />
            <Divider />
            <p>
              Don't have an account? &nbsp;
              <Button color="secondary" onClick={() => setShowLogin(false)}>
                Sign Up
              </Button>
            </p>
          </>
        ) : (
          <>
            <SignupForm onLogin={onLogin}/>
            <Divider />
            <p>
              Don't have an account? &nbsp;
              <Button color="secondary" onClick={() => setShowLogin(true)}>
                Login
              </Button>
            </p>
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

const Logo = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 3rem;
  color: deeppink;
  margin: 8px 0 16px;
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`;


export default LoginPage;