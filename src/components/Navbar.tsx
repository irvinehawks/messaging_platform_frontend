/* eslint-disable max-len */
import React from 'react';
import { useState } from "react";
// React Fa Icons
import { FiMenu } from "react-icons/fi";
import { CiHome } from "react-icons/ci";
import { FiMessageSquare } from "react-icons/fi";
import { FaUserFriends } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';

const Navbar = () => {
  let name;
  const [open, setOpen] = useState(false);
  const [seo, setSeo] = useState("Test");

  return (
    <div className="">
      <header className="bg-white w-full p-5">
        <div className="flex justify-between gap-4 items-center w-full flex-wrap">
          <a href="/">
            <div className="flex gap-1">
              <img
                  src="/images/logo.jpg"
                  alt='QS logo'
                  width= {40}
                  height={20}
                  className='cursor-pointer rounded-[8px]'
              />

              <p className="text-center italic w-[100px] h-[33px] text-purple-600 text-[28px] font-normal font-['Sansita One']">
                  <b>SpecTro</b>
              </p>
            </div>
          </a>

          <FiMenu className="lg:hidden block h-6 w-6 cursor-pointer" onClick={() => setOpen(!open)} />
          <nav className={`${open ? "block" : "hidden"} lg:flex lg:items-center lg:w-auto w-full`}>
            <ul className="text-md text-gray-600 lg:flex lg:justify-between gap-2 p-4"> 
              {/* AUTH LINKS */}
              <li className="text-center text-cyan-600 text-md py-2 px-4 lg:px-6 lg:py-2 font bold font-['Noto Sans'] font-semibold  border border-purple-600 rounded-xl">
                <a 
                  href="/signin" 
                  className="">
                    Sign In
                </a>
              </li>
              <br/>
              <li className="text-center text-md py-2 px-4 lg:px-6 lg:py-2 bg-purple-600 text-white rounded-xl font-semibold hover:bg-cyan-600">
                <Link to="/signup">
                Get Started
                </Link>              
              </li>                 
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
