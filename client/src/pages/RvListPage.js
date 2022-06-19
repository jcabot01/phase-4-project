import React from "react"
import RvListCard from "../components/RvListCard"
import { FormGroup, Checkbox, FormControlLabel } from "@mui/material";


function RvListPage({ rvs, regionToggleNames, regionSelect, setRegionSelect }) {
  const regionBoxes = regionToggleNames.map((region) => {
    // const label = region === regionSelect ? "selected" : null;
    return(
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultCheckled />} label={region}/>
      </FormGroup>
    )
  })
  return(
    <>
      <>
      {regionBoxes}
      </>
      {rvs.map((rv) => (
        <RvListCard key ={rv.id} rv={rv}/>
        )
      )}
    </>
  )
}

export default RvListPage