"use client";
import Link from "next/link";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { SwiperOptions } from "swiper/types";

interface Home5TourGuideProps {
    style3?: string; // optional prop
}
 // Move SwiperCore.use() here, inside the functional component

const Home5TourGuide: React.FC<Home5TourGuideProps> = ({ style3 }) => {
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
                },
                768: {
                    slidesPerView: 3,
                },
                992: {
                    slidesPerView: 4,
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
        <>

            <Swiper {...settings} modules={[Autoplay, EffectFade, Navigation, Pagination]} className="swiper home3-guide-slider">
                <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                        <div className={`tour-guide-card two ${style3 ? style3 : ""}`}>
                            <div className="guide-img-wrap">
                                <Link href="/guider-details" className="guide-img">
                                    <Image width={550} height={220} src="/assets/img/home5/tour-guide-img1.png" alt="" />
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
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className={`tour-guide-card two ${style3 ? style3 : ""}`}>
                            <div className="guide-img-wrap">
                                <Link href="/guider-details" className="guide-img">
                                    <Image width={550} height={220} src="/assets/img/home5/tour-guide-img2.png" alt="" />
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
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="tour-guide-card two">
                            <div className="guide-img-wrap">
                                <Link href="/guider-details" className="guide-img">
                                    <Image width={550} height={220} src="/assets/img/home5/tour-guide-img3.png" alt="" />
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
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="tour-guide-card two">
                            <div className="guide-img-wrap">
                                <Link href="/guider-details" className="guide-img">
                                    <Image width={550} height={220} src="/assets/img/home5/tour-guide-img4.png" alt="" />
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
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="tour-guide-card two">
                            <div className="guide-img-wrap">
                                <Link href="/guider-details" className="guide-img">
                                    <Image width={550} height={220} src="/assets/img/home5/tour-guide-img5.png" alt="" />
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
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="tour-guide-card two">
                            <div className="guide-img-wrap">
                                <Link href="/guider-details" className="guide-img">
                                    <Image width={550} height={220} src="/assets/img/home5/tour-guide-img6.png" alt="" />
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
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="tour-guide-card two">
                            <div className="guide-img-wrap">
                                <Link href="/guider-details" className="guide-img">
                                    <Image width={550} height={220} src="/assets/img/home5/tour-guide-img7.png" alt="" />
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
                    </SwiperSlide>
                </div>
            </Swiper>
            {style3 !== "three" && (
                <div className="slider-btn-grp two">
                    <div className="slider-btn guide-slider-prev">
                        <svg width={16} height={12} viewBox="0 0 16 12" fill="none">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 5.31421H16V6.68564H0V5.31421Z"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0.685714 6.68569C3.9104 6.68569 6.54629 3.84958 6.54629 0.825119V0.139404H5.17486V0.825119C5.17486 3.12181 3.12412 5.31426 0.685714 5.31426H0V6.68569H0.685714Z"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0.685714 5.31421C3.9104 5.31421 6.54629 8.15032 6.54629 11.1748V11.8605H5.17486V11.1748C5.17486 8.87901 3.12412 6.68564 0.685714 6.68564H0V5.31421H0.685714Z"
                            />
                        </svg>
                    </div>

                    <div className="slider-btn guide-slider-next">
                        <svg width={16} height={16} viewBox="0 0 16 16">
                            <g>
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M16 7.31421H-3.8147e-06V8.68564H16V7.31421Z"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M15.3143 8.68569C12.0896 8.68569 9.45371 5.84958 9.45371 2.82512V2.1394H10.8251V2.82512C10.8251 5.12181 12.8759 7.31426 15.3143 7.31426H16V8.68569H15.3143Z"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M15.3143 7.31421C12.0896 7.31421 9.45371 10.1503 9.45371 13.1748V13.8605H10.8251V13.1748C10.8251 10.879 12.8759 8.68564 15.3143 8.68564H16V7.31421H15.3143Z"
                                />
                            </g>
                        </svg>
                    </div>
                </div>
            )}

        </>
    )
}

export default Home5TourGuide
