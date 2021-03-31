import React, { Component } from "react";
import "./App.css";
import Contain from "./Contain";
import Navbar from "./Navbar";
import Footer from './Footer';
function App() {

  return (
    <div className="App">
      <Navbar />
      <Contain />
      <Footer/>
     
     
    </div>
  );
}

export default App;
