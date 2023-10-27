import './ProjectAndCaseSection.css'
import React from 'react'

import image1 from '../../assets/images/image-1.svg'
import image2 from '../../assets/images/image-2.svg'
import image3 from '../../assets/images/image-3.svg'
import image4 from '../../assets/images/image-4.svg'
import ProjectBox from '../generics/ProjectBox'

const ProjectAndCaseSection = () => {
  return (
    <section className="project">
        <div className="container">
            <h2>Project & Case Studies</h2>
            <h1>Let’s Looks Our Global Projects</h1>
            <div className="content">
                <ProjectBox title="Grow your business" img={image1}/>
                <ProjectBox title="Why your client needs a responsive website" img={image2}/>
                <ProjectBox title="Educate your employees to get better results" img={image3}/>
                <ProjectBox title="Business Insights is a important piece of your business" img={image4}/>
            </div>
            <div className="all-projects-button">
                <a className="btn-all-recent-projects" href="*">All Recent Projects<i className="fa-solid fa-location-arrow"></i></a>
            </div>
        </div>
    </section>
    
  )
}

export default ProjectAndCaseSection