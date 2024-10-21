import React from "react";
import Menu from "../../../public/icons/menu.svg";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="fixed flex w-full justify-between p-6 lg:hidden">
        <h1 className="my-auto text-white">
          <span className="bg-gradient-to-r from-[#38C682] to-[#00796D] bg-clip-text font-extrabold text-transparent">
            Nineteen
          </span>
          {""}
          <span className="font-semibold text-[#F5921E]">Innovation</span>
        </h1>
        <Image
          src={Menu}
          height={32}
          width={32}
          alt="menu"
          className="my-auto"
        />
      </nav>
      <nav className="fixed hidden w-full justify-between px-20 py-4 lg:flex">
        <h1 className="my-auto text-white">
          <span className="bg-gradient-to-r from-[#38C682] to-[#00796D] bg-clip-text font-extrabold text-transparent">
            Nineteen
          </span>
          <span className="bg-gradient-to-r from-[#F5921E] to-[#8f4c00] bg-clip-text font-semibold text-transparent">
            Innovation
          </span>
          {""}
          {/* <span className='text-[#F5921E] font-semibold'>Innovation</span> */}
        </h1>
        <div className="my-auto">
          <ul className="flex gap-x-10">
            <li>
              <Link href="#" className="text-lg text-white">
                Home
              </Link>
              <div className="mx-auto h-[2px] w-7 rounded-full bg-gradient-to-r from-[#38C682] to-[#00796D]"></div>
            </li>
            <li>
              <Link href="#" className="text-lg text-white">
                Service
              </Link>
            </li>
            <li>
              <Link href="#" className="text-lg text-white">
                Project
              </Link>
            </li>
            <li>
              <Link href="#" className="text-lg text-white">
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <button className="rounded-full bg-gradient-to-r from-[#38C682] to-[#00796D] px-6 py-4 text-base font-medium text-white">
          Contact Us
        </button>
      </nav>
    </>
  );
}
