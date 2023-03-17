import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-[100%] h-20 flex justify-center items-center tablet:justify-end">
      <ul className="font-jacques flex flex-row text-xl tablet:hidden">
        <li
          className={`opacity-70 hover:opacity-100 transition-all duration-200 mr-[4vw]`}
        >
          <a href="/">Home</a>
        </li>
        <li
          className={`opacity-70 hover:opacity-100 transition-all duration-200 mr-[4vw]`}
        >
          <a href="/about">About</a>
        </li>
        <li
          className={`opacity-70 hover:opacity-100 transition-all duration-200 mr-[4vw]`}
        >
          <a href="/projects">Projects</a>
        </li>
        <li
          className={`opacity-70 hover:opacity-100 transition-all duration-200`}
        >
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <div className="hidden tablet:inline-block">
        <img
          src={`${toggle ? "src/images/close.png" : "src/images/menu.png"}`}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer mr-[6vw]"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>
      <ul
        className={`md:hidden ${
          toggle ? `flex` : `hidden`
        } flex-col items-center absolute w-screen h-[50vh] z-20 bg-primary text-secondary mt-[68vh] font-lato font-bold border-solid border-primary border-b-2 text-lg`}
      >
        <li className="mb-14">
          <a
            href="/lessons"
            className="hover:opacity-70 transition-all duration-400"
          >
            Home
          </a>
        </li>
        <li className="mb-14">
          <a
            href="/pricing"
            className="hover:opacity-70 transition-all duration-400"
          >
            About
          </a>
        </li>
        <li className="mb-14">
          <a
            href="/support"
            className="hover:opacity-70 transition-all duration-400"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="/support"
            className="hover:opacity-70 transition-all duration-400"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
