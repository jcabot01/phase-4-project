import { React, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
// import Demo from "./Demo";
import RvListPage from "./pages/RvListPage";
import NavBar from "./components/NavBar";


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
  // if (user) return <RvListPage />

  // <Route path ="*" element="404 Page Not Found"/>
  // <Route path ="/demo" element={<Demo />}/>

  //<NavBar pass in user and setUser to handle "Hi Username" & logout
  return (
    <div>
    <Router>
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        <Route path ="/" element={<RvListPage />}/>
      </Routes>
    </Router>
    </div>
    
  )
}

export default App;
