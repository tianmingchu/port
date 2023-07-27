import React from 'react'
import Particle from "../Particle"
import Typewriter from "typewriter-effect"
import { Fade } from "react-reveal"
import { Container } from "react-bootstrap"
import { Row, Col } from "react-bootstrap"
import { SocialIcon } from "react-social-icons"
import ethLogo from "../../assets/ethLogo.gif"
import "./Home.css"

const Home = (props) => {
  return (
    <Container fluid="lg" className="home-container">
      <Particle />
      <Fade bottom duration={1000} distance="20px">
        <Row>
          <Col md={6}>
            <h1 className="text-center mb-5 header-1">Hi<span className='exclaim'>!</span></h1>
            <h2 className="header-2">I'm <strong>Tianming Chu</strong></h2>
            {/* My passion is developing software that improves the quality of life of others */}
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
            {/* <div className="social-container"> */}
            <Row className="social-container d-flex text-center">
              <Col xs={4} md={2}>
                <SocialIcon fgColor="whitesmoke" target="_blank" className={props.expand ? "social-disable" : "social"} url="https://twitter.com/ti4nming" />
              </Col>
              <Col xs={4} md={2}>
                <SocialIcon fgColor="whitesmoke" target="_blank" className={props.expand ? "social-disable" : "social"} url="mailto:tianmingchu@gmail.com" network="google" />
              </Col>
              <Col xs={4} md={2}>
                <SocialIcon fgColor="whitesmoke" target="_blank" className={props.expand ? "social-disable" : "social"} url="https://github.com/tianmingchu" />
              </Col>
              <Col xs={4} md={2}>
                <SocialIcon fgColor="whitesmoke" target="_blank" className={props.expand ? "social-disable" : "social"} url="https://instagram.com/_tianming/" />
              </Col>
              <Col xs={4} md={2}>
                <SocialIcon fgColor="whitesmoke" target="_blank" className={props.expand ? "social-disable" : "social"} url="https://linkedin.com/in/tianming-chu" />
              </Col>
              <Col xs={4} md={2} />
            </Row>
            {/* </div> */}
          </Col>
          <Col md={6} className="d-flex justify-content-center">
            <img className="img-fluid mt-5" src={ethLogo} />
          </Col>
        </Row>
      </Fade>
    </Container>
  )
}

export default Home