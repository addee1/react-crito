import './FooterSection.css'
import React from 'react'

import logoWhite from '../../assets/images/logo-white.svg'
import imageLineFooter from '../../assets/images/image-line-footer.svg'

const FooterSection = () => {
  return (
    <footer>
        <img className="line-footer" src={imageLineFooter}/>
        <div className="container-footer">
            <div className="logo-text">
                <img src={logoWhite}/>
                <p>Lorem ipsum dolor sit amet consectetur<br/>adipisicing elit. Placeat obcaecati voluptas<br/>voluptates! Voluptates laborum nam<br/>ratione minus necessitatibus, iure<br/>praesentium.</p>
            </div>
            <div className="info-footer">
                <h1>Company</h1>
                <a href="#">About</a>
                <a href="#">Features</a>
                <a href="#">Works</a>
                <a href="#">Career</a>
            </div>
            <div className="info-footer">
                <h1>Help</h1>
                <a href="#">Customer support</a>
                <a href="#">Delivery Details</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Privacy Policy</a>
            </div>
            <div className="info-footer">
                <h1>Resources</h1>
                <a href="#">Free eBooks</a>
                <a href="#">Development Tutorial</a>
                <a href="#">How to - Blog</a>
                <a href="#">Youtube Playlist</a>
            </div>
            <div className="info-footer">
                <h1>Link</h1>
                <a href="#">Free eBooks</a>
                <a href="#">Development Tutorial</a>
                <a href="#">How to - Blog</a>
                <a href="#">Youtube Playlist</a>
            </div>
        </div>
        <div className="second-footer">
            <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
            <div className="social-media-footer">
                <a href="#" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                <a href="#" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="#" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                <a href="#" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            </div>
        </div>
    </footer>
    
  )
}

export default FooterSection