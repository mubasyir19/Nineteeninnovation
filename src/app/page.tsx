"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import WhiteArrowRight from "../../public/icons/white-arrow-right.svg";
import CardProject from "@/components/molecules/CardProject";
import ServiceCard from "@/components/molecules/ServiceCard";

export default function Home() {
  return (
    <>
      <section id="hero" className="h-screen w-full bg-[#0C111F] lg:h-full">
        <div className="flex h-screen w-full items-center justify-center bg-hero bg-cover px-6 md:bg-cover md:bg-center lg:h-full lg:py-40 lg:pb-24">
          <div className="mx-auto xl:w-3/4">
            <div className="mx-auto w-fit rounded-full bg-white bg-opacity-10 px-3 py-2 text-center">
              <p className="text-[10px] font-medium text-white">
                NUMBER ONE DIGITAL CREATIVE AGENCY
              </p>
            </div>
            <div className="mt-2">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-white lg:text-6xl xl:text-7xl">
                  <span className="bg-gradient-to-r from-[#38C682] to-[#00796D] bg-clip-text font-extrabold text-transparent">
                    Smart Choices
                  </span>{" "}
                  <br />
                  For Your Business Growth
                </h1>
                <p className="mx-auto mt-4 px-2 text-center text-sm font-medium text-[#B6B8BC] lg:w-3/4 lg:text-xl">
                  We&apos;re a team of experienced designers, developers, and
                  marketers, passionate about delivering exceptional digital
                  solutions.
                </p>
              </div>
              <div className="mt-10">
                <button className="mx-auto flex w-fit justify-center gap-x-3 rounded-full bg-gradient-to-r from-[#38C682] to-[#00796D] px-6 py-4 font-medium text-white">
                  <span className="my-auto">Contact Us</span>
                  <Image
                    src={WhiteArrowRight}
                    height={15}
                    width={15}
                    alt="white arrow right"
                    className="my-auto"
                  />
                </button>
              </div>
            </div>
            <div className="mt-11 lg:hidden">
              <div className="relative mx-auto w-fit overflow-hidden">
                <Image
                  src="/images/shape-sm.png"
                  height={347}
                  width={327}
                  alt="shape"
                  className="mx-auto"
                />
                <Image
                  src="/images/circle-lg.png"
                  height={364}
                  width={364}
                  alt="shape"
                  className="absolute -left-24 -top-28"
                />
                <div className="absolute inset-x-0 top-4">
                  <p className="text-center text-lg font-semibold text-white">
                    Benefits of <br /> improving your business
                  </p>
                  <Swiper
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper mt-10"
                  >
                    <SwiperSlide>
                      <Image
                        src="/images/expand.png"
                        height={108}
                        width={108}
                        alt="special"
                        className="mx-auto"
                      />
                      <p className="mt-2 text-center text-2xl font-medium text-white">
                        Expanding the Market
                      </p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image
                        src="/images/cost.png"
                        height={108}
                        width={108}
                        alt="special"
                        className="mx-auto"
                      />
                      <p className="mt-2 text-center text-2xl font-medium text-white">
                        Cost Effective
                      </p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image
                        src="/images/professional.png"
                        height={108}
                        width={108}
                        alt="special"
                        className="mx-auto"
                      />
                      <p className="mt-2 text-center text-2xl font-medium text-white">
                        More Professional
                      </p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image
                        src="/images/attract.png"
                        height={108}
                        width={108}
                        alt="special"
                        className="mx-auto"
                      />
                      <p className="mt-2 text-center text-2xl font-medium text-white">
                        Attract Client
                      </p>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="mt-20 hidden lg:block">
              <div className="relative mx-auto h-fit w-fit overflow-hidden">
                <Image
                  src="/images/shape-lg.png"
                  height={334}
                  width={1280}
                  alt="shape"
                  className="mx-auto h-full"
                />
                <Image
                  src="/images/circle-lg.png"
                  height={500}
                  width={500}
                  alt="shape"
                  className="absolute -left-32 -top-60"
                />
                <Image
                  src="/images/circle-sm.png"
                  height={364}
                  width={364}
                  alt="shape"
                  className="absolute -bottom-36 -right-24"
                />
                <div className="absolute inset-x-0 top-6">
                  <p className="text-center text-2xl font-semibold text-white xl:text-[32px]">
                    Benefits of improving your business
                  </p>
                  <div className="mt-8 grid grid-cols-4 xl:mt-16">
                    <div>
                      <Image
                        src="/images/expand.png"
                        height={108}
                        width={108}
                        alt="special"
                        className="mx-auto"
                      />
                      <p className="mt-2 text-center font-medium text-white lg:text-xl xl:text-2xl">
                        Expanding the Market
                      </p>
                    </div>
                    <div>
                      <Image
                        src="/images/cost.png"
                        height={108}
                        width={108}
                        alt="special"
                        className="mx-auto"
                      />
                      <p className="mt-2 text-center font-medium text-white lg:text-xl xl:text-2xl">
                        Cost Effective
                      </p>
                    </div>
                    <div>
                      <Image
                        src="/images/professional.png"
                        height={108}
                        width={108}
                        alt="special"
                        className="mx-auto"
                      />
                      <p className="mt-2 text-center font-medium text-white lg:text-xl xl:text-2xl">
                        More Professional
                      </p>
                    </div>
                    <div>
                      <Image
                        src="/images/attract.png"
                        height={108}
                        width={108}
                        alt="special"
                        className="mx-auto"
                      />
                      <p className="mt-2 text-center font-medium text-white lg:text-xl xl:text-2xl">
                        Attract Client
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 py-14 md:px-10 lg:px-20">
        <div className="mx-auto w-full xl:w-3/4">
          <h1 className="text-center text-4xl font-bold text-[#0C111F] xl:text-5xl">
            The Services We Offer{" "}
            <span className="bg-gradient-to-r from-[#38C682] to-[#00796D] bg-clip-text font-extrabold text-transparent">
              For You
            </span>
          </h1>
          <div className="mt-8 xl:mt-16">
            <ServiceCard
              number="01"
              title="UI / UX Design"
              description="UI UIX kami menyediakan design yang detail yang bisa membuat penggunanya tertarik dan nyaman ketika menggunakan sistem anda."
            />
            <ServiceCard
              number="02"
              title="System Development"
              description="Ini adalah deskripsi"
            />
            <ServiceCard
              number="03"
              title="Digital Marketing"
              description="Ini adalah deskripsi"
            />
          </div>
        </div>
      </section>
      <section className="bg-gradient-opacity relative overflow-hidden px-6 py-14 md:px-10 lg:py-20">
        <div className="mx-auto w-full xl:w-3/4">
          <h3 className="text-2xl font-medium text-[#0C111F] lg:text-3xl xl:text-5xl">
            We are passionate about helping businesses grow and succeed in the
            digital age. We take pride in our work and strive to exceed your
            expectations every time.
          </h3>
          <div className="bg-gradient-green mt-8 grid grid-cols-1 gap-y-6 rounded-3xl p-6 lg:mt-16 lg:grid-cols-4 lg:p-8">
            <div className="text-center">
              <h2 className="text-5xl font-bold text-white xl:text-6xl">
                10 +
              </h2>
              <p className="text-base text-[#F3F3F3] xl:text-2xl">
                Years of Experiences
              </p>
            </div>
            <div className="text-center">
              <h2 className="text-5xl font-bold text-white xl:text-6xl">
                666 +
              </h2>
              <p className="text-base text-[#F3F3F3] xl:text-2xl">
                Project Completed
              </p>
            </div>
            <div className="text-center">
              <h2 className="text-5xl font-bold text-white xl:text-6xl">
                555 +
              </h2>
              <p className="text-base text-[#F3F3F3] xl:text-2xl">
                Satisfied Client
              </p>
            </div>
            <div className="text-center">
              <h2 className="text-5xl font-bold text-white xl:text-6xl">
                15 +
              </h2>
              <p className="text-base text-[#F3F3F3] xl:text-2xl">
                Award Achieved
              </p>
            </div>
          </div>
          <div className="bg-gradient-opacity absolute -left-6 top-2 h-[144px] w-[144px] rounded-full lg:left-10 lg:top-10"></div>
          <Image
            src="/images/ornament.png"
            height={474}
            width={1019}
            alt="ornmnt"
            className="absolute -right-52 top-24 h-full w-full lg:-right-36 lg:top-20"
          />
        </div>
      </section>
      <section className="h-full w-full bg-[#0C111F]">
        <div className="h-full w-full bg-grid bg-cover bg-center">
          <div className="mx-auto w-full px-6 py-14 md:px-10 lg:px-20">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white">
                Our Project Have Been{" "}
                <span className="bg-gradient-to-r from-[#38C682] to-[#00796D] bg-clip-text font-bold text-transparent">
                  Done
                </span>
              </h1>
              <p className="mt-4 text-[#B6B8BC]">
                Take a look at some of our recent projects and see how
                we&apos;ve helped other businesses elevate their brand and drive
                business growth.
              </p>
            </div>
            <div className="mt-8">
              <div className="mx-auto flex w-fit rounded-full bg-white p-2">
                <button className="rounded-3xl bg-gradient-to-r from-[#38C682] to-[#00796D] px-4 py-2 text-white transition-all duration-300">
                  <span className="md:hidden">UI/UX</span>
                  <span className="hidden md:block">UI/UX Design</span>
                </button>
                <button className="rounded-3xl px-4 py-2 text-black transition-all duration-300">
                  <span className="md:hidden">Dev</span>
                  <span className="hidden md:block">Development</span>
                </button>
                <button className="rounded-3xl px-4 py-2 text-black transition-all duration-300">
                  <span className="md:hidden">Digital</span>
                  <span className="hidden md:block">Digital Marketing</span>
                </button>
              </div>
              <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                <CardProject
                  sourceImg="/images/project1.png"
                  title="Title"
                  label="UI / UX"
                  description="We are designed to help your business thrive in the online world."
                />
                <CardProject
                  sourceImg="/images/project2.png"
                  title="Title"
                  label="Digital Marketing"
                  description="We are designed to help your business thrive in the online world."
                />
                <CardProject
                  sourceImg="/images/project1.png"
                  title="Title"
                  label="Socmed Management"
                  description="We are designed to help your business thrive in the online world."
                />
                <CardProject
                  sourceImg="/images/project2.png"
                  title="Title"
                  label="Website"
                  description="We are designed to help your business thrive in the online world."
                />
                <CardProject
                  sourceImg="/images/project1.png"
                  title="Title"
                  label="Mobile App"
                  description="We are designed to help your business thrive in the online world."
                />
                <CardProject
                  sourceImg="/images/project2.png"
                  title="Title"
                  label="Web App"
                  description="We are designed to help your business thrive in the online world."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
