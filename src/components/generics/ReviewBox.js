import React from 'react'

import stars from '../../assets/images/stars.svg'

const ReviewBox = ({avatar, name, jobtitle}) => {
  return (
    <div className="reviews-content">
        <img src={stars}/>
        <p>"Lorem ipsum dolor, sit amet consectetur<br/>adipisicing elit. Laudantium libero, ad<br/>dignissimos velit qui, dolorum obcaecati<br/>cum saepe nesciunt nemo eligendi numquam voluptate"</p>
        <div className="reviews-person">
            <img src={avatar}/>
            <div className="reviews-person-text">
                <h1>{name}</h1>
                <p>{jobtitle}</p>
            </div>
        </div>
    </div>
  )
}

export default ReviewBox