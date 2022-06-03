import React from "react";

function Services() {
  return (
    <>
      <div  id="services" className="bg-gray-100 p-20  text-center">
        <h3 className="text-3xl text-indigo-700 font-bold">
          I offer various kinds of services and provide solutions
          <h3>to meet all your trading requirements</h3>
        </h3>

        <div className="flex space-x-4 p-5">
          <div className="flex flex-col w-1/2 py-10 px-10 shadow-md rounded-md  bg-white items-center justify-center">
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

          <div className="flex flex-col  w-1/2 py-10 px-10 shadow-md rounded-md  bg-white items-center justify-center">
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

        <div className="flex space-x-4 p-5">
          <div className="flex flex-col w-1/2 py-10 px-10 shadow-md rounded-md  bg-white items-center justify-center">
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

          <div className="flex flex-col  w-1/2 py-10 px-10 shadow-md rounded-md  bg-white items-center justify-center">
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
      <div className="flex p-10   justify-around bg-blue-900 text-white text-xl">
        Join My Telegram Channel <button className="rounded-full px-5 py-2 bg-red-500">Join now</button>
      </div>
    </>
  );
}

export default Services;
