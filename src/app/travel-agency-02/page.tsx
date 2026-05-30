import HeroBannerSection from '@/components/hero-section/HeroV3'
import FooterSection from '@/components/layout/Footer2'
import HeaderSection from '@/components/layout/Header3'
import Partner from '@/components/Partner'
import React from 'react'
import ServiceOfferBanner from '@/components/service-section/ServiceOfferBannerV1'
import TravelpackageSection from '@/components/travel-package-section/TravelpackageV3'
import DestinationSection from '@/components/destination-section/DestinationSectionV3'
import AboutSection from '@/components/about-page-component/AboutV3'
import CounterSection from '@/components/counter-section/CounterV3'
import DayOnePacakgeSection from '@/components/travel-package-section/DayOnePacakgeV3'
import TourGuideSection from '@/components/tour-guide/TourGuideV3'
import TestimonialSection from '@/components/testimonial-section/TestimonialV3'
import BlogSection from '@/components/blog/BlogV3'
import FilterComponent from '@/components/common/FilterComponent'
const page = () => {
  return (
    <>
      <HeaderSection />
      <HeroBannerSection />
      <FilterComponent />
      <ServiceOfferBanner />
      <TravelpackageSection />
      <DestinationSection />
      <AboutSection />
      <CounterSection />
      <DayOnePacakgeSection />
      <TourGuideSection />
      <TestimonialSection />
      <Partner />
      <BlogSection />
      <FooterSection />
    </>

  )
}

export default page
