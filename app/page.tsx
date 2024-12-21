import BentoSection from "@/src/sections/Home/Bento";
import { FAQ } from "@/src/sections/Home/FAQ";
// import HeroSection from "@/src/sections/Home/Hero";
import TimelineSection from "@/src/sections/Home/Timeline";

export default function Home() {
  return (
    <div className="">
      {/* <HeroSection /> */}
      <BentoSection />
      <TimelineSection />
      <FAQ />
    </div>
  );
}
