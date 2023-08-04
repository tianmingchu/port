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
import AnimatedCursor from "react-animated-cursor"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <Router>
      <div id="cursorWrapper">
        <AnimatedCursor
          innerSize={8}
          outerSize={25}
          outerAlpha={0}
          innerScale={0.7}
          outerScale={1.4}
          outerStyle={{
            border: '2px solid var(--cursor-outer)'
          }}
          innerStyle={{
            backgroundColor: "var(--cursor-inner)"
          }}
        />
      </div>
      <div className="app">
        <NavB />
        <Top />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
