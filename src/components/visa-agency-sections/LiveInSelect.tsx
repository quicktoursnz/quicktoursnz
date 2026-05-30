"use client";
import React, { useState, useRef, useEffect } from "react";

const LiveInSelect: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("Canada");
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const countries: string[] = [
    "Canada",
    "Bangladesh",
    "India",
    "Brazil",
    "Australia",
    "United States",
    "United Kingdom",
    "Japan",
  ];

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Select country
  const handleSelect = (country: string) => {
    setSelectedCountry(country);
    setIsOpen(false);
    setSearchTerm("");
  };

  // Filter countries by search
  const filteredCountries = countries.filter((country) =>
    country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="single-search-box" ref={dropdownRef}>
        <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path d="M15.3998 7.57539L7.58413 3.92737L-0.232422 7.57539L-0.0544699 7.95176L7.54053 4.40428C7.55525 4.39725 7.57137 4.3936 7.58769 4.3936C7.604 4.3936 7.62012 4.39725 7.63484 4.40428L15.2263 7.95354L15.3998 7.57539Z" />
                <path d="M0.666504 7.85924V9.86476L7.53724 6.65539C7.55208 6.64876 7.56814 6.64534 7.58439 6.64534C7.60065 6.64534 7.61671 6.64876 7.63155 6.65539L14.5023 9.86476V7.85924L7.58439 4.62762L0.666504 7.85924Z" />
                <path d="M15.3998 10.5339L14.5661 10.1451L7.58413 6.88324L0.602174 10.1407L-0.232422 10.5339L-0.0544699 10.9112L7.54053 7.36282C7.55537 7.3562 7.57144 7.35277 7.58769 7.35277C7.60394 7.35277 7.62001 7.3562 7.63484 7.36282L15.2298 10.9112L15.3998 10.5339ZM1.67078 13.2966H4.93086V20.0001H1.67078V13.2966Z" />
                <path d="M7.6957 1.10241V3.73166L15.595 7.41972C15.6216 7.43226 15.6422 7.45484 15.6522 7.48253C15.6622 7.51022 15.6608 7.54074 15.6484 7.56741L15.3815 8.14487C15.3755 8.15812 15.3669 8.17002 15.3562 8.17982C15.3455 8.18961 15.3329 8.1971 15.3192 8.20181C15.2906 8.21294 15.2588 8.21294 15.2302 8.20181L14.7212 7.96425V9.96888L15.5914 10.3755C15.6181 10.388 15.6386 10.4106 15.6487 10.4383C15.6587 10.466 15.6573 10.4965 15.6448 10.5232L15.3779 11.1015C15.372 11.1149 15.3634 11.1269 15.3527 11.1369C15.342 11.1468 15.3294 11.1545 15.3156 11.1594C15.3015 11.1653 15.2864 11.1684 15.2711 11.1684C15.2558 11.1684 15.2407 11.1653 15.2266 11.1594L14.7177 10.9218V20H18.5881V6.18829L10.873 2.58564L7.6957 1.10241ZM6.83797 0L6.66357 0.376369L9.29104 1.60157L18.7536 6.01478L18.7554 6.01834L20.058 6.62605L20.2324 6.24968L6.83797 0Z" />
                <path d="M10.502 12.6124H11.906V14.0155H10.502V12.6124ZM10.502 14.3287H11.906V15.7319H10.502V14.3287ZM12.2014 12.6124H13.6054V14.0155H12.2014V12.6124ZM12.2014 14.3287H13.6054V15.7319H12.2014V14.3287Z" />
                <path d="M7.69535 20.0001H14.502V10.8133L7.69535 7.63416V20.0001ZM8.14023 8.33262L14.0571 11.0962V19.5552H8.14023V8.33262ZM0.666244 20.0001H1.44834V13.1854C1.44834 13.1559 1.46006 13.1276 1.48092 13.1067C1.50178 13.0859 1.53007 13.0742 1.55956 13.0742H5.04209C5.07159 13.0742 5.09987 13.0859 5.12073 13.1067C5.14159 13.1276 5.15331 13.1559 5.15331 13.1854V20.0001H7.42576V7.6564L0.663574 10.8133L0.666244 20.0001Z" />
              </g>
            </svg>
      <div
        className="custom-select-dropdown"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <input type="text" readOnly value={selectedCountry} />
        <span>Live in</span>
      </div>

      <div className={`custom-select-wrap four ${isOpen ? "active" : ""}`}>
        <div className="custom-select-search-area">
          <i className="bx bx-search" />
          <input
            type="text"
            placeholder="Type Your Destination"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <ul className="option-list">
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country) => (
              <li
                key={country}
                className="single-item"
                onClick={() => handleSelect(country)}
              >
                <h6>{country}</h6>
              </li>
            ))
          ) : (
            <li className="single-item">
              <h6>No result found</h6>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default LiveInSelect;
