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
      <Breadcrumb title="Travel Guider" currentPage="Travel Guider" bgImage='breadcrumb-bg2.jpg' />
      <div className="guider-page pt-100 mb-100">
        <div className="container">
          <div className="row gy-md-5 gy-4">
            <div className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="tour-guide-card two">
                <div className="guide-img-wrap">
                  <Link href="/guider-details" className="guide-img">
                    <Image width={260} height={300} src="/assets/img/home5/tour-guide-img1.png" alt="" />
                  </Link>
                  <ul className="social-list">
                    <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                    <li><a href="https://www.linkedin.com/"><i className="bx bxl-linkedin" /></a></li>
                  </ul>
                </div>
                <div className="guide-info">
                  <h5><Link href="/guider-details">Oliver Liam</Link></h5>
                  <span>GoFly Guider</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
              <div className="tour-guide-card two">
                <div className="guide-img-wrap">
                  <Link href="/guider-details" className="guide-img">
                    <Image width={260} height={300} src="/assets/img/home5/tour-guide-img2.png" alt="" />
                  </Link>
                  <ul className="social-list">
                    <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                    <li><a href="https://www.linkedin.com/"><i className="bx bxl-linkedin" /></a></li>
                  </ul>
                </div>
                <div className="guide-info">
                  <h5><Link href="/guider-details">Mrs. Emelia Jong</Link></h5>
                  <span>GoFly Guider</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
              <div className="tour-guide-card two">
                <div className="guide-img-wrap">
                  <Link href="/guider-details" className="guide-img">
                    <Image width={260} height={300} src="/assets/img/home5/tour-guide-img3.png" alt="" />
                  </Link>
                  <ul className="social-list">
                    <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                    <li><a href="https://www.linkedin.com/"><i className="bx bxl-linkedin" /></a></li>
                  </ul>
                </div>
                <div className="guide-info">
                  <h5><Link href="/guider-details">Alexander Benjamin</Link></h5>
                  <span>GoFly Guider</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
              <div className="tour-guide-card two">
                <div className="guide-img-wrap">
                  <Link href="/guider-details" className="guide-img">
                    <Image width={260} height={300} src="/assets/img/home5/tour-guide-img4.png" alt="" />
                  </Link>
                  <ul className="social-list">
                    <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                    <li><a href="https://www.linkedin.com/"><i className="bx bxl-linkedin" /></a></li>
                  </ul>
                </div>
                <div className="guide-info">
                  <h5><Link href="/guider-details">Samuel Henry</Link></h5>
                  <span>GoFly Guider</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="800ms" data-wow-duration="1500ms">
              <div className="tour-guide-card two">
                <div className="guide-img-wrap">
                  <Link href="/guider-details" className="guide-img">
                    <Image width={260} height={300} src="/assets/img/home5/tour-guide-img5.png" alt="" />
                  </Link>
                  <ul className="social-list">
                    <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                    <li><a href="https://www.linkedin.com/"><i className="bx bxl-linkedin" /></a></li>
                  </ul>
                </div>
                <div className="guide-info">
                  <h5><Link href="/guider-details">David Reynolds</Link></h5>
                  <span>GoFly Guider</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
              <div className="tour-guide-card two">
                <div className="guide-img-wrap">
                  <Link href="/guider-details" className="guide-img">
                    <Image width={260} height={300} src="/assets/img/home5/tour-guide-img6.png" alt="" />
                  </Link>
                  <ul className="social-list">
                    <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                    <li><a href="https://www.linkedin.com/"><i className="bx bxl-linkedin" /></a></li>
                  </ul>
                </div>
                <div className="guide-info">
                  <h5><Link href="/guider-details">Thomas Mitchell</Link></h5>
                  <span>GoFly Guider</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
              <div className="tour-guide-card two">
                <div className="guide-img-wrap">
                  <Link href="/guider-details" className="guide-img">
                    <Image width={260} height={300} src="/assets/img/home5/tour-guide-img7.png" alt="" />
                  </Link>
                  <ul className="social-list">
                    <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                    <li><a href="https://www.linkedin.com/"><i className="bx bxl-linkedin" /></a></li>
                  </ul>
                </div>
                <div className="guide-info">
                  <h5><Link href="/guider-details">James Carter</Link></h5>
                  <span>GoFly Guider</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="tour-guide-card two">
                <div className="guide-img-wrap">
                  <Link href="/guider-details" className="guide-img">
                    <Image width={260} height={300} src="/assets/img/home5/tour-guide-img8.png" alt="" />
                  </Link>
                  <ul className="social-list">
                    <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                    <li><a href="https://www.linkedin.com/"><i className="bx bxl-linkedin" /></a></li>
                  </ul>
                </div>
                <div className="guide-info">
                  <h5><Link href="/guider-details">Jorche Milton</Link></h5>
                  <span>GoFly Guider</span>
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
