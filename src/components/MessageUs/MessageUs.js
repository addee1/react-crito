import React from 'react'

import './MessageUs.css'

const MessageUs = () => {
  return (
    <section className="message-us">
        <div className="container-message-us">
            <h1>Leave us a message<br/>for any information.</h1>
            <div className="form">
                <div className="input-field">
                    <input className="name-input" type="text" name="name" placeholder="Name*" />
                </div>
                <div className="input-field">
                    <input className="mail-input" type="text" name="mail" placeholder="Email*" />
                </div>
                <div className="input-field">
                    <input className="message-input" type="text" name="message" placeholder="Message*" />
                </div>
                <button className="btn-send-message" href="#">Send Message<i className="fa-solid fa-location-arrow"></i></button>
            </div>
        </div>
     </section>
  )
}

export default MessageUs