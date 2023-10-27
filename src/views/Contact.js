import React from 'react'
import Header from '../components/Header/Header'
import LetsConnectSection from '../components/LetsConnectSection/LetsConnectSection'
import FooterSection from '../components/FooterSection/FooterSection'
import ContactUsSection from '../components/ContactUsSection/ContactUsSection'
import MessageUs from '../components/MessageUs/MessageUs'
import MapSection from '../components/MapSection/MapSection'

const Contact = () => {
  return (
    <div class="wrapper">
        <Header />
        <LetsConnectSection />
        <ContactUsSection />
        <MessageUs />
        <MapSection />
        <FooterSection />
    </div>
  )
}

export default Contact