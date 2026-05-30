"use client"
import Image from 'next/image';
import React from 'react'
import LightGallery from 'lightgallery/react';
// import plugins if you need
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
const ConpanyInfo: React.FC = () => {
  return (
    <div className="home8-company-intro-section mb-100" style={{backgroundImage: 'url(assets/img/home8/home8-company-intro-bg.jpg)'}}>
    <div className="container">
      <div className="row">
        <div className="col-xl-4 col-lg-5 col-md-7 col-sm-9">
          <LightGallery selector=".gallery-item"
              speed={500}
              plugins={[lgZoom, lgVideo]} elementClassNames="company-intro-content">
            <a data-fancybox="video-player" data-src="https://www.youtube.com/watch?v=u31qwQUeGuM&t=1s"  style={{ cursor: "pointer" }}
                    className="video-area gallery-item">
              <div className="play-btn">
                <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path d="M15.1574 8C15.1592 8.30356 15.0802 8.60213 14.9284 8.86503C14.7766 9.12793 14.5575 9.34567 14.2937 9.49588L3.43353 15.766C3.17151 15.9192 2.87344 16 2.5699 16C2.26636 16 1.96829 15.9192 1.70628 15.766C1.44249 15.6158 1.22345 15.398 1.07166 15.1351C0.919879 14.8723 0.840824 14.5737 0.84262 14.2701V1.72988C0.840832 1.42632 0.919886 1.12776 1.07166 0.864859C1.22344 0.601963 1.44247 0.38421 1.70625 0.23397C1.96827 0.0807516 2.26635 0 2.56989 0C2.87342 0 3.1715 0.0807516 3.43353 0.23397L14.2937 6.50413C14.5575 6.65434 14.7766 6.87208 14.9284 7.13498C15.0801 7.39787 15.1592 7.69644 15.1574 8Z" />
                  </g>
                </svg>
              </div>
              <span>Watch Video</span>
            </a>
            <svg className="line" height={6} viewBox="0 0 344 6" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM339 3.5L344 5.88675V0.113249L339 2.5V3.5ZM4.5 3.5H339.5V2.5H4.5V3.5Z" />
            </svg>
            <p>Visa assistance for 100+ countries across various categories.</p>
            <div className="signature-area">
              <Image width={550} height={220} src="/assets/img/home8/signature.svg" alt="" />
              <span>CEO, at GoFly</span>
            </div>
          </LightGallery>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ConpanyInfo
