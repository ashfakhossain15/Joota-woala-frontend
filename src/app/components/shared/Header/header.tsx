"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaBars, FaClosedCaptioning, FaUser, FaXRay } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";

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
            className="p-2 z-10 text-2xl transition-all"
            onClick={() => setMenu((prevMenu) => !prevMenu)}
            title="menu"
          >
            {" "}
            {menu ? (
              <HiOutlineX className="before:rotate-0 rotate-0 after:rotate-45 active:rotate-45 duration-300" />
            ) : (
              <FaBars className="before:rotate-0 rotate-0 after:rotate-45 active:rotate-45  duration-300 " />
            )}
          </button>
          <div className="absolute left-0 z-[8] top-full transition-all w-full overflow-hidden">
            {menu ? (
              <div className="z-1 text-white text-left opacity-100 duration-300  ">
                <nav className=" bg-sky-500 flex flex-col pb-4  w-full">
                  <Link
                    href=""
                    className=" px-12 py-2 text-[1.05rem] border-b-2 w-[90%] "
                  >
                    About Us
                  </Link>
                  <Link
                    href=""
                    className=" px-12 py-2 text-[1.05rem] border-b-2 w-[90%]"
                  >
                    Orders
                  </Link>
                  <Link
                    href=""
                    className="px-12 py-2 text-[1.05rem] border-b-2 w-[90%]"
                  >
                    Blog
                  </Link>
                  <Link className=" px-12 py-2 text-[1.05rem] " href="">
                    Login/Register
                  </Link>
                </nav>
              </div>
            ) : (
              <div className=" -translate-x-[100%]  opacity-0 duration-400 -z-10">
                <section className="">
                  <nav className=" bg-sky-500  flex flex-col">
                    <Link
                      href=""
                      className="px-4 py-2 text-[1.05rem] border-b-2 w-[90%]"
                    >
                      About Us
                    </Link>
                    <Link
                      href=""
                      className="px-4 py-2 text-[1.05rem] border-b-2 w-[90%]"
                    >
                      Orders
                    </Link>
                    <Link
                      href=""
                      className="px-4 py-2 text-[1.05rem] border-b-2 w-[90%]"
                    >
                      Blog
                    </Link>
                    <Link href="">Login/Register</Link>
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
        <div className=" justify-center items-center space-x-5 hidden  sm:flex">
          {" "}
          <Link className="" href="">
            Login/Register
          </Link>{" "}
          <FaUser />
        </div>
      </header>
    </div>
  );
};

export default Header;
