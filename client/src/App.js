import { React, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Demo from "./Demo";


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

  return (
    <div>
        
    <Router>
      <Routes>
        <Route path ="*" element="404 Page Not Found"/>
        <Route path ="/demo" element={<Demo />}/>
      </Routes>
    </Router>
    </div>
    
  )
}

export default App;
