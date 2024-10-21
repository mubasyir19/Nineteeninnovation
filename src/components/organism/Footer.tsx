import Image from 'next/image';
import React from 'react';
import WhiteArrowRight from '../../../public/icons/white-arrow-right.svg';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='relative overflow-hidden h-full w-full bg-[#0C111F] rounded-t-3xl'>
      <div className='px-6 py-16 md:px-16 md:py-10 lg:px-20 w-full xl:mx-auto'>
        <div className='flex flex-col mt-6 w-ful md:flex-row justify-center md:justify-between items-center mx-auto text-center md:text-start'>
          <h2 className='text-2xl text-white md:text-xl lg:text-2xl font-semibold'>
            Let&apos;s discuss and bring your vision to life.
          </h2>
          <button className='mx-auto md:mx-0 mt-6 md:mt-0 flex justify-center gap-x-3 bg-gradient-to-r from-[#38C682] to-[#00796D] py-4 px-6 rounded-full w-fit text-white font-medium'>
            <span className='my-auto md:text-xs lg:text-base'>Let&apos;s Talk</span>
            <Image src={WhiteArrowRight} height={15} width={15} alt='white arrow right' className='my-auto' />
          </button>
        </div>
        <hr className='border border-[#3D414C] w-full mx-auto mt-8' />
        <div className='mt-24 flex flex-col md:flex-row md:gap-x-10 md:items-center md:justify-between'>
          <div className='md:w-1/2'>
            <h1 className='text-white my-auto text-2xl'>
              <span className='bg-gradient-to-r from-[#38C682] to-[#00796D] bg-clip-text text-transparent font-extrabold'>
                Nineteen
              </span>
              <span className='bg-gradient-to-r from-[#F5921E] to-[#8f4c00] bg-clip-text text-transparent font-semibold'>
                Innovation
              </span>
            </h1>
            <p className='text-[#B6B8BC] text-base mt-2 w-full md:w-3/4 lg:w-1/2'>
              We&apos;re a team of experienced designers, developers, and marketers, passionate about delivering
              exceptional digital solutions.
            </p>
            <p className='text-[#B6B8BC] text-base mt-8'>mahdymubasyir19@gmail.com</p>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-6 mt-10 md:w-1/2'>
            <div className='menu'>
              <p className='text-white font-bold'>Menu</p>
              <ul className='mt-4 flex flex-col gap-y-3 text-[#B6B8BC]'>
                <li>
                  <Link href='#'>Service</Link>
                </li>
                <li>
                  <Link href='#'>Projects</Link>
                </li>
                <li>
                  <Link href='#'>About Us</Link>
                </li>
                <li>
                  <Link href='#'>Contact</Link>
                </li>
              </ul>
            </div>
            <div className='support'>
              <p className='text-white font-bold'>Support</p>
              <ul className='mt-4 flex flex-col gap-y-3 text-[#B6B8BC]'>
                <li>
                  <Link href='#'>FAQ</Link>
                </li>
                <li>
                  <Link href='#'>Privacy Policy</Link>
                </li>
                <li>
                  <Link href='#'>Terms of Service</Link>
                </li>
              </ul>
            </div>
            <div className='social-media'>
              <p className='text-white font-bold'>Social Media</p>
              <ul className='mt-4 flex flex-col gap-y-3 text-[#B6B8BC]'>
                <li>
                  <Link href='#'>Linked In</Link>
                </li>
                <li>
                  <Link href='#'>Instagram</Link>
                </li>
                <li>
                  <Link href='#'>Github</Link>
                </li>
                <li>
                  <Link href='#'>Behance</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className='border border-[#3D414C] w-full mx-auto mt-8' />
        <p className='text-start text-base md:text-center text-[#B6B8BC] mt-8'>
          Copyright © 2024 by NineteenInnovation. All rights reserved.
        </p>
      </div>
      <Image src='/images/circle-sm.png' height={364} width={364} alt='shape' className='absolute -top-28 -left-40' />
      <Image
        src='/images/circle-lg.png'
        height={364}
        width={364}
        alt='shape'
        className='absolute -bottom-28 -right-24'
      />
    </footer>
  );
}
