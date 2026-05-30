"use client";
import React, { useState, useRef, useEffect } from "react";

const CitizenshipSelect: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCitizenship, setSelectedCitizenship] = useState("Australian");
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const citizenships: string[] = [
    "Bangladeshi",
    "Indian",
    "Brazilian",
    "Australian",
    "American",
    "Canadian",
    "Chinese",
    "Japanese",
    "Pakistani",
    "Russian",
  ];

  // Close dropdown when clicking outside
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

  const handleSelect = (citizenship: string) => {
    setSelectedCitizenship(citizenship);
    setIsOpen(false);
    setSearchTerm("");
  };

  const filteredCitizenships = citizenships.filter((citizenship) =>
    citizenship.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="single-search-box" ref={dropdownRef}>
        <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.99951 18.953V11.2665H5.79922V18.2603C6.18401 18.5168 6.58494 18.7482 6.99951 18.953ZM18.9648 10.0663C18.9823 9.81608 18.9917 9.56482 18.9917 9.3128V2.25086H18.1173C15.2575 2.25087 12.4516 1.47279 10.0002 0C7.54886 1.47279 4.74297 2.25086 1.8832 2.25086H1.00879V9.31283C1.00879 9.56486 1.01811 9.81612 1.03572 10.0663H18.9648V10.0663ZM14.8014 6.45995H16.0017V7.66024H14.8014V6.45995ZM8.84963 3.84288L10.0022 1.87621L11.152 3.84444L13.3786 4.33288L11.862 6.03469L12.0855 8.30319L9.99835 7.38669L7.90993 8.30031L8.13662 6.03209L6.62238 4.3282L8.84963 3.84288ZM3.99879 6.45995H5.19908V7.66024H3.99879V6.45995Z" />
              <path d="M9.30806 6.37848L9.99902 6.07621L10.6896 6.37948L10.6157 5.62886L11.1175 5.06576L10.3808 4.90417L10.0003 4.25293L9.61893 4.90365L8.88199 5.06424L9.38303 5.62802L9.30806 6.37848ZM9.39984 11.2665H8.19955V19.4849L9.39984 20V11.2665ZM11.8004 11.2665H10.6001V20L11.8004 19.4849V11.2665ZM4.59869 11.2665H1.18799C1.47349 12.8124 2.09453 14.2769 3.00734 15.5568C3.47033 16.2058 4.00406 16.8013 4.59869 17.3323V11.2665ZM15.4013 11.2665V17.3323C15.9959 16.8013 16.5296 16.2058 16.9926 15.5568C17.9054 14.2769 18.5265 12.8124 18.812 11.2665H15.4013ZM14.201 11.2665H13.0007V18.953C13.4153 18.7482 13.8162 18.5168 14.201 18.2603V11.2665Z" />
            </svg>
      <div
        className="custom-select-dropdown"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <input type="text" readOnly value={selectedCitizenship} />
        <span>Citizenship</span>
      </div>

      <div
        className={`custom-select-wrap four ${isOpen ? "active" : ""}`}
      >
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
          {filteredCitizenships.length > 0 ? (
            filteredCitizenships.map((citizenship) => (
              <li
                key={citizenship}
                className="single-item"
                onClick={() => handleSelect(citizenship)}
              >
                <h6>{citizenship}</h6>
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

export default CitizenshipSelect;
