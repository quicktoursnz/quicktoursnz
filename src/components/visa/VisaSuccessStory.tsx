"use client";
import React, {  useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { SwiperOptions } from "swiper/types";
const VisaSuccessStory = () => {
    const settings: SwiperOptions = useMemo(() => {
        return {
            slidesPerView: "auto",
            speed: 1500,
            spaceBetween: 30,
            autoplay: {
                delay: 2500, // Autoplay duration in milliseconds
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
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
                    slidesPerView: 3,
                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                },
                1200: {
                    slidesPerView: 5,
                    spaceBetween: 15,
                },
                1400: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
                1600: {
                    slidesPerView: 5,
                    spaceBetween: 24,
                },
            },
        };
    }, []);
    return (
        <div className="visa-dt-success-story-section mb-100">
            <div className="container">
                <div className="section-title two mb-50 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <h2>We’ve Success Stories</h2>
                    <p>We’re committed to offering more than just products—we provide exceptional experiences.</p>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <Swiper {...settings} modules={[Autoplay]} className="swiper destionation-dt-customer-gallery-slider">
                            <div className="swiper-wrapper">
                                <SwiperSlide className="swiper-slide">
                                    <div className="success-story-card">
                                        <Image width={340} height={480} src="/assets/img/innerpages/visa-dt-success-story-card-img1.jpg" alt="" />
                                        <div className="success-story-content-wrap">
                                            <Image width={90} height={35} src="/assets/img/innerpages/visa-dt-success-story-card-logo.svg" alt="" />
                                            <div className="success-story-content">
                                                <h5>“Exceptional service with clear guidance.”</h5>
                                                <div className="author-info">
                                                    <h6>Mrs. Emily Patowary</h6>
                                                    <span>USA Student</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="success-story-card">
                                        <Image width={340} height={480} src="/assets/img/innerpages/visa-dt-success-story-card-img2.jpg" alt="" />
                                        <div className="success-story-content-wrap">
                                            <Image width={90} height={35} src="/assets/img/innerpages/visa-dt-success-story-card-logo.svg" alt="" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="success-story-card">
                                        <Image width={340} height={480} src="/assets/img/innerpages/visa-dt-success-story-card-img3.jpg" alt="" />
                                        <div className="success-story-content-wrap">
                                            <Image width={90} height={35} src="/assets/img/innerpages/visa-dt-success-story-card-logo.svg" alt="" />
                                            <div className="success-story-content">
                                                <h5>“Fast response, accurate documentation, &amp; friendly service.”</h5>
                                                <div className="author-info">
                                                    <h6>Mrs. Emelia Jong</h6>
                                                    <span>UK Student</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="success-story-card">
                                        <Image width={340} height={480} src="/assets/img/innerpages/visa-dt-success-story-card-img4.jpg" alt="" />
                                        <div className="success-story-content-wrap">
                                            <Image width={90} height={35} src="/assets/img/innerpages/visa-dt-success-story-card-logo.svg" alt="" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="success-story-card">
                                        <div className="video-area">
                                            <video autoPlay loop muted playsInline src="/assets/video/visa-details-video.mp4" />
                                        </div>
                                        <div className="success-story-content-wrap">
                                            <Image width={90} height={35} src="/assets/img/innerpages/visa-dt-success-story-card-logo.svg" alt="" />
                                            <div className="success-story-content">
                                                <h5>“Got my visa approved faster than expected. Recommended!”</h5>
                                                <div className="author-info">
                                                    <h6>Mrs. Emily Patowary</h6>
                                                    <span>Czech Republic Student</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="success-story-card">
                                        <Image width={340} height={480} src="/assets/img/innerpages/visa-dt-success-story-card-img6.jpg" alt="" />
                                        <div className="success-story-content-wrap">
                                            <Image width={90} height={35} src="/assets/img/innerpages/visa-dt-success-story-card-logo.svg" alt="" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="success-story-card">
                                        <Image width={340} height={480} src="/assets/img/innerpages/visa-dt-success-story-card-img5.jpg" alt="" />
                                        <div className="success-story-content-wrap">
                                            <Image width={90} height={35} src="/assets/img/innerpages/visa-dt-success-story-card-logo.svg" alt="" />
                                            <div className="success-story-content">
                                                <h5>“Outstanding response with precise direction.”</h5>
                                                <div className="author-info">
                                                    <h6>Mrs. Emelia Jong</h6>
                                                    <span>UK Student</span>
                                                </div>
                                            </div>
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

export default VisaSuccessStory
