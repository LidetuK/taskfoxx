import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";

function TestHome() {
  return (
    <div style={{ padding: '20px', backgroundColor: 'lightgreen', color: 'white' }}>
      <h1>Home Page Test</h1>
      <p>This is the home page - routing is working!</p>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<TestHome />} />
    </Routes>
  );
}

export default App;
