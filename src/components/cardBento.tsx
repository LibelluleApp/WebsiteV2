"use client";
import Image from "next/image";
import Tag from "./tag";
import { LearnMoreButton } from "@/src/components/FAQBtn";

interface CardProps {
  name: string;
  description: React.ReactNode;
  alignCenter: boolean;
  btn: string | false;
  screens: [string?, string?, string?][]; // Tableau avec URL, x, et y
  alt: string[];
  size: "md" | "lg" | "xl";
}

export default function Card({
  name,
  description,
  alignCenter,
  btn,
  screens,
  alt,
  size,
}: CardProps) {
  return (
    <div
      className={`relative bg-blue-50 rounded-[10px] border border-blue-200 overflow-hidden flex gap-3 ${
        alignCenter === true ? "items-center" : "items-end"
      }`}
    >
      <div
        className={`flex flex-col gap-1 absolute max-w-[70%] ${
          alignCenter === true ? "top-1/2 -translate-y-1/2" : "bottom-0 left-0"
        } p-6 z-5`}
      >
        <Tag name={name} icon={false} alt="" />
        <div className="text-wrap">{description}</div>
        {btn !== false && (
          <div className="mt-4">
            <LearnMoreButton sectionIndex={1} />
          </div>
        )}
      </div>
      <div
        className={`relative w-full z-4 ${
          size === "md" ? "h-[200px]" : "h-[300px]"
        }`}
      >
        {screens.map(([src, top, right], index) => {
          // Vérifier si `src` est vide
          if (!src) return null;

          return (
            <div
              key={index}
              style={{
                position: "absolute",
              }}
              className={`w-fit h-fit ${top || ""} ${right || ""}`} // Classes utilitaires comme `bottom-[-90px]`
            >
              <Image
                src={src}
                alt={alt[index] || "Image"}
                width={250}
                height={472}
                className="lg:scale-100 scale-90 transform border-8 rounded-3xl shadow border-blue-200"
              />
            </div>
          );
        })}
      </div>

      <div
        className={`absolute top-0 h-full w-full ${
          alignCenter === true
            ? "bg-gradient-to-r from-50%"
            : "bg-gradient-to-tr from-30%"
        } from-[#edf8ff] to-[#edf8ff00] z-4`}
      ></div>
    </div>
  );
}
