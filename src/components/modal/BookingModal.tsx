import Link from 'next/link'
import React from 'react'

const BookingModal = () => {
  return (
    <>
      <div className="modal booking-modal fade" id="bookingModal" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button type="button" className="close-btn" data-bs-dismiss="modal" aria-label="Close">
              <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.00247 0.500545C1.79016 0.505525 1.58918 0.582706 1.4362 0.735547L0.694403 1.479C0.345704 1.82743 0.389689 2.43243 0.79164 2.83493L3.00694 5.05341L0.79164 7.27092C0.389689 7.67328 0.345566 8.27842 0.694403 8.62753L1.4362 9.37044C1.7849 9.71872 2.38879 9.67543 2.7913 9.27293L5.00659 7.05473L7.22189 9.27293C7.62467 9.67543 8.22898 9.71872 8.57699 9.37044L9.31989 8.62753C9.6679 8.27856 9.62461 7.67342 9.22182 7.27092L7.00653 5.05341L9.22182 2.83493C9.62461 2.43243 9.6679 1.82743 9.31989 1.479L8.57699 0.735547C8.22898 0.386433 7.62467 0.430557 7.22189 0.833614L5.00659 3.05126L2.7913 0.833753C2.56515 0.606635 2.27482 0.493906 2.00247 0.500545Z" />
              </svg>
            </button>
            <div className="modal-header">
              <h4>Dates &amp; Availability</h4>
              <p>Select your travel date &amp; time, also minium traveller for reason easily booking a package.</p>
            </div>
            <div className="modal-body">
              <form>
                <div className="row g-4 mb-50">
                  <div className="col-sm-6">
                    <div className="single-field date-field">
                      <svg width={18} height={18} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                        <g>
                          <path d="M16.125 1.28394H14.8913V2.43609C14.9509 2.57307 14.9755 2.72275 14.9629 2.87163C14.9502 3.0205 14.9007 3.16388 14.8188 3.28883C14.7368 3.41379 14.6251 3.51638 14.4936 3.58736C14.3622 3.65834 14.2151 3.69547 14.0657 3.6954C13.9163 3.69533 13.7692 3.65807 13.6378 3.58697C13.5064 3.51587 13.3948 3.41318 13.313 3.28815C13.2312 3.16312 13.1818 3.0197 13.1693 2.87081C13.1567 2.72193 13.1815 2.57227 13.2413 2.43534V1.28409H11.5136V2.43609C11.5733 2.57304 11.598 2.72272 11.5854 2.87159C11.5728 3.02047 11.5234 3.16388 11.4415 3.28887C11.3597 3.41386 11.248 3.5165 11.1165 3.58754C10.9851 3.65858 10.838 3.69577 10.6886 3.69577C10.5392 3.69577 10.3922 3.65858 10.2607 3.58754C10.1293 3.5165 10.0176 3.41386 9.93572 3.28887C9.85387 3.16388 9.80441 3.02047 9.79183 2.87159C9.77924 2.72272 9.80391 2.57304 9.86363 2.43609V1.28394H8.13638V2.43609C8.19609 2.57304 8.22076 2.72272 8.20818 2.87159C8.19559 3.02047 8.14613 3.16388 8.06428 3.28887C7.98242 3.41386 7.87073 3.5165 7.73929 3.58754C7.60784 3.65858 7.46079 3.69577 7.31138 3.69577C7.16197 3.69577 7.01491 3.65858 6.88346 3.58754C6.75202 3.5165 6.64033 3.41386 6.55848 3.28887C6.47662 3.16388 6.42716 3.02047 6.41457 2.87159C6.40199 2.72272 6.42666 2.57304 6.48638 2.43609V1.28394H4.75875V2.43519C4.81852 2.57212 4.84327 2.72178 4.83075 2.87066C4.81823 3.01955 4.76884 3.16297 4.68704 3.288C4.60524 3.41303 4.49359 3.51572 4.36219 3.58682C4.23078 3.65792 4.08373 3.69518 3.93432 3.69525C3.78491 3.69532 3.63784 3.65819 3.50636 3.58721C3.37489 3.51623 3.26315 3.41364 3.18124 3.28868C3.09932 3.16373 3.0498 3.02035 3.03715 2.87148C3.02449 2.7226 3.0491 2.57292 3.10875 2.43594V1.28394H1.875C1.37772 1.28394 0.900806 1.48148 0.549175 1.83311C0.197544 2.18474 0 2.66165 0 3.15894L0 16.0964C4.97191e-05 16.5937 0.19761 17.0706 0.54923 17.4222C0.90085 17.7738 1.37773 17.9714 1.875 17.9714H16.125C16.6223 17.9714 17.0992 17.7738 17.4508 17.4222C17.8024 17.0706 18 16.5937 18 16.0964V3.15894C18 2.66165 17.8025 2.18474 17.4508 1.83311C17.0992 1.48148 16.6223 1.28394 16.125 1.28394ZM17.25 15.9089C17.25 16.257 17.1117 16.5909 16.8656 16.837C16.6194 17.0832 16.2856 17.2214 15.9375 17.2214H2.0625C1.7144 17.2214 1.38056 17.0832 1.13442 16.837C0.888281 16.5909 0.75 16.257 0.75 15.9089V6.34644C0.75 5.99834 0.888281 5.6645 1.13442 5.41836C1.38056 5.17222 1.7144 5.03394 2.0625 5.03394H15.9375C16.2856 5.03394 16.6194 5.17222 16.8656 5.41836C17.1117 5.6645 17.25 5.99834 17.25 6.34644V15.9089Z" />
                          <path d="M14.6287 0.591064C14.6287 0.280404 14.3769 0.0285645 14.0662 0.0285645C13.7556 0.0285645 13.5037 0.280404 13.5037 0.591064V2.84106C13.5037 3.15172 13.7556 3.40356 14.0662 3.40356C14.3769 3.40356 14.6287 3.15172 14.6287 2.84106V0.591064Z" />
                          <path d="M11.2512 0.591064C11.2512 0.280404 10.9994 0.0285645 10.6887 0.0285645C10.3781 0.0285645 10.1262 0.280404 10.1262 0.591064V2.84106C10.1262 3.15172 10.3781 3.40356 10.6887 3.40356C10.9994 3.40356 11.2512 3.15172 11.2512 2.84106V0.591064Z" />
                          <path d="M7.87378 0.591064C7.87378 0.280404 7.62194 0.0285645 7.31128 0.0285645C7.00062 0.0285645 6.74878 0.280404 6.74878 0.591064V2.84106C6.74878 3.15172 7.00062 3.40356 7.31128 3.40356C7.62194 3.40356 7.87378 3.15172 7.87378 2.84106V0.591064Z" />
                          <path d="M4.49628 0.591064C4.49628 0.280404 4.24444 0.0285645 3.93378 0.0285645C3.62312 0.0285645 3.37128 0.280404 3.37128 0.591064V2.84106C3.37128 3.15172 3.62312 3.40356 3.93378 3.40356C4.24444 3.40356 4.49628 3.15172 4.49628 2.84106V0.591064Z" />
                          <path d="M5.57379 12.859C5.57379 11.841 6.19393 11.266 6.94745 10.9237C6.31772 10.5738 5.93327 9.97518 5.93327 9.23362C5.93327 7.84346 7.14253 6.93768 9.03335 6.93768C10.665 6.93768 12.0754 7.71146 12.0754 9.2562C12.0754 10.0578 11.5991 10.5852 11.0117 10.8392C11.8151 11.133 12.4262 11.8054 12.4262 12.8442C12.4262 14.553 10.7024 15.3177 8.95704 15.3177C7.14785 15.3177 5.57379 14.5132 5.57379 12.859ZM10.4611 12.8062C10.4611 12.1583 10.0752 11.6429 8.99162 11.6429C7.89793 11.6429 7.50868 12.1281 7.50868 12.7625C7.50868 13.578 8.28429 13.9316 8.9993 13.9316C9.72377 13.9316 10.4611 13.636 10.4611 12.8062ZM7.83377 9.24273C7.83377 9.7755 8.13992 10.2237 9.04127 10.2237C9.88592 10.2237 10.171 9.82871 10.171 9.25623C10.171 8.62605 9.6497 8.29207 8.99612 8.29207C8.39034 8.29203 7.83377 8.57565 7.83377 9.24273Z" />
                        </g>
                      </svg>
                      <div className="custom-select-dropdown">
                        <input type="text" name="tourBookingCalendar" readOnly defaultValue="Sep 12 - Sep 20" />
                        <div className="selected-date" />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="single-field">
                      <svg width={18} height={18} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.00003 1.52136C4.02939 1.52136 0 5.55075 0 10.5214C0 12.6873 0.765549 14.6746 2.04035 16.2275C2.23702 14.6528 3.80989 13.3209 6.01543 12.6901C6.82119 13.4409 7.86199 13.8964 8.99997 13.8964C10.1112 13.8964 11.1316 13.4638 11.9292 12.7445C14.1538 13.4304 15.6928 14.8401 15.7434 16.4787C17.1465 14.8914 18 12.8067 18 10.5214C18 5.55075 13.9706 1.52136 9.00003 1.52136ZM9.00003 12.8306C8.42549 12.8306 7.88412 12.6727 7.40341 12.3993C6.24498 11.7401 5.44736 10.3912 5.44736 8.83383C5.44736 6.63003 7.04103 4.83703 9.00003 4.83703C10.9592 4.83703 12.5527 6.63003 12.5527 8.83383C12.5527 10.4151 11.7301 11.7807 10.5429 12.4284C10.0751 12.6835 9.55325 12.8306 9.00003 12.8306Z" />
                      </svg>
                      <div className="custom-select-dropdown">
                        <h6><span id="adult-qty">1</span> Adults
                        </h6>
                        <span>Select Travelers</span>
                      </div>
                      <div className="custom-select-wrap">
                        <div className="title-area">
                          <h6>Travelers</h6>
                          <span>You can book for a maximum of 12 people</span>
                        </div>
                        <ul className="guest-count">
                          <li className="single-item">
                            <div className="title">
                              <h6>Adult</h6>
                              <span>16 years+</span>
                            </div>
                            <div className="quantity-counter">
                              <a href="#" data-type="adult" className="guest-quantity__minus"><i className="bi bi-dash" /></a>
                              <input name="adult_quantity" type="text" className="quantity__input" defaultValue={1} />
                              <a href="#" data-type="adult" className="guest-quantity__plus"><i className="bi bi-plus" /></a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tour-booking-calendar" className="calendar-wrapper full-date two" data-dates="[{&quot;start_date&quot;:&quot;2025-05-15&quot;,&quot;end_date&quot;:&quot;no_end_date&quot;,&quot;price&quot;:&quot;40&quot;,&quot;format_price&quot;:&quot;$40&quot;,&quot;offer_price&quot;:&quot;30&quot;,&quot;format_offer_price&quot;:&quot;$30&quot;,&quot;trip_days&quot;:[&quot;monday&quot;,&quot;tuesday&quot;,&quot;wednesday&quot;,&quot;thursday&quot;,&quot;friday&quot;,&quot;saturday&quot;,&quot;sunday&quot;]},{&quot;start_date&quot;:&quot;2025-05-15&quot;,&quot;end_date&quot;:&quot;no_end_date&quot;,&quot;price&quot;:&quot;35&quot;,&quot;format_price&quot;:&quot;$35&quot;,&quot;offer_price&quot;:&quot;28&quot;,&quot;format_offer_price&quot;:&quot;$28&quot;,&quot;trip_days&quot;:[&quot;monday&quot;,&quot;tuesday&quot;,&quot;wednesday&quot;,&quot;thursday&quot;,&quot;friday&quot;,&quot;saturday&quot;,&quot;sunday&quot;]},{&quot;start_date&quot;:&quot;2025-05-15&quot;,&quot;end_date&quot;:&quot;no_end_date&quot;,&quot;price&quot;:&quot;40&quot;,&quot;format_price&quot;:&quot;$40&quot;,&quot;offer_price&quot;:&quot;33&quot;,&quot;format_offer_price&quot;:&quot;$33&quot;,&quot;trip_days&quot;:[&quot;monday&quot;,&quot;tuesday&quot;,&quot;wednesday&quot;,&quot;thursday&quot;,&quot;friday&quot;,&quot;saturday&quot;,&quot;sunday&quot;]}]" data-months-name="[&quot;January&quot;,&quot;February&quot;,&quot;March&quot;,&quot;April&quot;,&quot;May&quot;,&quot;June&quot;,&quot;July&quot;,&quot;August&quot;,&quot;September&quot;,&quot;October&quot;,&quot;November&quot;,&quot;December&quot;]" data-start-date="hotel-details-checkin" data-end-date="hotel-details-checkout">
                  <div className="calendar-inner">
                    <div className="calendar-container">
                      <div className="calendar" id="calendar-prev">
                        <div className="calendar-header">
                          <button className="prev-month">
                            {/* Left chevron icon */}
                            <svg width={16} height={16} viewBox="0 0 16 16">
                              <path d="M10 2L4 8l6 6" stroke="currentColor" fill="none" strokeWidth={2} />
                            </svg>
                          </button>
                          <h6 id="month-year-prev">August 2025</h6>
                          <button className="next-month">
                            {/* Right chevron icon */}
                            <svg width={16} height={16} viewBox="0 0 16 16">
                              <path d="M6 2l6 6-6 6" stroke="currentColor" fill="none" strokeWidth={2} />
                            </svg>
                          </button>
                        </div>
                        <div className="calendar-days">
                          <div className="day-name">Mon</div>
                          <div className="day-name">Tue</div>
                          <div className="day-name">Wed</div>
                          <div className="day-name">Thu</div>
                          <div className="day-name">Fri</div>
                          <div className="day-name">Sat</div>
                          <div className="day-name">Sun</div>
                        </div>
                        <div className="calendar-dates" id="calendar-dates-prev">
                          Previous month dates will be populated here
                        </div>
                      </div>
                    </div>
                    {/* Calendar Actions */}
                    <div className="calendar-actions">
                      <a href="#" id="tour-calendar-check" className="calendar-check underline">Apply</a>
                    </div>
                  </div>
                </div>
              </form>
              <div className="package-list">
                <div className="accordion accordion-flush" id="accordionFlushPackage">
                  <div className="accordion-item">
                    <div className="accordion-header" id="flush-package-headingOne">
                      <div className="accordion-button" role="button" data-bs-toggle="collapse" data-bs-target="#flush-package-collapseOne" aria-expanded="false" aria-controls="flush-package-collapseOne">
                        <div className="batch">
                          <span>Group Tour</span>
                        </div>
                        <div className="title-area">
                          <span className="check" />
                          <h6>Zip-lining &amp; Canopy</h6>
                        </div>
                        <span>$99.00 </span>
                      </div>
                    </div>
                    <div id="flush-package-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-package-headingOne" data-bs-parent="#accordionFlushPackage">
                      <div className="accordion-body">
                        <div className="tour-info-and-calculate-area">
                          <p>An 11-night journey covering Bangkok <i className="bi bi-arrow-right" /> River Kwai <i className="bi bi-arrow-right" /> Chiang Rai <i className="bi bi-arrow-right" /> Chiang Mai <i className="bi bi-arrow-right" /> Phi Phi <i className="bi bi-arrow-right" /> Phuket.</p>
                          <div className="price-calculate">
                            <span className="adult">$30 <i className="bi bi-x" /> 2 Adult</span>
                          </div>
                        </div>
                        <div className="additional-service-area">
                          <h6>Additional Services -</h6>
                          <ul className="service-list">
                            <li>
                              <div className="service-info-wrap">
                                <label className="containerss">
                                  <input type="checkbox" />
                                  <span className="checkmark" />
                                </label>
                                <div className="service-info">
                                  <h6>Souvenir Photographs</h6>
                                  <p>Offer professional photo packages or digital keepsakes of key moments on the tour.</p>
                                </div>
                              </div>
                              <div className="pricing-and-count-area">
                                <span>$49.00</span>
                                <div className="quantity-counter">
                                  <a href="#" data-type="adult" className="quantity__minus"><i className="bi bi-dash" /></a>
                                  <input name="quantity" type="text" className="quantity__input" defaultValue={1} />
                                  <a href="#" data-type="adult" className="quantity__plus"><i className="bi bi-plus" /></a>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="service-info-wrap">
                                <label className="containerss">
                                  <input type="checkbox" />
                                  <span className="checkmark" />
                                </label>
                                <div className="service-info">
                                  <h6>Louvre Museum</h6>
                                  <p>Offer professional photo packages or digital keepsakes of key moments on the tour.</p>
                                </div>
                              </div>
                              <div className="pricing-and-count-area">
                                <span>$30.00</span>
                                <div className="quantity-counter">
                                  <a href="#" data-type="adult" className="quantity__minus"><i className="bi bi-dash" /></a>
                                  <input name="quantity" type="text" className="quantity__input" defaultValue={1} />
                                  <a href="#" data-type="adult" className="quantity__plus"><i className="bi bi-plus" /></a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="btn-area">
                          <Link href="/checkout" className="primary-btn1 two">
                            <span>
                              Book Now
                              <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z" />
                              </svg>
                            </span>
                            <span>
                              Book Now
                              <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z" />
                              </svg>
                            </span>
                          </Link>
                          <Link href="/checkout" className="primary-btn1 two transparent">
                            <span>
                              <svg width={18} height={18} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.7823 8.95775C15.7387 1.49096 14.8315 0.99707 9.00454 0.99707C3.16848 0.99707 2.26028 1.48821 1.21947 8.94769C0.764911 12.2018 1.01368 14.0987 2.05175 15.2923C3.29652 16.7227 5.54095 17.0026 8.99631 17.0026C12.4581 17.0026 14.7062 16.7218 15.9509 15.2904C16.9881 14.0987 17.2369 12.2055 16.7832 8.95775H16.7823ZM14.9165 14.3905C14.0184 15.424 11.9861 15.6307 8.99723 15.6307C6.0138 15.6307 3.98522 15.4231 3.08708 14.3914C2.34625 13.5408 2.18986 11.9192 2.57856 9.13701C3.52335 2.36897 3.83339 2.36897 9.00546 2.36897C14.1675 2.36897 14.4766 2.36897 15.4241 9.14799C15.8119 11.9238 15.6555 13.5408 14.9165 14.3905Z" />
                                <path d="M11.2863 4.19824C11.1044 4.19824 10.9299 4.27051 10.8013 4.39915C10.6726 4.52779 10.6003 4.70227 10.6003 4.88419C10.6003 5.30868 10.4317 5.71579 10.1316 6.01595C9.83139 6.31611 9.42429 6.48474 8.99979 6.48474C8.5753 6.48474 8.1682 6.31611 7.86803 6.01595C7.56787 5.71579 7.39924 5.30868 7.39924 4.88419C7.39924 4.70227 7.32697 4.52779 7.19833 4.39915C7.06969 4.27051 6.89522 4.19824 6.71329 4.19824C6.53137 4.19824 6.35689 4.27051 6.22825 4.39915C6.09961 4.52779 6.02734 4.70227 6.02734 4.88419C6.02734 5.67254 6.34051 6.42859 6.89795 6.98603C7.4554 7.54347 8.21145 7.85664 8.99979 7.85664C9.78814 7.85664 10.5442 7.54347 11.1016 6.98603C11.6591 6.42859 11.9722 5.67254 11.9722 4.88419C11.9722 4.70227 11.9 4.52779 11.7713 4.39915C11.6427 4.27051 11.4682 4.19824 11.2863 4.19824Z" />
                              </svg>
                              Add to Cart
                            </span>
                            <span>
                              <svg width={18} height={18} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.7823 8.95775C15.7387 1.49096 14.8315 0.99707 9.00454 0.99707C3.16848 0.99707 2.26028 1.48821 1.21947 8.94769C0.764911 12.2018 1.01368 14.0987 2.05175 15.2923C3.29652 16.7227 5.54095 17.0026 8.99631 17.0026C12.4581 17.0026 14.7062 16.7218 15.9509 15.2904C16.9881 14.0987 17.2369 12.2055 16.7832 8.95775H16.7823ZM14.9165 14.3905C14.0184 15.424 11.9861 15.6307 8.99723 15.6307C6.0138 15.6307 3.98522 15.4231 3.08708 14.3914C2.34625 13.5408 2.18986 11.9192 2.57856 9.13701C3.52335 2.36897 3.83339 2.36897 9.00546 2.36897C14.1675 2.36897 14.4766 2.36897 15.4241 9.14799C15.8119 11.9238 15.6555 13.5408 14.9165 14.3905Z" />
                                <path d="M11.2863 4.19824C11.1044 4.19824 10.9299 4.27051 10.8013 4.39915C10.6726 4.52779 10.6003 4.70227 10.6003 4.88419C10.6003 5.30868 10.4317 5.71579 10.1316 6.01595C9.83139 6.31611 9.42429 6.48474 8.99979 6.48474C8.5753 6.48474 8.1682 6.31611 7.86803 6.01595C7.56787 5.71579 7.39924 5.30868 7.39924 4.88419C7.39924 4.70227 7.32697 4.52779 7.19833 4.39915C7.06969 4.27051 6.89522 4.19824 6.71329 4.19824C6.53137 4.19824 6.35689 4.27051 6.22825 4.39915C6.09961 4.52779 6.02734 4.70227 6.02734 4.88419C6.02734 5.67254 6.34051 6.42859 6.89795 6.98603C7.4554 7.54347 8.21145 7.85664 8.99979 7.85664C9.78814 7.85664 10.5442 7.54347 11.1016 6.98603C11.6591 6.42859 11.9722 5.67254 11.9722 4.88419C11.9722 4.70227 11.9 4.52779 11.7713 4.39915C11.6427 4.27051 11.4682 4.19824 11.2863 4.19824Z" />
                              </svg>
                              Add to Cart
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header" id="flush-package-headingTwo">
                      <div className="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#flush-package-collapseTwo" aria-expanded="false" aria-controls="flush-package-collapseTwo">
                        <div className="batch">
                          <span>Family Tour</span>
                        </div>
                        <div className="title-area">
                          <span className="check" />
                          <h6>City Highlights &amp; Activities</h6>
                        </div>
                        <span>$39.00 </span>
                      </div>
                    </div>
                    <div id="flush-package-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-package-headingTwo" data-bs-parent="#accordionFlushPackage">
                      <div className="accordion-body">
                        <div className="tour-info-and-calculate-area">
                          <p>An 11-night journey covering Bangkok <i className="bi bi-arrow-right" /> River Kwai <i className="bi bi-arrow-right" /> Chiang Rai <i className="bi bi-arrow-right" /> Chiang Mai <i className="bi bi-arrow-right" /> Phi Phi <i className="bi bi-arrow-right" /> Phuket.</p>
                          <div className="price-calculate">
                            <span className="adult">$30 <i className="bi bi-x" /> 2 Adult</span>
                          </div>
                        </div>
                        <div className="additional-service-area">
                          <h6>Additional Services -</h6>
                          <ul className="service-list">
                            <li>
                              <div className="service-info-wrap">
                                <label className="containerss">
                                  <input type="checkbox" />
                                  <span className="checkmark" />
                                </label>
                                <div className="service-info">
                                  <h6>Souvenir Photographs</h6>
                                  <p>Offer professional photo packages or digital keepsakes of key moments on the tour.</p>
                                </div>
                              </div>
                              <div className="pricing-and-count-area">
                                <span>$49.00</span>
                                <div className="quantity-counter">
                                  <a href="#" data-type="adult" className="quantity__minus"><i className="bi bi-dash" /></a>
                                  <input name="quantity" type="text" className="quantity__input" defaultValue={1} />
                                  <a href="#" data-type="adult" className="quantity__plus"><i className="bi bi-plus" /></a>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="service-info-wrap">
                                <label className="containerss">
                                  <input type="checkbox" />
                                  <span className="checkmark" />
                                </label>
                                <div className="service-info">
                                  <h6>Louvre Museum</h6>
                                  <p>Offer professional photo packages or digital keepsakes of key moments on the tour.</p>
                                </div>
                              </div>
                              <div className="pricing-and-count-area">
                                <span>$30.00</span>
                                <div className="quantity-counter">
                                  <a href="#" data-type="adult" className="quantity__minus"><i className="bi bi-dash" /></a>
                                  <input name="quantity" type="text" className="quantity__input" defaultValue={1} />
                                  <a href="#" data-type="adult" className="quantity__plus"><i className="bi bi-plus" /></a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="btn-area">
                          <Link href="/checkout" className="primary-btn1 two">
                            <span>
                              Book Now
                              <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z" />
                              </svg>
                            </span>
                            <span>
                              Book Now
                              <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z" />
                              </svg>
                            </span>
                          </Link>
                          <Link href="/checkout" className="primary-btn1 two transparent">
                            <span>
                              <svg width={18} height={18} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.7823 8.95775C15.7387 1.49096 14.8315 0.99707 9.00454 0.99707C3.16848 0.99707 2.26028 1.48821 1.21947 8.94769C0.764911 12.2018 1.01368 14.0987 2.05175 15.2923C3.29652 16.7227 5.54095 17.0026 8.99631 17.0026C12.4581 17.0026 14.7062 16.7218 15.9509 15.2904C16.9881 14.0987 17.2369 12.2055 16.7832 8.95775H16.7823ZM14.9165 14.3905C14.0184 15.424 11.9861 15.6307 8.99723 15.6307C6.0138 15.6307 3.98522 15.4231 3.08708 14.3914C2.34625 13.5408 2.18986 11.9192 2.57856 9.13701C3.52335 2.36897 3.83339 2.36897 9.00546 2.36897C14.1675 2.36897 14.4766 2.36897 15.4241 9.14799C15.8119 11.9238 15.6555 13.5408 14.9165 14.3905Z" />
                                <path d="M11.2863 4.19824C11.1044 4.19824 10.9299 4.27051 10.8013 4.39915C10.6726 4.52779 10.6003 4.70227 10.6003 4.88419C10.6003 5.30868 10.4317 5.71579 10.1316 6.01595C9.83139 6.31611 9.42429 6.48474 8.99979 6.48474C8.5753 6.48474 8.1682 6.31611 7.86803 6.01595C7.56787 5.71579 7.39924 5.30868 7.39924 4.88419C7.39924 4.70227 7.32697 4.52779 7.19833 4.39915C7.06969 4.27051 6.89522 4.19824 6.71329 4.19824C6.53137 4.19824 6.35689 4.27051 6.22825 4.39915C6.09961 4.52779 6.02734 4.70227 6.02734 4.88419C6.02734 5.67254 6.34051 6.42859 6.89795 6.98603C7.4554 7.54347 8.21145 7.85664 8.99979 7.85664C9.78814 7.85664 10.5442 7.54347 11.1016 6.98603C11.6591 6.42859 11.9722 5.67254 11.9722 4.88419C11.9722 4.70227 11.9 4.52779 11.7713 4.39915C11.6427 4.27051 11.4682 4.19824 11.2863 4.19824Z" />
                              </svg>
                              Add to Cart
                            </span>
                            <span>
                              <svg width={18} height={18} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.7823 8.95775C15.7387 1.49096 14.8315 0.99707 9.00454 0.99707C3.16848 0.99707 2.26028 1.48821 1.21947 8.94769C0.764911 12.2018 1.01368 14.0987 2.05175 15.2923C3.29652 16.7227 5.54095 17.0026 8.99631 17.0026C12.4581 17.0026 14.7062 16.7218 15.9509 15.2904C16.9881 14.0987 17.2369 12.2055 16.7832 8.95775H16.7823ZM14.9165 14.3905C14.0184 15.424 11.9861 15.6307 8.99723 15.6307C6.0138 15.6307 3.98522 15.4231 3.08708 14.3914C2.34625 13.5408 2.18986 11.9192 2.57856 9.13701C3.52335 2.36897 3.83339 2.36897 9.00546 2.36897C14.1675 2.36897 14.4766 2.36897 15.4241 9.14799C15.8119 11.9238 15.6555 13.5408 14.9165 14.3905Z" />
                                <path d="M11.2863 4.19824C11.1044 4.19824 10.9299 4.27051 10.8013 4.39915C10.6726 4.52779 10.6003 4.70227 10.6003 4.88419C10.6003 5.30868 10.4317 5.71579 10.1316 6.01595C9.83139 6.31611 9.42429 6.48474 8.99979 6.48474C8.5753 6.48474 8.1682 6.31611 7.86803 6.01595C7.56787 5.71579 7.39924 5.30868 7.39924 4.88419C7.39924 4.70227 7.32697 4.52779 7.19833 4.39915C7.06969 4.27051 6.89522 4.19824 6.71329 4.19824C6.53137 4.19824 6.35689 4.27051 6.22825 4.39915C6.09961 4.52779 6.02734 4.70227 6.02734 4.88419C6.02734 5.67254 6.34051 6.42859 6.89795 6.98603C7.4554 7.54347 8.21145 7.85664 8.99979 7.85664C9.78814 7.85664 10.5442 7.54347 11.1016 6.98603C11.6591 6.42859 11.9722 5.67254 11.9722 4.88419C11.9722 4.70227 11.9 4.52779 11.7713 4.39915C11.6427 4.27051 11.4682 4.19824 11.2863 4.19824Z" />
                              </svg>
                              Add to Cart
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <div className="accordion-header" id="flush-package-headingThree">
                      <div className="accordion-button collapsed" role="button" data-bs-toggle="collapse" data-bs-target="#flush-package-collapseThree" aria-expanded="false" aria-controls="flush-package-collapseThree">
                        <div className="batch">
                          <span>Private Tour</span>
                        </div>
                        <div className="title-area">
                          <span className="check" />
                          <h6>Skydiving &amp; Paragliding</h6>
                        </div>
                        <span>$79.00 </span>
                      </div>
                    </div>
                    <div id="flush-package-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-package-headingThree" data-bs-parent="#accordionFlushPackage">
                      <div className="accordion-body">
                        <div className="tour-info-and-calculate-area">
                          <p>An 11-night journey covering Bangkok <i className="bi bi-arrow-right" /> River Kwai <i className="bi bi-arrow-right" /> Chiang Rai <i className="bi bi-arrow-right" /> Chiang Mai <i className="bi bi-arrow-right" /> Phi Phi <i className="bi bi-arrow-right" /> Phuket.</p>
                          <div className="price-calculate">
                            <span className="adult">$30 <i className="bi bi-x" /> 2 Adult</span>
                          </div>
                        </div>
                        <div className="additional-service-area">
                          <h6>Additional Services -</h6>
                          <ul className="service-list">
                            <li>
                              <div className="service-info-wrap">
                                <label className="containerss">
                                  <input type="checkbox" />
                                  <span className="checkmark" />
                                </label>
                                <div className="service-info">
                                  <h6>Souvenir Photographs</h6>
                                  <p>Offer professional photo packages or digital keepsakes of key moments on the tour.</p>
                                </div>
                              </div>
                              <div className="pricing-and-count-area">
                                <span>$49.00</span>
                                <div className="quantity-counter">
                                  <a href="#" data-type="adult" className="quantity__minus"><i className="bi bi-dash" /></a>
                                  <input name="quantity" type="text" className="quantity__input" defaultValue={1} />
                                  <a href="#" data-type="adult" className="quantity__plus"><i className="bi bi-plus" /></a>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="service-info-wrap">
                                <label className="containerss">
                                  <input type="checkbox" />
                                  <span className="checkmark" />
                                </label>
                                <div className="service-info">
                                  <h6>Louvre Museum</h6>
                                  <p>Offer professional photo packages or digital keepsakes of key moments on the tour.</p>
                                </div>
                              </div>
                              <div className="pricing-and-count-area">
                                <span>$30.00</span>
                                <div className="quantity-counter">
                                  <a href="#" data-type="adult" className="quantity__minus"><i className="bi bi-dash" /></a>
                                  <input name="quantity" type="text" className="quantity__input" defaultValue={1} />
                                  <a href="#" data-type="adult" className="quantity__plus"><i className="bi bi-plus" /></a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="btn-area">
                          <Link href="/checkout" className="primary-btn1 two">
                            <span>
                              Book Now
                              <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z" />
                              </svg>
                            </span>
                            <span>
                              Book Now
                              <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z" />
                              </svg>
                            </span>
                          </Link>
                          <Link href="/checkout" className="primary-btn1 two transparent">
                            <span>
                              <svg width={18} height={18} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.7823 8.95775C15.7387 1.49096 14.8315 0.99707 9.00454 0.99707C3.16848 0.99707 2.26028 1.48821 1.21947 8.94769C0.764911 12.2018 1.01368 14.0987 2.05175 15.2923C3.29652 16.7227 5.54095 17.0026 8.99631 17.0026C12.4581 17.0026 14.7062 16.7218 15.9509 15.2904C16.9881 14.0987 17.2369 12.2055 16.7832 8.95775H16.7823ZM14.9165 14.3905C14.0184 15.424 11.9861 15.6307 8.99723 15.6307C6.0138 15.6307 3.98522 15.4231 3.08708 14.3914C2.34625 13.5408 2.18986 11.9192 2.57856 9.13701C3.52335 2.36897 3.83339 2.36897 9.00546 2.36897C14.1675 2.36897 14.4766 2.36897 15.4241 9.14799C15.8119 11.9238 15.6555 13.5408 14.9165 14.3905Z" />
                                <path d="M11.2863 4.19824C11.1044 4.19824 10.9299 4.27051 10.8013 4.39915C10.6726 4.52779 10.6003 4.70227 10.6003 4.88419C10.6003 5.30868 10.4317 5.71579 10.1316 6.01595C9.83139 6.31611 9.42429 6.48474 8.99979 6.48474C8.5753 6.48474 8.1682 6.31611 7.86803 6.01595C7.56787 5.71579 7.39924 5.30868 7.39924 4.88419C7.39924 4.70227 7.32697 4.52779 7.19833 4.39915C7.06969 4.27051 6.89522 4.19824 6.71329 4.19824C6.53137 4.19824 6.35689 4.27051 6.22825 4.39915C6.09961 4.52779 6.02734 4.70227 6.02734 4.88419C6.02734 5.67254 6.34051 6.42859 6.89795 6.98603C7.4554 7.54347 8.21145 7.85664 8.99979 7.85664C9.78814 7.85664 10.5442 7.54347 11.1016 6.98603C11.6591 6.42859 11.9722 5.67254 11.9722 4.88419C11.9722 4.70227 11.9 4.52779 11.7713 4.39915C11.6427 4.27051 11.4682 4.19824 11.2863 4.19824Z" />
                              </svg>
                              Add to Cart
                            </span>
                            <span>
                              <svg width={18} height={18} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.7823 8.95775C15.7387 1.49096 14.8315 0.99707 9.00454 0.99707C3.16848 0.99707 2.26028 1.48821 1.21947 8.94769C0.764911 12.2018 1.01368 14.0987 2.05175 15.2923C3.29652 16.7227 5.54095 17.0026 8.99631 17.0026C12.4581 17.0026 14.7062 16.7218 15.9509 15.2904C16.9881 14.0987 17.2369 12.2055 16.7832 8.95775H16.7823ZM14.9165 14.3905C14.0184 15.424 11.9861 15.6307 8.99723 15.6307C6.0138 15.6307 3.98522 15.4231 3.08708 14.3914C2.34625 13.5408 2.18986 11.9192 2.57856 9.13701C3.52335 2.36897 3.83339 2.36897 9.00546 2.36897C14.1675 2.36897 14.4766 2.36897 15.4241 9.14799C15.8119 11.9238 15.6555 13.5408 14.9165 14.3905Z" />
                                <path d="M11.2863 4.19824C11.1044 4.19824 10.9299 4.27051 10.8013 4.39915C10.6726 4.52779 10.6003 4.70227 10.6003 4.88419C10.6003 5.30868 10.4317 5.71579 10.1316 6.01595C9.83139 6.31611 9.42429 6.48474 8.99979 6.48474C8.5753 6.48474 8.1682 6.31611 7.86803 6.01595C7.56787 5.71579 7.39924 5.30868 7.39924 4.88419C7.39924 4.70227 7.32697 4.52779 7.19833 4.39915C7.06969 4.27051 6.89522 4.19824 6.71329 4.19824C6.53137 4.19824 6.35689 4.27051 6.22825 4.39915C6.09961 4.52779 6.02734 4.70227 6.02734 4.88419C6.02734 5.67254 6.34051 6.42859 6.89795 6.98603C7.4554 7.54347 8.21145 7.85664 8.99979 7.85664C9.78814 7.85664 10.5442 7.54347 11.1016 6.98603C11.6591 6.42859 11.9722 5.67254 11.9722 4.88419C11.9722 4.70227 11.9 4.52779 11.7713 4.39915C11.6427 4.27051 11.4682 4.19824 11.2863 4.19824Z" />
                              </svg>
                              Add to Cart
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BookingModal
