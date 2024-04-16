import React, { useState } from "react";
import info from "../../assets/info.png";
import lms from "../../assets/lms.png";

const Header = () => {
  const [dropdown, setDropdown] = useState(false)
  //console.log(dropdown)
  return (
    <nav className="bg-white shadow-md fixed w-full z-20 top-0 left-0 border-b">
      <div className=" flex items-center justify-between mx-auto p-4">
        <img src={lms} className="h-14" />

        <div className="flex items-center space-x-2  md:order-2">
          <div className="flex items-center space-x-2">
            <img src={info} className="h-7" />
          </div>

          <div className="flex items-center space-x-2">
            <p className="text-gray-600">mohitbite@gmail.com</p>
          </div>
          <div className="relative">
            <div className="py-1 px-4 bg-sky-600 rounded-lg" onClick={()=>setDropdown(!dropdown)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-white cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>

        { dropdown && (  <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
              <a className="block px-4 py-3 text-gray-800 hover:bg-gray-100 border-b border-gray-200 transition-colors duration-300">
                Username
              </a>
              <a className="block px-4 py-3 text-gray-800 hover:bg-gray-100 border-b border-gray-200 transition-colors duration-300">
                Home
              </a>
              <a className="block px-4 py-3 text-gray-800 hover:bg-gray-100 border-b border-gray-200 transition-colors duration-300">
                My Learning
              </a>
              <a className="block px-4 py-3 text-gray-800 hover:bg-gray-100 border-b border-gray-200 transition-colors duration-300">
                My Submissions
              </a>
              <a className="block px-4 py-3 text-gray-800 hover:bg-gray-100 border-b border-gray-200 transition-colors duration-300">
                Favorite Courses
              </a>
              <a className="block px-4 py-3 text-gray-800 hover:bg-gray-100 border-b border-gray-200 transition-colors duration-300">
                Logout
              </a>
            </div>)}
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
