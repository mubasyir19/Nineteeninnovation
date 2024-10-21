import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Badge from '../atoms/Badge';

interface CardProjectProps {
  sourceImg: string;
  title: string;
  label: string;
  description: string;
}

export default function CardProject({ sourceImg, title, label, description }: CardProjectProps) {
  const [openProject, setOpenProject] = useState(false);

  const handleOpen = () => {
    setOpenProject(!openProject);
  };

  return (
    <div className='bg-[#181D2A] rounded-3xl w-full h-fit p-3 md:p-4'>
      <div className='relative'>
        <Image
          src={sourceImg}
          height={280}
          width={303}
          alt='project'
          className='rounded-xl w-full h-full object-cover'
          onClick={handleOpen}
        />
        {openProject && (
          <div
            className='absolute w-full h-full inset-0 flex justify-center items-center bg-black bg-opacity-50 transition-all duration-300'
            onClick={handleOpen}
          >
            <button className=''>
              <Image src='/images/direct.png' height={218} width={218} alt='link-project' className='' />
            </button>
          </div>
        )}
      </div>
      <div className='mt-4'>
        <p className='text-lg text-white font-bold'>{title}</p>
        <Badge label={label} />
        <p className='text-[#B6B8BC] text-base mt-2'>{description}</p>
      </div>
    </div>
  );
}
