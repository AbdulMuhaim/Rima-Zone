"use client"
import ContactForm from '@/components/Contact/ContactForm'
import ContactInfo from '@/components/Contact/ContactInfo'
import Map from '@/components/Contact/Map'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Navbar from '@/components/Header/Navbar'
import CommonBg from '@/components/UI/CommonBg'

import React from 'react'

function page() {
  return (
    <div>
      <Header />
      <Navbar />
      <CommonBg />

      <div className="max-w-[1150px] mx-auto p-4 lg:p-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <ContactInfo />
        <ContactForm />
      </div>
 <Map/>
<Footer/>
    </div>
  )
}

export default page