import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer5 = () => {
    return (
        <>
            <div className="home7-newsletter-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-7 col-md-10">
                            <div className="newsletter-wrapper">
                                <h3>Subscribe our newsletter to discount 10% all package.</h3>
                                <form className="newsletter-form">
                                    <input type="text" placeholder="Type Your Email Address" />
                                    <button>
                                        <svg width={18} height={18} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.9597 0.771505C18.0006 0.669287 18.0107 0.557308 17.9885 0.449451C17.9664 0.341594 17.9131 0.242601 17.8353 0.164747C17.7574 0.0868923 17.6584 0.033599 17.5506 0.0114739C17.4427 -0.0106512 17.3307 -0.000635146 17.2285 0.0402804L0.863689 6.58643H0.862564L0.354081 6.78892C0.257774 6.82734 0.173959 6.89163 0.111895 6.97469C0.0498308 7.05775 0.0119333 7.15635 0.00238854 7.25959C-0.00715624 7.36284 0.0120231 7.46671 0.0578081 7.55974C0.103593 7.65278 0.174202 7.73134 0.261834 7.78676L0.723068 8.07925L0.724193 8.0815L6.34337 11.6566L9.9185 17.2758L9.92075 17.2781L10.2132 17.7393C10.2688 17.8266 10.3474 17.8968 10.4404 17.9423C10.5334 17.9878 10.6371 18.0068 10.7401 17.9972C10.8432 17.9875 10.9416 17.9496 11.0245 17.8876C11.1073 17.8257 11.1715 17.742 11.21 17.6459L17.9597 0.771505ZM15.8977 2.89768L7.46721 11.3281L7.22534 10.9479C7.18103 10.8781 7.12188 10.819 7.0521 10.7747L6.67186 10.5328L15.1023 2.10233L16.4275 1.57248L15.8988 2.89768H15.8977Z" />
                                        </svg>
                                    </button>
                                </form>
                                <span>To get monthly upto 10% best offer in all package. </span>
                            </div>
                        </div>
                    </div>
                </div>
                <Image width={470} height={220} src="/assets/img/home7/home7-newsletter-section-img1.png" alt="" className="img1" />
                <Image width={410} height={220} src="/assets/img/home7/home7-newsletter-section-img2.png" alt="" className="img2" />
            </div>
            <footer className="footer-section five">
                <div className="container">
                    <div className="footer-menu-wrap">
                        <div className="row gy-md-4 gy-5">
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="footer-logo-and-addition-info">
                                    <Link href="/" className="footer-logo">
                                        <Image width={550} height={220} src="/assets/img/footer-logo4.svg" alt="" />
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
                                    <div className="language-area">
                                        <div className="language-btn">
                                            <div className="icon-and-content">
                                                <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                                    <g>
                                                        <path d="M7 14C5.13023 14 3.37239 13.2719 2.05023 11.9498C0.728137 10.6276 0 8.86977 0 7C0 5.13023 0.728137 3.37239 2.05023 2.05023C3.37239 0.728137 5.13023 0 7 0C8.86977 0 10.6276 0.728137 11.9498 2.05023C13.2719 3.37239 14 5.13023 14 7C14 8.86977 13.2719 10.6276 11.9498 11.9498C10.6276 13.2719 8.86977 14 7 14ZM7 0.583324C3.46183 0.583324 0.583324 3.46183 0.583324 7C0.583324 10.5382 3.46183 13.4166 7 13.4166C10.5382 13.4166 13.4166 10.5382 13.4166 7C13.4166 3.46183 10.5382 0.583324 7 0.583324Z" />
                                                        <path d="M7 14C5.90297 14 4.8854 13.2486 4.13468 11.8841C3.41431 10.5747 3.01758 8.84018 3.01758 7C3.01758 5.15982 3.41431 3.42527 4.13468 2.11589C4.8854 0.751433 5.90297 0 7 0C8.09704 0 9.11461 0.751433 9.8653 2.11589C10.5857 3.42527 10.9824 5.15982 10.9824 7C10.9824 8.84018 10.5857 10.5747 9.8653 11.8841C9.11461 13.2486 8.09704 14 7 14ZM7 0.583324C6.12536 0.583324 5.2893 1.22746 4.64579 2.39709C3.97198 3.62179 3.6009 5.25645 3.6009 7C3.6009 8.74355 3.97198 10.3782 4.64576 11.6029C5.28927 12.7725 6.12533 13.4166 6.99998 13.4166C7.87462 13.4166 8.71068 12.7725 9.35419 11.6029C10.028 10.3782 10.3991 8.74355 10.3991 7C10.3991 5.25645 10.028 3.62179 9.35419 2.39709C8.71071 1.22746 7.87462 0.583324 7 0.583324Z" />
                                                        <path d="M6.99968 13.9573C6.8386 13.9573 6.70801 13.8267 6.70801 13.6657V0.334156C6.70801 0.173074 6.83857 0.0424805 6.99968 0.0424805C7.16077 0.0424805 7.29136 0.173074 7.29136 0.334156V13.6657C7.29136 13.8267 7.16077 13.9573 6.99968 13.9573Z" />
                                                        <path d="M13.6661 7.29147H0.334644C0.173562 7.29147 0.0429688 7.16088 0.0429688 6.99979C0.0429688 6.83871 0.173562 6.70812 0.334644 6.70812H13.6661C13.8272 6.70812 13.9578 6.83868 13.9578 6.99979C13.9578 7.16088 13.8272 7.29147 13.6661 7.29147ZM12.7022 3.81187H1.29862C1.13754 3.81187 1.00695 3.6813 1.00695 3.52019C1.00695 3.35908 1.13751 3.22852 1.29862 3.22852H12.7022C12.8633 3.22852 12.9939 3.35908 12.9939 3.52019C12.9939 3.6813 12.8632 3.81187 12.7022 3.81187ZM12.7022 10.771H1.29862C1.13754 10.771 1.00695 10.6404 1.00695 10.4794C1.00695 10.3183 1.13751 10.1877 1.29862 10.1877H12.7022C12.8633 10.1877 12.9939 10.3183 12.9939 10.4794C12.9939 10.6404 12.8632 10.771 12.7022 10.771Z" />
                                                    </g>
                                                </svg>
                                                <span>EN</span>
                                            </div>
                                            <i className="bi bi-caret-down-fill" />
                                        </div>
                                        <ul className="language-list">
                                                                            <li><a href="#"><Image width={30} height={30} src="/assets/img/home1/england-flag.png" alt="" />English</a></li>
                                                                            <li><a href="#"><Image width={30} height={30} src="/assets/img/home1/netherlands-flag.png" alt="" />Dutch</a></li>
                                                                            <li><a href="#"><Image width={30} height={30} src="/assets/img/home1/japan-flag.png" alt="" />Japanese</a></li>
                                                                            <li><a href="#"><Image width={30} height={30} src="/assets/img/home1/korea-flag.png" alt="" />Korean</a></li>
                                                                            <li><a href="#"><Image width={30} height={30} src="/assets/img/home1/china-flag.png" alt="" />Chinese</a></li>
                                                                        </ul>
                                    </div>
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
        </>
    )
}

export default Footer5
