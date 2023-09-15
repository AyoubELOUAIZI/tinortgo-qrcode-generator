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
              src="https://tecdn.b-cdn.net/img/new/fluid/city/112.webp"
              className="w-full rounded-md shadow-lg"
            />
          </div>
          <div className="mb-6 lg:mb-0">
            <Image
              alt="city"
              width={400} // Set your desired width here
              height={300} // Set your desired height here
              src="https://tecdn.b-cdn.net/img/new/fluid/city/114.webp"
              className="w-full rounded-md shadow-lg"
            />
          </div>
          <div className="mb-6 lg:mb-0">
            <Image
              alt="city"
              width={400} // Set your desired width here
              height={300} // Set your desired height here
              src="https://tecdn.b-cdn.net/img/new/fluid/city/115.webp"
              className="w-full rounded-md shadow-lg"
            />
          </div>
          <div className="mb-6 lg:mb-0">
            <Image
              alt="city"
              width={400} // Set your desired width here
              height={300} // Set your desired height here
              src="https://tecdn.b-cdn.net/img/new/fluid/city/116.webp"
              className="w-full rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>

      <div class="container p-6 text-neutral-800 dark:text-neutral-200">
        <div class="grid gap-4 lg:grid-cols-2">
          <div class="mb-6 md:mb-0">
            <h5 class="mb-2 font-medium uppercase">Footer text</h5>

            <p class="mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              atque ea quis molestias. Fugiat pariatur maxime quis culpa
              corporis vitae repudiandae aliquam voluptatem veniam, est atque
              cumque eum delectus sint!
            </p>
          </div>

          <div class="mb-6 md:mb-0">
            <h5 class="mb-2 font-medium uppercase">Footer text</h5>

            <p class="mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              atque ea quis molestias. Fugiat pariatur maxime quis culpa
              corporis vitae repudiandae aliquam voluptatem veniam, est atque
              cumque eum delectus sint!
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
