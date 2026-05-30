import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CountryServe = () => {
  return (
     <div className="home8-country-serve-section mb-100">
    <div className="container">
      <div className="row justify-content-center mb-50 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
        <div className="col-lg-6">
          <div className="section-title text-center">
            <h2>Countries We Serve</h2>
            <p>A curated list of the most popular travel packages based on different destinations.</p>
          </div>
        </div>
      </div>
      <div className="row g-xl-4 g-md-3 g-4">
        <div className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
          <div className="single-item">
            <div className="title-area">
              <Image width={35} height={220} src="/assets/img/home8/icon/globe-icon.svg" alt="" />
              <h4>North America</h4>
            </div>
            <svg className="line" height={6} viewBox="0 0 262 6" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM257 3.5L262 5.88675V0.113249L257 2.5V3.5ZM4.5 3.5H257.5V2.5H4.5V3.5Z" />
            </svg>
            <ul>
              <li>
                <Image width={35} height={220} src="/assets/img/home1/us-flag.png" alt="" />
                United States
              </li>
              <li>
                <Image width={35} height={220} src="/assets/img/home1/canada-flag.png" alt="" />
                Canada
              </li><li>
                <Image width={35} height={220} src="/assets/img/home1/mexico-flag.png" alt="" />
                Mexico
              </li>
            </ul>
            <Link href="/visa/details" className="primary-btn1 two five">
              <span>
                See All Requirement
                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z">
                  </path>
                </svg>
              </span>
              <span>
                See All Requirement
                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z">
                  </path>
                </svg>
              </span>
            </Link>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
          <div className="single-item">
            <div className="title-area">
              <Image width={35} height={220} src="/assets/img/home8/icon/globe-icon.svg" alt="" />
              <h4>Europe</h4>
            </div>
            <svg className="line" height={6} viewBox="0 0 262 6" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM257 3.5L262 5.88675V0.113249L257 2.5V3.5ZM4.5 3.5H257.5V2.5H4.5V3.5Z" />
            </svg>
            <ul>
              <li>
                <Image width={35} height={220} src="/assets/img/home1/uk-flag.png" alt="" />
                United Kingdom
              </li>
              <li>
                <Image width={35} height={220} src="/assets/img/home1/france-flag.png" alt="" />
                France
              </li><li>
                <Image width={35} height={220} src="/assets/img/home1/germany-flag.png" alt="" />
                Germany
              </li>
              <li>
                <Image width={550} height={220} src="/assets/img/home1/italy-flag.png" alt="" />
                Italy
              </li>
              <li>
                <Image width={550} height={220} src="/assets/img/home1/spain-flag.png" alt="" />
                Spain
              </li>
              <li>
                <Image width={550} height={220} src="/assets/img/home1/netherlands-flag.png" alt="" />
                Netherlands
              </li>
              <li>
                <Image width={550} height={220} src="/assets/img/home1/switzerland-flag.png" alt="" />
                Switzerland
              </li>
              <li>
                <Image width={550} height={220} src="/assets/img/home1/sweden-flag.png" alt="" />
                Sweden
              </li>
            </ul>
            <Link href="/visa/details" className="primary-btn1 two five">
              <span>
                See All Requirement
                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z">
                  </path>
                </svg>
              </span>
              <span>
                See All Requirement
                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z">
                  </path>
                </svg>
              </span>
            </Link>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
          <div className="single-item">
            <div className="title-area">
              <Image width={35} height={220} src="/assets/img/home8/icon/globe-icon.svg" alt="" />
              <h4>Asia</h4>
            </div>
            <svg className="line" height={6} viewBox="0 0 262 6" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM257 3.5L262 5.88675V0.113249L257 2.5V3.5ZM4.5 3.5H257.5V2.5H4.5V3.5Z" />
            </svg>
            <ul>
              <li>
                <Image width={550} height={220} src="/assets/img/home1/uae-flag.png" alt="" />
                United Arab Emirates
              </li>
              <li>
                <Image width={550} height={220} src="/assets/img/home1/saudi-arabia-flag.png" alt="" />
                Saudi Arabia
              </li><li>
                <Image width={550} height={220} src="/assets/img/home1/qatar-flag.png" alt="" />
                Qatar
              </li>
              <li>
                <Image width={550} height={220} src="/assets/img/home1/thailand-flag.png" alt="" />
                Thailand
              </li>
              <li>
                <Image width={550} height={220} src="/assets/img/home1/singapore-flag.png" alt="" />
                Singapore
              </li>
              <li>
                <Image width={550} height={220} src="/assets/img/home1/india-flag.png" alt="" />
                India
              </li>
              <li>
                <Image width={550} height={220} src="/assets/img/home1/malaysia-flag.png" alt="" />
                Malaysia
              </li>
            </ul>
            <Link href="/visa/details" className="primary-btn1 two five">
              <span>
                See All Requirement
                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z">
                  </path>
                </svg>
              </span>
              <span>
                See All Requirement
                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z">
                  </path>
                </svg>
              </span>
            </Link>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 wow animate fadeInUp" data-wow-delay="800ms" data-wow-duration="1500ms">
          <div className="single-item">
            <div className="title-area">
              <Image width={35} height={220} src="/assets/img/home8/icon/globe-icon.svg" alt="" />
              <h4>Africa</h4>
            </div>
            <svg className="line" height={6} viewBox="0 0 262 6" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM257 3.5L262 5.88675V0.113249L257 2.5V3.5ZM4.5 3.5H257.5V2.5H4.5V3.5Z" />
            </svg>
            <ul>
              <li>
                <Image width={550} height={220} src="/assets/img/home1/egypt-flag.png" alt="" />
                Egypt
              </li>
              <li>
                <Image width={550} height={220} src="/assets/img/home1/kenya-flag.png" alt="" />
                Kenya
              </li><li>
                <Image width={550} height={220} src="/assets/img/home1/nigeria-flag.png" alt="" />
                Nigeria
              </li>
            </ul>
            <Link href="/visa/details" className="primary-btn1 two five">
              <span>
                See All Requirement
                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z">
                  </path>
                </svg>
              </span>
              <span>
                See All Requirement
                <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z">
                  </path>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CountryServe
