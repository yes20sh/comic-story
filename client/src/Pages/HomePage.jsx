import React from 'react';
import Navbar from '../Components/Navbar';
import HeroSection from '../components/HeroSection';
import WhyChoose from '../components/WhyChoose';
import About from '../components/About';
import Aiming from '../components/Aiming';
import BottomNavbar from '../components/BottomNavbar';


export const HomePage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
   <Navbar/>
 <BottomNavbar/>
      <main className="max-w-[900px] w-full space-y-8">
        {/* Heading and Comic Prompt Input */}

       <HeroSection/>
        {/* Why to Choose */}
        <WhyChoose/>

        {/* About */}
        <About/>

        <Aiming/>
      </main>
    </div>
  );
};
