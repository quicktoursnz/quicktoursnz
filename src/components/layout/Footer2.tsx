import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer2 = () => {
  return (
    <footer className="footer-section two">
      <div className="container">
        <div className="footer-menu-wrap">
          <div className="row gy-md-4 gy-5">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="footer-logo-and-addition-info">
                <Link href="/" className="footer-logo">
                  <Image width={120} height={45} src="/assets/img/footer-logo.svg" alt="" />
                </Link>
                <div className="address-area">
                  <span>GoFly Travel Agency</span>
                  <a href="#">Skyline Plaza, 5th Floor, 123 Main Street Los Angeles, CA 90001, USA</a>
                </div>
                <ul className="social-list">
                  <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                  <li><a href="https://www.linkedin.com/"><i className="bx bxl-linkedin" /></a></li>
                  <li><a href="https://www.youtube.com/"><i className="bx bxl-youtube" /></a></li>
                  <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram-alt" /></a></li>
                </ul>
                <a href="#"><Image width={157} height={50} src="/assets/img/home1/icon/google-play.svg" alt="" /></a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-md-end">
              <div className="footer-widget">
                <div className="widget-title">
                  <h5>Quick Links</h5>
                </div>
                <ul className="widget-list">
                  <li><Link href="/about">About GoFly</Link></li>
                  <li><a href="#">Health &amp; Safety Measure</a></li>
                  <li><Link href="/visa">Visa Processing</Link></li>
                  <li><Link href="/contact">Customize Tour</Link></li>
                  <li><Link href="/travel-inspiration">Travel Inspirations</Link></li>
                  <li><a href="#">Traveler Reviews</a></li>
                  <li><a href="#">Terms &amp; Condition</a></li>
                  <li><a href="https://www.google.com/maps">Sitemap</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-md-end">
              <div className="footer-widget">
                <div className="widget-title">
                  <h5>Top Destination</h5>
                </div>
                <ul className="widget-list">
                  <li><Link href="/travel-package">Maldives Tour</Link></li>
                  <li><Link href="/travel-package">Bali, Indonesia Tour</Link></li>
                  <li><Link href="/travel-package">Thailand Tour</Link></li>
                  <li><Link href="/travel-package">Philippines Tour</Link></li>
                  <li><Link href="/travel-package">Hawaii, USA Tour</Link></li>
                  <li><Link href="/travel-package">Switzerland Tour</Link></li>
                  <li><Link href="/travel-package">New Zealand Tour </Link></li>
                  <li><Link href="/travel-package">Costa Rica Tour</Link></li>
                  <li><Link href="/travel-package">Peru (Machu Picchu)</Link></li>
                  <li><Link href="/travel-package">Paris, France Tour</Link></li>
                  <li><Link href="/travel-package">Rome, Italy Tour</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 d-flex justify-content-lg-end">
              <div className="footer-widget">
                <div className="widget-title">
                  <h5>Contact Info</h5>
                </div>
                <ul className="contact-list">
                  <li className="single-contact">
                    <div className="icon">
                      <Image width={550} height={220} src="/assets/img/home3/icon/whatsapp-icon.svg" alt="" />
                    </div>
                    <div className="content">
                      <span>WhatsApp</span>
                      <a href="https://wa.me/91345533865">+91 345 533 865</a>
                    </div>
                  </li>
                  <li className="single-contact">
                    <div className="icon">
                      <Image width={550} height={220} src="/assets/img/home3/icon/mail-icon.svg" alt="" />
                    </div>
                    <div className="content">
                      <span>Mail Us</span>
                      <a href="mailto:info@example.com">info@example.com</a>
                    </div>
                  </li>
                  <li className="single-contact">
                    <div className="icon">
                      <Image width={550} height={220} src="/assets/img/home1/icon/call-icon.svg" alt="" />
                    </div>
                    <div className="content">
                      <span>More Inquiry</span>
                      <a href="tel:+91456453345">+91 456 453 345</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="copyright-and-payment-method-area">
            <p>Copyright 2025 <a href="https://www.egenslab.com/">Egens Lab</a> | All Right Reserved.</p>
            <div className="payment-method-area">
              <span>Accepted Payment Methods :</span>
              <ul>
                <li><Image width={52} height={28} src="/assets/img/home1/icon/mastar-card-icon.svg" alt="" /></li>
                <li><Image width={52} height={28} src="/assets/img/home1/icon/visa-icon.svg" alt="" /></li>
                <li><Image width={52} height={28} src="/assets/img/home1/icon/paypal-icon.svg" alt="" /></li>
                <li><Image width={52} height={28} src="/assets/img/home1/icon/gpay-icon.svg" alt="" /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer2
