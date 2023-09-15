import React from "react";
import QRCode from "react-qr-code";
import html2canvas from "html2canvas";

export const HeroTow = ({ textvalue }) => {
  const handleDownloadQrCode = () => {
    console.log("downloadQrCode start");
    const table = document.getElementById("qrCodeImage");

    html2canvas(table).then(function (canvas) {
      const link = document.createElement("a");
      link.download = "table.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  };
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-6 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Download Your&nbsp;
              <br className="hidden lg:inline-block" />
              Generated QR Code
            </h1>
            <p className="mb-8 leading-relaxed">
              After successfully creating your custom QR code, the next step is
              to download it for immediate use. This digital symbol, embedded
              with encoded information, can serve various purposes, from website
              links to contact details. Simply click the "Download" button or
              right-click on the QR code image, depending on your platform. Save
              it to your preferred location on your device, and you're ready to
              share it with others or integrate it into your projects. This
              straightforward process ensures quick and convenient access to
              your QR code whenever you need it, enhancing your connectivity and
              convenience in the digital world.
            </p>
            <div className="flex justify-center">
              <button
                onClick={handleDownloadQrCode}
                className="inline-flex text-white bg-green-400 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded text-lg"
              >
                Download QR Code
              </button>
            </div>
          </div>
          <div
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 py-4"
            id="qrCodeImage"
          >
            {/* // Can be anything instead of `maxWidth` that limits the width. */}
            <div
              style={{
                height: "auto",
                margin: "0 auto",
                maxWidth: 350,
                width: "100%",
              }}
            >
              <QRCode
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={textvalue}
                viewBox={`0 0 256 256`}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
