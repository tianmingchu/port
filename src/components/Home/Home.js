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
                <FaGithub className="social-icon" />
              </a>
            </li>
            <li>
              <a className="twitter" href="https://twitter.com/ti4nming" target="_blank" rel="noopener noreferrer">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {/* <FaTwitter className="social-icon" /> */}
                <svg version="1.1" id="svg5" xmlnsSvg="http://www.w3.org/2000/svg"
                  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1668.56 1221.19"
                  style={{enableBackground:"new 0 0 1668.56 1221.19;", transform:"scale(0.75)", marginBottom:"5px"}} xmlSpace="preserve">
                <g id="layer1" transform="translate(52.390088,-25.058597)">
                  <path className="xxx" fill="#9dc0e4" id="path1009" d="M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99
                    h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z"/>
                </g>
                </svg>
              </a>
            </li>
            <li>
              <a className="google" href="mailto:tianmingchu@gmail.com" target="_blank" rel="noopener noreferrer">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <FaGooglePlusG className="social-icon" style={{transform: "scale(1.3)"}} />
              </a>
            </li>
            <li>
              <a className="instagram" href="https://instagram.com/_tianming/" target="_blank" rel="noopener noreferrer">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <FaInstagram className="social-icon" />
              </a>
            </li>
            <li>
              <a className="linkedin" href="https://linkedin.com/in/tianming-chu" target="_blank" rel="noopener noreferrer">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <FaLinkedin className="social-icon" />
              </a>
            </li>
          </ul>
        </div>
      </Fade>
    </Container>
  )
}

export default Home