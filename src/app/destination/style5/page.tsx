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
    <Topbar/>
      <Header/>
      <Breadcrumb title="Destination 05" currentPage="Destination 05" bgImage='breadcrumb-bg1.jpg'/>
     <div className="destination-page pt-100 mb-100">
  <div className="container">
    <div className="row g-xl-4 g-lg-3 gy-4">
      <div className="col-lg-5 col-md-7 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
        <div className="destination-card2 four">
          <div className="destination-img">
            <Image width={600} height={300} src="/assets/img/home5/destination-img1.jpg" alt="" />
          </div>
          <div className="destination-content-wrap">
            <div className="destination-content">
              <span>Tours (06)</span>
              <h5><Link href="/destination/details">Rome, Itlay</Link></h5>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-5 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
        <div className="destination-card2 four">
          <div className="destination-img">
            <Image width={600} height={300} src="/assets/img/home5/destination-img2.jpg" alt="" />
          </div>
          <div className="destination-content-wrap">
            <div className="destination-content">
              <span>Tours (12)</span>
              <h5><Link href="/destination/details">Great Wall of China</Link></h5>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-7 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
        <div className="destination-card2 four">
          <div className="destination-img">
            <Image width={600} height={300} src="/assets/img/home5/destination-img3.jpg" alt="" />
          </div>
          <div className="destination-content-wrap">
            <div className="destination-content">
              <span>Tours (18)</span>
              <h5><Link href="/destination/details">Great Temple Jordan</Link></h5>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-5 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
        <div className="destination-card2 four">
          <div className="destination-img">
            <Image width={600} height={300} src="/assets/img/home5/destination-img4.jpg" alt="" />
          </div>
          <div className="destination-content-wrap">
            <div className="destination-content">
              <span>Tours (14)</span>
              <h5><Link href="/destination/details">Swizerland</Link></h5>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-7 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
        <div className="destination-card2 four">
          <div className="destination-img">
            <Image width={600} height={300} src="/assets/img/home5/destination-img5.jpg" alt="" />
          </div>
          <div className="destination-content-wrap">
            <div className="destination-content">
              <span>Tours (07)</span>
              <h5><Link href="/destination/details">Santorini, Greece</Link></h5>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-5 col-md-5 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
        <div className="destination-card2 four">
          <div className="destination-img">
            <Image width={600} height={300} src="/assets/img/home5/destination-img6.jpg" alt="" />
          </div>
          <div className="destination-content-wrap">
            <div className="destination-content">
              <span>Tours (26)</span>
              <h5><Link href="/destination/details">Machu Picchu of Peru</Link></h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


      <Footer/>
    </>
  )
}

export default page
