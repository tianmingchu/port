import React from 'react'
import { Row, Col, Container } from "react-bootstrap"
import { Roll, Slide, Fade } from "react-reveal"
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
import pianoVid from "../../assets/about/piano.mp4"
import violinVid from "../../assets/about/violin.mp4"
import tennisVid from "../../assets/about/tennis.mp4"
import basketballVid from "../../assets/about/basketball.mp4"
import "./About.css"

const About = () => {
  return (
    <>
      <Container className="about-container pb-5">
        <Particle />
        <Row>
          <Col md={5} className="d-flex justify-content-center">
            <Roll left duration={1300} distance="25px">
              <img src={gradCropped} className="picture" alt="portrait" />
            </Roll>
          </Col>
          <Col md={7}>
            <Slide right duration={1400} distance="30px">
              <div className="h2 about-header">
                Born & raised in 
                <div className="golden">
                  <img src={goldenGate} className="gg" alt="goldenGate" />
                  <div className="sf">San&nbsp;Francisco,</div>
                </div>
              </div>
              <p className="h2 about-header">
                I'm currently working as a <span className="swe">Software&nbsp;Engineer</span> for <img src={cap1} className="cap" alt="capitalOne" /> in downtown SF.
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
      </Container>
      <Row className='mt-5 pt-5'>
          <Col md={6} className="vid-row">
            <Fade left duration={1500} distance="50px">
              <video loop autoPlay muted controls className="vid">
                <source src={basketballVid} type="video/mp4" />
              </video>
              <video loop autoPlay muted controls className="vid">
                <source src={pianoVid} type="video/mp4" />
              </video>
            </Fade>
          </Col>
          <Col md={6} className="vid-row">
            <Fade right duration={1500} distance="50px">
              <video loop autoPlay muted controls className='vid'>
                <source src={tennisVid} type="video/mp4" />
              </video>
              <video loop autoPlay muted controls className='vid'>
                <source src={violinVid} type="video/mp4" />
              </video>
            </Fade>
          </Col>
      </Row>
    </>
  )
}

export default About