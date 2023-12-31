import React, { useState } from 'react'
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import { Fade } from "react-reveal"
import logo from "../../assets/home/logo.svg"
import { AiOutlineUser, AiOutlineFundProjectionScreen, AiOutlineDeploymentUnit } from "react-icons/ai"
import { BiHome } from "react-icons/bi"
import { Link } from "react-router-dom"
import { CgFileDocument } from "react-icons/cg"
import { useLocation } from 'react-router-dom'
import "./Nav.css"

const NavB = (props) => {
  const [stickyNav, updateSticky] = useState(false)
  const [expand, updateExpand] = useState(false)
  const l = useLocation();

  const handleScroll = () => window.scrollY >= 20 ? updateSticky(true) : updateSticky(false)

  window.addEventListener("scroll", handleScroll)

  return (
    <div className='fixed'>
      <Fade top duration={1000} distance="20px">
        <Navbar 
          expanded={expand}
          expand="md"
          className={stickyNav ? "sticky" : ""}>
          <Container> 
            <Navbar.Brand href="/" className="">
              <img src={logo} className="logo" alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle
              onClick={() => updateExpand(expand ? false: true)}
            >
              <div className="toggle1" />
              <div className="toggle2">
                <div className="toggle2-1" />
              </div>
              <div className="toggle3" />
            </Navbar.Toggle>
            <Navbar.Collapse >
              <Nav className="ms-auto">
                <Nav.Link className={l.pathname == "/" ? "curr-tab" : ""} as={Link} to="/" onClick={() => updateExpand(false)}>
                  <BiHome style={{ marginBottom: "0.2rem" }} />&#8201;HOME
                </Nav.Link>
                <Nav.Link className={l.pathname == "/about" ? "curr-tab" : ""} as={Link} to="/about" onClick={() => updateExpand(false)}>
                  <AiOutlineUser style={{ marginBottom: "0.1rem" }} />&#8201;ABOUT
                </Nav.Link>
                <Nav.Link className={l.pathname == "/experience" ? "curr-tab" : ""} as={Link} to="/experience" onClick={() => updateExpand(false)}>
                  <AiOutlineFundProjectionScreen style={{ marginBottom: "0.1rem" }} />&#8201;EXPERIENCE
                </Nav.Link>
                <Nav.Link className={l.pathname == "/projects" ? "curr-tab" : ""} as={Link} to="/projects" onClick={() => updateExpand(false)}>
                  <AiOutlineDeploymentUnit style={{ marginBottom: "0.1rem" }} />&#8201;PROJECTS
                </Nav.Link>
                <Nav.Link className={l.pathname == "/resume" ? "curr-tab" : ""} as={Link} to="/resume" onClick={() => updateExpand(false)}>
                  <CgFileDocument style={{ marginBottom: "0.1rem" }} />&#8201;RESUME
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <span />
          </Container>
        </Navbar>
      </Fade>
    </div>
  )
}

export default NavB
