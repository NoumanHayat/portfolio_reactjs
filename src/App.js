import logo from "./logo.svg";
import "./App.css";
// import { BrowserRouter as Router, Route, Switch,Routes } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home/Home";
import Blogs from "./pages/Blogs";
import NoPage from "./pages/NoPage";
import Nevbar from "./component/nevbar/index";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Skill from './pages/Skill';
import PortfolioSection from './pages/Portfolio'
import "./style.css";
function App() {
  return (
    <div>
      <Nevbar />
      <main id="main">
      {/* <Home />
      <About />
      <Skill />
      <Resume />
      <PortfolioSection /> */}
      <NoPage />
        {/* <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Blogs" element={<Blogs />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </Router> */}
      </main>
    </div>
  );
}

export default App;
