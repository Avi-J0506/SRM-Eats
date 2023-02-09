import React, { useState } from "react";
import './Navbar.module.css'
import { Transition } from "@headlessui/react";
import logo from './assets/Group 1.svg'
export const  Navbar=()=> {
  const [isOpen, setIsOpen] = useState(false);
  return (
      <nav className="bg-[#242424] sticky">
        <div className="max-w-8xl mx-auto py-5 px-5 sm:px-6 md:pl-10">
          <div className="flex items-center justify-between h-10">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="md:block hidden w-25 h-25"
                  src={logo}
                />
                <img
                  className="md:hidden block w-20 h-20"
                  src={logo}
                />
              </div>
              <div className="hidden md:block absolute right-0 mr-10">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="#"
                    className=" text-white px-3 py-2 text-sm font-medium"
                  >
                    Login
                  </a>
                  <a
                    href="#"
                    className="text[#242424] lg:pl-8 py-2 text-sm font-medium"
                  >
                    <button className="bg-[#f4f4f4] px-5 py-3">SignUp</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-[#242424] inline-flex items-center justify-center p-2 text-gray-400 hover:text-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-10 w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-10 w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-in duration-100 transform"
          enterFrom="opacity-0 scale-100"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-100"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 text-center sm:px-3">
                <a
                  href="#"
                  className="text-white  text-white block px-3 py-2 text-base font-medium"
                >
                  Login
                </a>
                <a
                  href="#"
                  className="text-white  hover:text-white block px-3 py-2 text-base font-medium"
                >
                  <button className="bg-[#f4f4f4] text-[#242424] px-5 py-3">SignUp</button>
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    
  );
}

export default Navbar;