import './Showcase.css'
import React from 'react'

import man2 from '../../assets/images/man2.png'

const Showcase = () => {
  return (
    <div>
      <section class="showcase">
        <div class="container">
          <div class="content">
            <h1>We Provide The Best Business Solutions</h1>
            <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
            <a class="btn-yellow" href="*">Get Consulting<i class="fa-solid fa-location-arrow"></i></a>
            <a class="btn-trans" href="*">Learn More<i class="fa-solid fa-location-arrow"></i></a>
          </div>
          <img src={man2} alt="image of a man with a tablet" />
        </div>
      </section>
    </div>
  )
}

export default Showcase