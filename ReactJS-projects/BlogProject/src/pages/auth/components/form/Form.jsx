import React, { useState } from 'react'
import { Link } from "react-router-dom"

function Form({ type,onSubmit }) {
  const [data, setData] = useState({
    email: '',
    username: '',
    password: ''
  });
  const handelChange = (e) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value
    })
 
  }
  const handleSubmit = (e) => {
    //
    e.preventDefault();
    
    onSubmit(data);



  }
  return (
    <div className="font-sans">
      <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100">
        <div className="relative sm:max-w-sm w-full">

          <div className="card bg-blue-400 shadow-lg w-full h-full rounded-3xl absolute transform -rotate-6"></div>
          <div className="card bg-red-400 shadow-lg w-full h-full rounded-3xl absolute transform rotate-6"></div>

          <div className="relative w-full rounded-3xl px-6 py-4 bg-gray-100 shadow-md">
            <label className="block mt-3 text-sm text-gray-700 text-center font-semibold">
              {type}
            </label>

            <form className="mt-10" onSubmit={handleSubmit}>
              {/* user name */}
              {type === "Register" && (<div>
                <input
                  type="text"
                  name='username'
                  id='username'
                  onChange={handelChange}
                  placeholder="User name"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  required />
              </div>)}
              {/* Email */}
              <div className='mt-7'>
                <input
                  name='email'
                  id='email'
                  type="email"
                  onChange={handelChange}
                  placeholder="Email address"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  required />
              </div>

              {/* Password */}
              <div className="mt-7">
                <input
                  type="password"
                  name='password'
                  id='password'
                  onChange={handelChange}
                  placeholder="Password"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  required />
              </div>
              {
                type === "Login" && (
                  //   {/* Remember + Forgot */}
                  <div className="mt-7 flex">
                    <label htmlFor="remember_me" className="inline-flex items-center w-full cursor-pointer">
                      <input
                        id="remember_me"
                        type="checkbox"
                        className="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-200"
                      />
                      <span className="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>

                    <div className="w-full text-right">
                      <a href="#" className="underline text-sm text-gray-600 hover:text-gray-900">
                        Forgot your password?
                      </a>
                    </div>
                  </div>
                )
              }


              {/*  Button */}
              <div className="mt-7">
                <button
                  type="submit"
                  className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner transition duration-500 transform hover:scale-105"
                >
                  {(type === "Login" ? "Login" : "Register")}

                </button>
              </div>

              {/* redirect link*/}
              <div className="mt-7 flex justify-center items-center">
                <span className="mr-2">
                  {type !== "Login" ? "Already have an account?" : "Don't have an account?"}
                </span>
                <Link
                  to={type === "Login" ? "/register" : "/login"}
                  className="text-blue-500 hover:scale-105 transition hover:text-blue-600"
                >
                  {type === "Login" ? "Register" : "Login"}
                </Link>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Form
