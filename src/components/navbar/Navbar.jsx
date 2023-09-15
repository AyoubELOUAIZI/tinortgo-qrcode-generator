"use client";
import React, { useState } from "react";
import Link from "next/link";

export const Navbar = () => {
  const [isMenuHidden, setMenuHidden] = useState(true);

  const toggleMenu = () => {
    setMenuHidden(!isMenuHidden);
  };

  return (
    <header className="w-full  fixed z-40 ">
      <div className="w-full bg-green-600 p-0 text-center text-neutral-700 dark:bg-green-600 dark:text-neutral-200">
        We bear witness that there is no god but Allah and we bear witness that
        Muhammad is the Messenger of God
      </div>
      <nav
        className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-2
          md:py-0
          px-6
          text-lg text-gray-700
          bg-green-400
         
         
        "
      >
        <div>
          <Link href="/">TINORTGO QRCode</Link>
        </div>

        <svg
          onClick={toggleMenu}
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          className="h-6 w-6 cursor-pointer md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <div
          className={`w-full md:flex md:items-center md:w-auto ${
            isMenuHidden ? "hidden" : ""
          }`}
          id="menu"
        >
          <ul
            className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
          >
            <li>
              <Link className="md:p-4 py-2 block hover:text-white" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className="md:p-4 py-2 block hover:text-white"
                href="/qr-code"
              >
                QR Code
              </Link>
            </li>
            <li>
              <Link
                className="md:p-4 py-2 block hover:text-white"
                href="/privacy-policy"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
