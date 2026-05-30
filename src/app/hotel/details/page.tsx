"use client";
import Image from "next/image";
import React, { useMemo } from "react";
import Breadcrumb4 from "@/components/common/Breadcrumb4";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Topbar from "@/components/topbar/Topbar";
import RevelentPackageSection from "@/components/travel-package-section/RevelentPackageSection";

import BookingArea from "@/components/hotel-details/BookingArea";
import LightGallery from "lightgallery/react";
// import plugins if you need
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { SwiperOptions } from "swiper/types";
const HotelDetailsPage: React.FC = () => {
  const settings: SwiperOptions = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 24,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      navigation: {
        nextEl: ".hotel-dt-gallery-slider-next",
        prevEl: ".hotel-dt-gallery-slider-prev",
      },
    };
  }, []);
  return (
    <>
      <Topbar />
      <Header />
      <Breadcrumb4 />
      <div
        className="modal rating-modal fade"
        id="ratingModal"
        tabIndex={-1}
        aria-labelledby="ratingModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button
              type="button"
              className="close-btn"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <svg
                width={10}
                height={10}
                viewBox="0 0 10 10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.00247 0.500545C1.79016 0.505525 1.58918 0.582706 1.4362 0.735547L0.694403 1.479C0.345704 1.82743 0.389689 2.43243 0.79164 2.83493L3.00694 5.05341L0.79164 7.27092C0.389689 7.67328 0.345566 8.27842 0.694403 8.62753L1.4362 9.37044C1.7849 9.71872 2.38879 9.67543 2.7913 9.27293L5.00659 7.05473L7.22189 9.27293C7.62467 9.67543 8.22898 9.71872 8.57699 9.37044L9.31989 8.62753C9.6679 8.27856 9.62461 7.67342 9.22182 7.27092L7.00653 5.05341L9.22182 2.83493C9.62461 2.43243 9.6679 1.82743 9.31989 1.479L8.57699 0.735547C8.22898 0.386433 7.62467 0.430557 7.22189 0.833614L5.00659 3.05126L2.7913 0.833753C2.56515 0.606635 2.27482 0.493906 2.00247 0.500545Z" />
              </svg>
            </button>
            <div className="modal-body">
              <h4 className="modal-title" id="ratingModalLabel">
                Give Your Review
              </h4>
              <ul className="star-rating-list">
                <li>
                  <span>Overall</span>
                  <div className="rating-container" data-rating={0}>
                    <i className="bi bi-star star-icon" />
                    <i className="bi bi-star star-icon" />
                    <i className="bi bi-star star-icon" />
                    <i className="bi bi-star star-icon" />
                    <i className="bi bi-star star-icon" />
                  </div>
                </li>
                <li>
                  <span>Transport</span>
                  <div className="rating-container" data-rating={0}>
                    <i className="bi bi-star star-icon" />
                    <i className="bi bi-star star-icon" />
                    <i className="bi bi-star star-icon" />
                    <i className="bi bi-star star-icon" />
                    <i className="bi bi-star star-icon" />
                  </div>
                </li>
                <li>
                  <span>Food</span>
                  <div className="rating-container" data-rating={0}>
                    <i className="bi bi-star star-icon" />
                    <i className="bi bi-star star-icon" />
                    <i className="bi bi-star star-icon" />
                    <i className="bi bi-star star-icon" />
                    <i className="bi bi-star star-icon" />
                  </div>
                </li>
                <li>
                  <span>Tour Guide</span>
                  <div className="rating-container" data-rating={0}>
                    <i className="bi bi-star star-icon" />
                    <i className="bi bi-star star-icon" />
                    <i className="bi bi-star star-icon" />
                    <i className="bi bi-star star-icon" />
                    <i className="bi bi-star star-icon" />
                  </div>
                </li>
                <li>
                  <span>Accomodation</span>
                  <div className="rating-container" data-rating={0}>
                    <i className="bi bi-star star-icon" />
                    <i className="bi bi-star star-icon" />
                    <i className="bi bi-star star-icon" />
                    <i className="bi bi-star star-icon" />
                    <i className="bi bi-star star-icon" />
                  </div>
                </li>
              </ul>
              <form className="review-form-wrapper">
                <div className="row g-4 mb-50">
                  <div className="col-lg-12">
                    <div className="form-inner">
                      <label>Your Feedback</label>
                      <textarea
                        placeholder="Write a your tour feedback"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner">
                      <label>Email Address</label>
                      <input type="email" placeholder="Email Address" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner">
                      <label>Your Name</label>
                      <input type="text" placeholder="Your Name" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-inner2">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="contactCheck22"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="contactCheck22"
                        >
                          Save my email address &amp; name when I comment
                          further time.
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-inner">
                  <button type="submit" className="primary-btn1 black-bg">
                    <span>
                      Post Comment
                      <svg
                        width={10}
                        height={10}
                        viewBox="0 0 10 10"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z" />
                      </svg>
                    </span>
                    <span>
                      Post Comment
                      <svg
                        width={10}
                        height={10}
                        viewBox="0 0 10 10"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z" />
                      </svg>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal enquiry-modal fade"
        id="enquiryModal"
        tabIndex={-1}
        aria-labelledby="enquiryModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button
              type="button"
              className="close-btn"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <svg
                width={10}
                height={10}
                viewBox="0 0 10 10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.00247 0.500545C1.79016 0.505525 1.58918 0.582706 1.4362 0.735547L0.694403 1.479C0.345704 1.82743 0.389689 2.43243 0.79164 2.83493L3.00694 5.05341L0.79164 7.27092C0.389689 7.67328 0.345566 8.27842 0.694403 8.62753L1.4362 9.37044C1.7849 9.71872 2.38879 9.67543 2.7913 9.27293L5.00659 7.05473L7.22189 9.27293C7.62467 9.67543 8.22898 9.71872 8.57699 9.37044L9.31989 8.62753C9.6679 8.27856 9.62461 7.67342 9.22182 7.27092L7.00653 5.05341L9.22182 2.83493C9.62461 2.43243 9.6679 1.82743 9.31989 1.479L8.57699 0.735547C8.22898 0.386433 7.62467 0.430557 7.22189 0.833614L5.00659 3.05126L2.7913 0.833753C2.56515 0.606635 2.27482 0.493906 2.00247 0.500545Z" />
              </svg>
            </button>
            <div className="modal-body">
              <h4 className="modal-title" id="enquiryModalLabel">
                We’d Love to Hear From You!
              </h4>
              <form className="enquiry-form-wrapper">
                <div className="row g-4 mb-50">
                  <div className="col-md-6">
                    <div className="form-inner">
                      <label>Full Name</label>
                      <input type="text" placeholder="Your Name" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner">
                      <label>Email Address</label>
                      <input type="email" placeholder="Email Address" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner">
                      <label>Number of People*</label>
                      <input type="text" placeholder="Number of people" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner">
                      <label>Booking Date</label>
                      <div className="date-field-area">
                        <input
                          type="text"
                          name="inOut"
                          readOnly
                          defaultValue="Sep 12 - Sep 20"
                        />
                        <svg
                          className="calender-icon"
                          width={14}
                          height={14}
                          viewBox="0 0 14 14"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g>
                            <path d="M12.1953 1.09375H10.9375V0.4375C10.9375 0.195891 10.7416 0 10.5 0C10.2584 0 10.0625 0.195891 10.0625 0.4375V1.09375H3.9375V0.4375C3.9375 0.195891 3.74164 0 3.5 0C3.25836 0 3.0625 0.195891 3.0625 0.4375V1.09375H1.80469C0.809566 1.09375 0 1.90332 0 2.89844V12.1953C0 13.1904 0.809566 14 1.80469 14H12.1953C13.1904 14 14 13.1904 14 12.1953V2.89844C14 1.90332 13.1904 1.09375 12.1953 1.09375ZM13.125 12.1953C13.125 12.7088 12.7088 13.125 12.1953 13.125H1.80469C1.29123 13.125 0.875 12.7088 0.875 12.1953V4.94922C0.875 4.91296 0.889404 4.87818 0.915044 4.85254C0.940684 4.8269 0.975459 4.8125 1.01172 4.8125H12.9883C13.0245 4.8125 13.0593 4.8269 13.085 4.85254C13.1106 4.87818 13.125 4.91296 13.125 4.94922V12.1953Z" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-inner">
                      <label>Booking Note</label>
                      <textarea
                        placeholder="Write your Important note"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-inner2">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="formCheck2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="formCheck2"
                        >
                          Save my email address &amp; name when I comment
                          further time.
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-inner">
                  <button type="submit" className="primary-btn1 black-bg">
                    <span>
                      Post Comment
                      <svg
                        width={10}
                        height={10}
                        viewBox="0 0 10 10"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z" />
                      </svg>
                    </span>
                    <span>
                      Post Comment
                      <svg
                        width={10}
                        height={10}
                        viewBox="0 0 10 10"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z" />
                      </svg>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="hotel-dt-gallery-section mb-100">
        <div className="container">
          <div className="room-img-group">
            <LightGallery
              selector=".gallery-item"
              speed={500}
              plugins={[lgZoom, lgVideo]}
              elementClassNames="row g-2"
            >
              <div className="col-lg-6">
                <div className="gallery-img-wrap">
                  <Swiper
                    {...settings}
                    modules={[Autoplay, Navigation, EffectFade]}
                    className="swiper hotel-dt-gallery-slider"
                  >
                    <div className="swiper-wrapper">
                      <SwiperSlide className="swiper-slide">
                        <Image
                          width={800}
                          height={220}
                          src="/assets/img/innerpages/hotel-dt-gallery-img1.jpg"
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <Image
                          width={550}
                          height={220}
                          src="/assets/img/innerpages/hotel-dt-gallery-img6.jpg"
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <Image
                          width={550}
                          height={220}
                          src="/assets/img/innerpages/hotel-dt-gallery-img7.jpg"
                          alt=""
                        />
                      </SwiperSlide>
                    </div>
                    <div className="slider-btn-grp">
                      <div className="slider-btn hotel-dt-gallery-slider-prev">
                        <svg
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M4.84554 6.00254L9.33471 1.51317C9.45832 1.38985 9.52632 1.22498 9.52632 1.04917C9.52632 0.873268 9.45832 0.708488 9.33471 0.584976L8.94135 0.191805C8.81793 0.0680975 8.65295 0 8.47715 0C8.30134 0 8.13656 0.0680975 8.01305 0.191805L2.66798 5.53678C2.54398 5.66068 2.47608 5.82624 2.47657 6.00224C2.47608 6.17902 2.54388 6.34439 2.66798 6.46839L8.00808 11.8082C8.13159 11.9319 8.29637 12 8.47227 12C8.64808 12 8.81286 11.9319 8.93647 11.8082L9.32973 11.415C9.58564 11.1591 9.58564 10.7425 9.32973 10.4867L4.84554 6.00254Z" />
                        </svg>
                      </div>
                      <div className="slider-btn hotel-dt-gallery-slider-next">
                        <svg
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M7.15446 6.00254L2.66529 1.51317C2.54168 1.38985 2.47368 1.22498 2.47368 1.04917C2.47368 0.873268 2.54168 0.708488 2.66529 0.584976L3.05865 0.191805C3.18207 0.0680975 3.34705 0 3.52285 0C3.69866 0 3.86344 0.0680975 3.98695 0.191805L9.33202 5.53678C9.45602 5.66068 9.52392 5.82624 9.52343 6.00224C9.52392 6.17902 9.45612 6.34439 9.33202 6.46839L3.99192 11.8082C3.86841 11.9319 3.70363 12 3.52773 12C3.35192 12 3.18714 11.9319 3.06353 11.8082L2.67027 11.415C2.41436 11.1591 2.41436 10.7425 2.67027 10.4867L7.15446 6.00254Z" />
                        </svg>
                      </div>
                    </div>
                  </Swiper>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row g-2">
                  <div className="col-6">
                    <div className="gallery-img-wrap">
                      <a
                        data-fancybox="gallery-01"
                        className="gallery-item"
                        data-src="/assets/img/innerpages/hotel-dt-gallery-img2.jpg"
                      >
                        <Image
                          width={550}
                          height={220}
                          src="/assets/img/innerpages/hotel-dt-gallery-img2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="gallery-img-wrap">
                      <a
                        data-fancybox="gallery-01"
                        className="gallery-item"
                        data-src="/assets/img/innerpages/hotel-dt-gallery-img3.jpg"
                      >
                        <Image
                          width={550}
                          height={220}
                          src="/assets/img/innerpages/hotel-dt-gallery-img3.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="gallery-img-wrap two active">
                      <Image
                        width={550}
                        height={220}
                        src="/assets/img/innerpages/hotel-dt-gallery-img4.jpg"
                        alt=""
                      />
                      <a
                        className="gallery-item"
                        data-src="https://www.youtube.com/watch?v=u31qwQUeGuM&t=1s"
                        key="4"
                      >
                        <i className="bi bi-play-circle" /> Watch Video
                      </a>
                    </div>
                  </div>
                  <div className="col-6">
                    <div
                      className="gallery-img-wrap two active gallery-item"
                      data-fancybox="gallery-01"
                      data-src="/assets/img/innerpages/hotel-dt-gallery-img5.jpg"
                    >
                      <Image
                        width={550}
                        height={220}
                        src="/assets/img/innerpages/hotel-dt-gallery-img5.jpg"
                        alt=""
                      />
                      <button className="StartSlideShowFirstImage">
                        <i className="bi bi-plus-lg" /> View More Images
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </LightGallery>
          </div>
        </div>
      </div>
      <div className="others-image-wrap d-none">
        <a
          href="assets/img/innerpages/hotel-dt-gallery-img1.jpg"
          data-fancybox="images"
        />
        <a
          href="assets/img/innerpages/hotel-dt-gallery-img2.jpg"
          data-fancybox="images"
        />
        <a
          href="assets/img/innerpages/hotel-dt-gallery-img3.jpg"
          data-fancybox="images"
        />
        <a
          href="assets/img/innerpages/hotel-dt-gallery-img4.jpg"
          data-fancybox="images"
        />
        <a
          href="assets/img/innerpages/hotel-dt-gallery-img5.jpg"
          data-fancybox="images"
        />
      </div>
      <div className="hotel-details-page mb-100">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-7 col-lg-8">
              <div className="hotel-details-wrapper">
                <div className="hotel-dt-description-area mb-50">
                  <h4>Hotel Overview</h4>
                  <p>
                    Rosewood Hotels &amp; Resorts is a globally renowned luxury
                    hotel group known for its refined hospitality, personalized
                    service, and unique sense of place. Established in 1979,
                    Rosewood operates ultra-luxury hotels, resorts, and
                    residences in some of the world’s most stunning
                    destinations.
                  </p>
                  <p>
                    Guests enjoy world-class amenities, including Michelin-star
                    dining, holistic wellness at Asaya spas, curated cultural
                    experiences, and unparalleled hospitality. Whether it’s a
                    stay at Hôtel de Crillon in Paris, Rosewood London, or Las
                    Ventanas al Paraíso in Mexico, Rosewood delivers
                    sophistication, exclusivity, and an unforgettable journey.
                  </p>
                </div>
                <div className="hotel-dt-facilities-area mb-50">
                  <h4>Highlights Facilities</h4>
                  <div className="facilities-wrap">
                    <div className="single-facilities">
                      <h6>
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g>
                            <path d="M17.9848 13.8341L17.0168 7.61513C16.9561 7.21675 16.7543 6.85344 16.4481 6.59139C16.142 6.32934 15.7519 6.18601 15.3489 6.1875H14.625C14.625 3.897 12.9038 2.00475 10.6875 1.72631V1.125C10.6875 0.975816 10.6282 0.832742 10.5227 0.727253C10.4173 0.621763 10.2742 0.5625 10.125 0.5625C9.97582 0.5625 9.83274 0.621763 9.72725 0.727253C9.62176 0.832742 9.5625 0.975816 9.5625 1.125V1.72631C7.34625 2.00475 5.625 3.897 5.625 6.1875H4.40663L3.53363 1.386C3.46333 0.997026 3.25858 0.645121 2.95517 0.391778C2.65175 0.138436 2.26896 -0.000233978 1.87369 2.96358e-07H0.5625C0.413316 2.96358e-07 0.270242 0.0592635 0.164752 0.164753C0.0592632 0.270242 0 0.413316 0 0.5625C0 0.711685 0.0592632 0.854759 0.164752 0.960248C0.270242 1.06574 0.413316 1.125 0.5625 1.125H1.87369C2.14538 1.125 2.37825 1.31963 2.42719 1.58681L3.36713 6.75563L2.26294 13.8499C2.23931 14.0361 2.24719 14.2262 2.286 14.4135C2.412 15.0306 2.8935 15.5076 3.501 15.678C3.41828 15.8793 3.37549 16.0948 3.375 16.3125C3.375 17.2429 4.13212 18 5.0625 18C5.99288 18 6.75 17.2429 6.75 16.3125C6.75 16.1061 6.70781 15.9109 6.63975 15.7281C6.97737 15.6763 7.29126 15.5231 7.53975 15.2887C7.85025 15.579 8.253 15.75 8.685 15.75H11.5656C11.9976 15.75 12.3997 15.579 12.7108 15.2887C12.9566 15.5188 13.2677 15.6763 13.6108 15.7281C13.5392 15.9147 13.5016 16.1126 13.5 16.3125C13.5 17.2429 14.2571 18 15.1875 18C16.1179 18 16.875 17.2429 16.875 16.3125C16.875 16.0881 16.8289 15.8743 16.749 15.678C17.3565 15.5076 17.838 15.0306 17.964 14.4141C18.0028 14.2262 18.0107 14.0361 17.9848 13.8341ZM16.8621 14.1885C16.8109 14.4371 16.5544 14.625 16.2647 14.625H13.86C13.73 14.6249 13.6041 14.5798 13.5036 14.4974C13.4031 14.4149 13.3342 14.3002 13.3088 14.1727L12.3643 9.45169C12.3503 9.37901 12.3219 9.30985 12.281 9.24822C12.24 9.1866 12.1871 9.13373 12.1255 9.0927C12.0639 9.05166 11.9948 9.02328 11.9221 9.0092C11.8495 8.99513 11.7747 8.99563 11.7023 9.01069C11.556 9.04 11.4273 9.12622 11.3446 9.25039C11.2619 9.37455 11.2319 9.52647 11.2613 9.67275L11.8238 12.4847L12.1168 13.9517C12.1334 14.0333 12.1317 14.1176 12.1116 14.1985C12.0916 14.2794 12.0539 14.3548 12.0011 14.4192C11.9483 14.4837 11.8818 14.5356 11.8065 14.5712C11.7312 14.6068 11.6489 14.6252 11.5656 14.625H8.685C8.60168 14.6254 8.51933 14.6071 8.44395 14.5716C8.36856 14.5361 8.30204 14.4843 8.24924 14.4198C8.19643 14.3554 8.15866 14.28 8.13868 14.1991C8.1187 14.1182 8.11702 14.0339 8.13375 13.9523L8.42681 12.4858L8.98931 9.67331C9.01818 9.52722 8.98793 9.37564 8.9052 9.25182C8.82248 9.12799 8.69402 9.04202 8.54801 9.01276C8.402 8.9835 8.25034 9.01333 8.12628 9.09571C8.00223 9.1781 7.91591 9.30632 7.88625 9.45225L7.32375 12.2648L7.03069 13.7312L6.94238 14.1733C6.91635 14.3007 6.84719 14.4152 6.74656 14.4974C6.64593 14.5797 6.51999 14.6248 6.39 14.625H3.98531C3.69563 14.625 3.43912 14.4371 3.38794 14.1879C3.37524 14.1286 3.37145 14.0678 3.37669 14.0074L4.419 7.3125H15.3489C15.6279 7.3125 15.8619 7.51275 15.9047 7.78838L16.8705 13.9905C16.8789 14.0541 16.8756 14.1204 16.8621 14.1885Z" />
                          </g>
                        </svg>
                        General Amenities
                      </h6>
                      <ul className="facilities-list">
                        <li>
                          <svg
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.61933 3.0722L4.05903 8.6355C3.97043 8.7211 3.85813 8.7655 3.74593 8.7655C3.68772 8.76559 3.63008 8.75415 3.57632 8.73184C3.52256 8.70952 3.47376 8.67678 3.43272 8.6355L0.380725 5.5835C0.206425 5.4121 0.206425 5.1315 0.380725 4.9572L1.45912 3.8758C1.62462 3.7104 1.92002 3.7104 2.08552 3.8758L3.74593 5.5362L7.91463 1.3645C7.95569 1.32334 8.00445 1.29068 8.05814 1.26837C8.11183 1.24606 8.16939 1.23455 8.22753 1.2345C8.34563 1.2345 8.45792 1.2818 8.54063 1.3645L9.61903 2.446C9.79363 2.6203 9.79363 2.9009 9.61933 3.0722Z" />
                          </svg>
                          Free Wi-Fi
                        </li>
                        <li>
                          <svg
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.61933 3.0722L4.05903 8.6355C3.97043 8.7211 3.85813 8.7655 3.74593 8.7655C3.68772 8.76559 3.63008 8.75415 3.57632 8.73184C3.52256 8.70952 3.47376 8.67678 3.43272 8.6355L0.380725 5.5835C0.206425 5.4121 0.206425 5.1315 0.380725 4.9572L1.45912 3.8758C1.62462 3.7104 1.92002 3.7104 2.08552 3.8758L3.74593 5.5362L7.91463 1.3645C7.95569 1.32334 8.00445 1.29068 8.05814 1.26837C8.11183 1.24606 8.16939 1.23455 8.22753 1.2345C8.34563 1.2345 8.45792 1.2818 8.54063 1.3645L9.61903 2.446C9.79363 2.6203 9.79363 2.9009 9.61933 3.0722Z" />
                          </svg>
                          Air Conditioning
                        </li>
                        <li>
                          <svg
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.61933 3.0722L4.05903 8.6355C3.97043 8.7211 3.85813 8.7655 3.74593 8.7655C3.68772 8.76559 3.63008 8.75415 3.57632 8.73184C3.52256 8.70952 3.47376 8.67678 3.43272 8.6355L0.380725 5.5835C0.206425 5.4121 0.206425 5.1315 0.380725 4.9572L1.45912 3.8758C1.62462 3.7104 1.92002 3.7104 2.08552 3.8758L3.74593 5.5362L7.91463 1.3645C7.95569 1.32334 8.00445 1.29068 8.05814 1.26837C8.11183 1.24606 8.16939 1.23455 8.22753 1.2345C8.34563 1.2345 8.45792 1.2818 8.54063 1.3645L9.61903 2.446C9.79363 2.6203 9.79363 2.9009 9.61933 3.0722Z" />
                          </svg>
                          Parking Facilities
                        </li>
                        <li>
                          <svg
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.61933 3.0722L4.05903 8.6355C3.97043 8.7211 3.85813 8.7655 3.74593 8.7655C3.68772 8.76559 3.63008 8.75415 3.57632 8.73184C3.52256 8.70952 3.47376 8.67678 3.43272 8.6355L0.380725 5.5835C0.206425 5.4121 0.206425 5.1315 0.380725 4.9572L1.45912 3.8758C1.62462 3.7104 1.92002 3.7104 2.08552 3.8758L3.74593 5.5362L7.91463 1.3645C7.95569 1.32334 8.00445 1.29068 8.05814 1.26837C8.11183 1.24606 8.16939 1.23455 8.22753 1.2345C8.34563 1.2345 8.45792 1.2818 8.54063 1.3645L9.61903 2.446C9.79363 2.6203 9.79363 2.9009 9.61933 3.0722Z" />
                          </svg>
                          Luggage Storage
                        </li>
                        <li>
                          <svg
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.61933 3.0722L4.05903 8.6355C3.97043 8.7211 3.85813 8.7655 3.74593 8.7655C3.68772 8.76559 3.63008 8.75415 3.57632 8.73184C3.52256 8.70952 3.47376 8.67678 3.43272 8.6355L0.380725 5.5835C0.206425 5.4121 0.206425 5.1315 0.380725 4.9572L1.45912 3.8758C1.62462 3.7104 1.92002 3.7104 2.08552 3.8758L3.74593 5.5362L7.91463 1.3645C7.95569 1.32334 8.00445 1.29068 8.05814 1.26837C8.11183 1.24606 8.16939 1.23455 8.22753 1.2345C8.34563 1.2345 8.45792 1.2818 8.54063 1.3645L9.61903 2.446C9.79363 2.6203 9.79363 2.9009 9.61933 3.0722Z" />
                          </svg>
                          Laundry &amp; Dry Cleaning
                        </li>
                        <li>
                          <svg
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.61933 3.0722L4.05903 8.6355C3.97043 8.7211 3.85813 8.7655 3.74593 8.7655C3.68772 8.76559 3.63008 8.75415 3.57632 8.73184C3.52256 8.70952 3.47376 8.67678 3.43272 8.6355L0.380725 5.5835C0.206425 5.4121 0.206425 5.1315 0.380725 4.9572L1.45912 3.8758C1.62462 3.7104 1.92002 3.7104 2.08552 3.8758L3.74593 5.5362L7.91463 1.3645C7.95569 1.32334 8.00445 1.29068 8.05814 1.26837C8.11183 1.24606 8.16939 1.23455 8.22753 1.2345C8.34563 1.2345 8.45792 1.2818 8.54063 1.3645L9.61903 2.446C9.79363 2.6203 9.79363 2.9009 9.61933 3.0722Z" />
                          </svg>
                          Elevators
                        </li>
                      </ul>
                    </div>
                    <div className="single-facilities">
                      <h6>
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M15.9328 7.60218H15.8287V2.85186C15.8286 2.39142 15.6458 1.94983 15.3205 1.62398C14.9952 1.29813 14.5539 1.11463 14.0934 1.11374H3.90937C3.44849 1.11404 3.00656 1.29726 2.68066 1.62315C2.35477 1.94905 2.17155 2.39098 2.17125 2.85186V7.60218H2.07C1.67063 7.60277 1.28782 7.76188 1.00569 8.04454C0.723554 8.32721 0.565163 8.7103 0.565312 9.10968V11.2978C0.565312 11.3006 0.5625 11.3034 0.5625 11.3062C0.5625 11.3091 0.565312 11.3091 0.565312 11.3119V13.5759C0.565312 13.6505 0.594944 13.7221 0.647689 13.7748C0.700433 13.8275 0.77197 13.8572 0.846563 13.8572H1.39781V14.4506C1.39781 14.8038 1.53812 15.1425 1.78786 15.3923C2.03761 15.642 2.37634 15.7823 2.72953 15.7823C3.08273 15.7823 3.42145 15.642 3.6712 15.3923C3.92094 15.1425 4.06125 14.8038 4.06125 14.4506V13.8572H7.39125C7.43062 13.8797 7.47 13.905 7.50938 13.9275V16.605C7.50889 16.6549 7.52198 16.7041 7.54725 16.7472C7.57251 16.7903 7.60899 16.8257 7.65281 16.8497C7.69457 16.8742 7.74222 16.8868 7.79063 16.8862C7.84237 16.8862 7.89305 16.8716 7.93687 16.8441L9 16.1831L10.0603 16.8441C10.1031 16.8699 10.1519 16.8841 10.2019 16.885C10.2518 16.8859 10.3011 16.8736 10.3448 16.8494C10.3885 16.8251 10.425 16.7897 10.4506 16.7468C10.4762 16.7039 10.49 16.655 10.4906 16.605V13.9275C10.53 13.905 10.5694 13.8825 10.6088 13.8572H13.9388V14.4506C13.9388 14.8042 14.0792 15.1433 14.3292 15.3933C14.5792 15.6433 14.9183 15.7837 15.2719 15.7837C15.6254 15.7837 15.9645 15.6433 16.2145 15.3933C16.4645 15.1433 16.605 14.8042 16.605 14.4506V13.8572H17.1562C17.2308 13.8572 17.3024 13.8275 17.3551 13.7748C17.4079 13.7221 17.4375 13.6505 17.4375 13.5759V9.10968C17.4376 8.7103 17.2793 8.32721 16.9971 8.04454C16.715 7.76188 16.3322 7.60277 15.9328 7.60218ZM4.47469 5.32686C4.47458 5.29692 4.48039 5.26724 4.4918 5.23955C4.50321 5.21186 4.51999 5.1867 4.54116 5.16553C4.56234 5.14435 4.5875 5.12757 4.61519 5.11617C4.64288 5.10476 4.67255 5.09894 4.7025 5.09905H7.54875C7.6091 5.09927 7.66692 5.12335 7.70959 5.16602C7.75227 5.2087 7.77634 5.26651 7.77656 5.32686V7.60218H4.47469V5.32686ZM10.2262 5.32686C10.2261 5.29692 10.232 5.26724 10.2434 5.23955C10.2548 5.21186 10.2715 5.1867 10.2927 5.16553C10.3139 5.14435 10.3391 5.12757 10.3668 5.11617C10.3944 5.10476 10.4241 5.09894 10.4541 5.09905H13.3003C13.3607 5.09927 13.4185 5.12335 13.4612 5.16602C13.5038 5.2087 13.5279 5.26651 13.5281 5.32686V7.60218H10.2262V5.32686ZM3.49875 14.4506C3.49875 14.6546 3.41771 14.8503 3.27345 14.9945C3.12919 15.1388 2.93354 15.2198 2.72953 15.2198C2.52552 15.2198 2.32987 15.1388 2.18561 14.9945C2.04135 14.8503 1.96031 14.6546 1.96031 14.4506V13.8572H3.49875V14.4506ZM1.12781 13.2947V11.5875H6.00187C6.06005 12.2198 6.31703 12.8175 6.73594 13.2947H1.12781ZM9.92812 16.0987L9.14906 15.6122C9.10474 15.5846 9.0536 15.57 9.00141 15.57C8.94922 15.57 8.89807 15.5846 8.85375 15.6122L8.07188 16.0987V14.1778C8.67467 14.3765 9.32533 14.3765 9.92812 14.1778V16.0987ZM9 13.7644C8.3506 13.7634 7.72807 13.505 7.26888 13.0458C6.80968 12.5866 6.55128 11.9641 6.55031 11.3147V11.3034C6.55031 10.6537 6.8084 10.0306 7.26781 9.57124C7.72722 9.11183 8.3503 8.85374 9 8.85374C9.6497 8.85374 10.2728 9.11183 10.7322 9.57124C11.1916 10.0306 11.4497 10.6537 11.4497 11.3034V11.3147C11.4487 11.9641 11.1903 12.5866 10.7311 13.0458C10.2719 13.505 9.6494 13.7634 9 13.7644ZM16.0425 14.4506C16.0425 14.655 15.9613 14.851 15.8168 14.9955C15.6723 15.14 15.4763 15.2212 15.2719 15.2212C15.0675 15.2212 14.8715 15.14 14.727 14.9955C14.5824 14.851 14.5013 14.655 14.5013 14.4506V13.8572H16.0425V14.4506ZM16.875 13.2947H11.2641C11.683 12.8175 11.9399 12.2198 11.9981 11.5875H16.875V13.2947ZM16.875 11.025H11.9981C11.9266 10.2794 11.5798 9.58729 11.0254 9.08362C10.4711 8.57994 9.74898 8.30088 9 8.30088C8.25102 8.30088 7.5289 8.57994 6.97457 9.08362C6.42023 9.58729 6.07344 10.2794 6.00187 11.025H1.12781V9.10968C1.12774 8.85951 1.22689 8.61953 1.40352 8.44237C1.58015 8.26521 1.81984 8.16535 2.07 8.16468H15.9328C16.183 8.16535 16.4227 8.26521 16.5993 8.44237C16.7759 8.61953 16.8751 8.85951 16.875 9.10968V11.025Z" />
                          <path d="M10.3701 10.4062L9.72603 10.3134L9.43915 9.73122C9.3988 9.64929 9.33631 9.58031 9.25877 9.53206C9.18123 9.48382 9.09173 9.45825 9.0004 9.45825C8.90908 9.45825 8.81958 9.48382 8.74204 9.53206C8.6645 9.58031 8.60201 9.64929 8.56165 9.73122L8.27478 10.3134L7.63072 10.4062C7.54009 10.4191 7.4549 10.4571 7.38486 10.516C7.31482 10.575 7.26276 10.6524 7.2346 10.7395C7.20645 10.8266 7.20335 10.9198 7.22565 11.0086C7.24795 11.0974 7.29475 11.1781 7.36072 11.2415L7.82478 11.6943L7.71509 12.3356C7.70331 12.406 7.70697 12.4781 7.72583 12.547C7.74469 12.6158 7.77829 12.6797 7.8243 12.7343C7.87032 12.7889 7.92764 12.8328 7.99232 12.863C8.05699 12.8933 8.12746 12.9091 8.19884 12.9093C8.2781 12.9084 8.35607 12.8892 8.42665 12.8531L9.0004 12.5493L9.57415 12.8531C9.65532 12.8961 9.74701 12.9152 9.8386 12.9083C9.93019 12.9013 10.0179 12.8685 10.0917 12.8137C10.1662 12.7608 10.224 12.6876 10.2584 12.6029C10.2928 12.5182 10.3022 12.4255 10.2857 12.3356L10.176 11.6943L10.6401 11.2415C10.7061 11.1781 10.7529 11.0974 10.7752 11.0086C10.7975 10.9198 10.7944 10.8266 10.7662 10.7395C10.7381 10.6524 10.686 10.575 10.6159 10.516C10.5459 10.4571 10.4607 10.4191 10.3701 10.4062ZM9.75697 11.3203C9.69989 11.3755 9.65723 11.4438 9.63271 11.5193C9.6082 11.5948 9.60257 11.6752 9.61634 11.7534L9.70634 12.285L9.22822 12.0347C9.15797 11.9977 9.07978 11.9784 9.0004 11.9784C8.92103 11.9784 8.84284 11.9977 8.77259 12.0347L8.29447 12.285L8.38447 11.7534C8.39823 11.6752 8.39261 11.5948 8.36809 11.5193C8.34358 11.4438 8.30091 11.3755 8.24384 11.3203L7.85572 10.9406L8.3929 10.8647C8.47168 10.8531 8.54644 10.8225 8.61066 10.7754C8.67489 10.7284 8.72662 10.6663 8.76134 10.5947L9.0004 10.1109L9.23947 10.5947C9.27419 10.6663 9.32592 10.7284 9.39014 10.7754C9.45436 10.8225 9.52912 10.8531 9.6079 10.8647L10.1451 10.9406L9.75697 11.3203Z" />
                        </svg>
                        Room Amenities
                      </h6>
                      <ul className="facilities-list">
                        <li>
                          <svg
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.61933 3.0722L4.05903 8.6355C3.97043 8.7211 3.85813 8.7655 3.74593 8.7655C3.68772 8.76559 3.63008 8.75415 3.57632 8.73184C3.52256 8.70952 3.47376 8.67678 3.43272 8.6355L0.380725 5.5835C0.206425 5.4121 0.206425 5.1315 0.380725 4.9572L1.45912 3.8758C1.62462 3.7104 1.92002 3.7104 2.08552 3.8758L3.74593 5.5362L7.91463 1.3645C7.95569 1.32334 8.00445 1.29068 8.05814 1.26837C8.11183 1.24606 8.16939 1.23455 8.22753 1.2345C8.34563 1.2345 8.45792 1.2818 8.54063 1.3645L9.61903 2.446C9.79363 2.6203 9.79363 2.9009 9.61933 3.0722Z" />
                          </svg>
                          Luxury Bedding
                        </li>
                        <li>
                          <svg
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.61933 3.0722L4.05903 8.6355C3.97043 8.7211 3.85813 8.7655 3.74593 8.7655C3.68772 8.76559 3.63008 8.75415 3.57632 8.73184C3.52256 8.70952 3.47376 8.67678 3.43272 8.6355L0.380725 5.5835C0.206425 5.4121 0.206425 5.1315 0.380725 4.9572L1.45912 3.8758C1.62462 3.7104 1.92002 3.7104 2.08552 3.8758L3.74593 5.5362L7.91463 1.3645C7.95569 1.32334 8.00445 1.29068 8.05814 1.26837C8.11183 1.24606 8.16939 1.23455 8.22753 1.2345C8.34563 1.2345 8.45792 1.2818 8.54063 1.3645L9.61903 2.446C9.79363 2.6203 9.79363 2.9009 9.61933 3.0722Z" />
                          </svg>
                          Flat-Screen TV
                        </li>
                        <li>
                          <svg
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.61933 3.0722L4.05903 8.6355C3.97043 8.7211 3.85813 8.7655 3.74593 8.7655C3.68772 8.76559 3.63008 8.75415 3.57632 8.73184C3.52256 8.70952 3.47376 8.67678 3.43272 8.6355L0.380725 5.5835C0.206425 5.4121 0.206425 5.1315 0.380725 4.9572L1.45912 3.8758C1.62462 3.7104 1.92002 3.7104 2.08552 3.8758L3.74593 5.5362L7.91463 1.3645C7.95569 1.32334 8.00445 1.29068 8.05814 1.26837C8.11183 1.24606 8.16939 1.23455 8.22753 1.2345C8.34563 1.2345 8.45792 1.2818 8.54063 1.3645L9.61903 2.446C9.79363 2.6203 9.79363 2.9009 9.61933 3.0722Z" />
                          </svg>
                          Coffee &amp; Tea Making
                        </li>
                        <li>
                          <svg
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.61933 3.0722L4.05903 8.6355C3.97043 8.7211 3.85813 8.7655 3.74593 8.7655C3.68772 8.76559 3.63008 8.75415 3.57632 8.73184C3.52256 8.70952 3.47376 8.67678 3.43272 8.6355L0.380725 5.5835C0.206425 5.4121 0.206425 5.1315 0.380725 4.9572L1.45912 3.8758C1.62462 3.7104 1.92002 3.7104 2.08552 3.8758L3.74593 5.5362L7.91463 1.3645C7.95569 1.32334 8.00445 1.29068 8.05814 1.26837C8.11183 1.24606 8.16939 1.23455 8.22753 1.2345C8.34563 1.2345 8.45792 1.2818 8.54063 1.3645L9.61903 2.446C9.79363 2.6203 9.79363 2.9009 9.61933 3.0722Z" />
                          </svg>
                          Bathrobes &amp; Slippers
                        </li>
                        <li>
                          <svg
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.61933 3.0722L4.05903 8.6355C3.97043 8.7211 3.85813 8.7655 3.74593 8.7655C3.68772 8.76559 3.63008 8.75415 3.57632 8.73184C3.52256 8.70952 3.47376 8.67678 3.43272 8.6355L0.380725 5.5835C0.206425 5.4121 0.206425 5.1315 0.380725 4.9572L1.45912 3.8758C1.62462 3.7104 1.92002 3.7104 2.08552 3.8758L3.74593 5.5362L7.91463 1.3645C7.95569 1.32334 8.00445 1.29068 8.05814 1.26837C8.11183 1.24606 8.16939 1.23455 8.22753 1.2345C8.34563 1.2345 8.45792 1.2818 8.54063 1.3645L9.61903 2.446C9.79363 2.6203 9.79363 2.9009 9.61933 3.0722Z" />
                          </svg>
                          Balcony / Terrace
                        </li>
                      </ul>
                    </div>
                    <div className="single-facilities">
                      <h6>
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g>
                            <path d="M10.7367 8.1702C11.3003 7.59294 12.0639 7.52328 12.7556 7.49088C13.8111 7.4412 15.0884 7.35912 16.2316 6.21576C17.7539 4.69368 17.992 2.46402 16.7635 1.2357C15.5352 0.00719741 13.3055 0.245337 11.7834 1.76742C10.6399 2.91096 10.558 4.18806 10.5083 5.24358C10.4759 5.93532 10.4063 6.69888 9.82901 7.26246C9.72101 7.36776 9.61139 7.47306 9.49997 7.57854C9.81677 7.86816 10.1408 8.15724 10.4716 8.4456C10.56 8.35272 10.6484 8.26092 10.7367 8.1702ZM0.997487 14.877C0.377387 15.7111 0.228527 16.5546 0.836567 17.1626C1.44461 17.7707 2.28809 17.6218 3.12239 17.0017C4.19879 16.2014 6.27995 13.3146 8.55821 10.6027C8.2007 10.1903 7.83724 9.783 7.46795 9.38106C4.73555 11.6827 1.80461 13.7911 0.997487 14.877Z" />
                            <path d="M8.45512 7.6212C8.40074 7.56418 8.36407 7.4926 8.34957 7.41516C8.33506 7.33771 8.34334 7.25772 8.3734 7.18488C8.58389 6.72786 8.64679 6.21662 8.55337 5.7222C8.45995 5.22778 8.21485 4.77474 7.85212 4.42602L3.84712 0.57834C3.80078 0.534331 3.74585 0.500368 3.68577 0.478579C3.6257 0.45679 3.56177 0.447646 3.49799 0.451718C3.43421 0.455791 3.37196 0.472993 3.31515 0.502247C3.25833 0.5315 3.20816 0.572174 3.1678 0.62172C3.09444 0.713238 3.05788 0.828839 3.06527 0.945895C3.07266 1.06295 3.12347 1.17304 3.20776 1.2546L6.69058 4.73724C6.73616 4.78286 6.77167 4.83753 6.79479 4.89773C6.81791 4.95793 6.82814 5.02232 6.82482 5.08672C6.82149 5.15113 6.80469 5.21411 6.77549 5.27161C6.74628 5.32911 6.70534 5.37984 6.6553 5.42052C6.56174 5.49141 6.44538 5.52545 6.32836 5.51616C6.21134 5.50686 6.10182 5.45489 6.02062 5.37012L2.54464 1.89396C2.49902 1.84838 2.44435 1.81287 2.38415 1.78975C2.32394 1.76663 2.25956 1.7564 2.19516 1.75972C2.13075 1.76305 2.06777 1.77985 2.01027 1.80905C1.95277 1.83826 1.90204 1.8792 1.86136 1.92924C1.79047 2.0228 1.75643 2.13916 1.76572 2.25618C1.77502 2.37319 1.82699 2.48272 1.91176 2.56392L5.38792 6.0399C5.4335 6.08552 5.46901 6.14019 5.49213 6.20039C5.51525 6.26059 5.52548 6.32498 5.52216 6.38938C5.51883 6.45379 5.50203 6.51677 5.47283 6.57427C5.44362 6.63177 5.40268 6.6825 5.35264 6.72318C5.25908 6.79407 5.14272 6.82811 5.0257 6.81882C4.90868 6.80952 4.79916 6.75755 4.71796 6.67278L1.24198 3.19662C1.19647 3.1516 1.14213 3.11649 1.08238 3.0935C1.02263 3.07052 0.958772 3.06015 0.894821 3.06306C0.83087 3.06597 0.768214 3.08209 0.7108 3.1104C0.653385 3.13872 0.602456 3.17861 0.561219 3.22758C0.486586 3.31798 0.448235 3.4329 0.453625 3.55C0.459014 3.66711 0.507758 3.77802 0.590379 3.86118L4.42528 7.85286C4.774 8.21559 5.22704 8.46069 5.72146 8.55411C6.21588 8.64753 6.72711 8.58463 7.18414 8.37414C7.25698 8.34408 7.33697 8.3358 7.41442 8.35031C7.49186 8.36481 7.56344 8.40148 7.62046 8.45586C10.6056 11.6136 13.671 15.894 15.026 16.938C15.8646 17.584 16.6833 17.7779 17.2301 17.231C17.777 16.6842 17.5829 15.8656 16.9371 15.0269C15.8933 13.6719 11.6127 10.6063 8.45512 7.6212Z" />
                          </g>
                        </svg>
                        Dining &amp; Beverage
                      </h6>
                      <ul className="facilities-list">
                        <li>
                          <svg
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.61933 3.0722L4.05903 8.6355C3.97043 8.7211 3.85813 8.7655 3.74593 8.7655C3.68772 8.76559 3.63008 8.75415 3.57632 8.73184C3.52256 8.70952 3.47376 8.67678 3.43272 8.6355L0.380725 5.5835C0.206425 5.4121 0.206425 5.1315 0.380725 4.9572L1.45912 3.8758C1.62462 3.7104 1.92002 3.7104 2.08552 3.8758L3.74593 5.5362L7.91463 1.3645C7.95569 1.32334 8.00445 1.29068 8.05814 1.26837C8.11183 1.24606 8.16939 1.23455 8.22753 1.2345C8.34563 1.2345 8.45792 1.2818 8.54063 1.3645L9.61903 2.446C9.79363 2.6203 9.79363 2.9009 9.61933 3.0722Z" />
                          </svg>
                          On-Site Restaurants
                        </li>
                        <li>
                          <svg
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.61933 3.0722L4.05903 8.6355C3.97043 8.7211 3.85813 8.7655 3.74593 8.7655C3.68772 8.76559 3.63008 8.75415 3.57632 8.73184C3.52256 8.70952 3.47376 8.67678 3.43272 8.6355L0.380725 5.5835C0.206425 5.4121 0.206425 5.1315 0.380725 4.9572L1.45912 3.8758C1.62462 3.7104 1.92002 3.7104 2.08552 3.8758L3.74593 5.5362L7.91463 1.3645C7.95569 1.32334 8.00445 1.29068 8.05814 1.26837C8.11183 1.24606 8.16939 1.23455 8.22753 1.2345C8.34563 1.2345 8.45792 1.2818 8.54063 1.3645L9.61903 2.446C9.79363 2.6203 9.79363 2.9009 9.61933 3.0722Z" />
                          </svg>
                          Bars &amp; Lounges
                        </li>
                        <li>
                          <svg
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.61933 3.0722L4.05903 8.6355C3.97043 8.7211 3.85813 8.7655 3.74593 8.7655C3.68772 8.76559 3.63008 8.75415 3.57632 8.73184C3.52256 8.70952 3.47376 8.67678 3.43272 8.6355L0.380725 5.5835C0.206425 5.4121 0.206425 5.1315 0.380725 4.9572L1.45912 3.8758C1.62462 3.7104 1.92002 3.7104 2.08552 3.8758L3.74593 5.5362L7.91463 1.3645C7.95569 1.32334 8.00445 1.29068 8.05814 1.26837C8.11183 1.24606 8.16939 1.23455 8.22753 1.2345C8.34563 1.2345 8.45792 1.2818 8.54063 1.3645L9.61903 2.446C9.79363 2.6203 9.79363 2.9009 9.61933 3.0722Z" />
                          </svg>
                          Buffet Breakfast
                        </li>
                        <li>
                          <svg
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.61933 3.0722L4.05903 8.6355C3.97043 8.7211 3.85813 8.7655 3.74593 8.7655C3.68772 8.76559 3.63008 8.75415 3.57632 8.73184C3.52256 8.70952 3.47376 8.67678 3.43272 8.6355L0.380725 5.5835C0.206425 5.4121 0.206425 5.1315 0.380725 4.9572L1.45912 3.8758C1.62462 3.7104 1.92002 3.7104 2.08552 3.8758L3.74593 5.5362L7.91463 1.3645C7.95569 1.32334 8.00445 1.29068 8.05814 1.26837C8.11183 1.24606 8.16939 1.23455 8.22753 1.2345C8.34563 1.2345 8.45792 1.2818 8.54063 1.3645L9.61903 2.446C9.79363 2.6203 9.79363 2.9009 9.61933 3.0722Z" />
                          </svg>
                          Rooftop Dining
                        </li>
                        <li>
                          <svg
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.61933 3.0722L4.05903 8.6355C3.97043 8.7211 3.85813 8.7655 3.74593 8.7655C3.68772 8.76559 3.63008 8.75415 3.57632 8.73184C3.52256 8.70952 3.47376 8.67678 3.43272 8.6355L0.380725 5.5835C0.206425 5.4121 0.206425 5.1315 0.380725 4.9572L1.45912 3.8758C1.62462 3.7104 1.92002 3.7104 2.08552 3.8758L3.74593 5.5362L7.91463 1.3645C7.95569 1.32334 8.00445 1.29068 8.05814 1.26837C8.11183 1.24606 8.16939 1.23455 8.22753 1.2345C8.34563 1.2345 8.45792 1.2818 8.54063 1.3645L9.61903 2.446C9.79363 2.6203 9.79363 2.9009 9.61933 3.0722Z" />
                          </svg>
                          In-Room Dining
                        </li>
                      </ul>
                    </div>
                    <div className="single-facilities">
                      <h6>
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g>
                            <path d="M16.9102 2.14453H16.2084V2.14312C16.2084 1.36536 15.5756 0.732651 14.7976 0.732651L4.6125 0.7323C3.67896 0.7323 2.90232 1.33291 2.61654 2.14453H0.738281V1.44738C0.738281 1.25321 0.580887 1.09582 0.386719 1.09582C0.192551 1.09582 0.0351562 1.25321 0.0351562 1.44738V4.963C0.0351562 5.15717 0.192551 5.31457 0.386719 5.31457C0.580887 5.31457 0.738281 5.15717 0.738281 4.963V4.25988H2.49609V13.3857C2.49609 14.1637 3.12884 14.7966 3.90656 14.7966H6.02613V15.8572C6.02613 16.6349 6.65887 17.2677 7.4366 17.2677H14.7976C15.5756 17.2677 16.2084 16.6349 16.2084 15.8572V4.25953H16.9102C17.4933 4.25953 17.9677 3.78513 17.9677 3.20203C17.9677 2.61892 17.4933 2.14453 16.9102 2.14453ZM6.02613 9.53332V10.588H3.19922V9.53332M3.19922 11.2911H6.02613V12.3458H3.19922V11.2911ZM6.72926 13.7521H15.5053V14.8068H6.72926V13.7521ZM15.5053 2.14312V11.2911H6.72926V2.84906C6.72926 2.32495 6.53418 1.82334 6.18708 1.43578H14.7976C15.1879 1.43578 15.5053 1.7531 15.5053 2.14312ZM4.6125 1.43578H4.6466C5.14498 1.44755 5.59357 1.72729 5.83608 2.14453H3.38797C3.63435 1.71741 4.08913 1.43578 4.6125 1.43578ZM6.02613 4.25988V8.83019H3.19922V4.25988H6.02613ZM3.19922 13.3857V13.0489H6.02613V14.0934H3.90656C3.51654 14.0934 3.19922 13.776 3.19922 13.3857Z" />
                          </g>
                        </svg>
                        Wellness Amenities
                      </h6>
                      <ul className="facilities-list">
                        <li>
                          <svg
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.61933 3.0722L4.05903 8.6355C3.97043 8.7211 3.85813 8.7655 3.74593 8.7655C3.68772 8.76559 3.63008 8.75415 3.57632 8.73184C3.52256 8.70952 3.47376 8.67678 3.43272 8.6355L0.380725 5.5835C0.206425 5.4121 0.206425 5.1315 0.380725 4.9572L1.45912 3.8758C1.62462 3.7104 1.92002 3.7104 2.08552 3.8758L3.74593 5.5362L7.91463 1.3645C7.95569 1.32334 8.00445 1.29068 8.05814 1.26837C8.11183 1.24606 8.16939 1.23455 8.22753 1.2345C8.34563 1.2345 8.45792 1.2818 8.54063 1.3645L9.61903 2.446C9.79363 2.6203 9.79363 2.9009 9.61933 3.0722Z" />
                          </svg>
                          Swimming Pool
                        </li>
                        <li>
                          <svg
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.61933 3.0722L4.05903 8.6355C3.97043 8.7211 3.85813 8.7655 3.74593 8.7655C3.68772 8.76559 3.63008 8.75415 3.57632 8.73184C3.52256 8.70952 3.47376 8.67678 3.43272 8.6355L0.380725 5.5835C0.206425 5.4121 0.206425 5.1315 0.380725 4.9572L1.45912 3.8758C1.62462 3.7104 1.92002 3.7104 2.08552 3.8758L3.74593 5.5362L7.91463 1.3645C7.95569 1.32334 8.00445 1.29068 8.05814 1.26837C8.11183 1.24606 8.16939 1.23455 8.22753 1.2345C8.34563 1.2345 8.45792 1.2818 8.54063 1.3645L9.61903 2.446C9.79363 2.6203 9.79363 2.9009 9.61933 3.0722Z" />
                          </svg>
                          Fitness Center
                        </li>
                        <li>
                          <svg
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.61933 3.0722L4.05903 8.6355C3.97043 8.7211 3.85813 8.7655 3.74593 8.7655C3.68772 8.76559 3.63008 8.75415 3.57632 8.73184C3.52256 8.70952 3.47376 8.67678 3.43272 8.6355L0.380725 5.5835C0.206425 5.4121 0.206425 5.1315 0.380725 4.9572L1.45912 3.8758C1.62462 3.7104 1.92002 3.7104 2.08552 3.8758L3.74593 5.5362L7.91463 1.3645C7.95569 1.32334 8.00445 1.29068 8.05814 1.26837C8.11183 1.24606 8.16939 1.23455 8.22753 1.2345C8.34563 1.2345 8.45792 1.2818 8.54063 1.3645L9.61903 2.446C9.79363 2.6203 9.79363 2.9009 9.61933 3.0722Z" />
                          </svg>
                          Spa &amp; Sauna
                        </li>
                        <li>
                          <svg
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.61933 3.0722L4.05903 8.6355C3.97043 8.7211 3.85813 8.7655 3.74593 8.7655C3.68772 8.76559 3.63008 8.75415 3.57632 8.73184C3.52256 8.70952 3.47376 8.67678 3.43272 8.6355L0.380725 5.5835C0.206425 5.4121 0.206425 5.1315 0.380725 4.9572L1.45912 3.8758C1.62462 3.7104 1.92002 3.7104 2.08552 3.8758L3.74593 5.5362L7.91463 1.3645C7.95569 1.32334 8.00445 1.29068 8.05814 1.26837C8.11183 1.24606 8.16939 1.23455 8.22753 1.2345C8.34563 1.2345 8.45792 1.2818 8.54063 1.3645L9.61903 2.446C9.79363 2.6203 9.79363 2.9009 9.61933 3.0722Z" />
                          </svg>
                          Yoga &amp; Meditation
                        </li>
                        <li>
                          <svg
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.61933 3.0722L4.05903 8.6355C3.97043 8.7211 3.85813 8.7655 3.74593 8.7655C3.68772 8.76559 3.63008 8.75415 3.57632 8.73184C3.52256 8.70952 3.47376 8.67678 3.43272 8.6355L0.380725 5.5835C0.206425 5.4121 0.206425 5.1315 0.380725 4.9572L1.45912 3.8758C1.62462 3.7104 1.92002 3.7104 2.08552 3.8758L3.74593 5.5362L7.91463 1.3645C7.95569 1.32334 8.00445 1.29068 8.05814 1.26837C8.11183 1.24606 8.16939 1.23455 8.22753 1.2345C8.34563 1.2345 8.45792 1.2818 8.54063 1.3645L9.61903 2.446C9.79363 2.6203 9.79363 2.9009 9.61933 3.0722Z" />
                          </svg>
                          Jacuzzi / Hot Tub
                        </li>
                      </ul>
                    </div>
                    <div className="single-facilities">
                      <h6>
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g>
                            <path d="M6.7463 10.4009C6.66771 10.3398 6.04425 9.86826 4.31451 9.75338C4.21936 9.74547 4.12349 9.6781 4.03898 9.62152C3.93145 9.54983 3.81975 9.47469 3.73827 9.37796C3.60583 9.21975 3.45626 9.08688 3.33059 8.9114C2.48962 7.73905 1.66549 7.50369 1.54227 7.45719C1.37816 7.37802 0.74952 7.47547 1.05153 7.89467C1.07068 7.89783 2.01314 9.22177 2.07432 9.32757C2.18257 9.51457 2.30507 9.59101 2.42009 9.722C2.52518 9.84177 2.64149 9.95204 2.74888 10.0698C2.74888 10.0698 2.14615 9.71293 2.00177 9.5566C1.93742 9.4865 1.90647 9.38602 1.85522 9.30281C1.79551 9.20726 1.73325 9.11332 1.66851 9.0211C1.58863 8.90534 1.50622 8.79135 1.42135 8.67921C1.31223 8.53713 1.19894 8.39807 1.08651 8.25843C1.01655 8.17149 0.937522 8.08756 0.879797 7.99673C0.594771 7.54644 0.920248 7.27711 1.23003 7.24313C1.21506 7.19131 1.07255 5.82966 1.04765 5.60107C0.976534 4.94464 0.906285 4.45837 0.529992 4.32608C0.432968 4.29181 0.364446 4.30333 0.292182 4.37963C0.206674 4.46945 0.155715 4.94622 0.131099 5.24766C0.131099 5.24766 -0.033439 6.86511 0.00614805 7.61986C0.0273091 8.02465 1.28474 10.8091 1.64606 11.2397C2.00709 11.6697 4.83303 13.2987 4.83303 13.2987C4.92746 13.3774 5.45073 13.7803 5.45073 14.3086V15.4555L8.49735 15.4591L8.49994 14.4067C8.50699 14.212 8.5401 14.0187 8.56342 13.8249C8.62978 13.6037 8.57666 13.1855 8.54571 13.0231C8.19188 11.444 6.88882 10.5112 6.7463 10.4009ZM17.8692 5.24766C17.8445 4.94608 17.7937 4.46945 17.7082 4.37963C17.6359 4.30333 17.5672 4.29181 17.4702 4.32608C17.0944 4.45851 17.0237 4.94478 16.9527 5.60107C16.9277 5.82966 16.7853 7.19131 16.7702 7.24313C17.0798 7.27711 17.4056 7.54644 17.1204 7.99673C17.0628 8.08771 16.9839 8.17149 16.9138 8.25843C16.8014 8.39807 16.688 8.53713 16.5789 8.67921C16.4939 8.79128 16.4116 8.90528 16.3318 9.0211C16.267 9.11328 16.2047 9.20722 16.145 9.30281C16.094 9.38602 16.0631 9.48621 15.9983 9.5566C15.8538 9.71308 15.2512 10.0698 15.2512 10.0698C15.3586 9.95204 15.4752 9.84177 15.5801 9.722C15.6951 9.59101 15.8175 9.51457 15.9257 9.32757C15.9872 9.22191 16.9297 7.89783 16.9485 7.89467C17.2507 7.47547 16.6218 7.37802 16.4578 7.45719C16.3347 7.50355 15.5106 7.73905 14.6695 8.9114C14.5439 9.08688 14.3942 9.22018 14.2618 9.37796C14.1805 9.47498 14.0685 9.54983 13.9609 9.62152C13.8764 9.6781 13.7806 9.74547 13.6854 9.75338C11.9557 9.86826 11.3324 10.3398 11.2536 10.4009C11.1112 10.5112 9.80818 11.4437 9.4542 13.0227C9.42311 13.1852 9.37013 13.6033 9.43649 13.8245C9.45982 14.0183 9.49307 14.2117 9.49998 14.4062L9.50257 15.4588L12.5492 15.4552V14.3083C12.5492 13.78 13.0725 13.3771 13.1669 13.2985C13.1669 13.2985 15.9927 11.6697 16.3539 11.2393C16.7152 10.8091 17.9723 8.02437 17.9938 7.61957C18.0336 6.86497 17.8692 5.24766 17.8692 5.24766Z" />
                            <path d="M7.36284 5.25113C8.1112 5.25113 8.71787 4.64447 8.71787 3.8961C8.71787 3.14774 8.1112 2.54108 7.36284 2.54108C6.61448 2.54108 6.00781 3.14774 6.00781 3.8961C6.00781 4.64447 6.61448 5.25113 7.36284 5.25113Z" />
                            <path d="M10.6378 5.53848C11.3654 5.53848 11.9552 4.94863 11.9552 4.22102C11.9552 3.49341 11.3654 2.90356 10.6378 2.90356C9.91016 2.90356 9.32031 3.49341 9.32031 4.22102C9.32031 4.94863 9.91016 5.53848 10.6378 5.53848Z" />
                            <path d="M10.5432 10.3475C10.6804 10.2207 10.8236 10.1005 10.9723 9.98732L10.9914 9.97264C11.1383 9.85892 11.476 9.64702 12.113 9.47528L11.9969 8.67649V7.90663C12.1415 8.26723 12.267 8.74789 12.3761 9.41137C12.661 9.34817 12.996 9.29434 13.3869 9.25806C13.0803 7.37041 12.6093 6.52425 11.5246 5.85933C11.5025 5.84566 11.1447 5.65622 10.9767 5.6149L10.6484 5.94542L10.3302 5.6113C10.3292 5.61158 10.328 5.61182 10.3269 5.61202C10.0837 5.67032 9.49547 6.05021 9.18712 6.34431C8.94082 6.04935 8.64283 5.8055 8.27734 5.58107C8.25459 5.56711 7.88651 5.37234 7.71362 5.32988L7.37619 5.6696L7.04899 5.32599L7.04568 5.32656C6.81291 5.40675 6.60648 5.5268 6.36147 5.69177C5.33566 6.38159 4.88855 7.2944 4.58984 9.25561C4.99349 9.29189 5.33811 9.34673 5.63019 9.41137C5.73398 8.73249 5.85303 8.22678 5.98935 7.84214V9.4986L5.98964 9.50335C6.562 9.66948 6.87394 9.86525 7.01286 9.97307L7.03157 9.98732C7.18064 10.101 7.32427 10.2216 7.46199 10.3488C7.87787 9.4177 8.67263 9.23402 8.78679 9.20652C8.78763 9.20649 8.78846 9.20629 8.78923 9.20595L9.00185 9.42922L9.21461 9.20566C9.21548 9.20624 9.21649 9.20624 9.21721 9.20624C9.33107 9.23387 10.1274 9.41597 10.5432 10.3475ZM9.00171 9.15499C8.76136 9.15073 8.5323 9.05226 8.36383 8.88079C8.19537 8.70931 8.10098 8.47854 8.10098 8.23815C8.10098 7.99777 8.19537 7.767 8.36383 7.59552C8.5323 7.42404 8.76136 7.32558 9.00171 7.32132C9.24341 7.32359 9.47444 7.42118 9.64459 7.59286C9.81473 7.76454 9.91023 7.99644 9.91034 8.23815C9.91016 8.47984 9.81463 8.7117 9.6445 8.88336C9.47437 9.05503 9.24338 9.15264 9.00171 9.15499Z" />
                          </g>
                        </svg>
                        Friendly Amenities
                      </h6>
                      <ul className="facilities-list">
                        <li>
                          <svg
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.61933 3.0722L4.05903 8.6355C3.97043 8.7211 3.85813 8.7655 3.74593 8.7655C3.68772 8.76559 3.63008 8.75415 3.57632 8.73184C3.52256 8.70952 3.47376 8.67678 3.43272 8.6355L0.380725 5.5835C0.206425 5.4121 0.206425 5.1315 0.380725 4.9572L1.45912 3.8758C1.62462 3.7104 1.92002 3.7104 2.08552 3.8758L3.74593 5.5362L7.91463 1.3645C7.95569 1.32334 8.00445 1.29068 8.05814 1.26837C8.11183 1.24606 8.16939 1.23455 8.22753 1.2345C8.34563 1.2345 8.45792 1.2818 8.54063 1.3645L9.61903 2.446C9.79363 2.6203 9.79363 2.9009 9.61933 3.0722Z" />
                          </svg>
                          Kids’ Club
                        </li>
                        <li>
                          <svg
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.61933 3.0722L4.05903 8.6355C3.97043 8.7211 3.85813 8.7655 3.74593 8.7655C3.68772 8.76559 3.63008 8.75415 3.57632 8.73184C3.52256 8.70952 3.47376 8.67678 3.43272 8.6355L0.380725 5.5835C0.206425 5.4121 0.206425 5.1315 0.380725 4.9572L1.45912 3.8758C1.62462 3.7104 1.92002 3.7104 2.08552 3.8758L3.74593 5.5362L7.91463 1.3645C7.95569 1.32334 8.00445 1.29068 8.05814 1.26837C8.11183 1.24606 8.16939 1.23455 8.22753 1.2345C8.34563 1.2345 8.45792 1.2818 8.54063 1.3645L9.61903 2.446C9.79363 2.6203 9.79363 2.9009 9.61933 3.0722Z" />
                          </svg>
                          Babysitting Services
                        </li>
                        <li>
                          <svg
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.61933 3.0722L4.05903 8.6355C3.97043 8.7211 3.85813 8.7655 3.74593 8.7655C3.68772 8.76559 3.63008 8.75415 3.57632 8.73184C3.52256 8.70952 3.47376 8.67678 3.43272 8.6355L0.380725 5.5835C0.206425 5.4121 0.206425 5.1315 0.380725 4.9572L1.45912 3.8758C1.62462 3.7104 1.92002 3.7104 2.08552 3.8758L3.74593 5.5362L7.91463 1.3645C7.95569 1.32334 8.00445 1.29068 8.05814 1.26837C8.11183 1.24606 8.16939 1.23455 8.22753 1.2345C8.34563 1.2345 8.45792 1.2818 8.54063 1.3645L9.61903 2.446C9.79363 2.6203 9.79363 2.9009 9.61933 3.0722Z" />
                          </svg>
                          Family Rooms
                        </li>
                        <li>
                          <svg
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.61933 3.0722L4.05903 8.6355C3.97043 8.7211 3.85813 8.7655 3.74593 8.7655C3.68772 8.76559 3.63008 8.75415 3.57632 8.73184C3.52256 8.70952 3.47376 8.67678 3.43272 8.6355L0.380725 5.5835C0.206425 5.4121 0.206425 5.1315 0.380725 4.9572L1.45912 3.8758C1.62462 3.7104 1.92002 3.7104 2.08552 3.8758L3.74593 5.5362L7.91463 1.3645C7.95569 1.32334 8.00445 1.29068 8.05814 1.26837C8.11183 1.24606 8.16939 1.23455 8.22753 1.2345C8.34563 1.2345 8.45792 1.2818 8.54063 1.3645L9.61903 2.446C9.79363 2.6203 9.79363 2.9009 9.61933 3.0722Z" />
                          </svg>
                          Children’s Pool
                        </li>
                      </ul>
                    </div>
                    <div className="single-facilities">
                      <h6>
                        <svg
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g>
                            <path d="M17.4915 0.508544C16.8035 -0.179393 15.6846 -0.167897 15.0109 0.534068L11.3235 4.37654L2.32492 1.39856L0.435937 3.28758L7.93659 7.90588L4.14127 11.8607L1.70736 11.4612L0 13.1685L3.5782 14.4218L4.83149 18L6.53885 16.2926L6.13927 13.8587L10.0941 10.0634L14.7124 17.5641L16.6014 15.6751L13.6235 6.67643L17.4659 2.98906C18.1679 2.3154 18.1794 1.19652 17.4915 0.508544Z" />
                          </g>
                        </svg>
                        Transport
                      </h6>
                      <ul className="facilities-list">
                        <li>
                          <svg
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.61933 3.0722L4.05903 8.6355C3.97043 8.7211 3.85813 8.7655 3.74593 8.7655C3.68772 8.76559 3.63008 8.75415 3.57632 8.73184C3.52256 8.70952 3.47376 8.67678 3.43272 8.6355L0.380725 5.5835C0.206425 5.4121 0.206425 5.1315 0.380725 4.9572L1.45912 3.8758C1.62462 3.7104 1.92002 3.7104 2.08552 3.8758L3.74593 5.5362L7.91463 1.3645C7.95569 1.32334 8.00445 1.29068 8.05814 1.26837C8.11183 1.24606 8.16939 1.23455 8.22753 1.2345C8.34563 1.2345 8.45792 1.2818 8.54063 1.3645L9.61903 2.446C9.79363 2.6203 9.79363 2.9009 9.61933 3.0722Z" />
                          </svg>
                          Airport Transfers
                        </li>
                        <li>
                          <svg
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.61933 3.0722L4.05903 8.6355C3.97043 8.7211 3.85813 8.7655 3.74593 8.7655C3.68772 8.76559 3.63008 8.75415 3.57632 8.73184C3.52256 8.70952 3.47376 8.67678 3.43272 8.6355L0.380725 5.5835C0.206425 5.4121 0.206425 5.1315 0.380725 4.9572L1.45912 3.8758C1.62462 3.7104 1.92002 3.7104 2.08552 3.8758L3.74593 5.5362L7.91463 1.3645C7.95569 1.32334 8.00445 1.29068 8.05814 1.26837C8.11183 1.24606 8.16939 1.23455 8.22753 1.2345C8.34563 1.2345 8.45792 1.2818 8.54063 1.3645L9.61903 2.446C9.79363 2.6203 9.79363 2.9009 9.61933 3.0722Z" />
                          </svg>
                          Shuttle Services
                        </li>
                        <li>
                          <svg
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.61933 3.0722L4.05903 8.6355C3.97043 8.7211 3.85813 8.7655 3.74593 8.7655C3.68772 8.76559 3.63008 8.75415 3.57632 8.73184C3.52256 8.70952 3.47376 8.67678 3.43272 8.6355L0.380725 5.5835C0.206425 5.4121 0.206425 5.1315 0.380725 4.9572L1.45912 3.8758C1.62462 3.7104 1.92002 3.7104 2.08552 3.8758L3.74593 5.5362L7.91463 1.3645C7.95569 1.32334 8.00445 1.29068 8.05814 1.26837C8.11183 1.24606 8.16939 1.23455 8.22753 1.2345C8.34563 1.2345 8.45792 1.2818 8.54063 1.3645L9.61903 2.446C9.79363 2.6203 9.79363 2.9009 9.61933 3.0722Z" />
                          </svg>
                          Car Rental Desk
                        </li>
                        <li>
                          <svg
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.61933 3.0722L4.05903 8.6355C3.97043 8.7211 3.85813 8.7655 3.74593 8.7655C3.68772 8.76559 3.63008 8.75415 3.57632 8.73184C3.52256 8.70952 3.47376 8.67678 3.43272 8.6355L0.380725 5.5835C0.206425 5.4121 0.206425 5.1315 0.380725 4.9572L1.45912 3.8758C1.62462 3.7104 1.92002 3.7104 2.08552 3.8758L3.74593 5.5362L7.91463 1.3645C7.95569 1.32334 8.00445 1.29068 8.05814 1.26837C8.11183 1.24606 8.16939 1.23455 8.22753 1.2345C8.34563 1.2345 8.45792 1.2818 8.54063 1.3645L9.61903 2.446C9.79363 2.6203 9.79363 2.9009 9.61933 3.0722Z" />
                          </svg>
                          Wheelchair Accessibility
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <BookingArea />
                <div className="hotel-dt-location-area mb-50">
                  <h4>View Hotel Location</h4>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.5647631857846!2d90.36311167605992!3d23.83407118555764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c14c8682a473%3A0xa6c74743d52adb88!2sEgens%20Lab!5e0!3m2!1sen!2sbd!4v1700138349574!5m2!1sen!2sbd"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="additional-info mb-50">
                  <h4>Additional Info</h4>
                  <ul className="items-list">
                    <li>
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15V16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16V15C11.866 15 15 11.866 15 8Z" />
                        <path d="M11.6947 6.45795L7.24644 10.9086C7.17556 10.9771 7.08572 11.0126 6.99596 11.0126C6.9494 11.0127 6.90328 11.0035 6.86027 10.9857C6.81727 10.9678 6.77822 10.9416 6.7454 10.9086L4.3038 8.46699C4.16436 8.32987 4.16436 8.10539 4.3038 7.96595L5.16652 7.10083C5.29892 6.96851 5.53524 6.96851 5.66764 7.10083L6.99596 8.42915L10.3309 5.09179C10.3638 5.05887 10.4028 5.03274 10.4457 5.01489C10.4887 4.99705 10.5347 4.98784 10.5812 4.98779C10.6757 4.98779 10.7656 5.02563 10.8317 5.09179L11.6944 5.95699C11.8341 6.09643 11.8341 6.32091 11.6947 6.45795Z" />
                      </svg>
                      <div className="content">
                        <span>Free Cancellation</span> – Some hotels offer free
                        cancellation up to a certain period (e.g., 24–48 hours
                        before departure).
                      </div>
                    </li>
                    <li>
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15V16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16V15C11.866 15 15 11.866 15 8Z" />
                        <path d="M11.6947 6.45795L7.24644 10.9086C7.17556 10.9771 7.08572 11.0126 6.99596 11.0126C6.9494 11.0127 6.90328 11.0035 6.86027 10.9857C6.81727 10.9678 6.77822 10.9416 6.7454 10.9086L4.3038 8.46699C4.16436 8.32987 4.16436 8.10539 4.3038 7.96595L5.16652 7.10083C5.29892 6.96851 5.53524 6.96851 5.66764 7.10083L6.99596 8.42915L10.3309 5.09179C10.3638 5.05887 10.4028 5.03274 10.4457 5.01489C10.4887 4.99705 10.5347 4.98784 10.5812 4.98779C10.6757 4.98779 10.7656 5.02563 10.8317 5.09179L11.6944 5.95699C11.8341 6.09643 11.8341 6.32091 11.6947 6.45795Z" />
                      </svg>
                      <div className="content">
                        <span>Health &amp; Safety Guidelines</span> – COVID-19
                        regulations, vaccinations, or travel restrictions.
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="customer-rating-area mb-50">
                  <h4>Customer Review &amp; Rating</h4>
                  <div className="rating-wrapper">
                    <div className="rating-area">
                      <span>Excellent!</span>
                      <ul>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-fill" />
                        </li>
                        <li>
                          <i className="bi bi-star-half" />
                        </li>
                      </ul>
                      <p>
                        <strong>4.5</strong> based on 3,545 reviews
                      </p>
                      <button
                        className="primary-btn1 two"
                        data-bs-toggle="modal"
                        data-bs-target="#ratingModal"
                      >
                        <span>Write a Review</span>
                        <span>Write a Review</span>
                      </button>
                    </div>
                    <ul className="progress-list">
                      <li className="single-progress">
                        <span>Overall</span>
                        <div className="rating-progress-bar-wrap">
                          <div className="rating-progress-bar">
                            <div
                              className="rating-progress-bar-per"
                              data-per={90}
                            />
                          </div>
                          <span className="data-per">0%</span>
                        </div>
                      </li>
                      <li className="single-progress">
                        <span>Transport</span>
                        <div className="rating-progress-bar-wrap">
                          <div className="rating-progress-bar">
                            <div
                              className="rating-progress-bar-per"
                              data-per={95}
                            />
                          </div>
                          <span className="data-per">0%</span>
                        </div>
                      </li>
                      <li className="single-progress">
                        <span>Food</span>
                        <div className="rating-progress-bar-wrap">
                          <div className="rating-progress-bar">
                            <div
                              className="rating-progress-bar-per"
                              data-per={80}
                            />
                          </div>
                          <span className="data-per">0%</span>
                        </div>
                      </li>
                      <li className="single-progress">
                        <span>Accomodation</span>
                        <div className="rating-progress-bar-wrap">
                          <div className="rating-progress-bar">
                            <div
                              className="rating-progress-bar-per"
                              data-per={98}
                            />
                          </div>
                          <span className="data-per">0%</span>
                        </div>
                      </li>
                      <li className="single-progress">
                        <span>Tour Guide</span>
                        <div className="rating-progress-bar-wrap">
                          <div className="rating-progress-bar">
                            <div
                              className="rating-progress-bar-per"
                              data-per={80}
                            />
                          </div>
                          <span className="data-per">0%</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="comment-area">
                    <ul className="comment">
                      <li>
                        <div className="single-comment-area">
                          <div className="author-img">
                            <Image
                              width={550}
                              height={220}
                              src="/assets/img/innerpages/comment-author-01.jpg"
                              alt=""
                            />
                          </div>
                          <div className="comment-content">
                            <div className="author-name-deg">
                              <h6>Mr. Bowmik Haldar,</h6>
                              <span>05 June, 2024</span>
                            </div>
                            <p>
                              Organization decides to seek consulting services
                              to address a particular issue or to achieve
                              specific objectives.
                            </p>
                            <ul className="review-item-list">
                              <li>
                                <span>Overall</span>
                                <ul className="star-list">
                                  <li>
                                    <i className="bi bi-star-fill" />
                                  </li>
                                  <li>
                                    <i className="bi bi-star-fill" />
                                  </li>
                                  <li>
                                    <i className="bi bi-star-fill" />
                                  </li>
                                  <li>
                                    <i className="bi bi-star-fill" />
                                  </li>
                                  <li>
                                    <i className="bi bi-star-half" />
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <span>Transport</span>
                                <ul className="star-list">
                                  <li>
                                    <i className="bi bi-star-fill" />
                                  </li>
                                  <li>
                                    <i className="bi bi-star-fill" />
                                  </li>
                                  <li>
                                    <i className="bi bi-star-fill" />
                                  </li>
                                  <li>
                                    <i className="bi bi-star-fill" />
                                  </li>
                                  <li>
                                    <i className="bi bi-star-half" />
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <span>Food</span>
                                <ul className="star-list">
                                  <li>
                                    <i className="bi bi-star-fill" />
                                  </li>
                                  <li>
                                    <i className="bi bi-star-fill" />
                                  </li>
                                  <li>
                                    <i className="bi bi-star-fill" />
                                  </li>
                                  <li>
                                    <i className="bi bi-star-fill" />
                                  </li>
                                  <li>
                                    <i className="bi bi-star-half" />
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <span>Destination</span>
                                <ul className="star-list">
                                  <li>
                                    <i className="bi bi-star-fill" />
                                  </li>
                                  <li>
                                    <i className="bi bi-star-fill" />
                                  </li>
                                  <li>
                                    <i className="bi bi-star-fill" />
                                  </li>
                                  <li>
                                    <i className="bi bi-star-fill" />
                                  </li>
                                  <li>
                                    <i className="bi bi-star-half" />
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <span>Hospitality</span>
                                <ul className="star-list">
                                  <li>
                                    <i className="bi bi-star-fill" />
                                  </li>
                                  <li>
                                    <i className="bi bi-star-fill" />
                                  </li>
                                  <li>
                                    <i className="bi bi-star-fill" />
                                  </li>
                                  <li>
                                    <i className="bi bi-star-fill" />
                                  </li>
                                  <li>
                                    <i className="bi bi-star-half" />
                                  </li>
                                </ul>
                              </li>
                            </ul>
                            <div className="replay-btn">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={14}
                                height={11}
                                viewBox="0 0 14 11"
                              >
                                <path d="M8.55126 1.11188C8.52766 1.10118 8.50182 1.09676 8.47612 1.09903C8.45042 1.1013 8.42569 1.11018 8.40419 1.12486C8.3827 1.13954 8.36513 1.15954 8.35311 1.18304C8.34109 1.20653 8.335 1.23276 8.33539 1.25932V2.52797C8.33539 2.67388 8.2791 2.81381 8.17889 2.91698C8.07868 3.02016 7.94277 3.07812 7.80106 3.07812C7.08826 3.07812 5.64984 3.08362 4.27447 3.98257C3.2229 4.66916 2.14783 5.9191 1.50129 8.24735C2.59132 7.16575 3.83632 6.57929 4.92635 6.2679C5.59636 6.07737 6.28492 5.96444 6.97926 5.93121C7.26347 5.91835 7.54815 5.92129 7.83205 5.94001H7.84594L7.85129 5.94111L7.80106 6.48906L7.85449 5.94111C7.98638 5.95476 8.10864 6.01839 8.19751 6.11966C8.28638 6.22092 8.33553 6.35258 8.33539 6.48906V7.75771C8.33539 7.87654 8.45294 7.95136 8.55126 7.90515L12.8088 4.67796C12.8233 4.66692 12.8383 4.65664 12.8537 4.64715C12.8769 4.63278 12.8962 4.61245 12.9095 4.58816C12.9229 4.56386 12.9299 4.53643 12.9299 4.50851C12.9299 4.4806 12.9229 4.45316 12.9095 4.42887C12.8962 4.40458 12.8769 4.38425 12.8537 4.36988C12.8382 4.36039 12.8233 4.35011 12.8088 4.33907L8.55126 1.11188ZM7.26673 7.02381C7.19406 7.02381 7.11391 7.02711 7.02842 7.03041C6.56462 7.05242 5.92342 7.12504 5.21169 7.32859C3.79464 7.7335 2.11684 8.65116 1.00115 10.7175C0.940817 10.8291 0.844683 10.9155 0.729224 10.9621C0.613765 11.0087 0.486168 11.0124 0.368304 10.9728C0.250441 10.9331 0.149648 10.8525 0.0831985 10.7447C0.0167484 10.6369 -0.011219 10.5086 0.0040884 10.3819C0.499949 6.29981 2.01959 4.15202 3.70167 3.05391C5.03215 2.18467 6.40218 2.01743 7.26673 1.98552V1.25932C7.26663 1.03273 7.32593 0.810317 7.43839 0.615545C7.55084 0.420773 7.71227 0.260866 7.90565 0.152696C8.09902 0.0445258 8.31717 -0.00789584 8.53707 0.000962485C8.75698 0.00982081 8.97048 0.0796305 9.15506 0.203025L13.4233 3.43792C13.5998 3.55133 13.7453 3.7091 13.8462 3.8964C13.9471 4.08369 14 4.29434 14 4.50851C14 4.72269 13.9471 4.93333 13.8462 5.12063C13.7453 5.30792 13.5998 5.4657 13.4233 5.57911L9.15506 8.814C8.97048 8.9374 8.75698 9.00721 8.53707 9.01607C8.31717 9.02492 8.09902 8.9725 7.90565 8.86433C7.71227 8.75616 7.55084 8.59626 7.43839 8.40148C7.32593 8.20671 7.26663 7.9843 7.26673 7.75771V7.02381Z"></path>
                              </svg>
                              Reply (01)
                            </div>
                          </div>
                        </div>
                        <ul className="comment-replay">
                          <li>
                            <div className="single-comment-area">
                              <div className="author-img">
                                <Image
                                  width={550}
                                  height={220}
                                  src="/assets/img/innerpages/comment-author-02.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="comment-content">
                                <div className="author-name-deg">
                                  <h6>Jacoline Juie,</h6>
                                  <span>05 June, 2023</span>
                                </div>
                                <p>
                                  However, here are some well-regarded car
                                  dealerships known for their customer service,
                                  inventory, and overall reputation. It's always
                                  a good idea to research and read reviews
                                  specific...
                                </p>
                                <div className="replay-btn">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={14}
                                    height={11}
                                    viewBox="0 0 14 11"
                                  >
                                    <path d="M8.55126 1.11188C8.52766 1.10118 8.50182 1.09676 8.47612 1.09903C8.45042 1.1013 8.42569 1.11018 8.40419 1.12486C8.3827 1.13954 8.36513 1.15954 8.35311 1.18304C8.34109 1.20653 8.335 1.23276 8.33539 1.25932V2.52797C8.33539 2.67388 8.2791 2.81381 8.17889 2.91698C8.07868 3.02016 7.94277 3.07812 7.80106 3.07812C7.08826 3.07812 5.64984 3.08362 4.27447 3.98257C3.2229 4.66916 2.14783 5.9191 1.50129 8.24735C2.59132 7.16575 3.83632 6.57929 4.92635 6.2679C5.59636 6.07737 6.28492 5.96444 6.97926 5.93121C7.26347 5.91835 7.54815 5.92129 7.83205 5.94001H7.84594L7.85129 5.94111L7.80106 6.48906L7.85449 5.94111C7.98638 5.95476 8.10864 6.01839 8.19751 6.11966C8.28638 6.22092 8.33553 6.35258 8.33539 6.48906V7.75771C8.33539 7.87654 8.45294 7.95136 8.55126 7.90515L12.8088 4.67796C12.8233 4.66692 12.8383 4.65664 12.8537 4.64715C12.8769 4.63278 12.8962 4.61245 12.9095 4.58816C12.9229 4.56386 12.9299 4.53643 12.9299 4.50851C12.9299 4.4806 12.9229 4.45316 12.9095 4.42887C12.8962 4.40458 12.8769 4.38425 12.8537 4.36988C12.8382 4.36039 12.8233 4.35011 12.8088 4.33907L8.55126 1.11188ZM7.26673 7.02381C7.19406 7.02381 7.11391 7.02711 7.02842 7.03041C6.56462 7.05242 5.92342 7.12504 5.21169 7.32859C3.79464 7.7335 2.11684 8.65116 1.00115 10.7175C0.940817 10.8291 0.844683 10.9155 0.729224 10.9621C0.613765 11.0087 0.486168 11.0124 0.368304 10.9728C0.250441 10.9331 0.149648 10.8525 0.0831985 10.7447C0.0167484 10.6369 -0.011219 10.5086 0.0040884 10.3819C0.499949 6.29981 2.01959 4.15202 3.70167 3.05391C5.03215 2.18467 6.40218 2.01743 7.26673 1.98552V1.25932C7.26663 1.03273 7.32593 0.810317 7.43839 0.615545C7.55084 0.420773 7.71227 0.260866 7.90565 0.152696C8.09902 0.0445258 8.31717 -0.00789584 8.53707 0.000962485C8.75698 0.00982081 8.97048 0.0796305 9.15506 0.203025L13.4233 3.43792C13.5998 3.55133 13.7453 3.7091 13.8462 3.8964C13.9471 4.08369 14 4.29434 14 4.50851C14 4.72269 13.9471 4.93333 13.8462 5.12063C13.7453 5.30792 13.5998 5.4657 13.4233 5.57911L9.15506 8.814C8.97048 8.9374 8.75698 9.00721 8.53707 9.01607C8.31717 9.02492 8.09902 8.9725 7.90565 8.86433C7.71227 8.75616 7.55084 8.59626 7.43839 8.40148C7.32593 8.20671 7.26663 7.9843 7.26673 7.75771V7.02381Z"></path>
                                  </svg>
                                  Reply
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="faq-area">
                  <h4>Frequently Asked &amp; Question</h4>
                  <div className="faq-wrap">
                    <div
                      className="accordion accordion-flush"
                      id="accordionFlushExample"
                    >
                      <div className="accordion-item">
                        <h5 className="accordion-header" id="flush-headingOne">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne"
                          >
                            What are the must-visit places in France?
                          </button>
                        </h5>
                        <div
                          id="flush-collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="flush-headingOne"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            Top destinations include Paris (Eiffel Tower,
                            Louvre), Nice (French Riviera), Bordeaux (wine
                            tours), Provence (lavender fields), and Normandy
                            (Mont Saint-Michel).
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h5 className="accordion-header" id="flush-headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo"
                            aria-expanded="false"
                            aria-controls="flush-collapseTwo"
                          >
                            Do tour packages include entrance fees?
                          </button>
                        </h5>
                        <div
                          id="flush-collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-headingTwo"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            Yes, most of our tour packages include entrance fees
                            to major attractions as listed in the itinerary.
                            However, optional activities or personal expenses
                            may not be covered. Please check the inclusions
                            section of your selected package for full details.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h5
                          className="accordion-header"
                          id="flush-headingThree"
                        >
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree"
                            aria-expanded="false"
                            aria-controls="flush-collapseThree"
                          >
                            What type of accommodation is included?
                          </button>
                        </h5>
                        <div
                          id="flush-collapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-headingThree"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            Our packages typically include stays in 3 to 4-star
                            hotels, offering comfortable rooms with essential
                            amenities. Higher or boutique categories may be
                            available upon request or in premium packages.
                            Accommodation details are provided in each tour
                            itinerary.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h5 className="accordion-header" id="flush-headingFour">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseFour"
                            aria-expanded="false"
                            aria-controls="flush-collapseFour"
                          >
                            Will I get a full refund if I cancel my trip?
                          </button>
                        </h5>
                        <div
                          id="flush-collapseFour"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-headingFour"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            Refund eligibility depends on the cancellation
                            policy of the specific tour package. While some
                            packages offer a full refund if canceled within a
                            certain time frame, others may involve partial
                            charges. Please refer to the cancellation terms
                            provided during booking for full details.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h5 className="accordion-header" id="flush-headingFive">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseFive"
                            aria-expanded="false"
                            aria-controls="flush-collapseFive"
                          >
                            What travel documents should I carry?
                          </button>
                        </h5>
                        <div
                          id="flush-collapseFive"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-headingFive"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body">
                            You should carry a valid passport, visa (if
                            required), travel insurance, flight tickets, hotel
                            booking confirmations, and a government-issued ID.
                            It’s also helpful to have copies of important
                            documents and emergency contact information.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="hotel-details-sidebar">
                <div className="pricing-and-booking-area">
                  <div className="batch">
                    <span>10% Off</span>
                  </div>
                  <div className="price-area">
                    <h6>Starting From</h6>
                    <span>
                      <del>$49</del> $39<sub>/per person</sub>
                    </span>
                  </div>
                  <ul>
                    <li>
                      <svg
                        width={14}
                        height={14}
                        viewBox="0 0 14 14"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect x="0.5" y="0.5" width={13} height={13} rx="6.5" />
                        <path d="M11.0419 5.31317L6.17665 10.1811C6.09912 10.256 6.00086 10.2948 5.90268 10.2948C5.85176 10.2949 5.80132 10.2849 5.75428 10.2654C5.70724 10.2458 5.66454 10.2172 5.62863 10.1811L2.95813 7.51056C2.80562 7.36059 2.80562 7.11506 2.95813 6.96255L3.90173 6.01632C4.04655 5.8716 4.30502 5.8716 4.44983 6.01632L5.90268 7.46917L9.5503 3.81894C9.58623 3.78292 9.6289 3.75434 9.67587 3.73483C9.72285 3.71531 9.77321 3.70524 9.82408 3.70519C9.92742 3.70519 10.0257 3.74657 10.098 3.81894L11.0416 4.76525C11.1944 4.91776 11.1944 5.16329 11.0419 5.31317Z" />
                      </svg>
                      Mony Back Guarentee.
                    </li>
                    <li>
                      <svg
                        width={14}
                        height={14}
                        viewBox="0 0 14 14"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect x="0.5" y="0.5" width={13} height={13} rx="6.5" />
                        <path d="M11.0419 5.31317L6.17665 10.1811C6.09912 10.256 6.00086 10.2948 5.90268 10.2948C5.85176 10.2949 5.80132 10.2849 5.75428 10.2654C5.70724 10.2458 5.66454 10.2172 5.62863 10.1811L2.95813 7.51056C2.80562 7.36059 2.80562 7.11506 2.95813 6.96255L3.90173 6.01632C4.04655 5.8716 4.30502 5.8716 4.44983 6.01632L5.90268 7.46917L9.5503 3.81894C9.58623 3.78292 9.6289 3.75434 9.67587 3.73483C9.72285 3.71531 9.77321 3.70524 9.82408 3.70519C9.92742 3.70519 10.0257 3.74657 10.098 3.81894L11.0416 4.76525C11.1944 4.91776 11.1944 5.16329 11.0419 5.31317Z" />
                      </svg>
                      Your Safety is Our Top Priority.
                    </li>
                  </ul>
                  <button className="primary-btn1 mb-20" id="scroll-btn">
                    <span>
                      Check Avilability
                      <svg
                        width={10}
                        height={10}
                        viewBox="0 0 10 10"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z" />
                      </svg>
                    </span>
                    <span>
                      Check Avilability
                      <svg
                        width={10}
                        height={10}
                        viewBox="0 0 10 10"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z" />
                      </svg>
                    </span>
                  </button>
                  <button
                    className="primary-btn1 transparent"
                    data-bs-toggle="modal"
                    data-bs-target="#enquiryModal"
                  >
                    <span>
                      Submit an Enquiry
                      <svg
                        width={10}
                        height={10}
                        viewBox="0 0 10 10"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z" />
                      </svg>
                    </span>
                    <span>
                      Submit an Enquiry
                      <svg
                        width={10}
                        height={10}
                        viewBox="0 0 10 10"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z" />
                      </svg>
                    </span>
                  </button>
                  <span>
                    <svg
                      width={14}
                      height={14}
                      viewBox="0 0 14 14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0C3.13423 0 0 3.13423 0 7C0 10.8662 3.13423 14 7 14C10.8662 14 14 10.8666 14 7C14 3.13423 10.8662 0 7 0ZM7 12.6875C3.85877 12.6875 1.31252 10.1412 1.31252 7C1.31252 3.85877 3.85877 1.31252 7 1.31252C10.1412 1.31252 12.6875 3.85877 12.6875 7C12.6875 10.1412 10.1412 12.6875 7 12.6875ZM7.00044 3.06992C6.49908 3.06992 6.11973 3.33157 6.11973 3.75418V7.63042C6.11973 8.05347 6.49903 8.31423 7.00044 8.31423C7.48956 8.31423 7.88115 8.04256 7.88115 7.63042V3.75418C7.8811 3.3416 7.48956 3.06992 7.00044 3.06992ZM7.00044 9.1875C6.51875 9.1875 6.12673 9.57952 6.12673 10.0616C6.12673 10.5428 6.51875 10.9349 7.00044 10.9349C7.48212 10.9349 7.87371 10.5428 7.87371 10.0616C7.87366 9.57948 7.48212 9.1875 7.00044 9.1875Z" />
                    </svg>
                    Bonus Activity Included – Limited Time!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RevelentPackageSection />

      <Footer />
    </>
  );
};

export default HotelDetailsPage;
