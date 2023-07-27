import React from 'react'
import { Row, Col, Container } from "react-bootstrap"
import { Roll, Slide } from "react-reveal"
import { Player, ControlBar } from "video-react"
import gradCropped from "../../assets/about/gradCropped.png"
import Particle from "../Particle"
import goldenGate from "../../assets/about/goldenGate.png"
import cap1 from "../../assets/about/cap1.svg"
import uiuc from "../../assets/about/uiuc.svg"
import ethSvg from "../../assets/about/ethSvg.svg"
import tennis from "../../assets/about/tennis.png"
import basketball from "../../assets/about/basketball.png"
import piano from "../../assets/about/piano.png"
import violin from "../../assets/about/violin.png"
import "./About.css"

const About = () => {
  return (
    <Container className="about-container">
      <Particle />
      <Row>
        <Col md={5} className="d-flex justify-content-center">
          <Roll left duration={1300} distance="25px">
            <img src={gradCropped} className="picture" alt="portrait" />
          </Roll>
       </Col>
       <Col md={7}>
          <Slide right duration={1400} distance="30px">
            <p className="h2 about-header">
              Born & raised in 
              <div className="golden">
                <img src={goldenGate} className="gg" alt="goldenGate" />
                <div className="sf">San&nbsp;Francisco,</div>
              </div>
            </p>
            <p className="h2 about-header">
              I'm currently working as a <span className="swe">Software Engineer</span> for <img src={cap1} className="cap" alt="capitalOne" /> in downtown SF.
            </p>
            <br />
            <p className="about-body">
              I graduated from the <span style={{color: 'var(--orange)'}}>University</span> <span style={{color: 'var(--blue)'}}>of</span> <span style={{color: 'var(--orange)'}}>Illinois</span> <span style={{color: 'var(--blue)'}}>Urbana</span><span style={{color: 'var(--orange)'}}>-</span><span style={{color: 'var(--blue)'}}>Champaign</span> <img src={uiuc} style={{width: "13px", marginBottom: "3px"}} alt="blockI" /> with a Bachelor's Degree in Computer Engineering. 
            </p>
            <p className="about-body">
              More recently, I've been developing <img src={ethSvg} style={{width:"25px",marginBottom:"2px", marginRight:"1px"}} alt="eth" />smart contracts and exploring the different ways blockchain technology can be used to change the way we interact with the digital world.
            </p>
            <p className="about-body">
              In my free time I enjoy playing: <img src={tennis} className="activity" alt="tennis" /> tennis / <img src={basketball} className="activity mt-1" alt="basketball" /> basketball / <img src={violin} className="activity mb-1" alt="violin" /> violin / <img src={piano} className="activity mb-1" alt="piano" /> piano!
            </p>
          </Slide>
       </Col>
      </Row>
      {/* <Row> */}
        <div className="vid">
          {/* <Player
            muted
            autoPlay
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          >
            <ControlBar />
          </Player> */}
          {/* <Player
            muted
            autoPlay
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          /> */}
          <video loop autoPlay muted controls>
            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/mp4" />
          </video>
        </div>
      {/* </Row> */}
    </Container>
  )
}

export default About