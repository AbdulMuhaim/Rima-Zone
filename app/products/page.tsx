"use client"
import Header from '@/components/Header/Header'
import Navbar from '@/components/Header/Navbar'
import CommonBg from '@/components/UI/CommonBg'
import Categories from '@/components/Products/Categories'
import React from 'react'
import Footer from '@/components/Footer/Footer'
import CallUsBanner from '@/components/About/CallUsButton'

function page() {
  return (
    <div className='bg-white'>
      <Header />
      <Navbar />
      <CommonBg />
      <Categories/>
      <CallUsBanner/>
      <Footer/>

    </div>
  )
}

export default page