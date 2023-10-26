import React from 'react'

const FeatureBox = ({title, description, icon}) => {
  return (
    <div className="business-advice">
        <i className={icon}></i>
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
  )
}

export default FeatureBox