import React from 'react'
import Particle from "../Particle"
import { Container, Row, Col } from "react-bootstrap"
import { Fade } from "react-reveal"
import ProjectCard from "./ProjectCard/ProjectCard"
import info from "./project.json"
import "./Projects.css"

const Projects = () => {
  return (
    <Container className="projects-container">
      <Particle />
      <div className="d-flex justify-content-center">
        <Fade top duration={1500} distance="30px">
          <span className="mb-5 proj-header">A few projects I've worked on</span>
        </Fade>
      </div>
      <Row className="pb-5">
          {info.slice(0,2).map(proj => {
            return (
              <Col key={proj.title} className='d-flex justify-content-center' lg={6}>
                <div className="card-container">
                  <Fade right duration={1500} distance="50px">
                    <ProjectCard vid={proj.vid} src={proj.src} title={proj.title} body={proj.body} icon={proj.icon} link={proj.link} />
                  </Fade>
                </div>
              </Col>
          )})}
      </Row>
      <Row className="mt-5">
        {info.slice(2,4).map(proj => {
          return (
            <Col key={proj.title} className='d-flex justify-content-center' lg={6}>
              <div className="card-container">
                <Fade left duration={1500} distance="50px">
                  <ProjectCard vid={proj.vid} src={proj.src} title={proj.title} body={proj.body} icon={proj.icon} link={proj.link} />
                </Fade>
              </div>
            </Col>
        )})}
      </Row>
    </Container>
  )
}

export default Projects