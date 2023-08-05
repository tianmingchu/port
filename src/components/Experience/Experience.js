import React, { useEffect } from 'react'
import Particle from "../Particle"
import { Container, Row, Col } from "react-bootstrap"
import { Flip, Bounce, LightSpeed } from "react-reveal"
import Footer from "../Footer/Footer"
import cap1 from "../../assets/about/cap1.svg"
import ameren from "../../assets/experience/ameren.svg"
import ev from "../../assets/experience/ev.png"
import mnav from "../../assets/experience/mnav.png"
import voucher from "../../assets/experience/voucher.png"
import "./Experience.css"

const Experience = () => {
  return (
    <>
      <Container className="experience-container mb-5 pb-4">
        <Particle />
        <Flip bottom duration={1000}>
          <img src={cap1} className="c1" alt="capitalOne" />
        </Flip>
        <Row className="pb-2">
          <Col md={5}>
            <Bounce left duration={1500}>
              <img src={mnav} alt="mNav" className="youtube" />
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
          <img src={ameren} className="ameren mt-5 pt-5" alt="ameren" />
        </Flip>
        <Row>
          <Col className="left-body d-flex align-items-center" md={{span: 7, order: "first"}} xs={{order: 2}}>
            <LightSpeed left duration={1500}>
              <div>
                <h2><strong>Ameren.com</strong></h2>
                <h4 className="pink">EV Rate Initiative</h4>
                <p>Ameren launched a brand new program for its customers with electric vehicle chargers, and I used Angular to implement the enrollment process and Sitecore for the APIs.
                </p>
              </div>
            </LightSpeed>
          </Col>
          <Col md={{span: 5, order: "last"}} xs={{order: 1}}>
            <Bounce right duration={1500}>
              <img src={ev} alt="ev" className="youtube" />
            </Bounce>
          </Col>
        </Row>
        <Row className="bottom-row">
          <Col md={5}>
            <Bounce left duration={1500}>
              <img src={voucher} alt="voucher" className="youtube" />
            </Bounce>
          </Col>
          <Col className="right-body d-flex align-items-center" md={7}>
            <LightSpeed right duration={1500}>
              <div>
                <h2><strong>APImaging</strong></h2>
                <h4 className="pink">Automation</h4>
                <p>Every month the Finance team undergoes their accrual process by downloading numerous financial documents. By using Blue Prism RPA to automate this process I helped save the Finance team over 2000 hours of manual labor annually, enabling them to spend the time saved performing analysis and making better business decisions.
                </p>
              </div>
            </LightSpeed>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default Experience