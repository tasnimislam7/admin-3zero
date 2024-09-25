import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <div className="flex-grow p-6 bg-gray-100 overflow-y-auto">
          <div className="container mx-auto max-w-screen-xl">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
