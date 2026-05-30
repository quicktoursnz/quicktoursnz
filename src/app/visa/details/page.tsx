
import Faq from '@/components/Home1/Faq'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Topbar from '@/components/topbar/Topbar'
import VisaDetailsPackage from '@/components/visa/VisaDetailsPackage'
import VisaSuccessStory from '@/components/visa/VisaSuccessStory'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <Topbar />
      <Header />
      <div className="breadcrumb-section" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/assets/img/innerpages/breadcrumb-bg7.jpg)' }}>
        <div className="container">
          <div className="banner-content">
            <h1>Australia Visa</h1>
            <ul className="breadcrumb-list">
              <li><Link href="/">Home</Link></li>
              <li>Australia Visa</li>
            </ul>
          </div>
        </div>
      </div>
      <VisaDetailsPackage />
      <VisaSuccessStory />
      <Faq />
      <Footer />
    </>
  )
}

export default page
