import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Box, Toolbar, Typography, Paper } from '@mui/material'
import styled from '@emotion/styled';
import Image from '../images/starry_sky.jpg';



function NavBar({ user, setUser }) {
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
    <Box display="flex"
    justifyContent="center">
      <Paper style={styles.paperContainer} sx={{height: 210, width: 422, borderRadius: 5}}>
        <Toolbar>
          <Button variant='outlined' size='small' sx={{backgroundColor: 'purple', marginTop: 1}}>
            <Link to={`/user_profile`}>
              <Typography sx={{color: 'white'}}>
              {user.username}'s Profile
              </Typography>
            </Link>
          </Button>
          
          <NavRight>
            <Button variant="contained" size='small' href="/" sx={{backgroundColor: 'purple', marginTop: 1}}>
              Vehicles
            </Button>
            <Button variant="contained" size='small' sx={{backgroundColor: "#d7d7d7", marginTop: 1}} onClick={handleClick}>
              <Link to={'/'} underline='none'>
                Logout
              </Link>
            </Button>
          </NavRight>
        </Toolbar>
        <Box display="flex" justifyContent="center" alignItems="center">
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

const Logo = styled.h1`
  font-family: "Over the Rainbow", cursive;
  font-size: 5.5em;
  color: white;
  margin: auto;
`;

export default NavBar