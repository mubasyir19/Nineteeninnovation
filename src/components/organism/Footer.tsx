import Image from "next/image";
import React from "react";
import WhiteArrowRight from "../../../public/icons/white-arrow-right.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative h-full w-full overflow-hidden rounded-t-3xl bg-[#0C111F]">
      <div className="w-full px-6 py-16 md:px-16 md:py-10 lg:px-20 xl:mx-auto">
        <div className="w-ful mx-auto mt-6 flex flex-col items-center justify-center text-center md:flex-row md:justify-between md:text-start">
          <h2 className="text-2xl font-semibold text-white md:text-xl lg:text-2xl">
            Let&apos;s discuss and bring your vision to life.
          </h2>
          <button className="mx-auto mt-6 flex w-fit justify-center gap-x-3 rounded-full bg-gradient-to-r from-[#38C682] to-[#00796D] px-6 py-4 font-medium text-white md:mx-0 md:mt-0">
            <span className="my-auto md:text-xs lg:text-base">
              Let&apos;s Talk
            </span>
            <Image
              src={WhiteArrowRight}
              height={15}
              width={15}
              alt="white arrow right"
              className="my-auto"
            />
          </button>
        </div>
        <hr className="mx-auto mt-8 w-full border border-[#3D414C]" />
        <div className="mt-24 flex flex-col md:flex-row md:items-center md:justify-between md:gap-x-10">
          <div className="md:w-1/2">
            <h1 className="my-auto text-2xl text-white">
              <span className="bg-gradient-to-r from-[#38C682] to-[#00796D] bg-clip-text font-extrabold text-transparent">
                Nineteen
              </span>
              <span className="bg-gradient-to-r from-[#F5921E] to-[#8f4c00] bg-clip-text font-semibold text-transparent">
                Innovation
              </span>
            </h1>
            <p className="mt-2 w-full text-base text-[#B6B8BC] md:w-3/4 lg:w-1/2">
              We&apos;re a team of experienced designers, developers, and
              marketers, passionate about delivering exceptional digital
              solutions.
            </p>
            <p className="mt-8 text-base text-[#B6B8BC]">
              mahdymubasyir19@gmail.com
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-6 md:w-1/2 md:grid-cols-3">
            <div className="menu">
              <p className="font-bold text-white">Menu</p>
              <ul className="mt-4 flex flex-col gap-y-3 text-[#B6B8BC]">
                <li>
                  <Link href="#">Service</Link>
                </li>
                <li>
                  <Link href="#">Projects</Link>
                </li>
                <li>
                  <Link href="#">About Us</Link>
                </li>
                <li>
                  <Link href="#">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="support">
              <p className="font-bold text-white">Support</p>
              <ul className="mt-4 flex flex-col gap-y-3 text-[#B6B8BC]">
                <li>
                  <Link href="#">FAQ</Link>
                </li>
                <li>
                  <Link href="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="#">Terms of Service</Link>
                </li>
              </ul>
            </div>
            <div className="social-media">
              <p className="font-bold text-white">Social Media</p>
              <ul className="mt-4 flex flex-col gap-y-3 text-[#B6B8BC]">
                <li>
                  <Link href="#">Linked In</Link>
                </li>
                <li>
                  <Link href="#">Instagram</Link>
                </li>
                <li>
                  <Link href="#">Github</Link>
                </li>
                <li>
                  <Link href="#">Behance</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="mx-auto mt-8 w-full border border-[#3D414C]" />
        <p className="mt-8 text-start text-base text-[#B6B8BC] md:text-center">
          Copyright © 2024 by NineteenInnovation. All rights reserved.
        </p>
      </div>
      <Image
        src="/images/circle-sm.png"
        height={364}
        width={364}
        alt="shape"
        className="absolute -left-40 -top-28"
      />
      <Image
        src="/images/circle-lg.png"
        height={364}
        width={364}
        alt="shape"
        className="absolute -bottom-28 -right-24"
      />
    </footer>
  );
}
