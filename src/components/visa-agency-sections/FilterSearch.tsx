
import Link from 'next/link'
import React from 'react'
import FlugBaseCountrySearch from '../common/FlugBaseCountrySearch'
import VisaCategorySelect from '../common/VisaCategorySelect'
import CitizenshipSelect from './CitizenshipSelect'
import LiveInSelect from './LiveInSelect'

const FilterSearch = () => {
  return (
    <>
      <div className="home8-feature-section">
        <div className="container">
          <div className="section-title text-center mb-50 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
            <h2>Trust Badges &amp; Highlights</h2>
          </div>
          <div className="row gy-5">
            <div className="col-lg-4 col-sm-6 d-flex justify-content-lg-center wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
              <div className="single-feature">
                <svg width={50} height={50} viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path d="M50.0003 25C50.0003 26.7257 48.6007 28.1248 46.875 28.1248C45.1455 28.1248 43.7498 26.7258 43.7498 25.0001C43.7498 23.2749 45.1455 21.8749 46.875 21.8749C48.6007 21.8749 50.0003 23.2748 50.0003 25ZM43.7498 9.375C43.7498 11.0999 42.3508 12.4998 40.6251 12.4998C38.8956 12.4998 37.4999 11.0999 37.4999 9.37512C37.4999 7.6499 38.8956 6.24988 40.6251 6.24988C42.3507 6.24988 43.7498 7.64978 43.7498 9.375ZM40.625 43.7498C38.8975 43.7498 37.5 42.3527 37.5 40.6251C37.5 38.8956 38.8975 37.4999 40.625 37.4999C42.3507 37.4999 43.7498 38.8956 43.7498 40.6251C43.7498 42.3507 42.3508 43.7498 40.6251 43.7498H40.625ZM22.5344 27.0829C21.6727 29.5044 19.3839 31.25 16.6669 31.25C13.2156 31.25 10.4169 28.4504 10.4169 25C10.4169 21.5492 13.2156 18.7502 16.6669 18.7502C19.3844 18.7502 21.6732 20.4954 22.5344 22.9168H29.6874L35.4171 0L0 25L35.4171 50.0003L29.6874 27.0829H22.5344Z" />
                  </g>
                </svg>
                <h4>99% Approval Rate</h4>
                <p>Fast &amp; Hassle-Free Visa Processing – <span>99% Approval Rate.</span></p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 d-flex justify-content-lg-center wow animate fadeInDown" data-wow-delay="400ms" data-wow-duration="1500ms">
              <div className="single-feature">
                <svg width={50} height={50} viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                  <path d="M29.25 29.2502H47.9996V48.0001H29.25V29.2502Z" />
                  <path d="M25.4997 44.2498C15.1442 44.2498 6.75014 35.8545 6.75014 25.5C6.75014 15.1433 15.1448 6.75019 25.4997 6.75019C35.8541 6.75019 44.2493 15.1438 44.2493 25.5H47.9995C47.9995 13.0744 37.9252 3 25.4997 3C13.0737 3 3 13.0744 3 25.5C3 37.9256 13.0737 48 25.4997 48V44.2498Z" />
                  <path d="M25.4992 36.7501C19.2859 36.7501 14.2493 31.7129 14.2493 25.5001C14.2493 19.2856 19.2859 14.2501 25.4992 14.2501C31.712 14.2501 36.7491 19.2856 36.7491 25.5001H40.4992C40.4992 17.2161 33.7831 10.4999 25.4992 10.4999C17.2148 10.4999 10.4992 17.2161 10.4992 25.5001C10.4992 33.784 17.2148 40.5003 25.4992 40.5003V36.7501Z" />
                  <path d="M25.5007 29.2502C24.759 29.2502 24.0339 29.0303 23.4172 28.6182C22.8005 28.2062 22.3199 27.6205 22.036 26.9352C21.7522 26.2499 21.6779 25.4959 21.8226 24.7684C21.9673 24.041 22.3245 23.3727 22.8489 22.8483C23.3734 22.3238 24.0416 21.9666 24.7691 21.8219C25.4965 21.6772 26.2506 21.7515 26.9358 22.0353C27.6211 22.3192 28.2068 22.7998 28.6188 23.4166C29.0309 24.0333 29.2508 24.7583 29.2508 25.5001H33.0004C33.0004 21.3584 29.6423 18.0002 25.5007 18.0002C21.3579 18.0002 18.001 21.3584 18.001 25.5001C18.001 29.6417 21.3579 32.9999 25.5007 32.9999V29.2502Z" />
                </svg>
                <h4>Processing in 48 Hours</h4>
                <p>Get your visa processed and approved within just <span>48 hours.</span></p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 d-flex justify-content-lg-center wow animate fadeInDown" data-wow-delay="600ms" data-wow-duration="1500ms">
              <div className="single-feature">
                <svg width={50} height={50} viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25 25V45.2148H18.8477V31.1523H5.66406V25H25ZM12.6953 37.3047H5.66406V45.2148H12.6953V37.3047ZM44.3359 25V18.8477H31.1523V4.78516H25V25H44.3359ZM37.3047 12.6953H44.3359V4.78516H37.3047V12.6953Z" />
                </svg>
                <h4>Global Visa Experts</h4>
                <p>Trusted Global Visa Experts – Simplifying Travel for <span>100+ Countries!</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="filter-wrapper three mb-100">
        <div className="container">
          <div className="filter-input-wrap">
            <h6>Check Your Eligibility</h6>
            <form className="filter-input two show">
              <FlugBaseCountrySearch />
              <VisaCategorySelect />
              <CitizenshipSelect />
              <LiveInSelect />

              <button type="submit" className="primary-btn1 white-bg">
                <span>
                  <svg width={18} height={18} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.48145 7.38148L8.29394 10.194L12.5127 5.97523" strokeWidth="1.5" strokeMiterlimit={10} />
                    <g>
                      <path d="M16.0283 6.84001C16.0283 11.4137 13.2437 15.5443 8.99705 17.2429C4.75043 15.5443 1.96582 11.4137 1.96582 6.84001V2.1082L8.99705 0.719531L16.0283 2.1082V6.84001Z" strokeWidth="1.5" strokeMiterlimit={10} />
                    </g>
                  </svg>
                  Check Info
                </span>
                <span>
                  <svg width={18} height={18} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.48145 7.38148L8.29394 10.194L12.5127 5.97523" strokeWidth="1.5" strokeMiterlimit={10} />
                    <g>
                      <path d="M16.0283 6.84001C16.0283 11.4137 13.2437 15.5443 8.99705 17.2429C4.75043 15.5443 1.96582 11.4137 1.96582 6.84001V2.1082L8.99705 0.719531L16.0283 2.1082V6.84001Z" strokeWidth="1.5" strokeMiterlimit={10} />
                    </g>
                  </svg>
                  Check Info
                </span>
              </button>
            </form>
            <p>Can’t find what you’re looking for? <Link href="/contact">Contact us</Link> for a details info.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default FilterSearch
