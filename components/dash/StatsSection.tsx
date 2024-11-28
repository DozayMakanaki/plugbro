"use client";

import React from "react";

const StatsSection: React.FC = () => {
  const stats = [
    { label: "Total Earnings", value: "$5,000" },
    { label: "Active Orders", value: "12" },
    { label: "Pending Reviews", value: "3" },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="p-6 bg-white shadow-md rounded-lg text-center hover:shadow-lg transition"
        >
          <h2 className="text-lg font-semibold text-gray-700">{stat.label}</h2>
          <p className="text-3xl font-bold mt-2 text-purple-700">{stat.value}</p>
        </div>
      ))}
    </section>
  );
};

export default StatsSection;
