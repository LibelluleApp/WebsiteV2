import BentoSection from "@/src/sections/Home/Bento";
import HeroSection from "@/src/sections/Home/Hero";
import TimelineSection from "@/src/sections/Home/Timeline";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <BentoSection />
      <TimelineSection />
    </div>
  );
}
