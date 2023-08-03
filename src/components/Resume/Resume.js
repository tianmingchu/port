import React from 'react'
import Particle from "../Particle"
import { Container } from "react-bootstrap"
import { Fade } from "react-reveal"
import ResumePDF from "../../assets/resume/resume.pdf"
import "./Resume.css"

const Resume = () => {
  var width = window.innerWidth;
  return (
    <Container className="resume-container">
      <Particle />
      <Fade bottom duration={1200} distance="25px">
        {(width > 767) ? <object data={ResumePDF} type="application/pdf" width="100%" height="780vh">
          <div className="d-flex text-center mt-5">
            <p>Your web browser doesn't have a PDF plugin. Instead you can&nbsp;<a href={ResumePDF} target="_blank" rel="noopener noreferrer">click here to download the PDF.</a></p>
          </div>
        </object> : <object width="100%" height="100%" data="https://docs.google.com/gview?embedded=true&url=https://tianming.dev/static/media/resume.358312ae9ad172410b17.pdf">
          <div className="d-flex text-center mt-5">
            <p>Your web browser doesn't have a PDF plugin. Instead you can&nbsp;<a href={ResumePDF} target="_blank" rel="noopener noreferrer">click here to download the PDF.</a></p>
          </div>
        </object>}
      </Fade>
    </Container>
  )
}

export default Resume