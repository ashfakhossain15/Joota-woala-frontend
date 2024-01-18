"use client";

import React, { useEffect } from "react";

type Props = {};

const Header: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("myHeader");
      if (header) {
        if (window.scrollY > 5) {
          header.classList.add("bg-dark-blue");
        } else {
          header.classList.remove("bg-dark-blue");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header
        id="myHeader"
        className="bg-sky-500 fixed top-0 w-full transition duration-300 ease-in-out flex items-center justify-around"
      >
        <h1 className="text-2xl">Joota Woala</h1>
        <nav className="flex justify-center">
          <section className="px-4">Section 1</section>
          <section className="px-4">Section 2</section>
          <section className="px-4">Section 3</section>
        </nav>
        <div></div>
      </header>
      <div className="mt-16">{/* Your page content goes here */}</div>
    </div>
  );
};

export default Header;
