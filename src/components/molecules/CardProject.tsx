import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Badge from "../atoms/Badge";

interface CardProjectProps {
  sourceImg: string;
  title: string;
  label: string;
  description: string;
}

export default function CardProject({
  sourceImg,
  title,
  label,
  description,
}: CardProjectProps) {
  const [openProject, setOpenProject] = useState(false);

  const handleOpen = () => {
    setOpenProject(!openProject);
  };

  return (
    <div className="h-fit w-full rounded-3xl bg-[#181D2A] p-3 md:p-4">
      <div className="relative">
        <Image
          src={sourceImg}
          height={280}
          width={303}
          alt="project"
          className="h-full w-full rounded-xl object-cover"
          onClick={handleOpen}
        />
        {openProject && (
          <div
            className="absolute inset-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 transition-all duration-300"
            onClick={handleOpen}
          >
            <button className="">
              <Image
                src="/images/direct.png"
                height={218}
                width={218}
                alt="link-project"
                className=""
              />
            </button>
          </div>
        )}
      </div>
      <div className="mt-4">
        <p className="text-lg font-bold text-white">{title}</p>
        <Badge label={label} />
        <p className="mt-2 text-base text-[#B6B8BC]">{description}</p>
      </div>
    </div>
  );
}
