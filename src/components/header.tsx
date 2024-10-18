"use client";
import React, { useState } from "react";
import { Bell, Search, MapPin, Menu, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-900 text-white p-4">
      <div className="container mx-auto">
        {/* Navigation */}
        <nav className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-6">
            <div className="text-blue-500 text-3xl">∞</div>
            <div className="hidden md:flex space-x-4">
              <a href="#" className="hover:text-blue-400">
                Find Jobs
              </a>
              <a href="#" className="hover:text-blue-400">
                Find Talent
              </a>
              <a href="#" className="hover:text-blue-400">
                Upload Job
              </a>
              <a href="#" className="hover:text-blue-400">
                About us
              </a>
            </div>
          </div>

          <button className="md:hidden z-50" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>

        {/* Off-Canvas Menu */}
        <div
          className={`fixed inset-y-0 left-0 w-64 bg-gray-800 p-8 transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden z-40`}
        >
          <div className="flex flex-col space-y-4 mt-16">
            <a href="#" className="hover:text-blue-400">
              Find Jobs
            </a>
            <a href="#" className="hover:text-blue-400">
              Find Talent
            </a>
            <a href="#" className="hover:text-blue-400">
              Upload Job
            </a>
            <a href="#" className="hover:text-blue-400">
              About us
            </a>
          </div>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={toggleMenu}
          ></div>
        )}

        {/* Header Content */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0">
            Find Your Dream Job Here <span className="text-2xl">✨</span>
          </h1>
          <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-700 rounded-full overflow-hidden">
            {/* Placeholder for image */}
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex flex-col md:flex-row bg-white rounded-full overflow-hidden mt-4">
          <div className="flex-grow flex items-center">
            <Search className="h-5 w-5 text-gray-500 ml-4" />
            <Input
              type="text"
              placeholder="Job title or keyword"
              className="border-none focus:ring-0"
            />
          </div>
          <div className="md:border-l border-gray-300"></div>
          <div className="flex-grow flex items-center">
            <MapPin className="h-5 w-5 text-gray-500 ml-4" />
            <Input
              type="text"
              placeholder="Add country or city"
              className="border-none focus:ring-0"
            />
          </div>
          <Button className="rounded-full px-8 mt-2 md:mt-0">Search</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
