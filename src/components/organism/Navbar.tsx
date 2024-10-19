import React from 'react';
import Menu from '../../../public/icons/menu.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <nav className='fixed w-full flex justify-between p-6 lg:hidden'>
        <h1 className='text-white my-auto'>
          <span className='bg-gradient-to-r from-[#38C682] to-[#00796D] bg-clip-text text-transparent font-extrabold'>
            Nineteen
          </span>
          {''}
          <span className='text-[#F5921E] font-semibold'>Innovation</span>
        </h1>
        <Image src={Menu} height={32} width={32} alt='menu' className='my-auto' />
      </nav>
      <nav className='hidden fixed w-full lg:flex justify-between py-4 px-20'>
        <h1 className='text-white my-auto'>
          <span className='bg-gradient-to-r from-[#38C682] to-[#00796D] bg-clip-text text-transparent font-extrabold'>
            Nineteen
          </span>
          <span className='bg-gradient-to-r from-[#F5921E] to-[#8f4c00] bg-clip-text text-transparent font-semibold'>
            Innovation
          </span>
          {''}
          {/* <span className='text-[#F5921E] font-semibold'>Innovation</span> */}
        </h1>
        <div className='my-auto'>
          <ul className='flex gap-x-10'>
            <li>
              <Link href='#' className='text-lg text-white'>
                Home
              </Link>
              <div className='mx-auto w-7 h-[2px] bg-gradient-to-r from-[#38C682] to-[#00796D] rounded-full'></div>
            </li>
            <li>
              <Link href='#' className='text-lg text-white'>
                Service
              </Link>
            </li>
            <li>
              <Link href='#' className='text-lg text-white'>
                Project
              </Link>
            </li>
            <li>
              <Link href='#' className='text-lg text-white'>
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <button className='bg-gradient-to-r from-[#38C682] to-[#00796D] rounded-full py-4 px-6 text-white text-base font-medium'>
          Contact Us
        </button>
      </nav>
    </>
  );
}
