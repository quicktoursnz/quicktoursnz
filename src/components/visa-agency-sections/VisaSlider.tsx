"use client";
import Link from "next/link";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { SwiperOptions } from "swiper/types";
const VisaSlider = () => {
    const settings: SwiperOptions = useMemo(() => {
        return {
            slidesPerView: "auto",
            speed: 1500,
            spaceBetween: 24,
            autoplay: {
                delay: 2500, // Autoplay duration in milliseconds
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination2",
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
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                1200: {
                    slidesPerView: 3,
                },
                1400: {
                    slidesPerView: 3,
                },
            },
        };
    }, []);
    return (
        <div className="home8-visa-slider-section mb-100">
            <div className="container">
                <div className="row justify-content-center mb-50 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="col-lg-6">
                        <div className="section-title text-center">
                            <h2>What We Offer</h2>
                            <p>A curated list of the most popular travel packages based on different destinations.</p>
                        </div>
                    </div>
                </div>
                <div className="row mb-40">
                    <div className="col-lg-12">
                        <Swiper {...settings} modules={[Autoplay, Pagination,]} className="swiper home8-visa-slider">
                            <div className="swiper-wrapper">
                                <SwiperSlide className="swiper-slide">
                                    <div className="visa-card">
                                        <div className="visa-img">
                                            <Image width={550} height={220} src="/assets/img/home8/visa-img1.jpg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4><Link href="/visa/details">Tourist Visa</Link></h4>
                                            <p>A Tourist Visa is a short-term/long-term permit that allows travelers to visit a foreign country for leisure, sightseeing, or personal trips.</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="visa-card">
                                        <div className="visa-img">
                                            <Image width={550} height={220} src="/assets/img/home8/visa-img2.jpg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4><Link href="/visa/details">Business Visa</Link></h4>
                                            <p>A Business Visa allows professionals to travel for business-related purposes, such as meetings, conferences, or negotiations</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="visa-card">
                                        <div className="visa-img">
                                            <Image width={550} height={220} src="/assets/img/home8/visa-img3.jpg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4><Link href="/visa/details">Student Visa</Link></h4>
                                            <p>A Student Visa allows individuals to study at an accredited educational institution in a foreign country.</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="visa-card">
                                        <div className="visa-img">
                                            <Image width={550} height={220} src="/assets/img/home8/visa-img4.jpg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4><Link href="/visa/details">Medical Visa</Link></h4>
                                            <p>A Medical Visa is granted to individuals seeking medical treatment in a foreign country at recognized hospitals.</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="visa-card">
                                        <div className="visa-img">
                                            <Image width={550} height={220} src="/assets/img/home8/visa-img5.jpg" alt="" />
                                        </div>
                                        <div className="content">
                                            <h4><Link href="/visa/details">Work Visa</Link></h4>
                                            <p>A Work Visa allows individuals to live and work in a foreign country for a specific employer or job role, subject to legal authorization.</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </div>
                        </Swiper>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <div className="swiper-pagination2 paginations two" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VisaSlider
