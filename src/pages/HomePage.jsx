// src/pages/HomePage.jsx
import React from 'react';
import Header from '../components/Header';
import WelcomeSection from '../components/WelcomeSection'
import Navbar from '../components/Navbar';
import CategoryCarousel from '../components/CategoryCarousel';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <WelcomeSection />
      <Navbar />
      <CategoryCarousel />
      <Footer />
    </>
  );
};

export default HomePage;
