import React from "react";
import Converter from "./Converter";
import logo from "../images/logo.png"

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-opacity-20 max-w-[1100px] mx-auto w-full bg-black rounded-lg"
      >
        {/* Logo */}
        <div className="flex items-center  gap-2">
          <img
            src={logo} // Replace with your organization logo
            alt="Organization Logo"
            className="h-10 w-10"
          />
          <span className="text-xl font-bold">Glomyers</span>
        </div>

        {/* Navigation Links */}
        {/* <button className="hidden md:flex gap-6">
          {[
            { name: "Home", link: "#home" },
            { name: "About", link: "#about" },
            { name: "Services", link: "#services" },
            { name: "Contact", link: "#contact" },
          ].map((navItem) => (
            <a
              key={navItem.name}
              className="text-lg font-medium bg-yellow-500 hover:bg-yellow-600 text-gray-900 hover:text-gray-800 cursor-pointer transition duration-300 rounded-lg px-4 py-2"

            >
              <a href={navItem.link}>{navItem.name}</a>
            </a>
          ))}
        </button> */}

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
            Welcome to <span className="text-yellow-300">Glomyers Forex Bereau</span>
          </h1>
          <h2><span className="text-yellow-300">
          Your Trusted Partner in Currency Exchange</span>
          </h2>
          <p className="text-base md:text-lg mb-6">
          At Glomyers, we provide fast, secure, and reliable currency exchange services at the best rates. Whether you're traveling, trading, or sending money abroad, we ensure seamless transactions with exceptional customer service.
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
