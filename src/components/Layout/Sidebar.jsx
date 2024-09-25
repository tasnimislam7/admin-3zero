import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUsers, FaCog, FaChartBar } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-primary text-white flex flex-col transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="flex items-center justify-between p-4">
        <button onClick={toggleSidebar} className="p-2">
          <HiMenuAlt2 className="w-6 h-6" />
        </button>
        {!isCollapsed && <div className="text-xl font-bold">Admin Portal</div>}
      </div>
      <nav className="flex-1 flex flex-col items-center space-y-4 mt-8">
        <Link
          to="/"
          className="flex items-center justify-center p-2 hover:bg-gray-700 rounded w-full text-center"
        >
          <FaHome className={`w-6 h-6 ${isCollapsed ? "mx-auto" : ""}`} />
          {!isCollapsed && <span className="ml-4">Dashboard</span>}
        </Link>
        <Link
          to="/analytics"
          className="flex items-center justify-center p-2 hover:bg-gray-700 rounded w-full text-center"
        >
          <FaChartBar className={`w-6 h-6 ${isCollapsed ? "mx-auto" : ""}`} />
          {!isCollapsed && <span className="ml-4">Analytics</span>}
        </Link>
        <Link
          to="/users"
          className="flex items-center justify-center p-2 hover:bg-gray-700 rounded w-full text-center"
        >
          <FaUsers className={`w-6 h-6 ${isCollapsed ? "mx-auto" : ""}`} />
          {!isCollapsed && <span className="ml-4">Users</span>}
        </Link>
        <Link
          to="/settings"
          className="flex items-center justify-center p-2 hover:bg-gray-700 rounded w-full text-center"
        >
          <FaCog className={`w-6 h-6 ${isCollapsed ? "mx-auto" : ""}`} />
          {!isCollapsed && <span className="ml-4">Settings</span>}
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
