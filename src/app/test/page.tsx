"use client";
import Sidebar from "@/components/dash/sidebar";
import { useState } from "react";
import head from "next/head";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ShowJobs } from "@/scripts/script";
import "@/styles/style.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [visibleCards, setVisibleCards] = useState(6); // Initially show 3 cards
  const [showMore, setShowMore] = useState(true); // Control button text

  // Array of jobs data
  const jobs = [
    {
      id: 1,
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAcNmVEdCO0ZpinFKT3zS55EQpNos4EX6Qvw&s",
      title: "Sr. UX Designer",
      company: "Netflix",
      applicants: 14,
      jobTypes: ["Entry Level", "Part-Time", "Remote"],
      description:
        "Netflix is a streaming service that offers a wide variety of award-winning TV...",
      salary: "$195/hr",
      posted: "5 days ago",
    },
    {
      id: 2,
      logo: "https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png",
      title: "Frontend Developer",
      company: "Google",
      applicants: 20,
      jobTypes: ["Mid-Level", "Full-Time", "On-site"],
      description:
        "Netflix is a streaming service that offers a wide variety of award-winning TV...",
      salary: "$150/hr",
      posted: "3 days ago",
    },
    {
      id: 3,
      logo: "data:image/png;base64,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",
      title: "Backend Developer",
      company: "Amazon",
      applicants: 30,
      jobTypes: ["Senior Level", "Remote", "Contract"],
      description:
        "Netflix is a streaming service that offers a wide variety of award-winning TV...",
      salary: "$120/hr",
      posted: "1 day ago",
    },
    {
      id: 4,
      logo: "data:image/png;base64,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",
      title: "Product Manager",
      company: "Facebook",
      applicants: 10,
      jobTypes: ["Senior Level", "Full-Time", "Remote"],
      description:
        "Netflix is a streaming service that offers a wide variety of award-winning TV...",
      salary: "$200/hr",
      posted: "2 days ago",
    },
    {
      id: 5,
      logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAbFBMVEX////zUyWBvAYFpvD/ugh7uQAAou//twD5sKHC3ZrzSRH3n4zzSxX5uKvI4aW214Om2Pj/4KaDyvb/1oSZ0/f/3Jr3m4cAn+//tAD7z8b5rJ3829Tj79DA3JXa6sHyQQDI5/vW7fz/8db/7MhSfqJEAAABbElEQVR4nO3bt05DURRFQaJNzjmZ8P//iHgy1ZKbK4ERmulPcVa/NzYAAAAAAAAAAH7B/cPemIfH6f7peX/M88uaP1/tZnEwZnE83Z/sjjpd8+erHR5tjjn4brI1RhNNNNFEE000mWhSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSdkX1/3xqOUO/WTU392hA/BzXs9GvU337+ejPtb8+WoXt7Mxt2fT/fndfMzd5Zo/X+1itj1mtmwy3xkz10QTTTTRRBNNvmhSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSdkX1+vVqOUO/XrU392hAwAAAAAAAAD/yidS4MfohzIEBAAAAABJRU5ErkJggg==",
      title: "Data Scientist",
      company: "Microsoft",
      applicants: 50,
      jobTypes: ["Entry Level", "Full-Time", "On-site"],
      description:
        "Netflix is a streaming service that offers a wide variety of award-winning TV...",
      salary: "$180/hr",
      posted: "7 days ago",
    },
    {
      id: 6,
      logo: "https://www.shutterstock.com/image-vector/spotify-icon-logo-music-streaming-260nw-2376818759.jpg",
      title: "DevOps Engineer",
      company: "Spotify",
      applicants: 25,
      jobTypes: ["Mid-Level", "Part-Time", "Remote"],
      description:
        "Netflix is a streaming service that offers a wide variety of award-winning TV...",
      salary: "$160/hr",
      posted: "4 days ago",
    },
    {
      id: 7,
      logo: "https://www.shutterstock.com/image-vector/spotify-icon-logo-music-streaming-260nw-2376818759.jpg",
      title: "Blockchain Dev.",
      company: "Cloveode",
      applicants: 25,
      jobTypes: ["Mid-Level", "Part-Time", "Remote"],
      description:
        "Netflix is a streaming service that offers a wide variety of award-winning TV...",
      salary: "$190/hr",
      posted: "4 days ago",
    },
    {
      id: 8,
      logo: "https://www.shutterstock.com/image-vector/spotify-icon-logo-music-streaming-260nw-2376818759.jpg",
      title: "DevOps Engineer",
      company: "Spotify",
      applicants: 25,
      jobTypes: ["Mid-Level", "Part-Time", "Remote"],
      description:
        "Netflix is a streaming service that offers a wide variety of award-winning TV...",
      salary: "$140/hr",
      posted: "4 days ago",
    },
    {
      id: 9,
      logo: "https://www.shutterstock.com/image-vector/spotify-icon-logo-music-streaming-260nw-2376818759.jpg",
      title: "DevOps Engineer",
      company: "Spotify",
      applicants: 25,
      jobTypes: ["Mid-Level", "Part-Time", "Remote"],
      description:
        "Netflix is a streaming service that offers a wide variety of award-winning TV...",
      salary: "$260/hr",
      posted: "4 days ago",
    },
    {
      id: 9,
      logo: "https://www.shutterstock.com/image-vector/spotify-icon-logo-music-streaming-260nw-2376818759.jpg",
      title: "DevOps Engineer",
      company: "Spotify",
      applicants: 25,
      jobTypes: ["Mid-Level", "Part-Time", "Remote"],
      description:
        "Netflix is a streaming service that offers a wide variety of award-winning TV...",
      salary: "$260/hr",
      posted: "4 days ago",
    },
    {
      id: 9,
      logo: "https://www.shutterstock.com/image-vector/spotify-icon-logo-music-streaming-260nw-2376818759.jpg",
      title: "DevOps Engineer",
      company: "Spotify",
      applicants: 25,
      jobTypes: ["Mid-Level", "Part-Time", "Remote"],
      description:
        "Netflix is a streaming service that offers a wide variety of award-winning TV...",
      salary: "$260/hr",
      posted: "4 days ago",
    },
    {
      id: 9,
      logo: "https://www.shutterstock.com/image-vector/spotify-icon-logo-music-streaming-260nw-2376818759.jpg",
      title: "DevOps Engineer",
      company: "Spotify",
      applicants: 25,
      jobTypes: ["Mid-Level", "Part-Time", "Remote"],
      description:
        "Netflix is a streaming service that offers a wide variety of award-winning TV...",
      salary: "$260/hr",
      posted: "4 days ago",
    },
    {
      id: 9,
      logo: "https://www.shutterstock.com/image-vector/spotify-icon-logo-music-streaming-260nw-2376818759.jpg",
      title: "DevOps Engineer",
      company: "Spotify",
      applicants: 25,
      jobTypes: ["Mid-Level", "Part-Time", "Remote"],
      description:
        "Netflix is a streaming service that offers a wide variety of award-winning TV...",
      salary: "$260/hr",
      posted: "4 days ago",
    },
    {
      id: 9,
      logo: "https://www.shutterstock.com/image-vector/spotify-icon-logo-music-streaming-260nw-2376818759.jpg",
      title: "DevOps Engineer",
      company: "Spotify",
      applicants: 25,
      jobTypes: ["Mid-Level", "Part-Time", "Remote"],
      description:
        "Netflix is a streaming service that offers a wide variety of award-winning TV...",
      salary: "$260/hr",
      posted: "4 days ago",
    },
    {
      id: 9,
      logo: "https://www.shutterstock.com/image-vector/spotify-icon-logo-music-streaming-260nw-2376818759.jpg",
      title: "DevOps Engineer",
      company: "Spotify",
      applicants: 25,
      jobTypes: ["Mid-Level", "Part-Time", "Remote"],
      description:
        "Netflix is a streaming service that offers a wide variety of award-winning TV...",
      salary: "$260/hr",
      posted: "4 days ago",
    },

    // Add more jobs if needed
  ];

  // Handle "Load More" and "Show Less" logic
  const handleLoadMore = () => {
    if (visibleCards < jobs.length) {
      setVisibleCards((prev: number) => Math.min(prev + 6, jobs.length)); // Load 3 more cards, but not more than total cards
    } else {
      setShowMore(false); // When all cards are visible, switch to "Show Less"
    }
  };

  const handleShowLess = () => {
    setVisibleCards(6); // Reset to initial 3 visible cards
    setShowMore(true); // Switch back to "Load More"
  };
  return (
    <>
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <div className="container-fluid bg-[#AFDBF3]">
        <div className="container">
          <nav className="bg-black">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="flex-shrink-0">
                  <img
                    className="h-8 w-10"
                    src="https://t4.ftcdn.net/jpg/04/51/06/95/360_F_451069523_KiIeRNYBxANx23WgBk3xY0jRGTAN2Tb3.jpg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div className="flex flex-1 justify-center">
                  <div className="hidden sm:flex space-x-4">
                    <a
                      href="#"
                      className="relative inline-block px-3 py-2 text-sm font-medium text-blue-500"
                      aria-current="page"
                    >
                      Find Jobs
                      <span className="absolute left-3 right-3 top-0 h-0.5 bg-blue-500"></span>
                    </a>
                    <a
                      href="#"
                      className="px-3 py-2 text-sm font-medium text-white hover:text-white"
                    >
                      Find Talent
                    </a>
                    <a
                      href="#"
                      className="px-3 py-2 text-sm font-medium text-white"
                    >
                      Upload Jobs
                    </a>
                    <a
                      href="#"
                      className="px-3 py-2 text-sm font-medium text-white"
                    >
                      About Us
                    </a>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="sr-only">View notifications</span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                      />
                    </svg>
                  </button>
                  <h5 className="text-white pl-5">Kajal Sharma</h5>

                  <div className="relative ml-3">
                    <div>
                      <button
                        type="button"
                        className="relative flex roundSr.UX Designeed-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        id="user-menu-button"
                        aria-expanded="false"
                        aria-haspopup="true"
                      >
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt="User"
                        />
                      </button>
                    </div>
                    {/* <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
      <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-0">Your Profile</a>
      <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-1">Settings</a>
      <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-2">Sign out</a>
    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:hidden" id="mobile-menu">
              <div className="space-y-1 px-2 pb-3 pt-2">
                <a
                  href="#"
                  className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                  aria-current="page"
                >
                  Find Jobs
                </a>
                <a
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Find Talent
                </a>
                <a
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Upload Job
                </a>
                <a
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  About Us
                </a>
              </div>
            </div>

            <div className="search-bar px-5 pb-5">
              <div className="flex items-center border border-gray-300 rounded-[3rem] bg-white shadow-md p-2">
                <svg
                  className="text-red-900"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 26 26"
                >
                  <path d="M 10 0.1875 C 4.578125 0.1875 0.1875 4.578125 0.1875 10 C 0.1875 15.421875 4.578125 19.8125 10 19.8125 C 12.289063 19.8125 14.394531 19.003906 16.0625 17.6875 L 16.9375 18.5625 C 16.570313 19.253906 16.699219 20.136719 17.28125 20.71875 L 21.875 25.34375 C 22.589844 26.058594 23.753906 26.058594 24.46875 25.34375 L 25.34375 24.46875 C 26.058594 23.753906 26.058594 22.589844 25.34375 21.875 L 20.71875 17.28125 C 20.132813 16.695313 19.253906 16.59375 18.5625 16.96875 L 17.6875 16.09375 C 19.011719 14.421875 19.8125 12.300781 19.8125 10 C 19.8125 4.578125 15.421875 0.1875 10 0.1875 Z M 10 2 C 14.417969 2 18 5.582031 18 10 C 18 14.417969 14.417969 18 10 18 C 5.582031 18 2 14.417969 2 10 C 2 5.582031 5.582031 2 10 2 Z M 4.9375 7.46875 C 4.421875 8.304688 4.125 9.289063 4.125 10.34375 C 4.125 13.371094 6.566406 15.8125 9.59375 15.8125 C 10.761719 15.8125 11.859375 15.433594 12.75 14.8125 C 12.511719 14.839844 12.246094 14.84375 12 14.84375 C 8.085938 14.84375 4.9375 11.695313 4.9375 7.78125 C 4.9375 7.675781 4.933594 7.574219 4.9375 7.46875 Z"></path>
                </svg>
                <input
                  type="text"
                  placeholder="Job Title or Keyword"
                  className="flex-grow border-r border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-map"
                  viewBox="0 0 24 24"
                >
                  <polygon points="1 6 8.5 4 16 6 23 4 23 20 15.5 22 8 20 1 22 1 6"></polygon>
                  <line x1="8.5" y1="4" x2="8.5" y2="20"></line>
                  <line x1="16" y1="6" x2="16" y2="22"></line>
                </svg>

                <input
                  type="text"
                  placeholder="Add Country or City"
                  className="flex-grow p-2"
                />

                <button
                  className="bg-blue-500 text-white rounded-3xl px-4 py-2 hover:bg-blue-600 transition duration-200"
                  type="button"
                >
                  Search
                </button>
              </div>
            </div>
          </nav>
          <section className={`flex`}>
            <Sidebar />
            <main>
              {
                <>
                  <div className="flex mt-5">
                    <h1 className="px-5 mt-3 text-2xl font-bold">
                      Recommended Jobs
                    </h1>
                    <button className="font-bold text-red-500 border-1 border-red-500 bg-yellow-500 text-black px-5 py-3 rounded-3xl">
                      (386){" "}
                    </button>
                  </div>

                  <div className="px-5 py-10 sm:pr-6 md:block lg:block xl:block">
                    <div className="grid grid-cols-1 sm: grid-cols-2 md:grid-cols-2 md:pl-[4rem] lg:grid-cols-2 gap-6 xl:grid-cols-3 gap-2">
                      {jobs.slice(0, visibleCards).map((job) => (
                        <div
                          key={job.id}
                          className="sm: w-[58vh] h-[45vh] bg-white shadow-lg rounded-lg p-5 xl:w-[45vh] xl:h-[35vh] md:block lg:block"
                          // className="bg-white shadow-lg rounded-lg p-5 w-[45vh] h-[35vh] sm: w-[58vh] h-[50vh]"
                        >
                          <div className="flex justify-between items-start mb-4">
                            {/* Left Side (Logo and Job Info) */}
                            <div className="flex items-start space-x-2">
                              <img
                                src={job.logo}
                                alt={`${job.company} Logo`}
                                className="w-10 h-10 rounded-full"
                              />
                              <div>
                                <h2 className="text-lg font-semibold">
                                  {job.title}
                                </h2>
                                <p className="text-gray-500 text-sm">
                                  {job.company} • {job.applicants} Applicants
                                </p>
                              </div>
                            </div>
                            {/* Right Side (Heart Icon) */}
                            <div>
                              <svg
                                className="mt-2 w-6 h-6 text-gray-400 hover:text-red-400 cursor-pointer"
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

                          {/* Job Types with specific colors */}
                          <div className="flex space-x-2 mb-4">
                            {job.jobTypes.map((type, index) => {
                              // Define classes based on the tag position (index)
                              let bgColor = "";
                              let textColor = "";
                              if (index === 0) {
                                bgColor = "bg-purple-100";
                                textColor = "text-purple-700";
                              } else if (index === 1) {
                                bgColor = "bg-green-100";
                                textColor = "text-green-700";
                              } else if (index === 2) {
                                bgColor = "bg-orange-100";
                                textColor = "text-orange-700";
                              }

                              return (
                                <span
                                  key={index}
                                  className={`${bgColor} ${textColor} text-xs font-semibold py-1 px-2 rounded-lg`}
                                >
                                  {type}
                                </span>
                              );
                            })}
                          </div>

                          {/* Description of job */}
                          <p className="text-gray-600 mb-4 text-sm leading-tight">
                            {job.description}
                          </p>

                          <hr />

                          {/* Footer Section (Salary + Date) */}
                          <div className="flex justify-between items-center mt-2">
                            <div className="text-xl font-bold">
                              {job.salary}
                            </div>
                            <div className="text-sm text-gray-400 flex items-center space-x-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-clock w-4 h-4"
                              >
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                              </svg>
                              <span>Posted {job.posted}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Load More / Show Less Button */}
                    <div className="mt-6 flex justify-center">
                      {visibleCards < jobs.length ? (
                        <button
                          onClick={handleLoadMore}
                          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg"
                        >
                          Load More
                        </button>
                      ) : (
                        <button
                          onClick={handleShowLess}
                          className="bg-gray-500 text-white font-semibold py-2 px-4 rounded-lg"
                        >
                          Show Less
                        </button>
                      )}
                    </div>
                  </div>
                </>
              }
            </main>
          </section>
        </div>
      </div>
    </>
  );
}
