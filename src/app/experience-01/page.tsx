import AboutV6 from '@/components/about-page-component/AboutV6'
import BlogV6 from '@/components/blog/BlogV6'
import FilterStyle2 from '@/components/common/FilterStyle2'
import DestinationSectionV6 from '@/components/destination-section/DestinationSectionV6'
import FaqV6 from '@/components/faq-section/FaqV6'
import HeroV6 from '@/components/hero-section/HeroV6'
import Footer3 from '@/components/layout/Footer3'
import Header2 from '@/components/layout/HeaderStyle1V2'
import Partner from '@/components/Partner'
import ServiceOfferBannerV6 from '@/components/service-section/ServiceOfferBannerV6'
import ServiceSectionV6 from '@/components/service-section/ServiceSectionV6'
import TourGuideV6 from '@/components/tour-guide/TourGuideV6'
import TravelPackageV6 from '@/components/travel-package-section/TravelPackageV6'
import Link from 'next/link'
import React from 'react'

const ExperienceOneHomepage: React.FC = () => {
  return (
    <>
      <Header2 />
      <HeroV6 />
      <FilterStyle2/>
      <DestinationSectionV6 />
      <ServiceSectionV6 />
      <ServiceOfferBannerV6 />
      <TravelPackageV6 />
      <AboutV6 />
      <TourGuideV6 />
      <FaqV6 />
      <BlogV6 />
      <Partner />
      <Footer3 />
    </>

  )
}

export default ExperienceOneHomepage
