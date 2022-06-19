import { React, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
// import Demo from "./Demo";
import RvListPage from "./pages/RvListPage";
import NavBar from "./components/NavBar";
import UserProfile from "./pages/UserProfile";
import RvProfilePage from "./pages/RvProfilePage";


function App() {
  const [user, setUser] = useState(null)
  const [rvs, setRvs] = useState([]);
  const [regionSelect, setRegionSelect] = useState("All")

  useEffect(() => {
    fetch("/me").then((r) => {
    if (r.ok) {
      r.json().then((user) => setUser(user));
    }
    });
  }, []);

  useEffect(() => {
    fetch("/rvs")
    .then((r) => r.json())
    .then((rvs) => setRvs(rvs));
  }, []);

    function onReviewPost(obj){
      console.log(obj)
    }
  
  const regionToggleNames = ["All", "HTX", "DFW", "ATX"]

  if (!user) return <LoginPage onLogin={setUser} />
  // <Route path ="*" element="404 Page Not Found"/>
 
  return (
    <div>
    <Router>
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route exact path ="/" element={<RvListPage rvs={rvs} regionToggleNames={regionToggleNames} regionSelect={regionSelect} setRegionSelect={setRegionSelect}/>}/>
        <Route path='/users' element={<UserProfile user={user}/>}/>
        <Route path='/rvs/:name' element={<RvProfilePage rvs={rvs} user={user} onReviewPost={onReviewPost} />}/>
      </Routes>
    </Router>
    </div>
    
  )
}

export default App;
