import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./Banner.css";
// import DownloadResumeButton from './DownloadResumeButton';
import AOS from "aos";
import "aos/dist/aos.css";
import DownloadResumeButton from "./DownloadResumeButton/DownloadResumeButton";
import TypingTextAnimation from "./TypingTextAnimation/TypingTextAnimation";
const Banner = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  // data-aos="fade-up"
  // data-aos="zoom-in"
  // data-aos="flip-left"
  return (
    <div>
      <div className="hero min-h-screen bannarImg">
        <div className="w-full space-y-5 ">
       
        <div class=" ">
            <h1 className=" md:text-end text-center md:me-32 font-extrabold text-white">Hi, my name is</h1>
            <h1 className=" md:text-5xl headingText md:text-end text-center me-32 font-black text-[#c06c84] ">S M JAHID TUHIN</h1>
          </div>
        <p className="text-white text-base md:text-end md:me-32 text-center " > I am a tech enthusiast and creative web developer, passionateabout crafting <br /> exceptional user experiences through
              innovative design and development.</p>
              <p className="md:text-end text-center md:me-32"><button className="  bg-[#fd1919] hover:bg-lime-600 btn text-base"> <DownloadResumeButton></DownloadResumeButton> </button></p>
        </div>
        
      </div>
    </div>
  );
};

export default Banner;
