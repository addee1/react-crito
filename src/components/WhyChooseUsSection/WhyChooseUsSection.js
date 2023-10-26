import './WhyChooseUsSection.css'
import React from 'react'

import processIcon from '../../assets/images/process-icon.svg'
import strategicIcon from '../../assets/images/strategic-icon.svg'
import experienceIcon from '../../assets/images/experience-icon.svg'
import artificalIcon from '../../assets/images/artifical-icon.svg'
import twoGirls from '../../assets/images/two-girls.svg'
import WhyChooseUsBox from '../generics/WhyChooseUsBox'


const WhyChooseUsSection = () => {
  return (
    <section className="why-choose-us">
        <div className="container-2">
            <div className="why-choose-us-content">
                <div className="text-box">
                    <h2>Why Choose Us</h2>
                    <h1>Why We Are The<br/>Best Business<br/>Consulting Agency</h1>
                </div>
                <WhyChooseUsBox title="Process Excellence" description="Lorem, ipsum dolor sit amet consectetur." icon={processIcon}/>
                <WhyChooseUsBox title="Strategic Planning" description="Lorem, ipsum dolor sit amet consectetur." icon={strategicIcon}/>
                <WhyChooseUsBox title="Experience Design" description="Lorem, ipsum dolor sit amet consectetur." icon={experienceIcon}/>
                <WhyChooseUsBox title="Artificial Inteligence" description="Lorem, ipsum dolor sit amet consectetur." icon={artificalIcon}/>
            </div>
            <div className="why-choose-us-content2">
                <img src={twoGirls}/>
                <div className="color-box"></div>
            </div>
        </div>
    </section>
  )
}

export default WhyChooseUsSection