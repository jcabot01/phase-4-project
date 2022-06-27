import {React, useState, useEffect} from 'react'
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
    <div>
      <RvListPage rvs={filteredRegions} regionToggleNames={regionToggleNames} regionSelect={regionSelect} setRegionSelect={setRegionSelect}/>
    </div>
  )
}

export default HomePage