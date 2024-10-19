import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export default function Button({ onClick, children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className='bg-gradient-to-r from-[#38C682] to-[#00796D] rounded-full py-4 px-6 text-white text-base font-medium'
    >
      {children}
    </button>
  );
}
