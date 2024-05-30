"use client";
import React, { useState, useEffect } from "react";
import Linkedin from "@/app/social-icons/Linkedin";
import Instagram from "@/app/social-icons/InstagramIcon";
import Github from "@/app/social-icons/GithubIcon";
import avatar from "@/app/assets/mesek.png";
import Image from "next/image"; // Importing Next.js Image component

const NavBar = () => {
  const [handleShow, setHandleShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHandleShow(true);
      } else {
        setHandleShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`fixed top-0 z-10 h-20 flex justify-between w-full p-5 max-w-[100vw] transition-all ease-in  ${
        handleShow && "bg-[#111]"
      }`}
    >
      <Image
        className="fixed top-8 left-5 w-20 object-contain"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="avatar"
        width={80} // Adjust width as needed
        height={80} // Adjust height as needed
      />
      <div className=" flex mx-auto gap-5 pb-3">
        <a href="https://www.linkedin.com/in/lucas-saller-23640918a/">
          <Linkedin />
        </a>
        <a href="https://www.instagram.com/lucassaller/">
          <Instagram />
        </a>
        <a href="https://github.com/LucasSaller">
          <Github />
        </a>
      </div>
      <Image
        className="fixed right-5 "
        src={avatar}
        alt="avatar"
        width={50} // Adjust width as needed
        height={50} // Adjust height as needed
      />
    </div>
  );
};

export default NavBar;
