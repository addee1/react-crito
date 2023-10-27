import './MeetOurTeamSection.css'
import React from 'react'

import Kristine from '../../assets/images/Kristine.svg'
import Mark from '../../assets/images/Mark.svg'
import Kimberly from '../../assets/images/Kimberly.svg'
import Justin from '../../assets/images/Justin.svg'
import dotsIcon from '../../assets/images/dots-icon.svg'
import stars from '../../assets/images/stars.svg'
import Cassandra from '../../assets/images/Cassandra.svg'
import Amanda from '../../assets/images/Amanda.svg'
import Jack from '../../assets/images/Jack.svg'
import TeamBox from '../generics/TeamBox'
import ReviewBox from '../generics/ReviewBox'


const MeetOurTeamSection = () => {
  return (
    <section className="meet-our-team">
        <div className="container">'
            <div className="content-meet-our-team">
                <h2>Meet Our Team</h2>
                <div className="content2-meet-our-team">
                    <h1>Experience Team Members</h1>
                    <a className="btn-browse-team" href="*">Browse Team<i className="fa-solid fa-location-arrow"></i></a>
                </div>
                <div className="team">
                    <TeamBox title="Kristine Palmer" description="Chef Operation Officer" img={Kristine}/>
                    <TeamBox title="Mark Aubri" description="Senior Consultant" img={Mark}/>
                    <TeamBox title="Kimberly Hansen" description="Senior Consultant" img={Kimberly}/>
                    <TeamBox title="Justin Willoman" description="Senior Tech Consultant" img={Justin}/>
                </div>
                <div className="dots">
                    <img src={dotsIcon}/>
                </div>
            </div>
        </div>
        <div className="reviews">
            <div className="content">
                <h2>Testimonial</h2>
                <h1>What Our Client Says</h1>
            </div>
            <div className="container testimonial">
                <ReviewBox avatar={Cassandra} name="Cassandra Warren" jobtitle="Business Manager, Dorfus" />
                <ReviewBox avatar={Amanda} name="Amanda Tulling" jobtitle="Senior Developer, Square" />
                <ReviewBox avatar={Jack} name="Jack McDogglas" jobtitle="Key Account Manager, Gobona" />
            </div>
            <div className="all-reviews">
                <a className="btn-all-reviews" href="*">All Reviews<i className="fa-solid fa-location-arrow"></i></a>    
            </div>
        </div>
    </section>
    
  )
}

export default MeetOurTeamSection