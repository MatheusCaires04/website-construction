import React, { useState } from "react";

import {
  AiFillInfoCircle,
  AiOutlineCloseCircle,
  AiFillPhone,
} from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { ImMenu } from "react-icons/im";
import {
  FaSearch,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { MdEmail, MdLocationPin, MdOutlineClose } from "react-icons/md";
import ModalForm from "./ModalForm";

const Header = () => {
  const [search, setSearch] = useState(false);
  const [info, setInfo] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const btnSearch = (e) => {
    e.preventDefault();
    setSearch(!search);
  };
  const btnInfo = (e) => {
    e.preventDefault();
    setInfo(!info);
  };
  const btnMenu = (e) => {
    e.preventDefault();
    setOpenMenu(!openMenu);
  };
  const Modal = (e) => {
    e.preventDefault();
    setOpenModal(!openModal);
  };

  const links = [
    {
      name: "Home",
      url: "#home",
    },
    {
      name: "About",
      url: "#about",
    },
    {
      name: "Services",
      url: "#services",
    },
    {
      name: "Projects",
      url: "#projects",
    },
    {
      name: "Pricing",
      url: "#pricing",
    },
    {
      name: "Contact",
      url: "#contact",
    },
    {
      name: "Blogs",
      url: "#blog",
    },
  ];

  return (
    <div className="w-full h-24 px-8 bg-white z-[9999] fixed shadow-lg">
      <div className="max-w-[1100px] h-full mx-auto flex items-center justify-between">
        <a href="#" className="font-semibold text-3xl lg:text-2xl">
          We<span className="text-yellow">Build</span>
        </a>
        <nav className="hidden lg:flex gap-4 text-black text-base font-regular">
          {links.map((item, index) => {
            return (
              <a
                href={item.url}
                className="hover:text-yellow duration-150"
                key={index}
              >
                {item.name}
              </a>
            );
          })}
        </nav>
        <div className="flex gap-2 text-black">
          <div className="icon flex lg:hidden cursor-pointer" onClick={btnMenu}>
            {!openMenu ? <ImMenu /> : <MdOutlineClose />}
          </div>
          <div className="icon" onClick={btnInfo}>
            <AiFillInfoCircle />
          </div>
          <div className="icon" onClick={btnSearch}>
            <FaSearch />
          </div>
          <div className=" icon" onClick={Modal}>
            <BsFillPersonFill />
          </div>
        </div>
      </div>
      {/* Menu Mobile */}
      <nav
        className={`${
          openMenu ? "left-0 right-0" : "right-[-100%]"
        } flex flex-col items-center justify-center lg:hidden gap-4 fixed top-24 bottom-0 bg-white font-bold text-2xl duration-200`}
      >
        {links.map((item, index) => {
          return (
            <a
              href={item.url}
              className="hover:text-yellow duration-150"
              key={index}
              onClick={() => {
                setOpenMenu(!openMenu);
              }}
            >
              {item.name}
            </a>
          );
        })}
      </nav>
      {/* Open Search */}
      <div
        className={`${
          search ? "left-0 right-0" : "right-[-100%]"
        } fixed top-0 bottom-0 bg-black/80 duration-200`}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <input
            type="text"
            name="item"
            id="item"
            className="px-3 py-1 text-lg w-[80%] md:w-[50%] outline-none"
            placeholder="Search ...."
          />
          <div
            className="absolute top-8 right-8 text-white text-4xl cursor-pointer"
            onClick={btnSearch}
          >
            <AiOutlineCloseCircle />
          </div>
        </div>
      </div>
      {/* Open Info */}
      <div
        className={
          info
            ? "bg-black/70 fixed top-0 left-0 bottom-0 right-0 flex justify-end duration-200"
            : "bg-black/70 fixed top-0 bottom-0 right-[-100%] flex justify-end duration-200"
        }
      >
        <div className="w-80 h-full bg-white py-20 px-10 flex flex-col justify-around relative">
          <div className="flex flex-col items-center">
            <div className="icon">
              <AiFillPhone />
            </div>
            <strong className="text-sm font-bold text-black py-2">
              Phone Number
            </strong>
            <span className="text-sm text-black">+123 456 789</span>
            <span className="text-sm text-black">+111 222 333</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="icon">
              <MdEmail />
            </div>
            <strong className="text-sm font-bold text-black py-2">
              Email Address
            </strong>
            <span className="text-sm text-black">matheus-bini@hotmail.com</span>
            <span className="text-sm text-black">m.bini0409@gmail.com</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="icon">
              <MdLocationPin />
            </div>
            <strong className="text-sm font-bold text-black py-2">
              Office Address
            </strong>
            <span className="text-sm text-black">mumbai, india - 400104</span>
          </div>
          <div className="flex justify-evenly">
            <div className="icon">
              <FaFacebookF />
            </div>
            <div className="icon">
              <FaTwitter />
            </div>
            <div className="icon">
              <FaInstagram />
            </div>
            <div className="icon">
              <FaLinkedin />
            </div>
          </div>
          <div
            className="absolute top-8 right-8 text-3xl cursor-pointer"
            onClick={btnInfo}
          >
            <AiOutlineCloseCircle />
          </div>
        </div>
      </div>
      {/* Open Modal */}
      <div
        className={`${
          openModal ? "left-0 w-full" : "-right-full"
        } fixed bg-black/70 top-0 bottom-0 flex items-center justify-center px-8`}
      >
        <ModalForm closeModal={Modal} />
      </div>
    </div>
  );
};

export default Header;
