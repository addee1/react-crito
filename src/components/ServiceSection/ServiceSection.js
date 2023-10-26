import './ServiceSection.css'
import React from 'react'

import imageLine2 from '../../assets/images/image-line2.svg'
import ServiceBox from '../generics/ServiceBox'

const ServiceSection = () => {
  return (
    <section className="services">
        <img src={imageLine2}/>
        <div className="container">
            <h2>Our Services</h2>
            <h1>We Provide The Best<br/>Service For Consulting</h1>
            <div className="column">
                <ServiceBox title="Business Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." icon="fa-solid fa-arrow-right"/>
                <ServiceBox title="Startup Business" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." icon="fa-solid fa-arrow-right"/>
                <ServiceBox title="Financial Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." icon="fa-solid fa-arrow-right"/>
                <ServiceBox title="Risk Management" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus." icon="fa-solid fa-arrow-right"/>
            </div>
            <div className="btn-services-content">
                <a className="btn-services" href="#">Learn More<i className="fa-solid fa-location-arrow"></i></a>
            </div>
        </div>
    </section>
  )
}

export default ServiceSection