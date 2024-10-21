import React from 'react';

interface BadgeProps {
  label: string;
}

export default function Badge({ label }: BadgeProps) {
  return (
    <div className='px-2 py-1 mt-2 bg-white bg-opacity-10 w-fit rounded-full'>
      <p className='text-xs text-gray-500'>{label}</p>
    </div>
  );
}
