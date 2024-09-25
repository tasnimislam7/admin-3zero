import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-lightSecondary text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          {/* <Link to="/">Admin Portal</Link> */}
        </div>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:bg-gray-700 p-2 rounded">
            Dashboard
          </Link>
          <Link to="/users" className="hover:bg-gray-700 p-2 rounded">
            Users
          </Link>
          <Link to="/settings" className="hover:bg-gray-700 p-2 rounded">
            Settings
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
