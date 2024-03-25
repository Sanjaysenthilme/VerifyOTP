import React, { useState } from "react";
import NavBar from "./NavBar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [loginMail, setLoginMail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    if (!loginMail || !loginPass) {
      setError("Please enter both email and password.");
      return;
    }

    if (!isValidEmail(loginMail)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (loginPass.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    try {
      const response = await axios.get(
        "https://65fd48049fc4425c65319005.mockapi.io/Projects/Demo"
      );
      const data = response.data;
      
      // Check if the entered email and password match any user details retrieved from the API
      const isValidUser = data.some(user => user.email === loginMail && user.password === loginPass);
      
      if (isValidUser) {
        // login logic, such as redirecting to another page
        navigate('/dashboard');

      } else {
        setError("Invalid email or password.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("An error occurred while logging in. Please try again later.");
    }
  };

//   const successMsg = () => {
//     toast.success('Login successfully',{position: "top-right"},{autoClose:2000})
// }

  // Function to validate email format
  const isValidEmail = (email) => {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <NavBar />
      <div className="">
        <div className="w-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-1 text-center text-3xl font-extrabold text-gray-900">
              Login
            </h2>
            <h3 className="mt-8 text-2xl">Welcome back to ECOMMERCE</h3>
            <p className="mt-3 text-md font-light">
              The next gen business marketplace
            </p>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow-xl sm:rounded-xl sm:px-10">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="Enter"
                      required
                      value={loginMail}
                      onChange={(e) => setLoginMail(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      placeholder="Enter"
                      required
                      value={loginPass}
                      onChange={(e) => setLoginPass(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                {error && <p className="text-red-500">{error}</p>}

                <div>
                  <button
                    type="submit"
                    className="uppercase w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Login
                  </button>
                </div>

                <div className="font-semibold text-md">
                  <p>
                    Don't have an account? &nbsp;
                    <Link to="/" className="text-blue-400 underline">
                      Sign up
                    </Link>
                  </p>
                </div>
               
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
