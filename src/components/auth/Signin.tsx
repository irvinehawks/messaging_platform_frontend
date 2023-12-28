import React, { useContext } from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";

function Signin() {
        const {register, handleSubmit} = useForm();
        const onSubmit = handleSubmit((data) => {
        console.log(data)
    })

  return (
    <div className="px-[8vw] py-[5vw] bg-purple-400 backdrop-blur-lg overflow-hidden min-h-screen font-montserrat">
        
        <div className="sm:flex shadow-xl">
          {/* RIGHT SIDE BEGIN ============== */}
          <div className="w-full rounded-l-md bg-[#cdcdcd] p-8 ltr shadow-right">
            <img
              src="/images/signin.jpeg"
              alt="signup"
              width="50%"
              height="50%"
            />
          </div>

          {/* LEFT SIDE BEGIN ============== */}
          <div className="rtl w-full  p-8 bg-[#f5f5f5] rounded-r-md overflow-hidden">
            <form action="" onSubmit={onSubmit}>
              <div className="p-5 text-center">
                <h2 className="text-3xl font-extrabold">
                    Sign in
                </h2>
              </div>

              <div className="flex space-x-4 p-2 justify-center items-center text-[#00887A]  w-[100%] bg-[#fff] border-black border-[1px] rounded-full top-[10%] hover:bg-purple-400 hover:text-black smooth">
                <a
                  className="flex flex-row items-center justify-center w-full py-1 space-x-2 "
                  href={``}
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNhVyHu5OACnFHxC_p2GvxaohaKoV5jgAyX24XbxpVIH17txURg5aKC60IHQ&s=10"
                    className="h-6 w-6 rounded-8px"
                    alt="google-icon"
                  />
                  <p className="">Login with Google</p>
                </a>
              </div>

              <p className="text-gray-500 my-3 text-center">
                or use your account
              </p>
              <div className="flex flex-col items-center justify-center">
                <div className="bg-white p-2 flex items-center mb-4 rounded-[8px]">
                  <input {...register("email")}
                    type="email" name="email" placeholder="Email" required
                    className="bg-white outline-none text-m flex-1 m-1 px-2"
                  />
                </div>
                <div className="bg-white p-2 flex items-center mb-4">
                  <input {...register("password")}
                    type="password" name="password" placeholder="Password" required
                    className="bg-white outline-none text-m flex-1 m-1 px-2"
                  />
                </div>
                <div>
                  <a href="/" className='text-gray-500 text-[17px] hover:text-gray-600'>
                      Forgot your password?
                  </a>
                </div>

                <div className="flex space-x-4 mt-5 p-2 justify-center items-center text-[#00887A]  w-[50%] bg-[#fff] border-black border-[1px] rounded-full relative top-[10%] hover:bg-purple-400 hover:text-black smooth">
                  <a 
                    href="/"
                    className="flex flex-row items-center justify-center w-full py-1 space-x-2"
                    >
                      Log In
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
  )
}

export default Signin
