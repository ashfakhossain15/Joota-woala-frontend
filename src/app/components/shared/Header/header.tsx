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

  return (
    <div className="relative">
      <header
        id="myHeader"
        className="bg-sky-500 py-9 w-full transition duration-300 ease-in-out flex items-center justify-around"
      >
        <h1 className="text-4xl">Joota Woala</h1>
        <div className="sm:hidden flex justify-center items-center">
          {" "}
          <button
            className="p-2"
            onClick={() => setMenu((prevMenu) => !prevMenu)}
            title="menu"
          >
            {" "}
            {menu ? <FaClosedCaptioning /> : <FaBars />}
          </button>
          <div className="absolute -bottom-14 w-full transition-all ">
            {menu ? (
              <div className="z-1 w-[110%] text-white text-left  -translate-x-9 translate-y-5 opacity-100 duration-300 ">
                <nav className=" bg-sky-500 flex flex-col">
                  <Link href="" className=" px-12 py-1 text-[1.05rem]">
                    About Us
                  </Link>
                  <Link href="" className=" px-12 py-1 text-[1.05rem]">
                    Orders
                  </Link>
                  <Link href="" className="px-12 py-1 text-[1.05rem]">
                    Blog
                  </Link>
                </nav>
              </div>
            ) : (
              <div className=" -translate-x-[100%] translate-y-5 opacity-0 duration-300  -z-1   ">
                <section className="">
                  <nav className=" bg-sky-500  flex flex-col">
                    <Link href="" className="px-4 py-1 text-[1.05rem]">
                      About Us
                    </Link>
                    <Link href="" className="px-4 py-1 text-[1.05rem]">
                      Orders
                    </Link>
                    <Link href="" className="px-4 py-1 text-[1.05rem]">
                      Blog
                    </Link>
                  </nav>
                </section>
              </div>
            )}
          </div>
        </div>{" "}
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
      <div className="mt-16"></div>
    </div>
  );
};

export default Header;
