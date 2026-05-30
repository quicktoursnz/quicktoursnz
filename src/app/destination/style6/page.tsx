import Breadcrumb from '@/components/common/Breadcrupmb'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Topbar from '@/components/topbar/Topbar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
      <Topbar />
      <Header />
      <Breadcrumb title="Destinations 06" currentPage="Destinations 06" bgImage='breadcrumb-bg1.jpg' />
      <div className="destination-page pt-100 mb-100">
        <div className="container">
          <div className="row gy-md-5 gy-4">
            <div className="col-lg-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="destination-card4">
                <div className="destination-img-wrap" style={{ backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%), url(/assets/img/innerpages/destination-card4-img1.jpg)' }}>
                  <div className="destination-title-area">
                    <h2>Europe</h2>
                    <span>35 Tour </span>
                  </div>
                </div>
                <div className="destination-wrapper">
                  <ul className="destination-list">
                    <li>
                      <Link href="/destination/details">
                        <Image width={15} height={15} src="/assets/img/home1/france-flag.png" alt="" />
                        Paris, France
                      </Link>
                    </li>
                    <li>
                      <Link href="/destination/details">
                        <Image width={15} height={15} src="/assets/img/home1/uk-flag.png" alt="" />
                        United Kingdom
                      </Link>
                    </li>
                    <li>
                      <Link href="/destination/details">
                        <Image width={15} height={15} src="/assets/img/home1/netherland-flag.png" alt="" />
                        Netherlands
                      </Link>
                    </li>
                  </ul>
                  <ul className="destination-list">
                    <li>
                      <Link href="/destination/details">
                        <Image width={15} height={15} src="/assets/img/home1/italy-flag.png" alt="" />
                        Italy
                      </Link>
                    </li>
                    <li>
                      <Link href="/destination/details">
                        <Image width={15} height={15} src="/assets/img/home1/greece-flag.png" alt="" />
                        Greece
                      </Link>
                    </li>
                    <li>
                      <Link href="/destination/details">
                        <Image width={15} height={15} src="/assets/img/home1/romania-flag.png" alt="" />
                        Romania
                      </Link>
                    </li>
                  </ul>
                  <ul className="destination-list">
                    <li>
                      <Link href="/destination/details">
                        <Image width={15} height={15} src="/assets/img/home1/germany-flag.png" alt="" />
                        Germany
                      </Link>
                    </li>
                    <li>
                      <Link href="/destination/details">
                        <Image width={15} height={15} src="/assets/img/home1/portugal-flag.png" alt="" />
                        Portugal
                      </Link>
                    </li>
                    <li>
                      <Link href="/destination/details">
                        <Image width={15} height={15} src="/assets/img/home1/switzerland-flag.png" alt="" />
                        Switzerland
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="destination-card4">
                <div className="destination-img-wrap" style={{ backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%), url(/assets/img/innerpages/destination-card4-img2.jpg)' }}>
                  <div className="destination-title-area">
                    <h2>Asia</h2>
                    <span>50 Tour</span>
                  </div>
                </div>
                <div className="destination-wrapper">
                  <ul className="destination-list">
                    <li>
                      <Link href="/destination/details">
                        <Image width={15} height={15} src="/assets/img/home1/japan-flag.png" alt="" />
                        Tokyo, Japan
                      </Link>
                    </li>
                    <li>
                      <Link href="/destination/details">
                        <Image width={15} height={15} src="/assets/img/home1/indonesia-flag.png" alt="" />
                        Indonesia
                      </Link>
                    </li>
                    <li>
                      <Link href="/destination/details">
                        <Image width={15} height={15} src="/assets/img/home1/thailand-flag.png" alt="" />
                        Thailand
                      </Link>
                    </li>
                  </ul>
                  <ul className="destination-list">
                    <li>
                      <Link href="/destination/details">
                        <Image width={15} height={15} src="/assets/img/home1/malaysia-flag.png" alt="" />
                        Malaysia
                      </Link>
                    </li>
                    <li>
                      <Link href="/destination/details">
                        <Image width={15} height={15} src="/assets/img/home1/vietnam-flag.png" alt="" />
                        Hanoi, Vietnam
                      </Link>
                    </li>
                    <li>
                      <Link href="/destination/details">
                        <Image width={15} height={15} src="/assets/img/home1/india-flag.png" alt="" />
                        India
                      </Link>
                    </li>
                  </ul>
                  <ul className="destination-list">
                    <li>
                      <Link href="/destination/details">
                        <Image width={15} height={15} src="/assets/img/home1/philippines-flag.png" alt="" />
                        Philippines
                      </Link>
                    </li>
                    <li>
                      <Link href="/destination/details">
                        <Image width={15} height={15} src="/assets/img/home1/singapore-flag.png" alt="" />
                        Singapore
                      </Link>
                    </li>
                    <li>
                      <Link href="/destination/details">
                        <Image width={15} height={15} src="/assets/img/home1/turkey-flag.png" alt="" />
                        Turkey
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="destination-card4">
                <div className="destination-img-wrap" style={{ backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%), url(/assets/img/innerpages/destination-card4-img3.jpg)' }}>
                  <div className="destination-title-area">
                    <h2>Africa</h2>
                    <span>70 Tour</span>
                  </div>
                </div>
                <div className="destination-wrapper">
                  <ul className="destination-list">
                    <li>
                      <Link href="/destination/details">
                        <Image width={15} height={15} src="/assets/img/home1/egypt-flag.png" alt="" />
                        Egypt
                      </Link>
                    </li>
                    <li>
                      <Link href="/destination/details">
                        <Image width={15} height={15} src="/assets/img/home1/south-africa-flag.png" alt="" />
                        South Africa
                      </Link>
                    </li>
                    <li>
                      <Link href="/destination/details">
                        <Image width={15} height={15} src="/assets/img/home1/zimbabwe-flag.png" alt="" />
                        Zimbabwe
                      </Link>
                    </li>
                  </ul>
                  <ul className="destination-list">
                    <li>
                      <Link href="/destination/details">
                        <Image width={15} height={15} src="/assets/img/home1/kenya-flag.png" alt="" />
                        Kenya
                      </Link>
                    </li>
                    <li>
                      <Link href="/destination/details">
                        <Image width={15} height={15} src="/assets/img/home1/morocco-flag.png" alt="" />
                        Morocco
                      </Link>
                    </li>
                    <li>
                      <Link href="/destination/details">
                        <Image width={15} height={15} src="/assets/img/home1/senegal-flag.png" alt="" />
                        Senegal
                      </Link>
                    </li>
                  </ul>
                  <ul className="destination-list">
                    <li>
                      <Link href="/destination/details">
                        <Image width={15} height={15} src="/assets/img/home1/madagascar-flag.png" alt="" />
                        Madagascar
                      </Link>
                    </li>
                    <li>
                      <Link href="/destination/details">
                        <Image width={15} height={15} src="/assets/img/home1/ghana-flag.png" alt="" />
                        Ghana
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="destination-card4">
                <div className="destination-img-wrap" style={{ backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%), url(/assets/img/innerpages/destination-card4-img4.jpg)' }}>
                  <div className="destination-title-area">
                    <h2>Oceneia</h2>
                    <span>25 Tour</span>
                  </div>
                </div>
                <div className="destination-wrapper">
                  <ul className="destination-list">
                    <li>
                      <Link href="/destination/details">
                        <Image width={15} height={15} src="/assets/img/home1/australia-flag.png" alt="" />
                        Australia
                      </Link>
                    </li>
                    <li>
                      <Link href="/destination/details">
                        <Image width={15} height={15} src="/assets/img/home1/new-zealand-flag.png" alt="" />
                        New Zealand
                      </Link>
                    </li>
                    <li>
                      <Link href="/destination/details">
                        <Image width={15} height={15} src="/assets/img/home1/papua-new-guinea-flag.png" alt="" />
                        P. New Guinea
                      </Link>
                    </li>
                  </ul>
                  <ul className="destination-list">
                    <li>
                      <Link href="/destination/details">
                        <Image width={15} height={15} src="/assets/img/home1/palau-flag.png" alt="" />
                        Palau
                      </Link>
                    </li>
                    <li>
                      <Link href="/destination/details">
                        <Image width={15} height={15} src="/assets/img/home1/nauru-flag.png" alt="" />
                        Nauru
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="destination-card4">
                <div className="destination-img-wrap" style={{ backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%), url(/assets/img/innerpages/destination-card4-img5.jpg)' }}>
                  <div className="destination-title-area">
                    <h2>Middle East</h2>
                    <span>40 Tour</span>
                  </div>
                </div>
                <div className="destination-wrapper">
                  <ul className="destination-list">
                    <li>
                      <Link href="/destination/details">
                        <Image width={15} height={15} src="/assets/img/home1/uae-flag.png" alt="" />
                        Arab Emirates
                      </Link>
                    </li>
                    <li>
                      <Link href="/destination/details">
                        <Image width={15} height={15} src="/assets/img/home1/qatar-flag.png" alt="" />
                        Qatar
                      </Link>
                    </li>
                    <li>
                      <Link href="/destination/details">
                        <Image width={15} height={15} src="/assets/img/home1/bahrain-flag.png" alt="" />
                        Bahrain
                      </Link>
                    </li>
                  </ul>
                  <ul className="destination-list">
                    <li>
                      <Link href="/destination/details">
                        <Image width={15} height={15} src="/assets/img/home1/saudi-arabia-flag.png" alt="" />
                        Saudi Arabia
                      </Link>
                    </li>
                    <li>
                      <Link href="/destination/details">
                        <Image width={15} height={15} src="/assets/img/home1/jordan-flag.png" alt="" />
                        Jordan
                      </Link>
                    </li>
                    <li>
                      <Link href="/destination/details">
                        <Image width={15} height={15} src="/assets/img/home1/palestine-flag.png" alt="" />
                        Palestine
                      </Link>
                    </li>
                  </ul>
                  <ul className="destination-list">
                    <li>
                      <Link href="/destination/details">
                        <Image width={15} height={15} src="/assets/img/home1/oman-flag.png" alt="" />
                        Oman
                      </Link>
                    </li>
                    <li>
                      <Link href="/destination/details">
                        <Image width={15} height={15} src="/assets/img/home1/syria-flag.png" alt="" />
                        Syria
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="destination-card4">
                <div className="destination-img-wrap" style={{ backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%), url(/assets/img/innerpages/destination-card4-img6.jpg)' }}>
                  <div className="destination-title-area">
                    <h2>North America</h2>
                    <span>50 Tour</span>
                  </div>
                </div>
                <div className="destination-wrapper">
                  <ul className="destination-list">
                    <li>
                      <Link href="/destination/details">
                        <Image width={15} height={15} src="/assets/img/home1/us-flag.png" alt="" />
                        United States
                      </Link>
                    </li>
                    <li>
                      <Link href="/destination/details">
                        <Image width={15} height={15} src="/assets/img/home1/canada-flag.png" alt="" />
                        Canada
                      </Link>
                    </li>
                    <li>
                      <Link href="/destination/details">
                        <Image width={15} height={15} src="/assets/img/home1/mexico-flag.png" alt="" />
                        Mexico
                      </Link>
                    </li>
                  </ul>
                  <ul className="destination-list">
                    <li>
                      <Link href="/destination/details">
                        <Image width={15} height={15} src="/assets/img/home1/jamaica-flag.png" alt="" />
                        Jamaica
                      </Link>
                    </li>
                    <li>
                      <Link href="/destination/details">
                        <Image width={15} height={15} src="/assets/img/home1/costa-rica-flag.png" alt="" />
                        Costa Rica
                      </Link>
                    </li>
                    <li>
                      <Link href="/destination/details">
                        <Image width={15} height={15} src="/assets/img/home1/panama-flag.png" alt="" />
                        Panama
                      </Link>
                    </li>
                  </ul>
                  <ul className="destination-list">
                    <li>
                      <Link href="/destination/details">
                        <Image width={15} height={15} src="/assets/img/home1/cuba-flag.png" alt="" />
                        Cuba
                      </Link>
                    </li>
                    <li>
                      <Link href="/destination/details">
                        <Image width={15} height={15} src="/assets/img/home1/haiti-flag.png" alt="" />
                        Haiti
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default page
