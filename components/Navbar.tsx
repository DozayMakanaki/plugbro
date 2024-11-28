import React from "react";

interface NavbarProps {
  onSignInClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSignInClick }) => {
  return (
    <nav className="flex items-center justify-between bg-white p-4 shadow-md sticky top-0 z-50">
      <div className="text-2xl font-bold text-plugbroPurple">Plugbro</div>
      <div className="flex space-x-4">
        <a href="/" className="text-gray-700 hover:text-plugbroPurple">
          Explore Services
        </a>
        <a href="/" className="text-gray-700 hover:text-plugbroPurple">
          Categories
        </a>
        <a href="/" className="text-gray-700 hover:text-plugbroPurple">
          Become a Seller
        </a>
        <button
          onClick={onSignInClick}
          className="bg-plugbroPurple text-white px-4 py-2 rounded"
        >
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
