'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import WhiteArrowRight from '../../public/icons/white-arrow-right.svg';
import Ornament from '../../public/images/ornament.png';
import CardProject from '@/components/molecules/CardProject';
import ServiceCard from '@/components/molecules/ServiceCard';

export default function Home() {
  return (
    <>
      <section id='hero' className='h-screen lg:h-full w-full bg-[#0C111F]'>
        <div className='bg-hero bg-cover md:bg-cover md:bg-center h-screen lg:h-full w-full px-6 lg:pb-24 lg:py-40 flex justify-center items-center'>
          <div className='xl:w-3/4 mx-auto'>
            <div className='py-2 px-3 bg-white bg-opacity-10 text-center w-fit mx-auto rounded-full'>
              <p className='font-medium text-[10px] text-white'>NUMBER ONE DIGITAL CREATIVE AGENCY</p>
            </div>
            <div className='mt-2'>
              <div className='text-center'>
                <h1 className='text-4xl lg:text-6xl xl:text-7xl text-white font-bold'>
                  <span className='bg-gradient-to-r from-[#38C682] to-[#00796D] bg-clip-text text-transparent font-extrabold'>
                    Smart Choices
                  </span>{' '}
                  <br />
                  For Your Business Growth
                </h1>
                <p className='text-[#B6B8BC] text-sm lg:text-xl lg:w-3/4 text-center mx-auto font-medium mt-4 px-2'>
                  We&apos;re a team of experienced designers, developers, and marketers, passionate about delivering
                  exceptional digital solutions.
                </p>
              </div>
              <div className='mt-10'>
                <button className='mx-auto flex justify-center gap-x-3 bg-gradient-to-r from-[#38C682] to-[#00796D] py-4 px-6 rounded-full w-fit text-white font-medium'>
                  <span className='my-auto'>Contact Us</span>
                  <Image src={WhiteArrowRight} height={15} width={15} alt='white arrow right' className='my-auto' />
                </button>
              </div>
            </div>
            <div className='mt-11 lg:hidden'>
              <div className='relative overflow-hidden w-fit mx-auto'>
                <Image src='/images/shape-sm.png' height={347} width={327} alt='shape' className='mx-auto' />
                <Image
                  src='/images/circle-lg.png'
                  height={364}
                  width={364}
                  alt='shape'
                  className='absolute -top-28 -left-24'
                />
                <div className='absolute top-4 inset-x-0'>
                  <p className='text-center text-white text-lg font-semibold'>
                    Benefits of <br /> improving your business
                  </p>
                  <Swiper
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className='mySwiper mt-10'
                  >
                    <SwiperSlide>
                      <Image src='/images/expand.png' height={108} width={108} alt='special' className='mx-auto' />
                      <p className='text-white text-center mt-2 font-medium text-2xl'>Expanding the Market</p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image src='/images/cost.png' height={108} width={108} alt='special' className='mx-auto' />
                      <p className='text-white text-center mt-2 font-medium text-2xl'>Cost Effective</p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image
                        src='/images/professional.png'
                        height={108}
                        width={108}
                        alt='special'
                        className='mx-auto'
                      />
                      <p className='text-white text-center mt-2 font-medium text-2xl'>More Professional</p>
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image src='/images/attract.png' height={108} width={108} alt='special' className='mx-auto' />
                      <p className='text-white text-center mt-2 font-medium text-2xl'>Attract Client</p>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
            <div className='mt-20 hidden lg:block'>
              <div className='relative overflow-hidden h-fit w-fit mx-auto'>
                <Image src='/images/shape-lg.png' height={334} width={1280} alt='shape' className='mx-auto h-full' />
                <Image
                  src='/images/circle-lg.png'
                  height={500}
                  width={500}
                  alt='shape'
                  className='absolute -top-60 -left-32'
                />
                <Image
                  src='/images/circle-sm.png'
                  height={364}
                  width={364}
                  alt='shape'
                  className='absolute -bottom-36 -right-24'
                />
                <div className='absolute top-6 inset-x-0'>
                  <p className='text-center text-white text-2xl xl:text-[32px] font-semibold'>
                    Benefits of improving your business
                  </p>
                  <div className='grid grid-cols-4 mt-8 xl:mt-16'>
                    <div>
                      <Image src='/images/expand.png' height={108} width={108} alt='special' className='mx-auto' />
                      <p className='text-white text-center mt-2 font-medium lg:text-xl xl:text-2xl'>
                        Expanding the Market
                      </p>
                    </div>
                    <div>
                      <Image src='/images/cost.png' height={108} width={108} alt='special' className='mx-auto' />
                      <p className='text-white text-center mt-2 font-medium lg:text-xl xl:text-2xl'>Cost Effective</p>
                    </div>
                    <div>
                      <Image
                        src='/images/professional.png'
                        height={108}
                        width={108}
                        alt='special'
                        className='mx-auto'
                      />
                      <p className='text-white text-center mt-2 font-medium lg:text-xl xl:text-2xl'>
                        More Professional
                      </p>
                    </div>
                    <div>
                      <Image src='/images/attract.png' height={108} width={108} alt='special' className='mx-auto' />
                      <p className='text-white text-center mt-2 font-medium lg:text-xl xl:text-2xl'>Attract Client</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='px-6 md:px-10 lg:px-20 py-14'>
        <div className='w-full xl:w-3/4 mx-auto'>
          <h1 className='text-[#0C111F] text-4xl xl:text-5xl font-bold text-center'>
            The Services We Offer{' '}
            <span className='bg-gradient-to-r from-[#38C682] to-[#00796D] bg-clip-text text-transparent font-extrabold'>
              For You
            </span>
          </h1>
          <div className='mt-8 xl:mt-16'>
            <ServiceCard
              number='01'
              title='UI / UX Design'
              description='UI UIX kami menyediakan design yang detail yang bisa membuat penggunanya tertarik dan nyaman ketika menggunakan sistem anda.'
            />
            <ServiceCard number='02' title='System Development' description='Ini adalah deskripsi' />
            <ServiceCard number='03' title='Digital Marketing' description='Ini adalah deskripsi' />
          </div>
        </div>
      </section>
      <section className='relative overflow-hidden bg-gradient-opacity px-6 py-14 md:px-10 lg:py-20'>
        <div className='w-full xl:w-3/4 mx-auto'>
          <h3 className='text-2xl lg:text-3xl xl:text-5xl font-medium text-[#0C111F]'>
            We are passionate about helping businesses grow and succeed in the digital age. We take pride in our work
            and strive to exceed your expectations every time.
          </h3>
          <div className='mt-8 lg:mt-16 bg-gradient-green rounded-3xl grid grid-cols-1 gap-y-6 p-6 lg:p-8 lg:grid-cols-4'>
            <div className='text-center'>
              <h2 className='text-5xl xl:text-6xl font-bold text-white'>10 +</h2>
              <p className='text-base xl:text-2xl text-[#F3F3F3]'>Years of Experiences</p>
            </div>
            <div className='text-center'>
              <h2 className='text-5xl xl:text-6xl font-bold text-white'>666 +</h2>
              <p className='text-base xl:text-2xl text-[#F3F3F3]'>Project Completed</p>
            </div>
            <div className='text-center'>
              <h2 className='text-5xl xl:text-6xl font-bold text-white'>555 +</h2>
              <p className='text-base xl:text-2xl text-[#F3F3F3]'>Satisfied Client</p>
            </div>
            <div className='text-center'>
              <h2 className='text-5xl xl:text-6xl font-bold text-white'>15 +</h2>
              <p className='text-base xl:text-2xl text-[#F3F3F3]'>Award Achieved</p>
            </div>
          </div>
          <div className='absolute top-2 -left-6 lg:top-10 lg:left-10 h-[144px] w-[144px] bg-gradient-opacity rounded-full'></div>
          <Image
            src={Ornament}
            height={474}
            width={1019}
            alt='ornmnt'
            className='absolute h-full w-full top-24 -right-52 lg:top-20 lg:-right-36'
          />
        </div>
      </section>
      <section className='bg-[#0C111F] w-full h-full'>
        <div className='bg-grid h-full w-full bg-cover bg-center'>
          <div className='w-full mx-auto px-6 md:px-10 lg:px-20 py-14'>
            <div className='text-center'>
              <h1 className='text-4xl text-white font-bold'>
                Our Project Have Been{' '}
                <span className='bg-gradient-to-r from-[#38C682] to-[#00796D] bg-clip-text text-transparent font-bold'>
                  Done
                </span>
              </h1>
              <p className='text-[#B6B8BC] mt-4'>
                Take a look at some of our recent projects and see how we&apos;ve helped other businesses elevate their
                brand and drive business growth.
              </p>
            </div>
            <div className='mt-8'>
              <div className='bg-white rounded-full w-fit mx-auto p-2 flex'>
                <button className='py-2 px-4 rounded-3xl text-white bg-gradient-to-r from-[#38C682] to-[#00796D] transition-all duration-300'>
                  <span className='md:hidden'>UI/UX</span>
                  <span className='hidden md:block'>UI/UX Design</span>
                </button>
                <button className='py-2 px-4 rounded-3xl text-black transition-all duration-300'>
                  <span className='md:hidden'>Digital</span>
                  <span className='hidden md:block'>Digital Marketing</span>
                </button>
                <button className='py-2 px-4 rounded-3xl text-black transition-all duration-300'>
                  <span className='md:hidden'>SMM</span>
                  <span className='hidden md:block'>Socmed Management</span>
                </button>
                <button className='py-2 px-4 rounded-3xl text-black transition-all duration-300'>
                  <span className='md:hidden'>Dev</span>
                  <span className='hidden md:block'>Development</span>
                </button>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16'>
                <CardProject
                  sourceImg='/images/project1.png'
                  title='Title'
                  label='UI / UX'
                  description='We are designed to help your business thrive in the online world.'
                />
                <CardProject
                  sourceImg='/images/project2.png'
                  title='Title'
                  label='Digital Marketing'
                  description='We are designed to help your business thrive in the online world.'
                />
                <CardProject
                  sourceImg='/images/project1.png'
                  title='Title'
                  label='Socmed Management'
                  description='We are designed to help your business thrive in the online world.'
                />
                <CardProject
                  sourceImg='/images/project2.png'
                  title='Title'
                  label='Website'
                  description='We are designed to help your business thrive in the online world.'
                />
                <CardProject
                  sourceImg='/images/project1.png'
                  title='Title'
                  label='Mobile App'
                  description='We are designed to help your business thrive in the online world.'
                />
                <CardProject
                  sourceImg='/images/project2.png'
                  title='Title'
                  label='Web App'
                  description='We are designed to help your business thrive in the online world.'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
