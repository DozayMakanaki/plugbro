"use client";

import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger and close icons

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:flex">
      {/* Hamburger button (visible only on mobile) */}
      <button
        onClick={toggleSidebar}
        className="text-purple-800 md:hidden p-2 focus:outline-none"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-purple-800 text-white p-6 transition-transform transform md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:static w-64 flex-shrink-0 z-50`}
      >
        <h2 className="text-2xl font-bold mb-8">Plugbro</h2>
        <ul className="space-y-4">
          {[
            "Dashboard",
            "My Gigs",
            "Orders",
            "Earnings",
            "Messages",
            "Profile Settings",
          ].map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className="block px-4 py-2 rounded-lg bg-purple-700 hover:bg-purple-600 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* Overlay (visible only on mobile when sidebar is open) */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
