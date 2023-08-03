import React from 'react'
import Particle from "../Particle"
import { Container } from "react-bootstrap"
import { Fade } from "react-reveal"
import ResumePDF from "../../assets/resume/resume.pdf"
import "./Resume.css"

const Resume = () => {
  return (
    <Container className="resume-container">
      <Particle />
      <Fade bottom duration={1200} distance="25px">
        <object data={ResumePDF} type="application/pdf" width="100%" height="780vh">
          <p className="d-flex justify-content-center mt-5">Unable to display Resumé.&nbsp;<a href={ResumePDF} target="_blank" rel="noopener noreferrer">View</a></p>
        </object>
      </Fade>
    </Container>
  )
}

export default Resume