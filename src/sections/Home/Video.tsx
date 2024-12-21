"use client";

import TitleSection from "@/src/components/titleSection";
// import Plyr from "plyr-react";
// import "plyr/dist/plyr.css";

export default function VideoSection() {
  // learn more https://github.com/sampotts/plyr#the-source-setter
  // const videoSrc: Plyr.SourceInfo = {
  //   type: "video",
  //   sources: [
  //     {
  //       src: "yWtFb9LJs3o",
  //       provider: "youtube",
  //     },
  //   ],
  // };

  return (
    <section className="flex flex-col gap-10 w-[90%] mx-auto max-w-9xl mt-20 overflow-hidden">
      <TitleSection
        title={
          <p className="text-blue-900 text-2xl font-semibold font-host-grotesk">
            Libellule en action 🎬
          </p>
        }
        subtitle={
          <p className="text-grey text-lg font-normal font-outfit">
            Découvrez Libellule autrement à travers ces vidéos illustrant des
            fonctionnalités ou des mises à jour.
          </p>
        }
      />
      <div className="md:h-[500px] md:flex-row flex flex-col gap-4 h-[900px] w-full">
        {/* <Plyr source={videoSrc} />
        <Plyr source={videoSrc} /> */}
        <iframe
          src="https://www.youtube.com/embed/30EjVuj1e7M"
          className="s:h-[40%] md:w-[60%] lg:w-[70%] md:h-full w-full h-[30%] rounded-xl"
          allowFullScreen
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/ULzIpc4vo6M"
          className="s:h-[60%] md:w-[40%] lg:w-[30%] md:h-full w-full h-[70%] rounded-xl"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
