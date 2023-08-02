import React, { useState, useEffect } from "react"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Experience from "./components/Experience/Experience"
import Projects from "./components/Projects/Projects"
import Resume from "./components/Resume/Resume"
import NavB from "./components/Nav/Nav"
import Top from "./components/Top"
import Footer from "./components/Footer/Footer"
import AnimatedCursor from "react-animated-cursor"
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [expand, updateExpand] = useState(false)

  return (
    <Router>
      <div id="cursorWrapper">
        <AnimatedCursor />
      </div>
        {/* <div className="app"> */}
          <NavB expand={expand} updateExpand={updateExpand} />
          <Top />
          <Routes>
            <Route path="/" element={<Home expand={expand} />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            {/* <Route path="*" element={<Navigate to="/" />} /> */}
          </Routes>
          {/* <Footer /> */}
        {/* </div> */}
    </Router>
  );
}

export default App;
