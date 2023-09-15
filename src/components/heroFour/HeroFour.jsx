import Link from "next/link";
import React from "react";

export const HeroFour = () => {
  return (
    <div className="h-screen flex items-center bg-green-800">
      <div className="px-4 mx-auto mt-16 mb-16 max-w-7xl sm:mt-24">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-200 sm:text-5xl md:text-6xl font-title">
            <span className="block">QR Code</span>
            <span className="block pt-2"> Importants</span>
          </h1>
          <p className="max-w-md mx-auto mt-3 text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            QR codes, short for Quick Response codes, have become an integral
            part of our digital landscape. These versatile two-dimensional
            barcodes have transcended their initial purpose in inventory
            tracking and now play a pivotal role in countless aspects of our
            daily lives. From contactless payments and mobile ticketing to
            seamless website URL sharing and product information retrieval, QR
            codes have revolutionized the way we interact with information and
            services. Their simplicity and universality make them a powerful
            tool for businesses and individuals alike, bridging the physical and
            digital worlds with a single scan. As we continue to embrace the
            convenience and efficiency they offer, QR codes are set to remain a
            fundamental component of our increasingly interconnected,
            tech-driven society.
          </p>
          <div className="max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <Link
                href="/qr-code"
                className="block shadow-lg w-full px-8 py-3 text-base font-medium text-gray-200 hover:text-gray-100 bg-gray-100/10 hover:bg-gray-200/30 hover:backdrop-blur-xl backdrop-blur-lg rounded-md md:py-4 md:text-lg md:px-10"
              >
                More About qr code
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
