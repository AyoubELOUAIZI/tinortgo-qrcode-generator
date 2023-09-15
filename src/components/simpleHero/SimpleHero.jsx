import Image from "next/image";
import Link from "next/link";
import React from "react";

export const SimpleHero = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Unleashing the Potential
              <br class="hidden lg:inline-block" />
              Of QR Codes
            </h1>
            <p class="mb-8 leading-relaxed">
              QR codes have emerged as a dynamic and indispensable tool in
              today's digital landscape, showcasing their transformative power
              across various industries. These unassuming two-dimensional
              barcodes are the linchpin of contactless convenience, seamlessly
              bridging the gap between physical and digital realms. From
              facilitating secure mobile payments and simplifying event
              check-ins to enhancing marketing campaigns and aiding in efficient
              inventory management, QR codes have proven their versatility and
              adaptability. Their ability to convey information swiftly with a
              simple scan has not only revolutionized the way we access data but
              has also empowered businesses to streamline operations and engage
              with customers in novel ways. In an increasingly fast-paced and
              interconnected world, the power of QR codes is undeniable, shaping
              the future of information dissemination and user interaction.
            </p>
            <div class="flex justify-center">
              <Link
                href="/"
                class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
              >
                back home
              </Link>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              class="object-cover object-center rounded"
              alt="hero"
              src="/wallqr.png"
              width={400} // Set your desired width here
              height={300} // Set your desired height here
            />
          </div>
        </div>
      </section>
    </div>
  );
};
