import React from 'react'
import { Container } from "react-bootstrap"
import Star from "../../assets/home/star.png"
import "./Footer.css"

const Footer = () => {
  return (
    <div className="foot">
      <img src={Star} width="25px" style={{marginBottom:"2px"}} alt="star" />
      Crafted by Tianming
      <img src={Star} width="25px" style={{marginBottom:"2px"}} alt="star" />
    </div>
  )
}

export default Footer