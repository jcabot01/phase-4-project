import { React, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import NavBar from "./components/NavBar";
import UserProfile from "./pages/UserProfile";
import RvProfileCard from "./components/RvProfileCard";
import HomePage from "./pages/HomePage";


function App() {
  const [user, setUser] = useState(null)
  
  useEffect(() => {
    fetch("/me").then((r) => {  //check if session-hash matches user_id
    if (r.ok) {
      r.json().then((user) => setUser(user));
    }
    });
  }, []);
  
  if (!user) return <LoginPage onLogin={setUser} />
  
  return (
    <div>
    <Router>
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path='/user_profile' element={<UserProfile user={user}/>}/>
        <Route path='/rvs/:name' element={<RvProfileCard user={user}/>}/>
        <Route path='/' element={<HomePage />} />
        <Route path="*" element="404 Page Not Found"/>
      </Routes>
    </Router>
    </div>
  )
}

export default App;
