"use client";

import React from "react";

const HeroSection: React.FC = () => {
  const username = "John Doe"; // Replace with dynamic data.

  return (
    <section className="bg-white shadow-md rounded-lg p-6 mb-8">
      <h1 className="text-3xl font-bold mb-4">Welcome, {username}!</h1>
      <p className="text-gray-600">
        Manage your gigs, track your orders, and monitor your earnings all in one place.
      </p>
      <div className="flex flex-wrap gap-4 mt-4">
        <button className="px-6 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-600 transition">
          View Gigs
        </button>
        <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">
          Create New Gig
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
