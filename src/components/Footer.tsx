import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font bg-[#2A254B]">
        <div className="container px-12 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-100 tracking-widest text-sm mb-3">
                Menu
              </h2>
              <nav className="list-none mb-10">
                <li className="mt-3">
                  <a className="text-gray-100 hover:text-gray-800">
                    New arrivals{" "}
                  </a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-100 hover:text-gray-800">
                    Best sellers{" "}
                  </a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-100 hover:text-gray-800">
                    Recently viewed{" "}
                  </a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-100 hover:text-gray-800">
                    Popular this week{" "}
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-100 tracking-widest text-sm mb-3">
                Categories
              </h2>
              <nav className="list-none mb-10">
                <li className="mt-3">
                  <a className="text-gray-100 hover:text-gray-800">Crockery </a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-100 hover:text-gray-800">
                    Furniture{" "}
                  </a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-100 hover:text-gray-800">Homeware </a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-100 hover:text-gray-800">
                    Plant pots{" "}
                  </a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-100 hover:text-gray-800">Chairs</a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-100 hover:text-gray-800">Crockery</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-100 tracking-widest text-sm mb-3">
                Our company{" "}
              </h2>
              <nav className="list-none mb-10">
                <li className="mt-3">
                  <a className="text-gray-100 hover:text-gray-800">About us</a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-100 hover:text-gray-800">Vacancies</a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-100 hover:text-gray-800">
                    Contact Us
                  </a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-100 hover:text-gray-800">Privacy</a>
                </li>
                <li className="mt-3">
                  <a className="text-gray-100 hover:text-gray-800">
                    Returns policy
                  </a>
                </li>
              </nav>
            </div>
            <div className=" md:w-1/2 w-full sm:px-0">
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative flex flex-col justify-start w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <label className="leading-7 line-clamp-1  text-lg text-gray-100">
                    Join our mailing list
                  </label>
                  <input
                    type="text"
                    id="footer-field"
                    name="footer-field"
                    className="w-full text-white bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button className="lg:mt-2  xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#2A254B] ">
          <div className="container px-12 py-6 mx-auto border-t-2 flex items-center sm:flex-row flex-col">
            <p className="text-sm text-gray-100 sm:ml-6 sm:mt-0 mt-4">
              Copyright 2022 Avion LTD
            </p>
            <span className="inline-flex gap-6 sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a className="text-gray-100">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-100">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-100">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>

              <a className="ml-3 text-gray-100">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
