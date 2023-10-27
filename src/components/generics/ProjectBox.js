import React from 'react'

const ProjectBox = ({title, img}) => {
  return (
    <div className="project-box-1">
        <img src={img}/>
        <p>{title}</p>
        <div className="project-button">
            <a className="btn-read-more" href="*">Read More<i className="fa-solid fa-location-arrow"></i></a>
        </div>
    </div>
  )
}

export default ProjectBox