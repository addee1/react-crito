import React from 'react'
import './ContactUsSection.css'

import iconVisitUs from '../../assets/images/icon-visit-us.svg'

const ContactUsSection = () => {
  return (
    <section className="contact-us">
        <div className="container-box">
            <div className="contact-us-box">
                <img src={iconVisitUs} />
                <div className="contact-text">
                    <h2>Visit Us</h2>
                    <p>Sveavägen 31<br/>111 34 STOCKHOLM</p>
                </div>
            </div>
            <div className="contact-us-box">
                <img src={iconVisitUs} />
                <div className="contact-text">
                    <h2>Call us</h2>
                    <p>+46 (8) 121 470 50<br/>+46 (8) 121 470 51</p>
                </div>
            </div>
            <div className="contact-us-box">
                <img src={iconVisitUs} />
                <div className="contact-text">
                    <h2>Email us</h2>
                    <p>info@crito.com<br/>support@crito.com</p>
                </div>
            </div>
        </div>
     </section>
  )
}

export default ContactUsSection