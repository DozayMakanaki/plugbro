import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="bg-plugbroPurple text-white text-center py-16">
      <h1 className="text-4xl font-bold">Find the Perfect Freelance Services for Your Business</h1>
      <p className="mt-4 text-lg">Plug into a network of professionals ready to bring your ideas to life.</p>
      <div className="mt-8 flex justify-center">
        <input
          type="text"
          className="p-3 rounded-l-lg w-1/2"
          placeholder="Try 'Logo Design'"
        />
        <button className="bg-white text-plugbroPurple p-3 rounded-r-lg font-bold">
          Search
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
