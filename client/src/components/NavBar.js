import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Box, Toolbar, Typography, Paper } from '@mui/material'
import styled from '@emotion/styled';
import Image from '../images/starry_sky.jpg';



function NavBar({ user, setUser }) {  //pass in user.username state so we can render "Hi username"...pass in setUser state to set to null upon logout
  
  const styles = {
    paperContainer: { 
        backgroundImage: `url(${Image})`
    }
};

  function handleClick(){
    fetch("/logout", {method: "DELETE"}).then((r) => {
      if (r.ok) {
        setUser(null)
      }
    });
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Paper style={styles.paperContainer} sx={{height: 190, minWidth: 528, borderRadius: 5}}>
      {/* <AppBar position="static" sx={{borderRadius: 5, backgroundColor: }}> */}
        <Toolbar>
          <Button variant='outlined' size='small' sx={{backgroundColor: 'purple', marginTop: 1}}>
          <NavLeft>
            Hi 
          </NavLeft>
          <p>&nbsp;&nbsp;</p>
          <Link to="/user_profile">
            <Typography variant='h6' sx={{color: 'white', marginLeft: 2}}>
            {user.username}!
            </Typography>
          </Link>
          </Button>
          
          <NavRight>
            <Button variant="contained" size='small' href="/" sx={{backgroundColor: 'purple'}}>
              Vehicles
            </Button>
            <Button variant="contained" size='small' sx={{backgroundColor: "#d7d7d7"}} onClick={handleClick}>
              Logout
            </Button>
          </NavRight>
         

        </Toolbar>
      {/* </AppBar> */}
      <Box textAlign={'center'}>
          <Logo>
              RV'n B
          </Logo>
          </Box>
            
          
      </Paper>
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
  color: white;
  font-size: 1.5em
`;

const Logo = styled.h1`
  font-family: "Over the Rainbow", cursive;
  font-size: 3em;
  color: white;
`;

export default NavBar