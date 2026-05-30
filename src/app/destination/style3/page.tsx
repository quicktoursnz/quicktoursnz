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
      <Breadcrumb title="Destination 03" currentPage="Destination 03" bgImage='breadcrumb-bg1.jpg' />
      <div className="destination-page pt-100 mb-100">
        <div className="container">
          <div className="row gy-md-5 gy-4">
            <div className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="destination-card2 two">
                <div className="destination-img">
                  <Image width={500} height={500} src="/assets/img/home3/destination-img1.jpg" alt="" />
                  <Link href="/destination/details" className="arrow">
                    <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 13C5.94664 8.05336 13 1 13 1M13 1C10.1852 1.52778 6.69444 2.58333 3 1M13 1C12.4722 3.63889 11.4167 6.77778 13 11" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </Link>
                </div>
                <div className="destination-content">
                  <h5><Link href="/destination/details">Great Wall of China</Link></h5>
                  <span>Tours (12)</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
              <div className="destination-card2 two">
                <div className="destination-img">
                  <Image width={500} height={500} src="/assets/img/home3/destination-img2.jpg" alt="" />
                  <Link href="/destination/details" className="arrow">
                    <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 13C5.94664 8.05336 13 1 13 1M13 1C10.1852 1.52778 6.69444 2.58333 3 1M13 1C12.4722 3.63889 11.4167 6.77778 13 11" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </Link>
                </div>
                <div className="destination-content">
                  <h5><Link href="/destination/details">Rome, Itlay</Link></h5>
                  <span>Tours (06)</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
              <div className="destination-card2 two">
                <div className="destination-img">
                  <Image width={500} height={500} src="/assets/img/home3/destination-img3.jpg" alt="" />
                  <Link href="/destination/details" className="arrow">
                    <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 13C5.94664 8.05336 13 1 13 1M13 1C10.1852 1.52778 6.69444 2.58333 3 1M13 1C12.4722 3.63889 11.4167 6.77778 13 11" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </Link>
                </div>
                <div className="destination-content">
                  <h5><Link href="/destination/details">Machu Picchu of Peru</Link></h5>
                  <span>Tours (16)</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
              <div className="destination-card2 two">
                <div className="destination-img">
                  <Image width={500} height={500} src="/assets/img/home3/destination-img4.jpg" alt="" />
                  <Link href="/destination/details" className="arrow">
                    <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 13C5.94664 8.05336 13 1 13 1M13 1C10.1852 1.52778 6.69444 2.58333 3 1M13 1C12.4722 3.63889 11.4167 6.77778 13 11" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </Link>
                </div>
                <div className="destination-content">
                  <h5><Link href="/destination/details">Great Temple Jordan</Link></h5>
                  <span>Tours (10)</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
              <div className="destination-card2 two">
                <div className="destination-img">
                  <Image width={500} height={500} src="/assets/img/home3/destination-img5.jpg" alt="" />
                  <Link href="/destination/details" className="arrow">
                    <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 13C5.94664 8.05336 13 1 13 1M13 1C10.1852 1.52778 6.69444 2.58333 3 1M13 1C12.4722 3.63889 11.4167 6.77778 13 11" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </Link>
                </div>
                <div className="destination-content">
                  <h5><Link href="/destination/details">Athens Greece</Link></h5>
                  <span>Tours (12)</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
              <div className="destination-card2 two">
                <div className="destination-img">
                  <Image width={500} height={500} src="/assets/img/home3/destination-img6.jpg" alt="" />
                  <Link href="/destination/details" className="arrow">
                    <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 13C5.94664 8.05336 13 1 13 1M13 1C10.1852 1.52778 6.69444 2.58333 3 1M13 1C12.4722 3.63889 11.4167 6.77778 13 11" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </Link>
                </div>
                <div className="destination-content">
                  <h5><Link href="/destination/details">Switzerland</Link></h5>
                  <span>Tours (26)</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
              <div className="destination-card2 two">
                <div className="destination-img">
                  <Image width={500} height={500} src="/assets/img/home3/destination-img7.jpg" alt="" />
                  <Link href="/destination/details" className="arrow">
                    <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 13C5.94664 8.05336 13 1 13 1M13 1C10.1852 1.52778 6.69444 2.58333 3 1M13 1C12.4722 3.63889 11.4167 6.77778 13 11" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </Link>
                </div>
                <div className="destination-content">
                  <h5><Link href="/destination/details">Fatima, Portugal</Link></h5>
                  <span>Tours (16)</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="destination-card2 two">
                <div className="destination-img">
                  <Image width={500} height={500} src="/assets/img/home3/destination-img8.jpg" alt="" />
                  <Link href="/destination/details" className="arrow">
                    <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 13C5.94664 8.05336 13 1 13 1M13 1C10.1852 1.52778 6.69444 2.58333 3 1M13 1C12.4722 3.63889 11.4167 6.77778 13 11" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </Link>
                </div>
                <div className="destination-content">
                  <h5><Link href="/destination/details">Bali, Indonesia</Link></h5>
                  <span>Tours (25)</span>
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
