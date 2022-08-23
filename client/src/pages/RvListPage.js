import React from "react"
import RvListCard from "../components/RvListCard"
import { FormGroup, Checkbox, FormControlLabel, Typography, Box } from "@mui/material";


function RvListPage({ rvs, regionToggleNames, setRegionSelect }) {
  const regionBoxes = regionToggleNames.map((region) => {
    return (
      <FormGroup key={region}>
        <FormControlLabel 
          control={<Checkbox 
                      //defaultChecked
                      onChange={() => setRegionSelect(region)}
                  />}
          label={region}/>
      </FormGroup>
    );
  });

  return (
    <>
      <Box component="div" sx={{ display: 'flex', marginLeft: 3, marginTop: 3 }}>
        {regionBoxes}
      </Box>
      <Box  sx={{backgroundColor: "#d7d7d7", borderRadius: 7}}>
        <Typography variant="h5" align="center" sx={{marginTop: 5}}>Welcome to RV'n B!</Typography>
        <Typography variant="h6" align="center">Search below to find your next getaway:</Typography>
      </Box>
      {rvs.map((rv) => (
        <RvListCard key={rv.id} rv={rv}/>
        )
      )}
      
    </>
  )
}

export default RvListPage