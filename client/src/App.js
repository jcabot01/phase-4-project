import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Demo from "./Demo";


function App() {
  return (
    <div>
        
    <Router>
      <Routes>
        <Route path ='/login' element={<LoginPage />}/>
        <Route path ='/' element="App path" />
        <Route path ="*" element="404 Page Not Found"/>
        <Route path ="/demo" element={<Demo />}/>
      </Routes>
    </Router>
    </div>
    
  )
}

export default App;
