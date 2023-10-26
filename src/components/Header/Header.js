import './Header.css'
import React from 'react'

import logo from '../../assets/images/Logo.svg'


const Header = () => {
  return (
    <header>
        <div className="container">
            <a href="#"><img className="logo" src={logo} alt="crito logotype" /></a>
            <button className="menu-bars"><i className="fa-solid fa-bars"></i></button>
            <div className="menu">
                <div className="top-menu">
                    <div className="contact-information">
                        <div className="content-box">
                            <i className="fa-solid fa-phone-volume"></i>
                            +46 (8) 121 470 50
                        </div>
                        <div className="content-box">
                            <i className="fa-regular fa-envelope"></i>
                            info@crito.com
                        </div>
                        <div className="content-box last">
                            <i className="fa-solid fa-location-dot"></i>
                            Sveavägen 31, 111 34 STOCKHOLM
                        </div>
                    </div>
                    <div className="social-media">
                        <a href="#" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                        <a href="#" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
                <div className="main-menu">
                    <nav>
                        <a href="index.html">Home</a>
                        <a href="#">Service</a>
                        <a href="#">News</a>
                        <a href="contact.html">Contact</a>
                    </nav>
                    <a className="btn-yellow" href="#">Login <i className="fa-solid fa-location-arrow"></i></a>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header