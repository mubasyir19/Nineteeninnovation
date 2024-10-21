import React from "react";

interface BadgeProps {
  label: string;
}

export default function Badge({ label }: BadgeProps) {
  return (
    <div className="mt-2 w-fit rounded-full bg-white bg-opacity-10 px-2 py-1">
      <p className="text-xs text-gray-500">{label}</p>
    </div>
  );
}
