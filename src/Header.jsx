import React from "react";
import { Link } from "react-scroll";
function Header() {
  return (
    <div>
      <div className="flex justify-around p-5">
        <h1 className="font-bold text-2xl">Gama Gainers</h1>
        <div className="flex space-x-4">
          <div className="flex space-x-2 items-center">
            <img
              className="w-8 h-8"
              src="https://cdn.pixabay.com/photo/2016/01/10/22/23/location-1132647_960_720.png"
              alt=""
            />
            <div className="flex flex-col">
              <h3 className="font-semibold">Address</h3>
              <h3>Gamma Gainers, Doon Express Bussiness Park,</h3>
              <h3>Sharanpur road , Dehradun, 248171</h3>
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
              <h3>shubham.negi.1640@gmail.com</h3>
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
      <ul className="flex font-semibold space-x-6 px-40 p-5 bg-blue-800 text-white  ">
        <li className="hover:text-indigo-200 hover:cursor-pointer">
          <Link to="home" spy={true} smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:text-indigo-200 hover:cursor-pointer">
          <Link to="services" spy={true} smooth={true} duration={500}>
            Services
          </Link>
        </li>
        <li className="hover:text-indigo-200 hover:cursor-pointer">
          <Link to="about" spy={true} smooth={true} duration={500}>
            About
          </Link>
        </li>

        <li className="hover:text-indigo-200 hover:cursor-pointer">
          <Link to="clients" spy={true} smooth={true} duration={500}>
            Clients
          </Link>
        </li>

        <li className="hover:text-indigo-200 hover:cursor-pointer">
          <Link to="contact" spy={true} smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
