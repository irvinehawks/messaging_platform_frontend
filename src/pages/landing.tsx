import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { BrowserRouter, Link } from 'react-router-dom';

 

function landing() {
  return (


    <div className="flex flex-wrap">
        <div className="bg-white flex items-center w-full lg:w-1/2">
            <div className="max-w-2xl mb- p-12">
                <h1 className="text-2xl lg:text-3xl lg:leading-tight xl:text-5xl xl:leading-tight leading-snug tracking-tight text-zinc-500 font-bold font-['Noto Sans']">
                    <span className="">
                        Welcome to QS
                        <br />
                        Platform
                    </span>
                </h1>

                <br/>

                <div className="text-lg lg:text-xl xl:text-2xl leading-normal text-gray-500 dark:text-gray-300 rounded-[8px]">
                    <span className="">
                    The best intuitive platform to <b className="text-purple-600 italic">
                    connect </b> 
                    and <b className="text-purple-600 italic">
                    link-up </b>  with a proffesional network and potential employers.
                    </span>
                </div>

                <div className="text-lg lg:text-xl xl:text-2xl leading-normal text-gray-500 dark:text-gray-300 rounded-[8px]">
                    <span className="">
                    
                    </span>
                </div>
            </div>
        </div>

        {/* Hero image */}
        <div className="flex items-center justify-center w-full lg:w-1/2">
            <div className="">
                <img
                    src="/images/landing.png"
                    width="400"
                    height="400"
                    className="mt-10"
                    alt="Hero Illustration"
                />
            </div>
        </div>
    </div>
  )
}

export default landing
