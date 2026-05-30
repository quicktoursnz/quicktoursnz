"use client";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { SwiperOptions } from "swiper/types";

const Testimonial = () => {
        const settings: SwiperOptions = useMemo(() => {
        return {
            slidesPerView: "auto",
            speed: 1500,
    spaceBetween: 24,
    autoplay: {
      delay: 2500, // Autoplay duration in milliseconds
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
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
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1400: {
        slidesPerView: 2,
      },
    }
        };
    }, []);
  return (
    <div className="home8-testimoninal-section mb-100">
    <div className="testimonial-banner-img" style={{backgroundImage: 'url(assets/img/home8/home8-testimoninal-banner-img.jpg)'}} />
    <div className="testimonial-wrapper">
      <div className="container">
        <div className="row gy-5">
          <div className="col-xl-5 col-lg-4 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="section-title">
              <h2>Hear It from Travelers</h2>
              <p>We’re committed to offering more than just products— we provide exceptional experiences.</p>
              <a href="#" className="rating-area">
                <Image width={38} height={220} src="/assets/img/home8/icon/google-icon.svg" alt="" />
                <div className="content">
                  <ul className="rating-star">
                    <li><i className="bi bi-star-fill" /></li>
                    <li><i className="bi bi-star-fill" /></li>
                    <li><i className="bi bi-star-fill" /></li>
                    <li><i className="bi bi-star-fill" /></li>
                    <li><i className="bi bi-star-half" /></li>
                  </ul>
                  <span>GOOGLE REVIEW <strong>(4.5)</strong></span>
                </div>
              </a>
            </div>
          </div>
          <div className="col-xl-7 col-lg-8">
            <Swiper {...settings} modules={[Navigation, Pagination, EffectFade, Autoplay]}  className="swiper home8-testimonial-slider">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-card three">
                    <div className="content">
                      <h5>Great Support!</h5>
                      <p>The team guided me through every step, making the visa process smooth and hassle-free. Highly recommend.</p>
                    </div>
                    <div className="author-area">
                      <div className="author-img">
                        <Image width={550} height={220} src="/assets/img/home1/testimonial-author-img1.png" alt="" />
                      </div>
                      <div className="author-info">
                        <h5>Robert Kcarery </h5>
                        <span>Vietnam Traveler</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-card three">
                    <div className="content">
                      <h5>Best Visa Assistance!</h5>
                      <p>I was worried about my visa approval, but thanks to their expertise, I got it without any issues. Great service and knowledgeable team.</p>
                    </div>
                    <div className="author-area">
                      <div className="author-img">
                        <Image width={550} height={220} src="/assets/img/home1/testimonial-author-img3.png" alt="" />
                      </div>
                      <div className="author-info">
                        <h5>James Bonde</h5>
                        <span>USA Student</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-card three">
                    <div className="content">
                      <h5>Great Experience!</h5>
                      <p>Thanks to their expert planning, our Dubai vacation was seamless. Every detail was handled with care.</p>
                    </div>
                    <div className="author-area">
                      <div className="author-img">
                        <Image width={550} height={220} src="/assets/img/home1/testimonial-author-img2.png" alt="" />
                      </div>
                      <div className="author-info">
                        <h5>Selina Henry</h5>
                        <span>Italy Worker</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-card three">
                    <div className="content">
                      <h5>Great Visitors Venue!</h5>
                      <p>We had an incredible Europe tour! The itinerary, bookings, and support were all professionally managed.</p>
                    </div>
                    <div className="author-area">
                      <div className="author-img">
                        <Image width={550} height={220} src="/assets/img/home1/testimonial-author-img4.png" alt="" />
                      </div>
                      <div className="author-info">
                        <h5>Michael D Linda</h5>
                        <span>France Traveler</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="testimonial-card three">
                    <div className="content">
                      <h5>Fantastic Service!</h5>
                      <p>Our trip to Bali was unforgettable! Everything was perfectly organized by the agency from start to finish.</p>
                    </div>
                    <div className="author-area">
                      <div className="author-img">
                        <Image width={550} height={220} src="/assets/img/home1/testimonial-author-img5.png" alt="" />
                      </div>
                      <div className="author-info">
                        <h5>Amber Lashley</h5>
                        <span>GoFly Traveler</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
      <Image width={300} height={220} src="/assets/img/home8/home8-testimoninal-section-vector1.png" alt="" className="vector1" />
      <Image width={300} height={220} src="/assets/img/home8/home8-testimoninal-section-vector2.png" alt="" className="vector2" />
    </div>
  </div>
  )
}

export default Testimonial
