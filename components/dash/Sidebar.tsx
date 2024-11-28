"use client";

import React from "react";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-full md:w-64 bg-purple-800 text-white p-6 flex-shrink-0">
      <h2 className="text-2xl font-bold mb-8">Plugbro</h2>
      <ul className="space-y-4">
        {["Dashboard", "My Gigs", "Orders", "Earnings", "Messages", "Profile Settings"].map(
          (item, index) => (
            <li key={index}>
              <a
                href="#"
                className="block px-4 py-2 rounded-lg bg-purple-700 hover:bg-purple-600 transition"
              >
                {item}
              </a>
            </li>
          )
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
