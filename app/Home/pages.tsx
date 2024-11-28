import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Categories from "@/components/Cartegories";
import FeaturedServices from "@/components/FeaturedServices";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";

const Home: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSignInClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="bg-gray-50">
      <Navbar onSignInClick={handleSignInClick} />
      <HeroSection />
      <Categories />
      <FeaturedServices />
      <Footer />
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={handleCloseModal} />}
    </div>
  );
};

export default Home;
