import React from 'react'

const Hero1 = () => {
  return (
     <div className="home1-banner-section">
        <div className="banner-video-area">
          <video autoPlay loop muted playsInline src="assets/video/home1-banner-video.mp4" />
        </div>
        <div className="banner-content-wrap">
          <div className="container">
            <div className="banner-content">
              <h1>Explore Aotearoa in One Day</h1>
              <p>Private guided day tours to New Zealand's most breathtaking landscapes — tailored entirely for your group.</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Hero1
