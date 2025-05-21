"use client";

import { useEffect } from 'react';
import TitleSection from "@/src/components/titleSection";

interface VideoType {
  id: string;
  title: string;
  isShort: boolean;
}

export default function VideoSection() {
  const videos: VideoType[] = [
    {
      id: "30EjVuj1e7M",
      title: "Présentation de Libellule",
      isShort: false,
    },
    {
      id: "ULzIpc4vo6M",
      title: "Short Libellule 1",
      isShort: true,
    },
    {
      id: "V4LlmDt5jPY",
      title: "Short Libellule 2",
      isShort: true,
    },
  ];

  useEffect(() => {
    import('@justinribeiro/lite-youtube');
  }, []);

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
            Découvrez Libellule à travers des vidéos de ses fonctionnalités et mises à jour.
          </p>
        }
      />

      <div className="grid gap-6 auto-rows-min">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Vidéo principale */}
          <div className="h-[350px] md:h-[450px] lg:col-span-2 md:col-span-2">
            <lite-youtube
              videoid={videos[0].id}
              videotitle={videos[0].title}
              style={{ borderRadius: '0.75rem', width: '100%', height: '100%', '--aspect-ratio': '16 / 9' } as React.CSSProperties}
              posterquality="maxresdefault"
            ></lite-youtube>
          </div>

          {/* Vidéos Shorts */}
          {videos.slice(1).map((video) => (
            <div key={video.id} className='h-[700px] lg:h-[450px] md:h-[800px]'>
              <lite-youtube
                videoid={video.id}
                videotitle={video.title}
                style={{ borderRadius: '0.75rem', width: '100%', height: '100%', '--aspect-ratio': '9 / 16' } as React.CSSProperties}
                params={video.isShort ? "controls=0&modestbranding=1" : ""}
                short={video.isShort ? "" : undefined}
                posterquality="maxresdefault"
              ></lite-youtube>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}