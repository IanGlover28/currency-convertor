import React from "react";
import Converter from "./Converter";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-opacity-20 bg-black">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.png" // Replace with your organization logo
            alt="Organization Logo"
            className="h-10 w-10"
          />
          <span className="text-xl font-bold">Glomyers</span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-6">
          {[
            { name: "Home", link: "#home" },
            { name: "About", link: "#about" },
            { name: "Services", link: "#services" },
            { name: "Contact", link: "#contact" },
          ].map((navItem) => (
            <li
              key={navItem.name}
              className="text-lg font-medium hover:text-gray-200 cursor-pointer transition duration-300"
            >
              <a href={navItem.link}>{navItem.name}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none focus:ring focus:ring-yellow-300"
            aria-label="Open Navigation"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center px-6 lg:px-20 mt-10 lg:mt-20">
        {/* Hero Text */}
        <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Welcome to <span className="text-yellow-300">Currency Converter</span>
          </h1>
          <p className="text-base md:text-lg mb-6">
            Convert currencies seamlessly with real-time exchange rates.
            Designed for speed, accuracy, and ease of use.
          </p>
          <a
            href="#converter"
            className="inline-block px-6 py-3 bg-yellow-300 text-black font-medium rounded-lg hover:bg-yellow-400 transition duration-300"
          >
            Get Started
          </a>
        </div>

        {/* Currency Converter Section */}
        <div id="converter" className="lg:w-1/2 w-full">
          <Converter />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
