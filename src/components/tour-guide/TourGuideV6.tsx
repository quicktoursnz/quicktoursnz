"use client";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import { SwiperOptions } from "swiper/types";
import Home5TourGuide from "./Home5TourGuide";

const TourGuideV6 = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const settingsSmallImage: SwiperOptions = useMemo(() => {
    return {
      slidesPerView: "auto",
      spaceBetween: 25,
      freeMode: false,
      watchSlidesProgress: true,
      loop: true,
      breakpoints: {
        280: {
          slidesPerView: 2,
        },
        350: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        576: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1400: {
          slidesPerView: 3,
        },
      },
    };
  }, []);
  const settings: SwiperOptions = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 24,
      loop: true,
      autoplay: {
        delay: 2500, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      navigation: {
        nextEl: ".offer-banner-slider-next",
        prevEl: ".offer-banner-slider-prev",
      },
    };
  }, []);

  return (
    <>
      <div className="home6-tour-guide-section mb-100">
        <div className="container">
          <div className="row justify-content-center mb-50 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title text-center">
                <h2>GoFly Experties</h2>
                <p>We’ve 200+ friendly tour experties in worldwide.</p>
              </div>
            </div>
          </div>
          <div className="team-slider-area mb-40">
            <Home5TourGuide style3="three" />
          </div>
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <div className="swiper-pagination1 paginations two" />
            </div>
          </div>
        </div>
      </div>
      <div className="home6-activity-banner-section">
        <Swiper slidesPerView={1}
          {...settings}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Autoplay, EffectFade, Navigation, Thumbs]} className="swiper home6-activity-banner-slider">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="banner-wrapper" style={{ backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%), url(assets/img/home6/home6-activity-banner-img1.jpg)' }}>
                <div className="container">
                  <div className="banner-content">
                    <h2>Scuba Driving</h2>
                    <Link href="/travel-package">View All Package</Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="video-wrapper">
                <div className="banner-video-area">
                  <video autoPlay loop muted playsInline src="assets/video/home6-activity-video.mp4" />
                </div>
                <div className="banner-content-wrap">
                  <div className="container">
                    <div className="banner-content">
                      <h2>Surfing</h2>
                      <Link href="/travel-package">View All Package</Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="banner-wrapper" style={{ backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%), url(assets/img/home6/home6-activity-banner-img2.jpg)' }}>
                <div className="container">
                  <div className="banner-content">
                    <h2>Water Rafting</h2>
                    <Link href="/travel-package">View All Package</Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
        <div className="sm-img-area">
          <Swiper onSwiper={setThumbsSwiper}
            {...settingsSmallImage}
            modules={[Thumbs]} className="swiper home6-activity-sm-img-slider">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="activity-sm-img">
                  <Image width={550} height={220} src="/assets/img/home6/home6-activity-sm-img1.jpg" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="activity-sm-img">
                  <video autoPlay loop muted playsInline src="assets/video/home6-activity-video.mp4" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="activity-sm-img">
                  <Image width={550} height={220} src="/assets/img/home6/home6-activity-sm-img2.jpg" alt="" />
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default TourGuideV6
