import React, { useState, useEffect, useRef } from "react";
import PropTypes from 'prop-types'; 
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

export default function Navbar(props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }; 

  // Close dropdown if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className={`bg-${props.mode} text-${props.mode === 'dark' ? 'light' : 'dark'} overflow-x-hidden`}>
        <div className="flex justify-between h-20 items-center p-10 w-screen font-bold">
          <ul className="flex gap-8 text-xl">
            <Link to="/" className="text-2xl cursor-pointer">
              <li>{props.title}</li>
            </Link>
          </ul>
          <div className="flex">
            <div className="flex">
              <img
                className="w-14 h-12 mr-10 bg-transparent cursor-pointer"
                onClick={props.toggleMode}
                src={assets.DarkMode}
                alt="Dark Mode"
              />
            </div>
          
            <div className="mr-5 transition" ref={dropdownRef}>
              <button
                className="btn btn-secondary fs-5 fw-semibold"
                type="button"
                onClick={toggleDropdown}
                style={{ outline: 'none', boxShadow: 'none' }} // Remove outline and shadow
              >
                About Me
              </button>
              {isDropdownOpen && (
                <ul className="dropdown-menu d-flex justify-content-around align-items-center p-1 mt-2 border-0 shadow-lg">
                  <li>
                    <a href="https://www.linkedin.com/in/dhanush-abb811259/" target="_blank" rel="noopener noreferrer">
                      <img
                        src={assets.linkedIn}
                        alt="LinkedIn"
                        className="w-12 h-12 transform transition-transform duration-200 hover:scale-110 hover:shadow-lg"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noopener noreferrer">
                      <img
                        src={assets.Gmail}
                        alt="Gmail"
                        className="w-12 h-12 transform transition-transform duration-200 hover:scale-110 hover:shadow-lg"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Dhanush12212" target="_blank" rel="noopener noreferrer">
                      <img
                        src={assets.GitHub}
                        alt="GitHub"
                        className="w-10 h-8 transform transition-transform duration-200 hover:scale-110 hover:shadow-lg"
                      />
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Type checking with PropTypes
Navbar.propTypes = {
  title: PropTypes.string,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired
};
