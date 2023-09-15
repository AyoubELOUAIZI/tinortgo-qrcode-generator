import Image from "next/image";
import Link from "next/link";
import React from "react";

export const NiceHero = () => {
  return (
    <div>
      <div class="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl pt-4">
        <div class="w-full h-64 lg:w-1/2 lg:h-auto">
          <Image
            class="h-full w-full object-cover"
            src="/greenqr.png"
            alt="Winding mountain road"
            width={400} // Set your desired width here
            height={300} // Set your desired height here
          />
        </div>

        <div class="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
          <div class="flex flex-col  p-34 md:px-16">
            <h2 class="text-2xl font-medium uppercase text-green-800 lg:text-4xl">
              What is Qr Code
            </h2>
            <p class="mt-4">
              A QR code, short for Quick Response code, is a two-dimensional
              matrix barcode that stores information in a visually scannable
              form. Originally developed in Japan for tracking automotive parts,
              QR codes have evolved to become a versatile tool with a wide range
              of applications. They consist of a grid of black squares arranged
              on a white background, and their unique pattern encodes various
              types of data, such as URLs, text, contact information, or even
              Wi-Fi network credentials. By simply scanning a QR code using a
              smartphone or dedicated QR code reader, users can quickly access
              the encoded information or perform actions like opening a website,
              adding a contact, or making a payment. QR codes have gained
              popularity due to their convenience, speed, and contactless
              nature, making them an essential element in fields ranging from
              marketing and advertising to ticketing, inventory management, and
              contact tracing during public health crises.
            </p>

            <div class="mt-8">
              <Link
                href="/"
                class="inline-block w-full text-center text-lg font-medium text-gray-100 bg-green-600 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
