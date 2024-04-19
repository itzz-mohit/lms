import React from "react";


const Content = () => {
  const name = "Course Name"; 

  return (
    <div className="flex mx-8 mt-8 gap-6">
      <div className="w-1/6" id="accordion">
        <div className="flex py-2 px-2 bg-gray-400">
          <div className="me-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6 mt-0.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
              />
            </svg>
          </div>
          <div className="font-semibold text-white">Course Content</div>
        </div>
        <div className="p-1 bg-white shadow-lg h-full">
          <div className="py-1 px-1">
            <div className="flex justify-between bg-gray-300 py-2 px-2">
              <div>Module 1</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 transform rotate-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <div className="text-xs from-neutral-600">
              <div className="bg-gray-50 py-3 px-2 border-b border-gray-300">
                Html Introduction
              </div>
              <div className="bg-gray-50 py-3 px-2">CSS Introduction</div>
            </div>
          </div>
          <div className="py-1 px-1">
            <div className="flex justify-between bg-gray-300 py-2 px-2">
              <div>Module 2</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 transform rotate-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <div className="text-xs from-neutral-600">
              <div className="bg-gray-50 py-3 px-2 border-b border-gray-300">
                Quiz
              </div>
              <div className="bg-gray-50 py-3 px-2">CSS Notes</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-5/6">
        <div className="flex py-2 px-2 bg-sky-600">
          <div className="me-2 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6 mt-0.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </div>
          <div className="font-semibold text-white text-xl">{name}</div>
        </div>
        <div>
          Always display the Welcome component 
        </div>
      </div>
    </div>
  );
};

export default Content;
