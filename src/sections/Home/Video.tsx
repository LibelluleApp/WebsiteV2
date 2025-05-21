"use client";
import TitleSection from "@/src/components/titleSection";
import "@justinribeiro/lite-youtube";

// Création d'un composant wrapper pour lite-youtube
import React from 'react';

// Composant wrapper pour lite-youtube
const LiteYouTube = ({ videoid, videotitle, params, videoStartAt, short }: {
  videoid: string;
  videotitle?: string;
  params?: string;
  videoStartAt?: string;
  short?: boolean;
}) => {
  return React.createElement('lite-youtube', {
    videoid,
    videotitle,
    params,
    videoStartAt,
    short: short ? 'true' : undefined
  });
};

export default function VideoSection() {
  const mainVideoId = "30EjVuj1e7M";
  const verticalVideoId1 = "ULzIpc4vo6M";
  const verticalVideoId2 = "V4LlmDt5jPY";
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
          <div className="h-[350px] md:h-[450px] lg:col-span-2 md:col-span-2 rounded-xl overflow-hidden">
            <LiteYouTube 
              videoid={mainVideoId}
              videotitle="Lire la vidéo principale"
              params="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
          </div>
          <div className="h-[700px] lg:h-[450px] md:h-[800px] rounded-xl overflow-hidden">
            <LiteYouTube 
              videoid={verticalVideoId1}
              videotitle="Lire la vidéo verticale 1"
              params="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              short={true}
            />
          </div>
          <div className="h-[700px] lg:h-[450px] md:h-[800px] rounded-xl overflow-hidden">
            <LiteYouTube 
              videoid={verticalVideoId2}
              videotitle="Lire la vidéo verticale 2"
              params="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              short={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
