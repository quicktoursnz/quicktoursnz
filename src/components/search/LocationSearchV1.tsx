import Link from 'next/link'
import React from 'react'

const LocationSearchV1 = () => {
  return (
   <div className="home1-location-search-section mb-100">
        <div className="container">
          <div className="location-search-wrapper">
            <div className="location-search-content">
              <h2>Customize Your Travel Package!</h2>
              <form className="location-search-area">
                <div className="search-area">
                  <div className="dropdown" id="search_vendor">
                    <svg width={18} height={18} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path d="M12.5944 8.99968C12.5944 10.9878 10.9826 12.5996 8.99443 12.5996C7.00627 12.5996 5.39465 10.9878 5.39465 8.99968C5.39465 7.01152 7.00627 5.3999 8.99443 5.3999C10.9826 5.3999 12.5944 7.01152 12.5944 8.99968Z" />
                        <path d="M17.4601 8.4599H16.2564C15.9858 4.86535 13.1291 2.00812 9.53458 1.7372V0.539976C9.53458 0.241723 9.29268 0 8.9946 0C8.69635 0 8.45462 0.241723 8.45462 0.539976V1.7372C4.85986 2.00812 2.00297 4.86535 1.73235 8.4599H0.540018C0.241723 8.4599 0 8.7017 0 8.99987C0 9.29813 0.241723 9.53985 0.539976 9.53985H1.73239C2.00297 13.1344 4.85991 15.9916 8.45441 16.2625V17.4601C8.45441 17.7583 8.69614 18 8.99439 18C9.29251 18 9.53428 17.7583 9.53428 17.4601V16.2625C13.1289 15.9918 15.9858 13.1346 16.2564 9.53985H17.4601C17.7583 9.53985 18 9.29813 18 8.99987C18 8.70175 17.7583 8.4599 17.4601 8.4599ZM8.99443 15.2096C5.56504 15.2094 2.78509 12.4291 2.78509 8.9997C2.78522 5.57014 5.56554 2.7902 8.99494 2.7902C12.4245 2.7902 15.2046 5.57048 15.2046 8.99987C15.2005 12.428 12.4225 15.2058 8.99443 15.2096Z" />
                      </g>
                    </svg>
                    <input type="text" className="dropdown-search" placeholder="Select Your Location" />
                    <ul className="dropdown-list">
                      <li className="not-found" style={{ display: 'none' }}>Results Not Found!</li>
                      <li>Cox's Bazar, BD</li>
                      <li>Bangkok, TH</li>
                      <li>Dubai, AE</li>
                      <li>Singapore, SG</li>
                      <li>Paris, FR</li>
                      <li>London, UK</li>
                      <li>New York, US</li>
                      <li>Toronto, CA</li>
                      <li>Male, MV</li>
                      <li>Tokyo, JP</li>
                      <li>Kuala Lumpur, MY</li>
                      <li>Delhi, IN</li>
                    </ul>
                  </div>
                  <Link href="/travel-package" className="primary-btn1">
                    <span>
                      Search Now
                    </span>
                    <span>
                      Search Now
                    </span>
                  </Link>
                </div>
              </form>
              <ul>
                <li>
                  <svg width={18} height={18} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={9} cy={9} r="8.5" />
                    <path d="M13.6193 7.07207L8.05903 12.6354C7.97043 12.721 7.85813 12.7654 7.74593 12.7654C7.68772 12.7655 7.63008 12.754 7.57632 12.7317C7.52256 12.7094 7.47376 12.6767 7.43272 12.6354L4.38073 9.58337C4.20642 9.41197 4.20642 9.13137 4.38073 8.95707L5.45912 7.87567C5.62462 7.71027 5.92002 7.71027 6.08552 7.87567L7.74593 9.53607L11.9146 5.36438C11.9557 5.32322 12.0045 5.29055 12.0581 5.26825C12.1118 5.24594 12.1694 5.23443 12.2275 5.23438C12.3456 5.23438 12.4579 5.28168 12.5406 5.36438L13.619 6.44587C13.7936 6.62017 13.7936 6.90077 13.6193 7.07207Z" />
                  </svg>
                  Make Your Favourite Package
                </li>
                <li>
                  <svg width={18} height={18} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={9} cy={9} r="8.5" />
                    <path d="M13.6193 7.07207L8.05903 12.6354C7.97043 12.721 7.85813 12.7654 7.74593 12.7654C7.68772 12.7655 7.63008 12.754 7.57632 12.7317C7.52256 12.7094 7.47376 12.6767 7.43272 12.6354L4.38073 9.58337C4.20642 9.41197 4.20642 9.13137 4.38073 8.95707L5.45912 7.87567C5.62462 7.71027 5.92002 7.71027 6.08552 7.87567L7.74593 9.53607L11.9146 5.36438C11.9557 5.32322 12.0045 5.29055 12.0581 5.26825C12.1118 5.24594 12.1694 5.23443 12.2275 5.23438C12.3456 5.23438 12.4579 5.28168 12.5406 5.36438L13.619 6.44587C13.7936 6.62017 13.7936 6.90077 13.6193 7.07207Z" />
                  </svg>
                  Easily Customize Tours
                </li>
                <li>
                  <svg width={18} height={18} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    <circle cx={9} cy={9} r="8.5" />
                    <path d="M13.6193 7.07207L8.05903 12.6354C7.97043 12.721 7.85813 12.7654 7.74593 12.7654C7.68772 12.7655 7.63008 12.754 7.57632 12.7317C7.52256 12.7094 7.47376 12.6767 7.43272 12.6354L4.38073 9.58337C4.20642 9.41197 4.20642 9.13137 4.38073 8.95707L5.45912 7.87567C5.62462 7.71027 5.92002 7.71027 6.08552 7.87567L7.74593 9.53607L11.9146 5.36438C11.9557 5.32322 12.0045 5.29055 12.0581 5.26825C12.1118 5.24594 12.1694 5.23443 12.2275 5.23438C12.3456 5.23438 12.4579 5.28168 12.5406 5.36438L13.619 6.44587C13.7936 6.62017 13.7936 6.90077 13.6193 7.07207Z" />
                  </svg>
                  Enjoy Your Trip
                </li>
              </ul>
              <div className="contact-area">
                <span>Meet Our Local Tour Guider!</span>
                <Link href="/contact">Contact Now
                  <svg width={10} height={10} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 9L9 1M9 1C7.22222 1.33333 3.33333 2 1 1M9 1C8.66667 2.66667 8 6.33333 9 9" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default LocationSearchV1
