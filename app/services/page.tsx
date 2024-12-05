import CallUsBanner from '@/components/About/CallUsButton'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Navbar from '@/components/Header/Navbar'
import Service from '@/components/Services/Service'
import CommonBg from '@/components/UI/CommonBg'

import React from 'react'

function page() {
  return (
    <div >
      <Header />
      <Navbar />
      <CommonBg />
      {/* <div className='min-h-screen bg-gray-500 '>
        <div className='container grid grid-rows-1 md:grid-cols-5 bg-yellow-300 w-full'>
            <div className='row-span-1 md:col-span-3 bg-red-400 min-h-32'>
                <div>
                    <Image
                    src="https://cdn.pixabay.com/photo/2024/01/02/14/58/leaf-8483401_640.jpg"
                     width={100}
                     height={100}
                    alt='serviceImage'
                    className='h-full w-full'
                    />
                </div>
            </div>
            <div className='row-span-1 md:col-span-2 bg-green-300 min-h-32'></div>

        </div>

      </div> */}

      <Service/>
      <CallUsBanner/>
      <Footer/>
    </div>
  )
}

export default page