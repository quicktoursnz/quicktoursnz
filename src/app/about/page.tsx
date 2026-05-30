import AboutJurney from '@/components/about-page-component/AboutJurney'
import AboutSection from '@/components/about-page-component/AboutSection'
import Counter from '@/components/about-page-component/Counter'
import PartnersAndVideo from '@/components/about-page-component/PartnersAndVideo'
import Breadcrumb from '@/components/common/Breadcrupmb'
import Faq from '@/components/Home1/Faq'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import TesimonialV1 from '@/components/testimonial-section/TesimonialV1'
import React from 'react'

const page = () => {
    return (
        <div className='bg-white'>
            <Header />
            <Breadcrumb title="About GoFly" currentPage="About GoFly" bgImage='breadcrumb-bg2.jpg' />
            <AboutSection />
            <AboutJurney />
            <PartnersAndVideo />
            <TesimonialV1 />
            <Faq />
            <Counter />
            <Footer />
        </div>
    )
}

export default page
