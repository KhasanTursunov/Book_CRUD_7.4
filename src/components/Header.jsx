import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#FAECEC] text-blue-500 py-6">
      <nav className="container mx-auto flex justify-between items-center px-12">
        <div>
          <h1 className="text-3xl font-bold  text-red-500">
            <span className="text-3xl font-bold text-blue-500">E</span>-book
          </h1>
        </div>
        <ul className="flex gap-10">
          <li>
            <NavLink
              to="/"
              className="text-lg hover:text-red-400 hover:underline"
              activeClassName="text-teal-400 font-semibold"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/create"
              className="text-lg hover:text-red-400 hover:underline"
              activeClassName="text-teal-400 font-semibold"
            >
              Create
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="text-lg hover:text-red-400 hover:underline"
              activeClassName="text-teal-400 font-semibold"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="text-lg hover:text-red-400 hover:underline"
              activeClassName="text-teal-400 font-semibold"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div>
          <button className="py-3 px-6 bg-red-500 text-white rounded-xl  hover:bg-red-600 cursor-pointer transition-transform duration-300 ease-in-out">
            Login
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
