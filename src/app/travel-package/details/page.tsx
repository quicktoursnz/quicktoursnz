import Breadcrumb2 from '@/components/common/Breadcrumb2'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import BookingModal from '@/components/modal/BookingModal'
import EnquiryModal from '@/components/modal/EnquiryModal'
import LocationDetailsModal from '@/components/modal/LocationDetailsModal'
import RatingModal from '@/components/modal/RatingModal'
import Topbar from '@/components/topbar/Topbar'
import PackageDetails from '@/components/travel-package-section/PackageDetails'
import RevelentPackageSection from '@/components/travel-package-section/RevelentPackageSection'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <Topbar />
      <Header />
      <Breadcrumb2 />
      <LocationDetailsModal />
      <RatingModal />      
      <BookingModal/>
      <EnquiryModal />
      <PackageDetails />
      <RevelentPackageSection />
      <Footer />
    </>
  )
}

export default page
