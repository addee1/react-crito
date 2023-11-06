import React from 'react'
import './LetsConnectSection.css'
import { Link } from 'react-router-dom'

import imageLine from '../../assets/images/image-lines.svg'

const ContactSection = () => {
  return (
    <section className="lets-connect">
        <img src={imageLine} />
        <div className="container">
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <h1>Let's Connect</h1>
        </div>
    </section>
  )
}

export default ContactSection