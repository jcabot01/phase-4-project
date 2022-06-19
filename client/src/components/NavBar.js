import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Box, AppBar, Toolbar, Typography } from '@mui/material'
import styled from '@emotion/styled';



function NavBar({ user, setUser }) {  //pass in user.username state so we can render "Hi username"...pass in setUser state to set to null upon logout
  
  function handleClick(){
    fetch("/logout", {method: "DELETE"}).then((r) => {
      if (r.ok) {
        setUser(null)
      }
    });
  }

//return (
  //---<Box with "Hi <Button>{user.username}</Button>!" <LINK to="/userprofile/"
  //---LINK to RvListPage <Box> with a nested <Button>  checkout LoginPage for styling.....<Link to="/rvlist">Vehicles</Link>
  //---Logout Button onClick={handleClick}
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar>
          <NavLeft>
            Hi 
          </NavLeft>
          <p>&nbsp;&nbsp;</p>
          <Link to="/user_profile">{user.username}!</Link>
          <Typography variant="h3" component="div" textAlign="center" sx={{ flexGrow: 1 }}>
            RV'n B
          </Typography>
          <NavRight>
            <Button variant="contained" href="/">
              Vehicles
            </Button>
            <Button variant="contained" color="error" onClick={handleClick}>
              Logout
            </Button>
          </NavRight>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const NavRight = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;
`;

const NavLeft = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  left: 8px;
  
`;

export default NavBar