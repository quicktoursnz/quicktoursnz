"use client";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { SwiperOptions } from "swiper/types";
import LightGallery from 'lightgallery/react';
// import plugins if you need
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
const TesimonialV1: React.FC = () => {
  const settings: SwiperOptions = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 24,
      autoplay: {
        delay: 2500, // Autoplay duration in milliseconds
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".testimonial-slider-next",
        prevEl: ".testimonial-slider-prev",
      },
      breakpoints: {
        280: {
          slidesPerView: 1,
        },
        386: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1400: {
          slidesPerView: 3,
        },
      },
    };
  }, []);
  return (
    <div className="home1-testimonial-section mb-100">
      <div className="container">
        <div className="row justify-content-center mb-50 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title text-center">
              <h2>What our guests say</h2>
              <p>We go beyond just booking trips—we create unforgettable travel experiences that match your dreams!</p>
            </div>
          </div>
        </div>
        <div className="row mb-40">
          <div className="col-lg-12">
            <Swiper {...settings} modules={[Navigation, Pagination]} className="swiper home1-testimonial-slider">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-card">
                    <div className="author-area">
                      <LightGallery speed={500}
                        plugins={[lgZoom, lgVideo]}
                        elementClassNames="author-img" >
                        <Image width={550} height={220} src="/assets/img/home1/testimonial-author-img1.png" alt="" />
                        <a data-fancybox="video-player" className="gallery-item play-btn"
                          data-src="https://www.youtube.com/watch?v=u31qwQUeGuM&t=1s" style={{ cursor: "pointer" }}
                        >
                          <svg width={26} height={26} viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={13} cy={13} r="12.5" fill="white" stroke="#110F0F" />
                            <g>
                              <path d="M8.4375 13V9.7519C8.4375 8.4062 9.89453 7.5644 11.0586 8.23823L13.873 9.86323L16.6875 11.4882C17.8535 12.1601 17.8535 13.8437 16.6875 14.5156L13.873 16.1406L11.0586 17.7656C9.89453 18.4355 8.4375 17.5957 8.4375 16.25V13Z" />
                            </g>
                          </svg>
                        </a>
                      </LightGallery>
                      <div className="author-info">
                        <h5>Sarah M.</h5>
                        <span>London, United Kingdom</span>
                      </div>
                    </div>
                       <ul className="rating-area trustpilot">
                        {[1,2,3,4,5].map((index)=> (
                        <li key={index}>
                          <svg width={11} height={10} viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.25 7.57409L7.53125 6.99627L8.48437 9.93221L5.25 7.57409ZM10.5 3.77924H6.48437L5.25 0L4.01562 3.77924H0L3.25 6.12174L2.01562 9.90097L5.26562 7.55847L7.26562 6.12174L10.5 3.77924Z" />
                          </svg>
                        </li>

                        ))}
                    </ul>
                    {/* <h5>Excellent Tourist Place!</h5> */}
                    <div className="content">
                      <p>"The Milford Sound tour was jaw-dropping. Our guide knew every hidden spot and story. Worth every cent — we still talk about it."</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-card two">
                    <div className="author-area">
                      <div className="author-img">
                        <Image width={550} height={220} src="/assets/img/home1/testimonial-author-img2.png" alt="" />
                      </div>
                      <div className="author-info">
                        <h5>Thomas K.</h5>
                        <span>Munich, Germany</span>
                      </div>
                    </div>
                        <ul className="rating-area trustpilot">
                        {[1,2,3,4,5].map((index)=> (
                        <li key={index}>
                          <svg width={11} height={10} viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.25 7.57409L7.53125 6.99627L8.48437 9.93221L5.25 7.57409ZM10.5 3.77924H6.48437L5.25 0L4.01562 3.77924H0L3.25 6.12174L2.01562 9.90097L5.26562 7.55847L7.26562 6.12174L10.5 3.77924Z" />
                          </svg>
                        </li>

                        ))}
                    </ul>
                    {/* <h5>Great Experience!</h5> */}
                    <div className="content">
                      <p>"Having a private vehicle made all the difference. We stopped whenever we wanted. Lake Pukaki was otherworldly. Highly recommend!"</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-card">
                    <div className="author-area">
                      <LightGallery speed={500}
                        plugins={[lgZoom, lgVideo]}
                        elementClassNames="author-img" >
                        <Image width={550} height={220} src="/assets/img/home1/testimonial-author-img3.png" alt="" />
                        <a data-fancybox="video-player" className="gallery-item play-btn"
                        data-src="https://www.youtube.com/watch?v=u31qwQUeGuM&t=1s" style={{ cursor: "pointer" }}
                          >
                          <svg width={26} height={26} viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
                            <circle cx={13} cy={13} r="12.5" fill="white" stroke="#110F0F" />
                            <g>
                              <path d="M8.4375 13V9.7519C8.4375 8.4062 9.89453 7.5644 11.0586 8.23823L13.873 9.86323L16.6875 11.4882C17.8535 12.1601 17.8535 13.8437 16.6875 14.5156L13.873 16.1406L11.0586 17.7656C9.89453 18.4355 8.4375 17.5957 8.4375 16.25V13Z" />
                            </g>
                          </svg>
                        </a>
                      </LightGallery>
                      <div className="author-info">
                        <h5>Anika R.</h5>
                        <span>Mumbai, India</span>
                      </div>
                    </div>
                       <ul className="rating-area trustpilot">
                        {[1,2,3,4,5].map((index)=> (
                        <li key={index}>
                          <svg width={11} height={10} viewBox="0 0 11 10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.25 7.57409L7.53125 6.99627L8.48437 9.93221L5.25 7.57409ZM10.5 3.77924H6.48437L5.25 0L4.01562 3.77924H0L3.25 6.12174L2.01562 9.90097L5.26562 7.55847L7.26562 6.12174L10.5 3.77924Z" />
                          </svg>
                        </li>

                        ))}
                    </ul>
                    {/* <h5>Average Experience</h5> */}
                    <div className="content">
                      <p>"The Glenorchy tour was the highlight of our trip! The storytelling on the way there was fascinating — our guide was incredible."</p>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TesimonialV1
