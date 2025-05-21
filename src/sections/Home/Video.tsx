"use client";

import TitleSection from "@/src/components/titleSection";
import { YouTubeEmbed } from "@next/third-parties/google";

export default function VideoSection() {
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
          <div className="h-[350px] md:h-[450px] lg:col-span-2 md:col-span-2">
            <YouTubeEmbed
              videoid="30EjVuj1e7M"
              params="controls=1"
              className="w-full h-full rounded-xl"
            />
          </div>

          <div className="h-[700px] lg:h-[450px] md:h-[800px]">
            <YouTubeEmbed
              videoid="ULzIpc4vo6M"
              params="controls=1"
              className="w-full h-full rounded-xl"
            />
          </div>
          <div className="h-[700px] lg:h-[450px] md:h-[800px]">
            <YouTubeEmbed
              videoid="V4LlmDt5jPY"
              params="controls=1"
              className="w-full h-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
