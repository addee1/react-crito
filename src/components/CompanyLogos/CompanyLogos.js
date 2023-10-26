import './CompanyLogos.css'
import React from 'react'

import company1 from '../../assets/images/company-1.svg'
import company2 from '../../assets/images/company-2.svg'
import company3 from '../../assets/images/company-3.svg'
import company4 from '../../assets/images/company-4.svg'
import company5 from '../../assets/images/company-5.svg'


const CompanyLogos = () => {
  return (
    <section className="company-logos">
      <div className="container">
        <img src={company1}/>
        <img src={company2}/>
        <img src={company3}/>
        <img src={company4}/>
        <img src={company5}/>
      </div>
    </section>
  )
}

export default CompanyLogos