import React from 'react'
import BannerSection from '@/components/hero-section/HeroV2'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header2V2'
import Partner from '@/components/Partner'
import TopbarSlider from '@/components/topbar/TopbarSlider'
import PopularPackage from '@/components/travel-package-section/PopularPackage/PopularPackageV1'
import ServiceSection from '@/components/service-section/ServiceSectionV2'
import DestinationSection from '@/components/destination-section/DestinationSectionV2'
import AboutSection from '../../components/about-page-component/AboutV2'
import DayOnePackageSection from '@/components/travel-package-section/DayOnePackageV2'
import OfferBannerSection from '@/components/offer-section/OfferBannerV2'
import OfferPackageSection from '@/components/travel-package-section/OfferPackageV2'
import AwardBannerSection from '@/components/award-section/AwardBannerV2'
import Blogsection from '@/components/blog/BlogV2'
import TestimonialSection from '@/components/testimonial-section/TestimonialV2'
import CounterSection from '@/components/counter-section/CounterV2'
import GallerySection from '@/components/gallery-section/GalleryV2'
import FilterComponent from '@/components/common/FilterComponent'

const page = () => {
  return (
    <>
      <Header />
      <TopbarSlider />
      <BannerSection />
      <FilterComponent />
      <PopularPackage />
      <ServiceSection />
      <DestinationSection />
      <AboutSection />
      <DayOnePackageSection />
      <OfferBannerSection />
      <OfferPackageSection />
      <AwardBannerSection />
      <Partner />
      <Blogsection />
      <TestimonialSection />
      <CounterSection />
      <GallerySection />
      <Footer />
    </>

  )
}

export default page
