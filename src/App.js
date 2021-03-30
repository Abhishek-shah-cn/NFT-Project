import React, { Component } from "react";
import "./App.css";
import Contain from "./Contain";
import Navbar from "./Navbar";
import Footer from './Footer';
import Contact from './Contact'



function App() {

  return (
    <div className="App">
      <Navbar />
      <Contain />
      <Footer/>
      <Contact/>
      
    </div>
  );
}

export default App;
