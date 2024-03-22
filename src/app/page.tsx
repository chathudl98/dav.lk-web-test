import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection"
import Services from "./components/Services"
import Booking from "./components/Booking"
import Locations from "./components/Locations"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#4a319d]  ">
      <Navbar/>
      <div className="container mt-24 mx-auto py-4 px-12">
      <HeroSection/>
      <AboutSection/>
      <Services/>
      <Booking/>
      <Locations/>
      
      </div>
    </main>
  );
}
