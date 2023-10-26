import React from 'react'

const ServiceBox = ({title, description, icon}) => {
  return (
    <div className="box">
        <h2>{title}</h2>
        <p>{description}</p>
        <button><i className={icon}></i></button>
    </div>
  )
}

export default ServiceBox