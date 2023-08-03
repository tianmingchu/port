import React from 'react'
import "./ProjectCard.css"

const ProjectCard = (props) => {
  return (
  <article className="card">
    <div className="card-wrapper">
      {(props.vid) ? (<video loop autoPlay muted controls className="cardImg">
        <source src={require(`../../../assets/projects/${props.src}`)} type="video/mp4" />
      </video>) : (<img className="cardImg" src={require(`../../../assets/projects/${props.src}`)} alt="" />)}
      <div className={(props.vid) ? "vid-body" : "img-body"}>
        <h2><strong>{props.title}</strong><a href={props.link} target="_blank" rel="noopener noreferrer"><img className="card-icon" src={require(`../../../assets/projects/${props.icon}`)} width="36px" style={{float: "right", marginRight: "5px", marginTop:"1px"}} alt={props.title} /></a></h2>
        <p>{props.body}</p>
      </div>
    </div>
  </article>
  )
}

export default ProjectCard