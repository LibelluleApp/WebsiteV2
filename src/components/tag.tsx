"use client";
import Image from "next/image";

interface TagProps {
  name: string;
  icon: string | false;
  alt: string | "";
}

export default function Tag({ name, icon, alt }: TagProps) {
  return (
    <div className="flex gap-1 justify-center items-center w-fit py-1 px-4 rounded-[56px] border border-grey">
      {icon !== false && <Image src={icon} width={17} height={20} alt={alt} />}
      <p className="text-center text-grey text-sm font-medium font-host-grotesk">
        {name}
      </p>
    </div>
  );
}
