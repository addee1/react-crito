import React, { useState } from 'react'
import './MessageUs.css'






const MessageUs = () => {
    const [name, setName] = useState('')
    const [nameError, setNameError] = useState('false')
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('false')
    const [message, setMessage] = useState('')
    const [messageError, setMessageError] = useState('false')
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrorMessage('')
        
        
        
        const sendMessage = {name, email, message}
        const json = JSON.stringify(sendMessage)
        
        if (!nameError && !emailError && !messageError) {
            const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: json
            })

            clearForm()

            switch (result.status) {
                case 200:
                    alert('Message Sent! Thanks for contacting us :)')
                    break;
                case 400:
                    setErrorMessage('Something went wrong!')
                    break;    
            }
        }
       
    }

    const clearForm = () => {
        setName('')
        setEmail('')
        setMessage('')
    }

    const handleChange = (e) => {
        console.log(e.target.type)

        switch (e.target.name) {
            case 'name':
                setName(e.target.value)
                setNameError(validateLenght(e.target.value))
                break
            case 'email':
                setEmail(e.target.value)
                setEmailError(validateEmail(e.target.value))
                break
            case 'message':
            setMessage(e.target.value)
            setMessageError(validateLenght(e.target.value, 10))
                break
        }
    }

    const validateLenght = (value, minLenght=1) => {
        if (value.length < minLenght)
            return true
        return false
    }


    const validateEmail = (value) => {
        //  Måste vara en gilitg mailadress
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return !emailPattern.test(value)
        
      };

  return (
    <section className="message-us">
        <div className="container-message-us">
            <h1>Leave us a message<br/>for any information.</h1>
            <form onSubmit={handleSubmit} className="form">
                <p className="errorMessage">{errorMessage}</p>
                <div className="input-field">
                    <label className={`${nameError ? 'error': ''}`}>{`Name ${nameError ? ' is required*': ''}`}</label>
                    <input
                    id="nameInput"
                    className="name-input"
                    type="text"
                    name="name"
                    value={name}
                    placeholder="Name"
                    onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="input-field">
                    <label className={`${emailError ? 'error': ''}`}>{`Email ${emailError ? ' is not valid*': ''}`}</label>
                    <input
                    id="mailInput"
                    className="mail-input"
                    type="text"
                    name="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="input-field">
                    <label className={`${messageError ? 'error': ''}`}>{`Message ${messageError ? ' needs to be min. 10 characters*': ''}`}</label>
                    <textarea
                    id="messageInput"
                    className="message-input"
                    type="text"
                    name="message"
                    value={message}
                    placeholder="Message"
                    onChange={(e) => handleChange(e)}
                    />
                </div>
                <button type="submit" className="btn-send-message">Send Message<i className="fa-solid fa-location-arrow"></i></button>
            </form>
        </div>
     </section>
  )
}

export default MessageUs