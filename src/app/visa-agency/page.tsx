import Counter from '@/components/about-page-component/Counter'
import Breadcrumb from '@/components/common/Breadcrupmb'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import OfferSectionV5 from '@/components/offer-section/OfferSectionV5'
import Partner from '@/components/Partner'
import Topbar from '@/components/topbar/Topbar'
import Banner from '@/components/visa-agency-sections/Banner'
import Blog from '@/components/visa-agency-sections/Blog'
import ConpanyInfo from '@/components/visa-agency-sections/ConpanyInfo'
import ContactSection from '@/components/visa-agency-sections/ContactSection'
import CountryServe from '@/components/visa-agency-sections/CountryServe'
import Faq from '@/components/visa-agency-sections/Faq'
import FilterSearch from '@/components/visa-agency-sections/FilterSearch'
import ProcessSection from '@/components/visa-agency-sections/ProcessSection'
import Testimonial from '@/components/visa-agency-sections/Testimonial'
import VisaSlider from '@/components/visa-agency-sections/VisaSlider'
import React from 'react'

const page = () => {
  return (
    <>
      <Topbar />
      <Header />

      {/* home8 Banner Section Start*/}
      <Banner />
      {/* home8 Banner Section End*/}
      {/* home8 Feature Section Start*/}
      <FilterSearch />
      {/* home8 Feature Section End*/}
      {/* home8 partner area Section Start*/}
      <Partner />
      {/* home8 partner area Section End*/}
      {/* home8 offer Section Start*/}
      <OfferSectionV5 />
      {/* home8 offer Section End*/}
      {/* home8 visa slider Section Start*/}
      <VisaSlider />
      {/* home8 visa slider Section End*/}
      {/* home8 process Section Start*/}
      <ProcessSection />
      {/* home8 process Section End*/}
      {/* home8 process Section Start*/}
      <ConpanyInfo />
      {/* home8 process Section End*/}
      {/* home8 country Section Start*/}
      <CountryServe />
      {/* home8 country Section End*/}
      {/* home8 contact Section Start*/}
      <ContactSection />
      {/* home8 contact Section End*/}
      {/* home8 faq Section Start*/}
      <Faq />
      {/* home8 faq Section End*/}
      {/* home8 testimonial Section Start*/}
      <Testimonial />
      {/* home8 testimonial Section End*/}
      {/* home8 blog Section Start*/}
      <Blog />
      {/* home8 blog Section End*/}
      {/* home8 Counter Section Start*/}
      <Counter />
      {/* home8 Counter Section End*/}
      <Footer />
    </>
  )
}

export default page
