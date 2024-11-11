import Image from "next/image";
import React, { useState } from "react";
import ArrowRight from "../../../public/icons/arrow-right.svg";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
}

export default function ServiceCard({
  number,
  title,
  description,
}: ServiceCardProps) {
  const [isOpen, setIsMenuOpen] = useState(false);

  const toogleOpen = () => {
    setIsMenuOpen(!isOpen);
  };

  return (
    <div className="service my-4 h-fit w-full rounded-xl bg-[#F8F8F8] p-6 xl:p-10">
      <div className="flex justify-between">
        <div className="flex items-center gap-x-5">
          <h3 className="my-auto w-8 text-xl font-bold text-[#3D414C] xl:text-2xl">
            {number}
          </h3>
          <h3 className="my-auto text-xl font-bold text-[#3D414C] xl:text-2xl">
            {title}
          </h3>
        </div>
        <button onClick={toogleOpen}>
          <Image
            src={ArrowRight}
            height={15}
            width={15}
            alt="arrow"
            className={`transform transition-transform duration-300 ${isOpen ? "rotate-90" : "rotate-0"}`}
          />
        </button>
      </div>
      {isOpen && <p className="mt-5">{description}</p>}
    </div>
  );
}
