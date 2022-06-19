import React from "react"
import RvListCard from "../components/RvListCard"
import { FormGroup, Checkbox, FormControlLabel, Typography, Box } from "@mui/material";


function RvListPage({ rvs, regionToggleNames, setRegionSelect }) {
  const regionBoxes = regionToggleNames.map((region) => {
    
    return(
      <FormGroup>
        <FormControlLabel 
          control={<Checkbox 
                      defaultChecked
                      onChange={() => setRegionSelect(region)}
                  />}
          label={region}/>
      </FormGroup>
    )
  })
  return(
    <>
      <>
      {regionBoxes}
      </>
      <Box>
        <Typography>Welcome to RV'n B!  Search below to find your next getaway:</Typography>
      </Box>
      {rvs.map((rv) => (
        <RvListCard key ={rv.id} rv={rv}/>
        )
      )}
    </>
  )
}

export default RvListPage