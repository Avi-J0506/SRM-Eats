import React, { useState } from "react";
import './Navbar.module.css'
import { Transition } from "@headlessui/react";
import logo from './assets/Group 1.svg'
import {Turn as Hamburger} from 'hamburger-react'

export const  Navbar=()=> {
  const [isOpen, setOpen] = useState(false);
  
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
                    <button className="bg-[#FAF3E5] px-5 py-3">SignUp</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="md:hidden">
              <Hamburger toggled={isOpen} toggle={setOpen} size={25} color="#fff" duration={0.5} rounded />
            </div>
          </div>
        </div>

        <Transition show={isOpen}    
        enter="transition-opacity ease-linear duration-100"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        >
          {(ref) => (
            <div className="md:hidden bg-[#242424]" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 text-center sm:px-3">
                <a
                  href="#"
                  className="text-white  text-white block px-3 py-2 font-medium"
                >
                  Login
                </a>
                <a
                  href="#"
                  className="text-white  hover:text-white block px-3 py-2 font-medium"
                >
                <button className="bg-[#FAF3E5] text-[#242424] px-5 py-3">SignUp</button>
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    
  );
}

export default Navbar;