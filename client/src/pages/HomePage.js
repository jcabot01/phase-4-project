import {React, useState, useEffect} from 'react'
import { Box } from '@mui/material';
import RvListPage from './RvListPage';

function HomePage() {
  const [rvs, setRvs] = useState([]);
  const [regionSelect, setRegionSelect] = useState("All")


  useEffect(() => {
    fetch("/rvs")
    .then((r) => r.json())
    .then((rvs) => setRvs(rvs));
  }, []);

  console.log(rvs)
  const regionToggleNames = ["All", "HTX", "DFW", "ATX"]
  const filteredRegions = rvs.filter((rv) => regionSelect === "All" || rv.region === regionSelect )
  return (
    <Box sx={{width: '400px', margin: 'auto' }}>
      <RvListPage rvs={filteredRegions} regionToggleNames={regionToggleNames} regionSelect={regionSelect} setRegionSelect={setRegionSelect}/>
    </Box>
  )
}

export default HomePage