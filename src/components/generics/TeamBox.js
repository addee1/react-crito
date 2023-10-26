import React from 'react'


const TeamBox = ({title, description, img}) => {
  return (
    <div className="team-1">
        <img src={img}/>
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
  )
}

export default TeamBox