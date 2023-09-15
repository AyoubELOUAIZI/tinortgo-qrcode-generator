import QRCode from "react-qr-code";

export const HeroThree = ({ textvalue, setTextvalue }) => {
  return (
    <div>
      <div className="relative h-[775px] bg-green-800	">
        <div className="flex flex-col gap-4 justify-center items-center w-full h-full px-3 md:px-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Create And Download Your QR Code
          </h1>
          <p className="text-gray-300">
            For Any One who want to generate and download qrCode.
          </p>

          {/* // Can be anything instead of `maxWidth` that limits the width. */}
          <div
            style={{
              height: "auto",
              margin: "0 auto",
              maxWidth: 250,
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
          <div className="relative p-3 border border-gray-200 rounded-lg w-full max-w-lg">
            <input
              type="text"
              className="rounded-md w-full p-3 "
              placeholder="Type here to generate qrcode ..."
              onChange={(e) => {
                setTextvalue(e.target.value);
              }}
            />

            <button type="submit" className="absolute right-6 top-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
