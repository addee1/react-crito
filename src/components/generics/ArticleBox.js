import React from 'react'

const ArticleBox = ({img, day, month, description }) => {
  return (
    <div className="articles-box">
        <img src={img}/>
        <div className="square">
            <h2>{day}</h2>
            <p>{month}</p>
        </div>
        <h1>Business</h1>
        <h2>{description}</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
    </div>
  )
}

export default ArticleBox