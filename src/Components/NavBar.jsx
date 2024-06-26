import React, { useState } from "react";
import NavHeader from "./NavHeader";
import DiscountTab from "./DiscountTab";
import { Link } from "react-router-dom";

const NavBar = () => {
const [open, setOpen] = useState(false)
const BurgarMenuClick = () =>{
  console.log('dummy2');
  setOpen(!open)
}
  return (
    <nav className="w-full">
      <NavHeader/>
      <div className="flex bg-white justify-around items-center p-5">
        {/* Logo */}
        <div className="">
          <h1 className="uppercase font-bold text-3xl">Ecommerce</h1>
        </div>
        
        {/* Menu content */}
        <div className="hidden md:block">
          <ul className="flex space-x-5 font-semibold text-md">
            <Link to="/login-page" className="hover:border-b-4 border-cyan-600 transition-all ease-in-out duration-200"><li>Categories</li></Link>
            <Link to="/login-page" className="hover:border-b-4 border-cyan-600 transition-all ease-in-out duration-200"><li>Sales</li></Link>
            <Link to="/login-page" className="hover:border-b-4 border-cyan-600 transition-all ease-in-out duration-200"><li>Clearance</li></Link>
            <Link to="/login-page" className="hover:border-b-4 border-cyan-600 transition-all ease-in-out duration-200"><li>New Stock</li></Link>
            <Link to="/login-page" className="hover:border-b-4 border-cyan-600 transition-all ease-in-out duration-200"><li>Trending</li></Link>
          </ul>
        </div>

        {/* Menu Icon */}
        <div className="hidden md:block">

        <div className="flex space-x-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
          </svg>
          </div>
        </div>

        {/* murgar menu */}
        <div className="md:hidden">
          <button onClick={BurgarMenuClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        
      </div>
      {open && (
        <div className="md:hidden bg-gray-200 w-full h-auto p-5">
          <ul className="flex flex-col items-center">
          <Link to="/login-page" className="hover:border-b-4 border-cyan-600 transition-all ease-in-out duration-200"><li>Categories</li></Link>
            <Link to="/login-page" className="hover:border-b-4 border-cyan-600 transition-all ease-in-out duration-200"><li>Sales</li></Link>
            <Link to="/login-page" className="hover:border-b-4 border-cyan-600 transition-all ease-in-out duration-200"><li>Clearance</li></Link>
            <Link to="/login-page" className="hover:border-b-4 border-cyan-600 transition-all ease-in-out duration-200"><li>New Stock</li></Link>
            <Link to="/login-page" className="hover:border-b-4 border-cyan-600 transition-all ease-in-out duration-200"><li>Trending</li></Link>
          </ul>
        </div>
      )}
      <DiscountTab/>
    </nav>
  );
};

export default NavBar;
