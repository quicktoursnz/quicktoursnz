import AboutV7 from '@/components/about-page-component/AboutV7'
import BlogV7 from '@/components/blog/BlogV7'
import DestinationSectionV7 from '@/components/destination-section/DestinationSectionV7'
import HeroV7 from '@/components/hero-section/HeroV7'
import Footer5 from '@/components/layout/Footer5'
import Header3 from '@/components/layout/HeaderStyle1V3'
import OfferBannerV7 from '@/components/offer-section/OfferBannerV7'
import Partner from '@/components/Partner'
import TestimonialV7 from '@/components/testimonial-section/TestimonialV7'
import Home7TourGuide from '@/components/tour-guide/Home7TourGuide'
import PopularPackageV2 from '@/components/travel-package-section/PopularPackage/PopularPackageV2'
import React from 'react'

const page = () => {
  return (
    <>
      <Header3 />
     <HeroV7/>
     <DestinationSectionV7/>
      <AboutV7/>
      <PopularPackageV2/>
     <OfferBannerV7/>
      <Partner/>
      <Home7TourGuide/>
      <TestimonialV7/>
     <BlogV7/>
      <Footer5/>
    </>

  )
}

export default page
