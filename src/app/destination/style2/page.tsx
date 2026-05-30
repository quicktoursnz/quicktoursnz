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
      <Breadcrumb title="Destination 02" currentPage="Destination 02" bgImage='breadcrumb-bg1.jpg' />
      <div className="destination-page pt-100 mb-100">
        <div className="container">
          <div className="row gy-md-5 gy-4">
            <div className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="destination-card2">
                <Link href="/destination/details" className="destination-img">
                  <Image width={305} height={155} src="/assets/img/home2/destination-img1.jpg" alt="" />
                </Link>
                <div className="destination-content">
                  <h5><Link href="/destination/details">Great Wall of China</Link></h5>
                  <span>Tours (12)</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
              <div className="destination-card2">
                <Link href="/destination/details" className="destination-img">
                  <Image width={305} height={155} src="/assets/img/home2/destination-img2.jpg" alt="" />
                </Link>
                <div className="destination-content">
                  <h5><Link href="/destination/details">Rome, Itlay</Link></h5>
                  <span>Tours (06)</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
              <div className="destination-card2">
                <Link href="/destination/details" className="destination-img">
                  <Image width={305} height={155} src="/assets/img/home2/destination-img3.jpg" alt="" />
                </Link>
                <div className="destination-content">
                  <h5><Link href="/destination/details">Machu Picchu of Peru</Link></h5>
                  <span>Tours (16)</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
              <div className="destination-card2">
                <Link href="/destination/details" className="destination-img">
                  <Image width={305} height={155} src="/assets/img/home2/destination-img4.jpg" alt="" />
                </Link>
                <div className="destination-content">
                  <h5><Link href="/destination/details">Great Temple Jordan</Link></h5>
                  <span>Tours (10)</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
              <div className="destination-card2">
                <Link href="/destination/details" className="destination-img">
                  <Image width={305} height={155} src="/assets/img/home2/destination-img5.jpg" alt="" />
                </Link>
                <div className="destination-content">
                  <h5><Link href="/destination/details">Athens Greece</Link></h5>
                  <span>Tours (15)</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
              <div className="destination-card2">
                <Link href="/destination/details" className="destination-img">
                  <Image width={305} height={155} src="/assets/img/home2/destination-img6.jpg" alt="" />
                </Link>
                <div className="destination-content">
                  <h5><Link href="/destination/details">Switzerland</Link></h5>
                  <span>Tours (27)</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
              <div className="destination-card2">
                <Link href="/destination/details" className="destination-img">
                  <Image width={305} height={155} src="/assets/img/home2/destination-img7.jpg" alt="" />
                </Link>
                <div className="destination-content">
                  <h5><Link href="/destination/details">Norway</Link></h5>
                  <span>Tours (08)</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="destination-card2">
                <Link href="/destination/details" className="destination-img">
                  <Image width={305} height={155} src="/assets/img/home2/destination-img8.jpg" alt="" />
                </Link>
                <div className="destination-content">
                  <h5><Link href="/destination/details">Paris, France</Link></h5>
                  <span>Tours (22)</span>
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
