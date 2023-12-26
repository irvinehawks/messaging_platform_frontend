/* eslint-disable max-len */
import React from 'react';
import { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
// React Fa Icons
import { CiHome } from "react-icons/ci";
import { FiMessageSquare } from "react-icons/fi";
import { FaUserFriends } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const Dashboard = () => {
  let name;
  const [open, setOpen] = useState(false);
  const [seo, setSeo] = useState("Test");

  return (
    <BrowserRouter>
        <nav className="w-[100%]">
            <ul className="flex p-5 bg-blue-500 justify-between"> 
                <li className="text-dark hover:text-cyan-600 font-semibold">
                    <Link to="/">
                        <CiHome className="" />
                    </Link>
                </li>

                <li className="text-dark hover:text-cyan-600 font-semibold">
                    <Link to="/#messages">
                        <FiMessageSquare className="" />
                    </Link>
                </li>

                <li className=" text-dark hover:text-cyan-600 font-semibold">
                    <Link to="/#friend-requests">
                        <FaUserFriends className="" />
                    </Link>
                </li>

                <li className=" text-dark hover:text-cyan-600 font-semibold">
                    <Link to="/#profile">
                        <CgProfile className="" />
                    </Link>
                </li>                
            </ul>
        </nav>
    </BrowserRouter>
    
  );
};

export default Dashboard;