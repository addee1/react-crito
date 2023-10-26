import React from 'react'

const WhyChooseUsBox = ({title, description, icon}) => {
  return (
    <div className="why-choose-us-box">
        <img src={icon}/>
        <div className="why-choose-us-text">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default WhyChooseUsBox