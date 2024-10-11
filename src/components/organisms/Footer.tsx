import React from "react";
import Image from "next/image";
import IMage from "../../../public/assets/logofooter-removebg-preview.png";
type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-[#0C1D6D] font-sans mt-4">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <Image className="" width={150} height={150} src={IMage} alt="" />
            <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
              <input
                id="email"
                type="text"
                className="px-4 py-2  bg-white border rounded-md  text-gray-300 border-gray-600  focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                placeholder="Email Address"
              />
              {/* <button className="w-full px-6 py-2.5 text-sm font-medium  text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                Subscribe
              </button> */}
            </div>
          </div>
          <div>
            <p className="font-semibold  text-white">Quick Link</p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <p className=" transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline hover:cursor-pointer ">
                Home
              </p>
              <p className=" transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline hover:cursor-pointer ">
                Who We Are
              </p>
              <p className=" transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline hover:cursor-pointer ">
                Our Philosophy
              </p>
            </div>
          </div>
          <div>
            <p className="font-semibold  text-white">Industries</p>
            <div className="flex flex-col items-start mt-5 space-y-2">
              <p className=" transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline hover:cursor-pointer ">
                Retail &amp; E-Commerce
              </p>
              <p className=" transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline hover:cursor-pointer ">
                Information Technology
              </p>
              <p className=" transition-colors duration-300 text-gray-300 hover:text-blue-400 hover:underline hover:cursor-pointer ">
                Finance &amp; Insurance
              </p>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 md:my-8  h-2" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-1 gap-4 hover:cursor-pointer">
            <Image
              src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg"
              width={130}
              height={110}
              alt=""
            />
            <Image
              src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
              width={130}
              height={110}
              alt=""
            />
          </div>
          <div className="flex gap-4 hover:cursor-pointer">
            <Image
              src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
              width={30}
              height={30}
              alt="fb"
            />
            <Image
              src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg"
              width={30}
              height={30}
              alt="tw"
            />
            <Image
              src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
              width={30}
              height={30}
              alt="inst"
            />
            <Image
              src="https://www.svgrepo.com/show/94698/github.svg"
              className=""
              width={30}
              height={30}
              alt="gt"
            />
            <Image
              src="https://www.svgrepo.com/show/22037/path.svg"
              width={30}
              height={30}
              alt="pn"
            />
            <Image
              src="https://www.svgrepo.com/show/28145/linkedin.svg"
              width={30}
              height={30}
              alt="in"
            />
            <Image
              src="https://www.svgrepo.com/show/22048/dribbble.svg"
              className=""
              width={30}
              height={30}
              alt="db"
            />
          </div>
        </div>
        <p className="font-dinCondensed text-white p-8 text-start md:text-center md:text-lg md:p-4">
          © 2023 You Company Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
