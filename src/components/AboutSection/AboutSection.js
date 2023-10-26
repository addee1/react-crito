import './AboutSection.css'
import React from 'react'

import womanTablet from '../../assets/images/woman-tablet.svg'
import playButton from '../../assets/images/play-button.svg'

const AboutSection = () => {
  return (
    <section className="about-company">
        <div className="container">
            <div className="content-image">
                <img src={womanTablet} alt="happy woman with a tablet"/>
                <div className="blue-box">
                    <h2>Samantha Brown, Founder</h2>
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
                </div>
            </div>
            <div className="content-about">
                <h2>About Company</h2>
                <h1>We Are Business Consulting & Credit Repair Experts</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.<br/><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet.</p>
                <div className="button-content">
                    <a className="btn-about" href="#">Learn More<i className="fa-solid fa-location-arrow"></i></a>
                    <img src={playButton}/>
                    <h3>Intro Video</h3>
                </div>  
            </div>
        </div>
    </section>
  )
}

export default AboutSection