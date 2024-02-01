"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars, FaClosedCaptioning, FaUser } from "react-icons/fa";

type Props = {};

const Header: React.FC = () => {
  const [menu, setMenu] = useState(false);
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
  console.log(menu);

  return (
    <div>
      <header
        id="myHeader"
        className="bg-sky-500 fixed top-0 py-9 w-full transition duration-300 ease-in-out flex items-center justify-around"
      >
        <h1 className="text-4xl">Joota Woala</h1>
        <div className="sm:hidden flex justify-center items-center">
          {" "}
          <button onClick={() => setMenu((prevMenu) => !prevMenu)} title="menu">
            {" "}
            {menu ? (
              <div>
                <FaClosedCaptioning />
                <nav className="hidden justify-center sm:flex ">
                  <Link href="" className="px-4 text-[1.05rem]">
                    About Us
                  </Link>
                  <Link href="" className="px-4 text-[1.05rem]">
                    Orders
                  </Link>
                  <Link href="" className="px-4 text-[1.05rem]">
                    Blog
                  </Link>
                </nav>{" "}
              </div>
            ) : (
              <FaBars />
            )}
          </button>
        </div>
        <nav className="hidden justify-center sm:flex ">
          <Link href="" className="px-4 text-[1.05rem]">
            About Us
          </Link>
          <Link href="" className="px-4 text-[1.05rem]">
            Orders
          </Link>
          <Link href="" className="px-4 text-[1.05rem]">
            Blog
          </Link>
        </nav>
        <div className="flex justify-center items-center space-x-5">
          {" "}
          <Link href="">Login/Register</Link> <FaUser />
        </div>
      </header>
      <div className="mt-16">{/* Your page content goes here */}</div>
    </div>
  );
};

export default Header;
