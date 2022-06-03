import React from "react";

function Clients() {
  return (
    <>
      <div id="clients" className="bg-gray-100 py-5 sm:p-20  text-center">
        <h3 className="text-center text-3xl font-bold">Clients Review</h3>
        <div className="flex flex-col mt-3 sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 sm:px-10 ">
          <div className="flex space-y-5 flex-col sm:w-1/2 py-10 px-10 shadow-sm rounded-sm  bg-white items-center justify-center">
            <p>
              Strengthen basic concepts and learn advanced concepts that will
              allow you to navigate the uncertainties in live market and allow
              you to succeed in the stock market.
            </p>
            <img
              className="h-28 w-28 rounded-full object-cover"
              src="https://cdn.pixabay.com/photo/2019/01/19/17/52/headshots-3942187_960_720.jpg"
              alt=""
            />
            <h3 className="font-semibold text-xl">J haru</h3>
          </div>

          <div className="flex flex-col  sm:w-1/2 py-10 px-10 shadow-sm rounded-sm  bg-white items-center justify-center">
            <p>
              Master various strategies that allow you to respond to dynamic
              market conditions in a timely, effective and profitable manner.
            </p>
            <img
              className="h-28 w-28 rounded-full object-cover"
              src="https://cdn.pixabay.com/photo/2017/08/09/23/59/skeptical-2616245_960_720.jpg"
              alt=""
            />
            <h3 className="font-semibold text-xl">alex lyn</h3>
          </div>
        </div>

        <div className="flex flex-col mt-3 sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 sm:px-10 ">
          <div className="flex flex-col sm:w-1/2 py-10 px-10 shadow-sm rounded-sm   bg-white items-center justify-center">
            <p>
              Strengthen basic concepts and learn advanced concepts that will
              allow you to navigate the uncertainties in live market and allow
              you to succeed in the stock market.
            </p>
            <img
              className="h-28 w-28 rounded-full object-cover"
              src="https://cdn.pixabay.com/photo/2019/10/04/13/19/woman-4525646_960_720.jpg"
              alt=""
            />
            <h3 className="font-semibold text-xl">Miranda july</h3>
          </div>

          <div className="flex flex-col  sm:w-1/2 py-10 px-10 shadow-sm rounded-sm   bg-white items-center justify-center">
            <p>
              Master various strategies that allow you to respond to dynamic
              market conditions in a timely, effective and profitable manner.
            </p>
            <img
              className="h-28 w-28 rounded-full object-cover"
              src="https://cdn.pixabay.com/photo/2021/04/07/09/47/man-6158647_960_720.jpg"
              alt=""
            />
            <h3 className="font-semibold text-xl">Robin Malhotra</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Clients;
