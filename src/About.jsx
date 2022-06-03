import React from "react";

function About() {
  return (
    <section id="about" >
      <div className="flex flex-col lg:flex-row bg-blue-800 text-white">
        <img
          className=""
          src="https://cdn.pixabay.com/photo/2017/11/02/14/27/model-2911332_960_720.jpg"
          alt=""
        />
        <div className="space-y-4 p-5">
          <h1 className="text-3xl font-semibold">
            Meet our Mentor-in-Chief and Trading Expert
          </h1>
          <h3 className="text-3xl font-bold ">Shubham Negi</h3>
          <p className="text-xl">
            Mr. Shubham Negi first foray into stock market was in 2017 and there
            has been no looking back. Since then, he has been an avid
            practioner, passionately studying and investing in the forex and
            cryptocurrencies markets. In 2018-19, he ventured into NSE and
            continued his winning streak there becoming an inspiration to those
            around him. He is an eminent social media influencer with over 1
            Lakh subscribers on his official YouTube channel. With over 2
            decades of successful trading experience and proven results, he is
            one of the leading stock trading instructors of India. His guidance
            has helped students carve their technical skills and extract
            phenomenal profits from the stock market.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
