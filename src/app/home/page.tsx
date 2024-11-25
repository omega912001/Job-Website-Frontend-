import image from "next/image";
import head from "next/head";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Menu,
  PenIcon,
  MicIcon,
  MusicIcon,
  BookIcon,
  UserIcon,
  Settings2Icon,
  LogOutIcon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Sidebar from "@/components/dash/sidebar";

export default function Home() {
  function setIsOpen(arg0: boolean): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <div className="container-fluid bg-[#AFDBF3]">
        <div className="container mx-auto p-4">
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
                  <h5 className="text-white pl-5">Kajal sharma</h5>

                  <div className="relative ml-3">
                    <div>
                      <button
                        type="button"
                        className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
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
          <Sidebar />
        </div>
      </div>
    </>
  );
}
