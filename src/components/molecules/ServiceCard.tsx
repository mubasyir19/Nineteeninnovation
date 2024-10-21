import Image from 'next/image';
import React, { useState } from 'react';
import ArrowRight from '../../../public/icons/arrow-right.svg';

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
}

export default function ServiceCard({ number, title, description }: ServiceCardProps) {
  const [isOpen, setIsMenuOpen] = useState(false);

  const toogleOpen = () => {
    setIsMenuOpen(!isOpen);
  };

  return (
    <div className='service bg-[#F8F8F8] p-6 my-4 xl:p-10 rounded-xl w-full h-fit '>
      <div className='flex justify-between'>
        <div className='flex gap-x-5 items-center'>
          <h3 className='my-auto text-xl xl:text-2xl font-bold text-[#3D414C] w-8'>{number}</h3>
          <h3 className='my-auto text-xl xl:text-2xl font-bold text-[#3D414C]'>{title}</h3>
        </div>
        <button onClick={toogleOpen}>
          <Image src={ArrowRight} height={15} width={15} alt='arrow' />
        </button>
      </div>
      {isOpen && <p className='mt-5 transition-all duration-200'>{description}</p>}
    </div>
  );
}
