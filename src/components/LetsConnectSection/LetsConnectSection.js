import React from 'react'
import './LetsConnectSection.css'

import imageLine from '../../assets/images/image-lines.svg'

const ContactSection = () => {
  return (
    <section className="lets-connect">
        <img src={imageLine} />
        <div className="container">
            <a href="index.html">Home</a>
            <a href="contact.html">Contact</a>
            <h1>Let's Connect</h1>
        </div>
    </section>
  )
}

export default ContactSection