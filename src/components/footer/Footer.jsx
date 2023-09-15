import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center   bg-green-600 text-center text-white  dark:text-neutral-200">
      <div className="container p-6">
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          <div className="mb-6 lg:mb-0">
            <Image
              alt="city"
              width={400} // Set your desired width here
              height={300} // Set your desired height here
              src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp"
              className="w-full rounded-md shadow-lg"
            />
          </div>
          <div className="mb-6 lg:mb-0">
            <Image
              alt="city"
              width={400} // Set your desired width here
              height={300} // Set your desired height here
              src="https://tecdn.b-cdn.net/img/new/fluid/city/111.webp"
              className="w-full rounded-md shadow-lg"
            />
          </div>
          <div className="mb-6 lg:mb-0">
            <Image
              alt="city"
              width={400} // Set your desired width here
              height={300} // Set your desired height here
              src="https://tecdn.b-cdn.net/img/new/fluid/city/125.webp"
              className="w-full rounded-md shadow-lg"
            />
          </div>
          <div className="mb-6 lg:mb-0">
            <Image
              alt="city"
              width={400} // Set your desired width here
              height={300} // Set your desired height here
              src="https://tecdn.b-cdn.net/img/new/fluid/city/119.webp"
              className="w-full rounded-md shadow-lg"
            />
          </div>
          <div className="mb-6 lg:mb-0">
            <Image
              alt="city"
              width={400} // Set your desired width here
              height={300} // Set your desired height here
              src="https://tecdn.b-cdn.net/img/new/fluid/city/118.webp"
              className="w-full rounded-md shadow-lg"
            />
          </div>
          <div className="mb-6 lg:mb-0">
            <Image
              alt="city"
              width={400} // Set your desired width here
              height={300} // Set your desired height here
              src="https://tecdn.b-cdn.net/img/new/fluid/city/109.webp"
              className="w-full rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>

      <div class="container p-6 text-neutral-800 dark:text-neutral-200">
        <div class="grid gap-4 lg:grid-cols-2">
          <div class="mb-6 md:mb-0">
            <h5 class="mb-2 font-medium uppercase">QR Code Generator</h5>

            <p class="mb-4">
              Create QR codes effortlessly with our QR Code Generator service.
              Easily generate QR codes for websites, contact information, Wi-Fi
              networks, and more. Simplify your information sharing and access
              needs with customizable QR codes.
            </p>
          </div>

          <div class="mb-6 md:mb-0">
            <h5 class="mb-2 font-medium uppercase">Why QR Codes Matter</h5>

            <p class="mb-4">
              QR codes have become essential in our digital age. They enable
              contactless transactions, streamline marketing efforts, and
              provide a quick way to access information. Stay ahead with our QR
              code solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-green-600 p-4 text-center text-neutral-700 dark:bg-green-600 dark:text-neutral-200">
        © 2023 Copyright:
        <Link className="dark:text-black" href="/">
          &nbsp;TINORTGO QRCode
        </Link>
      </div>
    </footer>
  );
};
