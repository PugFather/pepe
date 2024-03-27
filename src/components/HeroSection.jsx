import pepe from "../assets/pepethefrog.png";
import twitter from "../assets/twitter.png";
import telegram from "../assets/telegram.png";
import dextools from "../assets/dextools.png";
import solscan from "../assets/solscan.png";
import raydium from "../assets/raydium.png";

import React from "react";

const HeroSection = () => {
  return (
    <section id="home" className="mb-20 w-full">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-between px-4 md:flex-row lg:px-0">
        <div className=" flex w-full  flex-col items-center pt-20 text-center md:items-start md:pt-28 md:text-left">
          <div className="animate__animated animate__fadeInLeft animate__slow">
            <h1 className="text-shadow whitespace-nowrap font-genty text-5xl md:text-7xl	">
              $PEPE S-137
            </h1>

            <p className="mt-6 font-comfortaa text-[20px] font-normal md:text-[1.75rem]">
              the most memeable memecoin in existence, on Solana Multiverse. The
              dogs have had their day, it’s time for Pepe to take reign.
            </p>
          </div>

          <div className="animate__animated animate__zoomIn animate__slow mt-6 flex gap-3 md:gap-5">
            <a>
              <img
                src={twitter}
                className="h-12 w-12 transition delay-150 ease-in-out hover:scale-110 md:h-20 md:w-20"
              />
            </a>
            <a>
              <img
                src={telegram}
                className="h-12 w-12 transition delay-100 ease-in-out hover:scale-110 md:h-20 md:w-20"
              />
            </a>
            <a>
              <img
                src={dextools}
                className="h-12 w-12 transition delay-150 ease-in-out hover:scale-110 md:h-20 md:w-20"
              />
            </a>
            <a>
              <img
                src={solscan}
                className="h-12 w-12 transition delay-150 ease-in-out hover:scale-110 md:h-20 md:w-20"
              />
            </a>
            <a>
              <img
                src={raydium}
                className="h-12 w-12 transition delay-150 ease-in-out hover:scale-110 md:h-20 md:w-20"
              />
            </a>
          </div>
        </div>
        <div className="animate__animated animate__fadeInRight animate__slow max-w-lg md:w-1/2 lg:mt-20">
          <img src={pepe} alt="pepe" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
