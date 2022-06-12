import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { Button } from "@mui/material";

function App() {
  return (
    <div>
    <Button> Hello </Button>
    <Router>
      <Routes>
        <Route path ='/login' element={<LoginPage />}/>
        <Route path ="*" element="404 Page Not Found"/>
      </Routes>
    </Router>
    </div>
    
  )
}

export default App;
