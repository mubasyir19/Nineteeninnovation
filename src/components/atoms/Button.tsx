import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export default function Button({ onClick, children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="rounded-full bg-gradient-to-r from-[#38C682] to-[#00796D] px-6 py-4 text-base font-medium text-white"
    >
      {children}
    </button>
  );
}
