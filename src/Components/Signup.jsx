import React, { useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

// Initialize EmailJS 
emailjs.init('ky3GEiMeB9veGYtTK'); 

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [open,setOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Generate OTP
      const sendOtp = generateOTP();

      // Send email using EmailJS
      const templateParams = {
        name: name,
        email: email,
        sentOtp: sendOtp
      };

      await emailjs.send('service_6u8p59i', 'template_6vi6b9d', templateParams);

      // If sending email succeeds, proceed with form submission to your backend
      await axios.post("https://65fd48049fc4425c65319005.mockapi.io/Projects/Demo", { name, email, password });
      setOpen(true);
      navigate('/email-verify',{ state: { sendOtp: sendOtp ,email:email } });
    } catch (error) {
        // show an error message to the user
      console.error("Error sending email or submitting form:", error);
    }
  };

  const generateOTP = () => {
    // Generate a random number between 10000000 and 99999999 (inclusive) &
    return Math.floor(10000000 + Math.random() * 90000000).toString();
  };

  return (
    <div>
      <NavBar />
      <div className="w-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-1 text-center text-3xl font-extrabold text-gray-900">
            Create Your Account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow-xl sm:rounded-xl sm:px-10">
            <form className="space-y-6 " onSubmit={handleSubmit}>
              <div className="">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

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
                    placeholder="sample@gmail.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    placeholder="Password must be at least 6 characters long"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="uppercase w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Create Account
                </button>
              </div>

              <div className="font-semibold text-md">
                <p>Have an account? &nbsp; <Link to='/login-page' className="text-blue-400 underline">Login</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
