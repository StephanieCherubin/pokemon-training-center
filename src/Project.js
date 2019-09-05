import React from 'react';
import './Project.css';

function Project({ image, title, link }) {
  return(
    <div>
      <img src={image} width="300" height="300" alt="" />
      <h3> {title}</h3>
      <a className="evolution" href={link}>{title} Evolution Chart</a>
    </div>
  )
}

export default Project;