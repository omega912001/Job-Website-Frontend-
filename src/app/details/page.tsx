"use client";

// import React from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../../components/navbar";
import React, { useState } from "react";

export default function Details() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Functions to open and close the modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <div className="bg-[#AFDBF3]">
        <Navbar />

        <div className="container mx-auto p-4">
          {/* <!-- 1st container and bg color --> */}
          <div className="container mx-auto p-2 flex py-3 -mt-[43px]">
            {/* <!-- DIV 1 --> */}
            <div className="sm:hidden md:hidden lg:block xl:block w-[30%] border-l border-r border-b border-black mx-3 py-0 px-3 h-[600px] overflow-y-auto overflow-x-hidden lg:w-[45%] xl:w-[30%]">
              {/* <!-- card1  --> */}
              <div className="bg-white shadow-md rounded-lg w-80 p-4 border-4  border-blue-500">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-start space-x-2">
                    <img
                      src="https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png"
                      alt="MetaMask Logo"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <a href="/details" className="text-lg font-semibold">
                        Product designer
                      </a>
                      <p className="text-gray-500 text-sm">
                        MetaMask • 25 Applicants
                      </p>
                    </div>
                  </div>

                  <div>
                    <svg
                      className="w-6 h-6 text-gray-400 hover:text-red-400 cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20.84 4.61c-1.17-1.17-3.07-1.17-4.24 0L12 9.21l-4.6-4.6c-1.17-1.17-3.07-1.17-4.24 0-1.17 1.17-1.17 3.07 0 4.24L12 18.39l8.84-8.84c1.17-1.17 1.17-3.07 0-4.24z"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex space-x-2 mb-4">
                  <span className="bg-purple-100 text-purple-700 text-xs font-semibold py-1 px-2 rounded-lg">
                    Entry Level
                  </span>
                  <span className="bg-green-100 text-green-700 text-xs font-semibold py-1 px-2 rounded-lg">
                    Full-Time
                  </span>
                  <span className="bg-orange-100 text-orange-700 text-xs font-semibold py-1 px-2 rounded-lg">
                    Full-Time
                  </span>
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-tight">
                  Doing the right thing for investors is what we’re all about at
                  Vanguard, and that in...
                </p>
                <hr></hr>
                <div className="flex justify-between items-center mt-2">
                  <div className="text-xl font-bold">$250/hr</div>
                  <div className="text-sm text-gray-400 flex items-center space-x-1">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-clock w-4 h-4"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    </div>
                    <span>Posted 12 days ago</span>
                  </div>
                </div>
              </div>

              {/* <!-- card2 --> */}
              <div className="bg-white shadow-md rounded-lg w-80 p-4 my-3">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-start space-x-2">
                    <img
                      src="https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png"
                      alt="MetaMask Logo"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <a href="/details" className="text-lg font-semibold">
                        Product designer
                      </a>
                      <p className="text-gray-500 text-sm">
                        MetaMask • 25 Applicants
                      </p>
                    </div>
                  </div>

                  <div>
                    <svg
                      className="w-6 h-6 text-gray-400 hover:text-red-400 cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20.84 4.61c-1.17-1.17-3.07-1.17-4.24 0L12 9.21l-4.6-4.6c-1.17-1.17-3.07-1.17-4.24 0-1.17 1.17-1.17 3.07 0 4.24L12 18.39l8.84-8.84c1.17-1.17 1.17-3.07 0-4.24z"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex space-x-2 mb-4">
                  <span className="bg-purple-100 text-purple-700 text-xs font-semibold py-1 px-2 rounded-lg">
                    Entry Level
                  </span>
                  <span className="bg-green-100 text-green-700 text-xs font-semibold py-1 px-2 rounded-lg">
                    Full-Time
                  </span>
                  <span className="bg-orange-100 text-orange-700 text-xs font-semibold py-1 px-2 rounded-lg">
                    Full-Time
                  </span>
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-tight">
                  Doing the right thing for investors is what we’re all about at
                  Vanguard, and that in...
                </p>
                <hr></hr>
                <div className="flex justify-between items-center mt-2">
                  <div className="text-xl font-bold">$250/hr</div>
                  <div className="text-sm text-gray-400 flex items-center space-x-1">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-clock w-4 h-4"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    </div>
                    <span>Posted 12 days ago</span>
                  </div>
                </div>
              </div>

              {/* <!-- card3 --> */}
              <div className="bg-white shadow-md rounded-lg w-80 p-4 my-3">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-start space-x-2">
                    <img
                      src="https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png"
                      alt="MetaMask Logo"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <a href="/details" className="text-lg font-semibold">
                        Product designer
                      </a>
                      <p className="text-gray-500 text-sm">
                        MetaMask • 25 Applicants
                      </p>
                    </div>
                  </div>

                  <div>
                    <svg
                      className="w-6 h-6 text-gray-400 hover:text-red-400 cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20.84 4.61c-1.17-1.17-3.07-1.17-4.24 0L12 9.21l-4.6-4.6c-1.17-1.17-3.07-1.17-4.24 0-1.17 1.17-1.17 3.07 0 4.24L12 18.39l8.84-8.84c1.17-1.17 1.17-3.07 0-4.24z"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex space-x-2 mb-4">
                  <span className="bg-purple-100 text-purple-700 text-xs font-semibold py-1 px-2 rounded-lg">
                    Entry Level
                  </span>
                  <span className="bg-green-100 text-green-700 text-xs font-semibold py-1 px-2 rounded-lg">
                    Full-Time
                  </span>
                  <span className="bg-orange-100 text-orange-700 text-xs font-semibold py-1 px-2 rounded-lg">
                    Full-Time
                  </span>
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-tight">
                  Doing the right thing for investors is what we’re all about at
                  Vanguard, and that in...
                </p>
                <hr></hr>
                <div className="flex justify-between items-center mt-2">
                  <div className="text-xl font-bold">$250/hr</div>
                  <div className="text-sm text-gray-400 flex items-center space-x-1">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-clock w-4 h-4"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    </div>
                    <span>Posted 12 days ago</span>
                  </div>
                </div>
              </div>

              {/* <!-- CARD3 ENDED --> */}
            </div>
            {/* <!-- DIV 1 ENDED --> */}

            {/* <!-- DIV2 STARTED--> */}
            <div className="w-[50%] p-4 mx-0 border-black bg-white h-[600px] overflow-y-auto md:w-[100%] lg:w-[80%] xl:w-[50%]">
              <div className="flex">
                <h2 className="text-2xl font-bold">Sr. UX Designer</h2>

                <div className="space-x-2 pl-[5rem]">
                  <span className="bg-purple-100 text-purple-700 text-xs font-semibold py-1 px-2 rounded-lg">
                    Entry Level
                  </span>
                  <span className="bg-green-100 text-green-700 text-xs font-semibold py-1 px-2 rounded-lg">
                    Full-Time
                  </span>
                  <span className="bg-orange-100 text-orange-700 text-xs font-semibold py-1 px-2 rounded-lg">
                    Full-Time
                  </span>
                </div>
              </div>
              <hr className="w-full px-0 mt-3 bg-gray-500" />

              <h1 className="text-md font-bold mt-3">About the Role</h1>
              <p className="text-sm mt-3">
                Product designers at Netflix create user experiences for the
                company's products across web, mobile, and television. They work
                to improve the user interface and make the Netflix experience
                more enjoyable for members. Some of the responsibilities of a
                product designer at Netflix include: Defining platform
                experiences: Identifying and defining features and experiences
                for the platform Driving design process: Leading the design
                process from concept to launch, with a human-centered approach
                Communicating design rationale: Clearly explaining design
                iterations and rationale to stakeholders and partners
                Collaborating with cross-functional teams: Working with teams
                from consumer research, engineering, product management,
                merchandising, and data science Providing systems thinking.
              </p>
              <h1 className="text-md font-bold mt-3">Responsibilities</h1>
              <ul className="list-disc px-4 mt-3">
                <li>
                  Leading the design process from concept to launch, with a
                  human-centered approach
                </li>
                <li>
                  Clearly explaining design iterations and rationale to
                  stakeholders and partners
                </li>
                <li>
                  Working with teams from consumer research, engineering,
                  product management, merchandising, and data science
                </li>
                <li>
                  Providing strategic and tactical systems thinking for
                  large-scale modular design systems
                </li>
                <li>Leading multiple initiatives within a product domain</li>
                <li>Influencing and shaping company strategy and objectives</li>
              </ul>

              <div className="mt-5">
                <h3 className="text-md font-semibold">Required Skills</h3>
                <div className="flex space-x-2 mt-3">
                  <span className="bg-gray-200 text-gray-800 px-2 py-1 text-xs rounded-xl">
                    Wireframing
                  </span>
                  <span className="bg-gray-200 text-gray-800 px-2 py-1 text-xs rounded-xl">
                    Figma
                  </span>
                  <span className="bg-gray-200 text-gray-800 px-2 py-1 text-xs rounded-xl">
                    Adobe XD
                  </span>
                  <span className="bg-gray-200 text-gray-800 px-2 py-1 text-xs rounded-xl">
                    Teamwork
                  </span>
                  <span className="bg-gray-200 text-gray-800 px-2 py-1 text-xs rounded-xl">
                    UI/UX Designer
                  </span>
                </div>
              </div>
              <div className="bg-white p-4 h-[600px] xl:hidden md:block lg:block">
                <h1 className=" font-bold text-3xl mt-5 mb-5 xl:hidden md:block lg:block">
                  Company Information :-
                </h1>
                {/* <!-- box1 --> */}
                <div className="flex">
                  <h1 className="text-lg font-semibold">Netflix ,Inc</h1>
                  <svg
                    className="mt-1 pl-1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
                    viewBox="0 0 48 48"
                  >
                    <polygon
                      fill="#42a5f5"
                      points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"
                    ></polygon>
                    <polygon
                      fill="#fff"
                      points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"
                    ></polygon>
                  </svg>
                  <img
                    className="w-12 h-12 -mt-2 rounded-lg ml-5"
                    alt="logo"
                    src="https://logosandtypes.com/wp-content/uploads/2020/07/netflix.png"
                  />
                </div>
                <div>
                  <h3 className="text-sm mt-3 font-semibold">Founded</h3>
                  <p className="text-sm">January 6,1997</p>

                  <h3 className="text-sm font-semibold mt-3">Location</h3>
                  <p className="text-sm">San Francisco, USA</p>
                </div>
                <hr className="mt-3" />

                {/* <!-- box-2 --> */}

                <div className="text-lg mt-3 font-semibold">
                  Other Information
                </div>
                <div className="flex mt-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="yellow"
                  >
                    <path d="M12 .587l3.668 7.568 8.332 1.163-6.0 5.851 1.416 8.241L12 18.897l-7.416 3.911L6.0 14.169 0 8.318l8.332-1.163z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="yellow"
                  >
                    <path d="M12 .587l3.668 7.568 8.332 1.163-6.0 5.851 1.416 8.241L12 18.897l-7.416 3.911L6.0 14.169 0 8.318l8.332-1.163z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="yellow"
                  >
                    <path d="M12 .587l3.668 7.568 8.332 1.163-6.0 5.851 1.416 8.241L12 18.897l-7.416 3.911L6.0 14.169 0 8.318l8.332-1.163z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="yellow"
                  >
                    <path d="M12 .587l3.668 7.568 8.332 1.163-6.0 5.851 1.416 8.241L12 18.897l-7.416 3.911L6.0 14.169 0 8.318l8.332-1.163z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="yellow"
                  >
                    <path d="M12 .587l3.668 7.568 8.332 1.163-6.0 5.851 1.416 8.241L12 18.897l-7.416 3.911L6.0 14.169 0 8.318l8.332-1.163z" />
                  </svg>
                </div>
                <p className="text-sm">Payment Verified</p>
                <h3 className="text-sm mt-3 font-semibold">65k+ Spent</h3>
                <p className="text-sm">Payment Verified</p>
                <hr className="mt-3"></hr>

                {/* <!-- box3 --> */}

                <div className="text-lg mt-3 font-semibold">Services</div>
                <div className="flex space-x-2 mt-3">
                  <span className="bg-gray-200 px-2 py-1 rounded-xl h-6 text-xs">
                    Web And App Design
                  </span>
                  <span className="bg-gray-200 px-2 py-1 h-6 rounded-xl text-xs">
                    Figma
                  </span>
                </div>
                <div className="flex space-x-2 mt-2">
                  <span className="bg-gray-200 px-2 py-1 rounded-xl h-6 text-xs">
                    Backend
                  </span>
                  <span className="bg-gray-200 px-2 py-1 h-6 rounded-xl text-xs">
                    FedRAMP
                  </span>
                </div>
                <div className="flex space-x-2 mt-2">
                  <span className="bg-gray-200 px-2 py-1 rounded-xl h-6 text-xs">
                    Frontend
                  </span>
                  <span className="bg-gray-200 px-2 py-1 h-6 rounded-xl text-xs">
                    Offensive Security
                  </span>
                </div>

                <button
                  onClick={openModal}
                  className="px-[4rem] py-2 mt-[3rem] bg-blue-500 text-white rounded-full"
                >
                  Apply Now
                </button>

                {/* Modal */}
                {isModalOpen && (
                  <div className="fixed inset-0  z-50 bg-black bg-opacity-50 backdrop-blur-lg bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg p-8 w-[70%]">
                      <h2 className="text-2xl font-semibold mb-6">Apply Now</h2>

                      {/* Form fields inside modal */}
                      <form className="h-[500px] overflow-y-auto">
                        <div className="mb-4">
                          <label
                            htmlFor="name"
                            className="block text-sm font-bold text-gray-700"
                          >
                            First Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                            placeholder="Your First Name"
                            required
                          />
                        </div>

                        <div className="mb-4">
                          <label
                            htmlFor="name"
                            className="block text-sm font-bold text-gray-700"
                          >
                            Last Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                            placeholder="Your Last Name"
                            required
                          />
                        </div>

                        <div className="mb-4">
                          <label
                            htmlFor="email"
                            className="block text-sm font-bold text-gray-700"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                            placeholder="Your Email"
                            required
                          />
                        </div>

                        <div className="mb-4">
                          <label
                            htmlFor="dob"
                            className="block text-sm font-bold text-gray-700"
                          >
                            Date of Birth
                          </label>
                          <input
                            type="date"
                            id="dob"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                            required
                          />
                        </div>

                        <div className="mb-4">
                          <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="photo"
                          >
                            Upload Resume
                          </label>
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="photo"
                            type="file"
                            accept=".jpg, .jpeg, .png"
                          />
                        </div>

                        <div className="mb-4">
                          <label
                            htmlFor="email"
                            className="block text-sm font-bold text-gray-700"
                          >
                            Coverletter
                          </label>
                          <textarea
                            id="cover-letter"
                            name="cover-letter"
                            rows={10}
                            cols={37}
                            placeholder="Write your cover letter here..."
                          ></textarea>
                          <br />
                          <br />
                        </div>

                        {/* Submit and Close buttons */}
                        <div className="flex justify-end">
                          <button
                            type="button"
                            onClick={closeModal}
                            className="px-[4rem] py-2  bg-gray-300 text-gray-700 rounded-lg mr-2"
                          >
                            Close
                          </button>
                          <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* <!-- DIV3 --> */}
            <div className="w-[20%] border-l border-black bg-white p-4 h-[600px] md:hidden lg:hidden xl:block">
              {/* <!-- box1 --> */}
              <div className="flex">
                <h1 className="text-lg font-semibold">Netflix ,Inc</h1>
                <svg
                  className="mt-1 pl-1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 48 48"
                >
                  <polygon
                    fill="#42a5f5"
                    points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"
                  ></polygon>
                  <polygon
                    fill="#fff"
                    points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"
                  ></polygon>
                </svg>
                <img
                  className="w-12 h-12 -mt-2 rounded-lg ml-5"
                  alt="logo"
                  src="https://logosandtypes.com/wp-content/uploads/2020/07/netflix.png"
                />
              </div>
              <div>
                <h3 className="text-sm mt-3 font-semibold">Founded</h3>
                <p className="text-sm">January 6,1997</p>

                <h3 className="text-sm font-semibold mt-3">Location</h3>
                <p className="text-sm">San Francisco, USA</p>
              </div>
              <hr className="mt-3" />

              {/* <!-- box-2 --> */}

              <div className="text-lg mt-3 font-semibold">
                Other Information
              </div>
              <div className="flex mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="yellow"
                >
                  <path d="M12 .587l3.668 7.568 8.332 1.163-6.0 5.851 1.416 8.241L12 18.897l-7.416 3.911L6.0 14.169 0 8.318l8.332-1.163z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="yellow"
                >
                  <path d="M12 .587l3.668 7.568 8.332 1.163-6.0 5.851 1.416 8.241L12 18.897l-7.416 3.911L6.0 14.169 0 8.318l8.332-1.163z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="yellow"
                >
                  <path d="M12 .587l3.668 7.568 8.332 1.163-6.0 5.851 1.416 8.241L12 18.897l-7.416 3.911L6.0 14.169 0 8.318l8.332-1.163z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="yellow"
                >
                  <path d="M12 .587l3.668 7.568 8.332 1.163-6.0 5.851 1.416 8.241L12 18.897l-7.416 3.911L6.0 14.169 0 8.318l8.332-1.163z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="yellow"
                >
                  <path d="M12 .587l3.668 7.568 8.332 1.163-6.0 5.851 1.416 8.241L12 18.897l-7.416 3.911L6.0 14.169 0 8.318l8.332-1.163z" />
                </svg>
              </div>
              <p className="text-sm">Payment Verified</p>
              <h3 className="text-sm mt-3 font-semibold">65k+ Spent</h3>
              <p className="text-sm">Payment Verified</p>
              <hr className="mt-3"></hr>

              {/* <!-- box3 --> */}

              <div className="text-lg mt-3 font-semibold">Services</div>
              <div className="flex space-x-2 mt-3">
                <span className="bg-gray-200 px-2 py-1 rounded-xl h-6 text-xs">
                  Web And App Design
                </span>
                <span className="bg-gray-200 px-2 py-1 h-6 rounded-xl text-xs">
                  Figma
                </span>
              </div>
              <div className="flex space-x-2 mt-2">
                <span className="bg-gray-200 px-2 py-1 rounded-xl h-6 text-xs">
                  Backend
                </span>
                <span className="bg-gray-200 px-2 py-1 h-6 rounded-xl text-xs">
                  FedRAMP
                </span>
              </div>
              <div className="flex space-x-2 mt-2">
                <span className="bg-gray-200 px-2 py-1 rounded-xl h-6 text-xs">
                  Frontend
                </span>
                <span className="bg-gray-200 px-2 py-1 h-6 rounded-xl text-xs">
                  Offensive Security
                </span>
              </div>

              <button
                onClick={openModal}
                className="px-[4rem] py-2 mt-[3rem] bg-blue-500 text-white rounded-full"
              >
                Apply Now
              </button>

              {/* Modal */}
              {isModalOpen && (
                <div className="fixed inset-0  z-50 bg-black bg-opacity-50 backdrop-blur-lg bg-opacity-50 flex justify-center items-center">
                  <div className="bg-white rounded-lg p-8 w-[70%]">
                    <h2 className="text-2xl font-semibold mb-6">Apply Now</h2>

                    {/* Form fields inside modal */}
                    <form className="h-[500px] overflow-y-auto">
                      <div className="mb-4">
                        <label
                          htmlFor="name"
                          className="block text-sm font-bold text-gray-700"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                          placeholder="Your First Name"
                          required
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="name"
                          className="block text-sm font-bold text-gray-700"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                          placeholder="Your Last Name"
                          required
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="email"
                          className="block text-sm font-bold text-gray-700"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                          placeholder="Your Email"
                          required
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="dob"
                          className="block text-sm font-bold text-gray-700"
                        >
                          Date of Birth
                        </label>
                        <input
                          type="date"
                          id="dob"
                          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                          required
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="photo"
                        >
                          Upload Resume
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="photo"
                          type="file"
                          accept=".jpg, .jpeg, .png"
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="email"
                          className="block text-sm font-bold text-gray-700"
                        >
                          Coverletter
                        </label>
                        <textarea
                          id="cover-letter"
                          name="cover-letter"
                          rows={10}
                          cols={37}
                          placeholder="Write your cover letter here..."
                        ></textarea>
                        <br />
                        <br />
                      </div>

                      {/* Submit and Close buttons */}
                      <div className="flex justify-end">
                        <button
                          type="button"
                          onClick={closeModal}
                          className="px-[4rem] py-2  bg-gray-300 text-gray-700 rounded-lg mr-2"
                        >
                          Close
                        </button>
                        <button
                          type="submit"
                          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>

            {/* <!-- div3 ended -->
        <!-- container div closed below --> */}
          </div>
        </div>
      </div>
    </>
  );
}
