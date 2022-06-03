import React from "react";
import { Link } from "react-scroll";
function Footer() {
  return (
    <div id="contact" className="flex px-10 py-20 justify-around">
      <div>
        <h3 className="font-bold text-2xl">Gamma Gainers</h3>
        <a  href="https://www.facebook.com/" target="_blank"></a>
        <a href="https://www.facebook.com/" target="_blank"></a>
        <a href="https://www.facebook.com/" target="_blank"></a>
        <a href="https://www.facebook.com/" target="_blank"></a>
      </div>
      <ul className="flex flex-col  font-semibold space-y-5  ">
        <li className="text-indigo-800">Quick Links</li>
        <li className="hover:text-indigo-800 hover:cursor-pointer">
          <Link to="home" spy={true} smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:text-indigo-800 hover:cursor-pointer">
          <Link to="services" spy={true} smooth={true} duration={500}>
            Services
          </Link>
        </li>
        <li className="hover:text-indigo-800 hover:cursor-pointer">
          <Link to="about" spy={true} smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:text-indigo-800 hover:cursor-pointer">
          <Link to="clients" spy={true} smooth={true} duration={500}>
            Clients
          </Link>
        </li>
        <li className="hover:text-indigo-800 hover:cursor-pointer">
          <Link to="contact" spy={true} smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      <div>
        <div className="flex flex-col space-y-4">
          <div className="flex space-x-2 items-center">
            <img
              className="w-8 h-8"
              src="https://cdn.pixabay.com/photo/2016/01/10/22/23/location-1132647_960_720.png"
              alt=""
            />
            <div className="flex flex-col">
              <h3 className="font-semibold">Address</h3>
              <h3>CodeViser Pvt Ltd 201 Shalimar Square ,</h3>
              <h3>BN Road Lalbagh, Lucknow 226001</h3>
            </div>
          </div>
          <div className="flex space-x-2 items-center">
            <img
              className="w-8 h-8 "
              src="https://cdn.pixabay.com/photo/2017/11/10/05/42/email-2935508_960_720.png"
              alt=""
            />
            <div className="flex flex-col">
              <h3 className="font-semibold">E-mail</h3>
              <h3>Support@gamaGainer.com</h3>
            </div>
          </div>
          <div className="flex space-x-2 items-center">
            <img
              className="w-8 h-8 "
              src="https://cdn.pixabay.com/photo/2021/09/27/22/30/phone-6662438_960_720.png"
              alt=""
            />
            <div className="flex flex-col">
              <h3 className="font-semibold">Phone</h3>
              <h3>+91-6395313499</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
