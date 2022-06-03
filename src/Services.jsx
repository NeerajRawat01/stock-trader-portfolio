import React from "react";

function Services() {
  return (
    <>
      <div className="flex justify-center p-2 sm:hidden">
        <button className="rounded-full px-5 py-2 bg-red-500">
          <a href="https://t.me/+6sWWtTS8bMk3MzQ9" target="_blank">
            Register here
          </a>
        </button>
      </div>

      <div id="services" className="bg-gray-100  sm:p-20  text-center">
        <h3 className=" text-2xl  sm:text-3xl text-indigo-700 font-bold">
          I offer various kinds of services and provide solutions
          <h3>to meet all your trading requirements</h3>
        </h3>

        <div className="flex flex-col  sm:flex-row space-y-3 sm:space-y-0  justify-center sm:space-x-4 py-5">
          <div className="flex flex-col   md:w-1/2 lg:w-2/5 py-10 px-10 shadow-sm md:shadow-md rounded-md  bg-white items-center justify-center">
            <img
              className="h-28 w-28"
              src="https://www.codeviser.in/web_assets/images/new/1.png"
              alt=""
            />
            <h3 className="font-semibold text-xl">Learn from Scratch</h3>
            <p>
              Strengthen basic concepts and learn advanced concepts that will
              allow you to navigate the uncertainties in live market and allow
              you to succeed in the stock market.
            </p>
          </div>

          <div className="flex flex-col   md:w-1/2 lg:w-2/5 py-10 px-10 shadow-sm md:shadow-md rounded-md  bg-white items-center justify-center">
            <img
              className="h-28 w-28"
              src="https://www.codeviser.in/web_assets/images/new/2.png"
              alt=""
            />
            <h3 className="font-semibold text-xl">Master Key Strategies</h3>
            <p>
              Master various strategies that allow you to respond to dynamic
              market conditions in a timely, effective and profitable manner.
            </p>
          </div>
        </div>

        <div className="flex  flex-col justify-center sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 py-5">
          <div className="flex flex-col   md:w-1/2 lg:w-2/5 py-10 px-10 shadow-sm md:shadow-md rounded-md  bg-white items-center justify-center">
            <img
              className="h-28 w-28"
              src="https://www.codeviser.in/web_assets/images/new/1.png"
              alt=""
            />
            <h3 className="font-semibold text-xl">Learn from Scratch</h3>
            <p>
              Strengthen basic concepts and learn advanced concepts that will
              allow you to navigate the uncertainties in live market and allow
              you to succeed in the stock market.
            </p>
          </div>

          <div className="flex flex-col   md:w-1/2 lg:w-2/5 py-10 px-10 shadow-sm md:shadow-md rounded-md  bg-white items-center justify-center">
            <img
              className="h-28 w-28"
              src="https://www.codeviser.in/web_assets/images/new/2.png"
              alt=""
            />
            <h3 className="font-semibold text-xl">Master Key Strategies</h3>
            <p>
              Master various strategies that allow you to respond to dynamic
              market conditions in a timely, effective and profitable manner.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center  space-y-4 sm:space-y-0  p-10    sm:justify-around bg-blue-900 text-white text-xl">
        <span>Join My Telegram Channel</span>
        <button className="rounded-full px-5 py-2 bg-red-500">
          <a href="https://t.me/+6sWWtTS8bMk3MzQ9" target="_blank">
            Join Now
          </a>
        </button>
      </div>
    </>
  );
}

export default Services;
