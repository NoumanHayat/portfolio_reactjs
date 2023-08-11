import logo from "./logo.svg";
import "./App.css";
// import { BrowserRouter as Router, Route, Switch,Routes } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Layout from "./pages/Layout";
import Home from "./pages/Home/Home";
import Blogs from "./pages/Blogs";
import NoPage from "./pages/NoPage";
import Nevbar from "./component/nevbar/index";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Skill from "./pages/Skill";
import PortfolioSection from "./pages/Portfolio";
import Services from "./pages/Services/index";
import "./style.css";
import Contact from "./pages/Contact/index";
import ScrollTop from "./component/ScrollTop/index";
import ChatBot from "./chatbot/index";
import Text from "./test/index"; 
import Admin from './admin/index';
function Main() {
  return (
    <div>
      <Nevbar />
      <main id="main">
        <Home />
        <About />
        <Skill />
        <Resume />
        <PortfolioSection />
        <Services />
        <Contact />
        <ScrollTop />
        <ChatBot />
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
