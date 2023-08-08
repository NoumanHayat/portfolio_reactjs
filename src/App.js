import logo from "./logo.svg";
import "./App.css";
// import { BrowserRouter as Router, Route, Switch,Routes } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import NoPage from "./pages/NoPage";
import Nevbar from "./component/nevbar";
import "./style.css";
{
  /* <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Blogs" element={<Blogs />} />
                <Route path="*" element={<NoPage />} />
              </Routes>
          </Router> */
}
function App() {
  return (
    <div>
      <Nevbar />
      <main id="main">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Blogs" element={<Blogs />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
