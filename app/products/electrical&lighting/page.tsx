"use clent"
import CallUsBanner from '@/components/About/CallUsButton'
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
      <div className='min-h-screen '>

      </div>
      <CallUsBanner/>
      <Footer/>
    </div>
  )
}

export default page