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
    <section className="flex flex-col gap-10 w-[90%] mx-auto max-w-9xl">
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
      <div className="grid gap-4">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2">
          {/* Vidéo principale - prend 2 colonnes en desktop */}
          <div className="h-[350px] md:h-[450px] lg:col-span-2 md:col-span-2">
            <iframe
              src="https://www.youtube.com/embed/30EjVuj1e7M"
              className="w-full h-full rounded-xl"
              allowFullScreen
            />
          </div>

          {/* Vidéos verticales - chacune prend 1 colonne en desktop */}
          <div className="h-[700px] lg:h-[450px] md:h-[800px]">
            <iframe
              src="https://www.youtube.com/embed/ULzIpc4vo6M"
              className="w-full h-full rounded-xl"
              allowFullScreen
            />
          </div>
          <div className="h-[700px] lg:h-[450px] md:h-[800px]">
            <iframe
              src="https://www.youtube.com/embed/V4LlmDt5jPY"
              className="w-full h-full rounded-xl"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
