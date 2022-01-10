import "./App.css";
import React from "react";
import Home from "./components/Home";
import Stock from "./components/Stock";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <Router>
      <nav>
        <p><Link to="/"> Home </Link> </p>
        <p><Link to="/stock"> Stock </Link> </p>
      </nav>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/stock" element={<Stock />} />
      </Routes>
    </Router>
  );
}

export default App;
