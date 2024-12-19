import Image from "next/image";

interface CardProps {
  name: string;
  description: React.ReactNode;
  alignCenter: boolean;
  btn: string | false;
  img: string[];
  alt: string[];
  size: "md" | "lg" | "xl";
}

export default function Card({
  name,
  description,
  alignCenter,
  btn,
  img,
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
        <div className="w-fit py-1 px-4 rounded-[56px] border border-grey">
          <p className="text-center text-grey text-sm font-medium font-host-grotesk">
            {name}
          </p>
        </div>
        <div className="text-wrap">{description}</div>
        {btn !== false && (
          <div className="mt-4">
            <button className="w-fit bg-blue-700 text-blue-50 py-2 px-12 rounded-xl font-medium">
              {btn}
            </button>
          </div>
        )}
      </div>
      <div
        className={`relative w-full mt-4 z-4 ${
          size === "md" ? "h-[200px]" : "h-[300px]"
        }`}
      >
        <Image
          src={img[0]}
          alt={alt[0]}
          width={250}
          height={472}
          className="s:scale-100 scale-90 absolute right-8 transform top-10 border-8 rounded-3xl shadow border-blue-200"
        />
        <Image
          src={img[1]}
          alt={alt[1]}
          width={250}
          height={472}
          className="s:scale-100 scale-90 absolute right-[-70px] transform top-0 border-8 rounded-3xl shadow border-blue-200"
        />
      </div>

      <div className="absolute top-0 h-full w-full bg-gradient-to-tr from-[#edf8ff] from-30% to-[#edf8ff00] z-4"></div>
    </div>
  );
}
