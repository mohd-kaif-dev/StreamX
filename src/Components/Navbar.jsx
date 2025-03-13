import { useState } from "react";
import logo from "../assets/logo.webp";
import { RiCloseFill, RiMenu3Line } from "@remixicon/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="fixed top-4 left-0 md:left-10 right-0 md:right-10 z-50 m-2">
      <div className="text-neutral-500 bg-black/60 backdrop-blur-md max-w-7xl mx-auto flex items-center justify-between px-4 py-2 rounded-xl border border-neutral-800">
        {/* Left: Logo */}
        <img src={logo} alt="logo" width={160} height={28} />
        {/* Center Links - Hidden on Mobile */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#works" className="hover:text-neutral-200">
            How it works
          </a>
          <a href="#pricing" className="hover:text-neutral-200">
            Pricing
          </a>
          <a href="#testimonials" className="hover:text-neutral-200">
            Testimonials
          </a>
        </div>
        {/* Right Links */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="hover:text-neutral-200">
            Login
          </a>
          <a
            href="#"
            className="border border-neutral-700 px-4 py-2 rounded-lg text-white hover:bg-neutral-700 transition"
          >
            Get Demo
          </a>
          <a
            href="#"
            className="bg-blue-600 px-4 py-2 rounded-lg text-white hover:bg-blue-500 transition"
          >
            Start Free Trial
          </a>
        </div>
        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none "
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            onClick={toggleMenu}
          >
            {isOpen ? <RiCloseFill /> : <RiMenu3Line />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {
        <div
          className={`md:hidden  top-15 left-0 right-0 bg-neutral-900/60 backdrop-blur-md rounded-xl border border-neutral-800 mt-2 px-4 py-2 transition-all ease-in duration-300 ${
            isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-4">
            <a href="#products" className="hover:text-neutral-200">
              Products
            </a>
            <a href="#pricing" className="hover:text-neutral-200">
              Pricing
            </a>
            <a href="#resources" className="hover:text-neutral-200">
              Resources
            </a>
            <a href="#" className="hover:text-white">
              Login
            </a>
            <a
              href="#"
              className="border border-neutral-700 px-4 py-2 rounded-lg text-white hover:bg-neutral-700 transition"
            >
              Get Demo
            </a>
            <a
              href="#"
              className="bg-blue-600 px-4 py-2 rounded-lg text-white hover:bg-blue-500 transition"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      }
    </nav>
  );
};

export default Navbar;
