import BentoSection from "@/src/sections/Home/Bento";
import { FAQ } from "@/src/sections/Home/FAQ";
import HeroSection from "@/src/sections/Home/Hero";
import TimelineSection from "@/src/sections/Home/Timeline";
import VideoSection from "@/src/sections/Home/Video";
import InstallApp from "@/src/sections/InstallApp";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <div className="lg:gap-40 flex flex-col gap-16">
        <BentoSection />
        <TimelineSection />
        <FAQ />
        <VideoSection />
        <InstallApp />
      </div>
    </div>
  );
}
