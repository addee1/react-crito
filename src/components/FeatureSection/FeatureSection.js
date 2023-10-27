import React from 'react'
import './FeatureSection.css'
import FeatureBox from '../generics/FeatureBox'

const FeatureSection = () => {
  return (
    <div>
        <section className="features">
            <div className="container-1">
                <div className="features-box">
                    <h2>Features</h2>
                    <h1>Our Accounting is<br/>trusted by thousand<br/>of companies</h1>
                    <a className="btn-features" href="*">Learn More<i className="fa-solid fa-location-arrow"></i></a>
                </div>
                <div className="features-box-2">
                    <FeatureBox title="Business Advice" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit." icon="fa-regular fa-handshake"/>
                    <FeatureBox title="Startup Business" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit." icon="fa-regular fa-lightbulb"/>
                    <FeatureBox title="Financial Advice" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit." icon="fa-solid fa-money-bill-trend-up"/>
                    <FeatureBox title="Risk Management" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit." icon="fa-solid fa-box"/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default FeatureSection