import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import { useState, useEffect } from "react";

const TypewriterText = ({ text, speed = 100 }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!isDeleting && currentIndex < text.length) {
      // Typing phase
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (!isDeleting && currentIndex === text.length) {
      // Pause at the end before deleting
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000); // Wait 2 seconds before starting to delete

      return () => clearTimeout(timeout);
    } else if (isDeleting && displayText.length > 0) {
      // Deleting phase
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev.slice(0, -1));
      }, speed / 2); // Delete faster than typing

      return () => clearTimeout(timeout);
    } else if (isDeleting && displayText.length === 0) {
      // Reset for next cycle
      setIsDeleting(false);
      setCurrentIndex(0);
    }
  }, [currentIndex, text, speed, isDeleting, displayText]);

  return (
    <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        <div>Praxox Technologies</div>
        <TypewriterText text="Your Vision, Our Tech." speed={150} />
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        We are a leading technology company specializing in custom software development, 
        digital transformation, and innovative solutions. Transform your business with 
        cutting-edge technology tailored to your unique needs.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Get Started
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          View Projects
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
