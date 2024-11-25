"use client";
import React, { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  BookIcon,
  LogOutIcon,
  Menu,
  MicIcon,
  MusicIcon,
  PenIcon,
  Settings2Icon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";

import "@/styles/style.css";

export default function Sidebar() {
  // Use React state to manage the slider value
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Convert the value to a number and update the state
    setSliderValue(Number(event.target.value));
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="lg:hidden fixed top-4 left-4 z-20 p-2 rounded-md bg-gray-200 dark:bg-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="w-6 h-6" />
      </button>

      <aside
        className={`
        fixed inset-y-0 left-0 z-10 w-64 p-4 border-r transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:static lg:block
        bg-[#36454F] text-white dark:bg-[#111a2d] h-[700px]
      `}
      >
        <div className="flex">
          <div>
            <h2 className="text-white px-4">Sort by:</h2>
            <button className=" flex bg-yellow-500 text-white rounded-full mt-1  px-3 py-2">
              Last Updated
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M7 10h10a1 1 0 010 2H7a1 1 0 010-2zm-4 5h14a1 1 0 010 2H3a1 1 0 010-2zm2-10h14a1 1 0 010 2H5a1 1 0 010-2z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex">
            <h2 className="text-md font-bold mb-2 px-4 mt-5">Job Type</h2>
            <p className="text-sm font-bold mb-2 pl-[4rem] mt-5 text-red-700">
              Clear all
            </p>
          </div>

          <ul className="px-4">
            <li className="text-sm py-1">
              <input type="checkbox" className="mr-2" /> Full Time
            </li>
            <li className="text-sm py-1">
              <input type="checkbox" className="mr-2" /> Part Time
            </li>
            <li className="text-sm py-1">
              <input type="checkbox" className="mr-2" /> Internship
            </li>
            <li className="text-sm py-1">
              <input type="checkbox" className="mr-2" /> Project Work
            </li>
            <li className="text-sm py-1">
              <input type="checkbox" className="mr-2" /> Volunteering
            </li>
          </ul>
        </div>
        <h2 className="mt-5 text-md font-bold mb-2 px-5">Salary range</h2>
        <div className="slidecontainer">
          <input
            type="range"
            min="1"
            max="100000"
            value={sliderValue} // Controlled value
            className="slider"
            id="myRange"
            onChange={handleSliderChange} // Update value on input
          />
          <p className="px-5">
            $1-: $ <span id="demo">{sliderValue}</span>{" "}
            {/* Render value here */}
          </p>
        </div>

        <div className="mb-4 mt-5">
          <h2 className="text-md font-bold mb-2 px-5">Experience Level</h2>
          <ul className="px-5">
            <li className="text-sm py-1">
              <input type="checkbox" className="mr-2" /> Entry Level
            </li>
            <li className="text-sm py-1">
              <input type="checkbox" className="mr-2" /> Intermediate
            </li>
            <li className="text-sm py-1">
              <input type="checkbox" className="mr-2" /> Expert
            </li>
          </ul>
        </div>
        <div className="mb-4 mt-5">
          <h2 className="text-md font-bold mb-2 px-5">Job Categories</h2>
        </div>
        <ul className="px-5">
          <li className="text-sm py-1">
            <input type="checkbox" className="mr-2" /> Full Time
          </li>
          <li className="text-sm py-1">
            <input type="checkbox" className="mr-2" /> Part Time
          </li>
          <li className="text-sm py-1">
            <input type="checkbox" className="mr-2" /> Internship
          </li>
        </ul>
      </aside>
    </>
  );
}
