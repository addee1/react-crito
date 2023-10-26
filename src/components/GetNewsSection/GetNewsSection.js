import './GetNewsSection.css'
import React from 'react'

import imageLine3 from '../../assets/images/image-line3.svg'

const GetNewsSection = () => {
  return (
    <section className="get-news">
        <img src={imageLine3}/>
        <div className="container">
            <h1>Get News Updates By Signup</h1>
            <input className="mail-input" type="text" name="mail" placeholder="username@domain.com"/>
            <button className="btn-subscribe" href="#">Subscribe<i className="fa-solid fa-location-arrow"></i></button>
        </div>
    </section>
  )
}

export default GetNewsSection