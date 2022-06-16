import { React, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
// import Demo from "./Demo";
import RvListPage from "./pages/RvListPage";
import NavBar from "./components/NavBar";
import UserProfile from "./pages/UserProfile";
import ReviewsPage from "./pages/ReviewsPage";


function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me").then((r) => {
    if (r.ok) {
      r.json().then((user) => setUser(user));
    }
    });
  }, []);

  if (!user) return <LoginPage onLogin={setUser} />
 

  // <Route path ="*" element="404 Page Not Found"/>
 
  return (
    <div>
    <Router>
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route exact path ="/" element={<RvListPage />}/>
        <Route path='/users' element={<UserProfile user={user}/>}/>
        <Route path='/reviews' element={<ReviewsPage/>}/>
      </Routes>
    </Router>
    </div>
    
  )
}

export default App;
