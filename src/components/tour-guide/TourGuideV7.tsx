"use client";
import Link from "next/link";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { SwiperOptions } from "swiper/types";

const TourGuideV7 = () => {
  const settings: SwiperOptions = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 24,
      autoplay: {
        delay: 2500, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".guide-slider-next",
        prevEl: ".guide-slider-prev",
      },
      pagination: {
        el: ".swiper-pagination1",
        clickable: true,
      },
      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1400: {
          slidesPerView: 4,
        },
      },
    };
  }, []);
  return (
    <div className="home7-tour-guide-section mb-100">
      <div className="container">
        <div className="row justify-content-center mb-50 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title text-center">
              <h2>Activities Guider</h2>
              <p>A curated list of the most popular travel packages based on different destinations.</p>
            </div>
          </div>
        </div>
        <div className="team-slider-area mb-40">
          <Swiper {...settings} modules={[Navigation, Pagination, EffectFade, Autoplay]} className="swiper home7-guide-slider">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="tour-guide-card four">
                  <div className="guide-img-wrap">
                    <Link href="/guider-details" className="guide-img">
                      <Image width={550} height={220} src="/assets/img/home7/tour-guide-img1.png" alt="" />
                    </Link>
                    <ul className="social-list">
                      <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                      <li><a href="https://www.linkedin.com/"><i className="bx bxl-linkedin" /></a></li>
                    </ul>
                  </div>
                  <div className="guide-info">
                    <h5><Link href="/guider-details">Oliver Liam</Link></h5>
                    <span>Skydiving Expert</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="tour-guide-card four">
                  <div className="guide-img-wrap">
                    <Link href="/guider-details" className="guide-img">
                      <Image width={550} height={220} src="/assets/img/home7/tour-guide-img2.png" alt="" />
                    </Link>
                    <ul className="social-list">
                      <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                      <li><a href="https://www.linkedin.com/"><i className="bx bxl-linkedin" /></a></li>
                    </ul>
                  </div>
                  <div className="guide-info">
                    <h5><Link href="/guider-details">Mrs. Emelia Jong</Link></h5>
                    <span>Paragliding Expert</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="tour-guide-card four">
                  <div className="guide-img-wrap">
                    <Link href="/guider-details" className="guide-img">
                      <Image width={550} height={220} src="/assets/img/home7/tour-guide-img3.png" alt="" />
                    </Link>
                    <ul className="social-list">
                      <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                      <li><a href="https://www.linkedin.com/"><i className="bx bxl-linkedin" /></a></li>
                    </ul>
                  </div>
                  <div className="guide-info">
                    <h5><Link href="/guider-details">Alexander Benju</Link></h5>
                    <span>Skydiving Expert</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="tour-guide-card four">
                  <div className="guide-img-wrap">
                    <Link href="/guider-details" className="guide-img">
                      <Image width={550} height={220} src="/assets/img/home7/tour-guide-img4.png" alt="" />
                    </Link>
                    <ul className="social-list">
                      <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                      <li><a href="https://www.linkedin.com/"><i className="bx bxl-linkedin" /></a></li>
                    </ul>
                  </div>
                  <div className="guide-info">
                    <h5><Link href="/guider-details">Samuel Henry</Link></h5>
                    <span>Rock Climbing Expert</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="tour-guide-card four">
                  <div className="guide-img-wrap">
                    <Link href="/guider-details" className="guide-img">
                      <Image width={550} height={220} src="/assets/img/home7/tour-guide-img5.png" alt="" />
                    </Link>
                    <ul className="social-list">
                      <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                      <li><a href="https://www.linkedin.com/"><i className="bx bxl-linkedin" /></a></li>
                    </ul>
                  </div>
                  <div className="guide-info">
                    <h5><Link href="/guider-details">David Reynolds</Link></h5>
                    <span>Zip-lining Expert</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="tour-guide-card four">
                  <div className="guide-img-wrap">
                    <Link href="/guider-details" className="guide-img">
                      <Image width={550} height={220} src="/assets/img/home7/tour-guide-img6.png" alt="" />
                    </Link>
                    <ul className="social-list">
                      <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                      <li><a href="https://www.linkedin.com/"><i className="bx bxl-linkedin" /></a></li>
                    </ul>
                  </div>
                  <div className="guide-info">
                    <h5><Link href="/guider-details">Thomas Mitchell</Link></h5>
                    <span>Scuba Expert</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="tour-guide-card four">
                  <div className="guide-img-wrap">
                    <Link href="/guider-details" className="guide-img">
                      <Image width={550} height={220} src="/assets/img/home7/tour-guide-img7.png" alt="" />
                    </Link>
                    <ul className="social-list">
                      <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                      <li><a href="https://www.linkedin.com/"><i className="bx bxl-linkedin" /></a></li>
                    </ul>
                  </div>
                  <div className="guide-info">
                    <h5><Link href="/guider-details">James Carter</Link></h5>
                    <span>Snowboarding Expert</span>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <div className="swiper-pagination1 paginations three" />
          </div>
        </div>
      </div>
      <Image width={96} height={78} src="/assets/img/home7/vector/home7-tour-guide-section-vector.svg" alt="" className="vector" />
    </div>
  )
}

export default TourGuideV7
