"use client";
import React, { useEffect } from "react";
import "@/scripts/script.js";
import "@/styles/style.css";
import { initializeDoubleRangeSlider } from "@/scripts/script"; // Import JS function

export default function Slider() {
  useEffect(() => {
    // Initialize the slider after the component mounts
    initializeDoubleRangeSlider();
  }, []); // Empty dependency array ensures it runs once, after the component mounts

  return (
    <>
      <div className="double_range_slider_box">
        <div className="double_range_slider">
          <span className="range_track" id="range_track"></span>

          <input
            type="range"
            className="min"
            min="1"
            max="100"
            defaultValue="0"
            step="0"
          />
          <input
            type="range"
            className="max"
            min="0"
            max="100"
            defaultValue="20"
            step="0"
          />

          <div className="minvalue"></div>
          <div className="maxvalue"></div>
        </div>
      </div>
    </>
  );
}
