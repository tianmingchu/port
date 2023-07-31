import React from 'react'
import Particle from "../Particle"
import { Container, Row, Col } from "react-bootstrap"
import { Flip, Bounce, LightSpeed } from "react-reveal"
import cap1 from "../../assets/about/cap1.svg"
import ameren from "../../assets/experience/ameren.svg"
import "./Experience.css"

const Experience = () => {
  return (
    <Container className="experience-container">
      <Particle />
      <Flip bottom duration={1000}>
        <img src={cap1} className="c1 mb-4" alt="capitalOne" />
      </Flip>
      <Row className="pb-2">
        <Col md={5}>
          <Bounce left duration={1500}>
            <iframe allowFullScreen="allowFullScreen"
              mozallowfullscreen="mozallowfullscreen" 
              msallowfullscreen="msallowfullscreen" 
              oallowfullscreen="oallowfullscreen" 
              webkitallowfullscreen="webkitallowfullscreen" className="youtube" src="https://youtube.com/embed/bvF81K7Qcsc" />
          </Bounce>
        </Col>
        <Col className="right-body d-flex align-items-center" md={7}>
          <LightSpeed right duration={1500}>
            <div>
              <h2><strong>Marketing Navigator</strong></h2>
              <h4 className="pink">Analytics Tab</h4>
              <p>Auto Business Operations have a difficult time figuring out the status of their marketing campaigns (eg. <span>How many of my 1 million emails actually made it to customers' inboxes?</span>), so my team and I used Vue.js to add a new tab that provides analytics for their campaigns, freeing up three full-time engineers' worth of work.
              </p>
            </div>
          </LightSpeed>
        </Col>
      </Row>
      <Flip top duration={1000}>
        <img src={ameren} className="ameren mt-5 pt-5 mb-4" alt="ameren" />
      </Flip>
      <Row>
        <Col className="left-body d-flex align-items-center" md={7}>
          <LightSpeed left duration={1500}>
            <div>
              <h2><strong>Ameren.com</strong></h2>
              <h4 className="pink">EV Rate Initiative</h4>
              <p>Ameren launched a brand new program for its customers with electric vehicle chargers, and I used Angular to implement the enrollment process and Sitecore for the APIs.
              </p>
            </div>
          </LightSpeed>
        </Col>
        <Col md={5}>
          <Bounce right duration={1500}>
            <iframe allowFullScreen="allowFullScreen"
              mozallowfullscreen="mozallowfullscreen" 
              msallowfullscreen="msallowfullscreen" 
              oallowfullscreen="oallowfullscreen" 
              webkitallowfullscreen="webkitallowfullscreen" className="youtube" src="https://youtube.com/embed/zHWAYPgVGoI" />
          </Bounce>
        </Col>
      </Row>
      <Row className="mt-5 pt-5">
        <Col md={5}>
          <Bounce left duration={1500}>
            <iframe allowFullScreen="allowFullScreen"
              mozallowfullscreen="mozallowfullscreen" 
              msallowfullscreen="msallowfullscreen" 
              oallowfullscreen="oallowfullscreen" 
              webkitallowfullscreen="webkitallowfullscreen" className="youtube" src="https://youtube.com/embed/Ypl5G1scz3g" />
          </Bounce>
        </Col>
        <Col className="right-body d-flex align-items-center" md={7}>
          <LightSpeed right duration={1500}>
            <div>
              <h2><strong>APImaging</strong></h2>
              <h4 className="pink">Automation</h4>
              <p>Every month the Finance team undergoes their accrual process by downloading numerous financial documents. By using Blue Prism RPA to automate this process I helped save the Finance team over 2500 hours annually, enabling them to spend the time saved performing analysis and making better business decisions.
              </p>
            </div>
          </LightSpeed>
        </Col>
      </Row>
    </Container>
  )
}

export default Experience