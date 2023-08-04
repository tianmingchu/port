import React from 'react'
import Particle from "../Particle"
import Typewriter from "typewriter-effect"
import { Fade } from "react-reveal"
import { Container } from "react-bootstrap"
import ethLogo from "../../assets/home/ethLogo.gif"
import { FaTwitter, FaGithub, FaGooglePlusG, FaInstagram, FaLinkedin } from "react-icons/fa"
import "./Home.css"

const Home = () => {
  return (
    <Container className="home-container">
      <Particle />
      <Fade left duration={1000} distance="20px">
        <div className="home-wrapper">
          <div className='d-flex justify-content-center'>
            <img className="img-fluid eth-logo" src={ethLogo} alt="eth" />
          </div>
          <h2 className="name"><strong>Tianming Chu</strong></h2>
          <Typewriter 
            options={{
              strings: [
                "Developer",
                "Lifelong Learner"
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              pauseFor: 2000,
            }} 
          />
        </div>
      </Fade>
      <Fade right duration={1500} distance="25px">
        <div className="social-wrapper">
          <ul>
            <li>
              <a className="github" href="https://github.com/tianmingchu" target="_blank" rel="noopener noreferrer">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <FaGithub style={{marginBottom: "4px"}} />
              </a>
            </li>
            <li>
              <a className="twitter" href="https://twitter.com/ti4nming" target="_blank" rel="noopener noreferrer">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <FaTwitter style={{marginBottom: "4px"}} />
              </a>
            </li>
            <li>
              <a className="google" href="mailto:tianmingchu@gmail.com" target="_blank" rel="noopener noreferrer">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <FaGooglePlusG style={{marginBottom: "4px", transform: "scale(1.2)"}} />
              </a>
            </li>
            <li>
              <a className="instagram" href="https://instagram.com/_tianming/" target="_blank" rel="noopener noreferrer">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <FaInstagram style={{marginBottom: "4px"}} />
              </a>
            </li>
            <li>
              <a className="linkedin" href="https://linkedin.com/in/tianming-chu" target="_blank" rel="noopener noreferrer">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <FaLinkedin style={{marginBottom: "4px"}} />
              </a>
            </li>
          </ul>
        </div>
      </Fade>
    </Container>
  )
}

export default Home