import logo from "../assets/logo.png";
import telegram01 from "../assets/telegram01.png";
import twitter01 from "../assets/twitter01.png";

import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full py-6 shadow-3xl">
      <div className="container relative flex items-center justify-between gap-28">
        <a href="/">
          <img
            src={logo}
            alt="pepe s-137 logo"
            className="max-w-40 md:max-w-60"
          />
        </a>

        {/* Desktop Navlinks */}
        <div className="hidden items-center gap-16 text-xs lg:flex">
          <div className="[&>*:not(:first-child)]:ml-7">
            <a className="cursor-pointer text-[#bada55]">home</a>
            <a className="cursor-pointer hover:text-[#bada55]">about</a>
            <a className="cursor-pointer hover:text-[#bada55]">tokenomics</a>
            <a className="cursor-pointer hover:text-[#bada55]">roadmap</a>
          </div>
          <a className="cursor-pointer rounded-full border-2 px-7 py-4 hover:text-[#bada55] active:scale-95">
            buy now
          </a>
        </div>

        {/* Mobile Navlinks */}

        <div
          className={`fixed left-0 top-0 h-full w-full transform bg-[#4c9540] transition-transform duration-200 ease-in-out ${isOpen ? "translate-y-0" : "-translate-y-full"} z-10`}
        >
          <div className="mt-20 flex flex-col items-center gap-8">
            <a className="mt-4 cursor-pointer text-[#bada55]">home</a>
            <a className="mt-4 cursor-pointer hover:text-[#bada55]">about</a>
            <a className="mt-4 cursor-pointer hover:text-[#bada55]">
              tokenomics
            </a>
            <a className="mt-4 cursor-pointer hover:text-[#bada55]">roadmap</a>
            <a className="mt-4 cursor-pointer rounded-full border-2 px-7 py-4 text-[#bada55]">
              buy now
            </a>
            <div className="mt-4 flex gap-7">
              <a>
                <img src={telegram01} className="h-16 w-16" />
              </a>
              <a>
                <img src={twitter01} className="h-16 w-16" />
              </a>
            </div>
          </div>
        </div>

        <div
          className={`${isOpen ? "fixed" : "absolute"} right-4 z-20 lg:hidden`}
        >
          {isOpen ? (
            <svg
              onClick={() => setIsOpen(!isOpen)}
              className={`h-8 w-8`}
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M8.3335 8.33333L20.0002 20L31.6668 8.33333"
                stroke="#F8F7FF"
                strokeWidth="4"
                strokeLinecap="round"
              ></path>
              <path
                d="M8.3335 31.6667L20.0002 20L31.6668 31.6667"
                stroke="#F8F7FF"
                strokeWidth="4"
                strokeLinecap="round"
              ></path>
            </svg>
          ) : (
            <svg
              onClick={() => setIsOpen(!isOpen)}
              className={`h-8 w-8`}
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M8.3335 8.33333H20.0002H31.6668"
                stroke="#F8F7FF"
                strokeWidth="4"
                strokeLinecap="round"
              ></path>
              <path
                d="M8.3335 20H31.6668"
                stroke="#F8F7FF"
                strokeWidth="4"
                strokeLinecap="round"
              ></path>
              <path
                d="M8.3335 31.6667H20.0002H31.6668"
                stroke="#F8F7FF"
                strokeWidth="4"
                strokeLinecap="round"
              ></path>
            </svg>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
