import React from 'react';
import LoginForm from '../components/LoginForm';
import styled from '@emotion/styled';



function LoginPage() {

  return(
    
    <>
      
        <Logo>RV'n B</Logo>
        <LoginForm/>
      
  
    </>
    
  )
};

const Logo = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 3rem;
  color: deeppink;
  margin: 8px 0 16px;
`;


export default LoginPage;