import React, { useState, useEffect } from "react"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import NavB from "./components/Nav/Nav"
import Footer from "./components/Footer/Footer"
import { CursorProvider } from "react-cursor-custom"
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [expand, updateExpand] = useState(false)

  return (
    <Router>
      {/* <CursorProvider
        color={"#8f8b81"}
        ringSize={25}
        transitionTime={75}
      > */}
        {/* <div className="app"> */}
          <NavB expand={expand} updateExpand={updateExpand} />
          <Routes>
            <Route path="/" element={<Home expand={expand} />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="*" element={<Navigate to="/" />} /> */}
          </Routes>
          {/* <Footer /> */}
        {/* </div> */}
      {/* </CursorProvider> */}
    </Router>
  );
}

export default App;
