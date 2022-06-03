import React from "react";
import { Link } from "react-scroll";
function Header() {
  const [menu, setMenu] = React.useState(false);

  const hideList = () => {
    setMenu(false);
  };
  const showList = () => {
    setMenu(true);
  };
  return (
    <div>
      <div className="flex  justify-around hidden lg:flex  p-5">
        <h1 className="font-bold text-2xl">Gama Gainers</h1>
        <div className=" hidden md:flex space-x-4">
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

      <div className="flex justify-between  bg-blue-700 p-3 text-white sm:hidden">
        <h1 className="font-bold text-xl">Gama Gainers</h1>
        {!menu && (
          <div>
            <button onClick={showList} className="">
              <svg
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32px"
                height="32px"
              >
                <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" />
              </svg>
            </button>
          </div>
        )}
        {menu && (
          <div className="flex flex-col items-end">
            <button className="mr-4 " onClick={hideList}>
              <img
                className=" w-10 h-10"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAB/klEQVRoge2Zyy4EURCGP0PcthNbvIOIWDAWPAMhM52wtvAYLvEGJHbegYSdRKzc9qxZug1mLE43rdN9Zk5Vd9NJ/0ltpufU//+nzqVTDSVKlCjxl+hx+O8IsACMAi/ABXAGtJQaeoFpYAIYAu6AI+BBmfcbA8Au8Aa0I3ED1BS554DbmLyvwI7PrcIAcBpDEI4mUBfkrvtjbblPUJrY7UAQxCfQcMjb8Md0k3tbKn4EU8puSFxMuIhvY/ZbVWJgxYEkbMKz5PQcxQexlJSwYiEbtftLzLdPvAnPf2bjTMK4jTAJzwKiIGfUhEY8wFPSgz7LoAshGfyYAHP87iEXD3AuFXGN+3qN7gnJmg/HJQrzNTqf1VlGE5iRig9QRz+L0upJLshYLAHvOYu3Hcf/2kQm4sMmPooqPmsTuYjPykSu4gOkZUIlXnM7FhqFXkKF3sSFPkazFp+pibzEZ2Ki0C9zc/z96/SsVHwv8U0n11nUVu8K4X01k4J4j3T2z7TEwEYK4gNoTawnibSVZrB7r7/QAlaBg9Bvh8Aa8kbwsGTQMvqZj0La2FqUGCh8axFMiztN8RITW1LxYFrbJx0Ism6v92sMgDGxjSlllOASXd9mFnPOxy2bTboQ7/KJqQrMA2OYvXHuh/YTUwWYAiYxk3UPHAOPyrwlSpQokQO+AN9N+IV88rnoAAAAAElFTkSuQmCC"
              />
            </button>
            <ul className="flex flex-col space-y-3 mt-3">
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
        )}
      </div>

      <div className=" hidden sm:flex font-semibold justify-between items-center space-x-6 px-40 p-5 bg-blue-800 text-white  ">
        <ul className="flex space-x-6  p-5">
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

        <div className="">
          <button className="rounded-full px-5 py-5 md:py-2 bg-red-500">
            <a href="https://t.me/+6sWWtTS8bMk3MzQ9" target="_blank">
              Register here
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
