import React from "react";
import { use } from "react";

import getYoutubeChannelStatistics from "@/requests/getYoutubeChannelStatistics";
import YoutubeStatisticsWrapper from "./YoutubeStatisticsWrapper";

async function channelStatistics() {
  let { subscriberCount, viewCount, videoCount } =
    await getYoutubeChannelStatistics();
  return { subscriberCount, viewCount, videoCount };
}

const YoutubeStatistics = () => {
  let { subscriberCount, viewCount, videoCount } = use(channelStatistics());
  let statistics = [
    {
      title: "Sub.",
      statistic: subscriberCount,
      icon: (
        <svg
          baseProfile="tiny"
          viewBox="0 0 24 24"
          fill="currentColor"
          height="1em"
          width="1em"
        >
          <path d="M12 14c1.381 0 2.631-.56 3.536-1.465C16.44 11.631 17 10.381 17 9s-.56-2.631-1.464-3.535C14.631 4.56 13.381 4 12 4s-2.631.56-3.536 1.465C7.56 6.369 7 7.619 7 9s.56 2.631 1.464 3.535A4.985 4.985 0 0012 14zm8 1a2.495 2.495 0 002.5-2.5c0-.69-.279-1.315-.732-1.768A2.492 2.492 0 0020 10a2.495 2.495 0 00-2.5 2.5A2.496 2.496 0 0020 15zm0 .59c-1.331 0-2.332.406-2.917.968C15.968 15.641 14.205 15 12 15c-2.266 0-3.995.648-5.092 1.564C6.312 15.999 5.3 15.59 4 15.59c-2.188 0-3.5 1.09-3.5 2.182 0 .545 1.312 1.092 3.5 1.092.604 0 1.146-.051 1.623-.133l-.04.27c0 1 2.406 2 6.417 2 3.762 0 6.417-1 6.417-2l-.02-.255c.463.073.995.118 1.603.118 2.051 0 3.5-.547 3.5-1.092 0-1.092-1.373-2.182-3.5-2.182zM4 15c.69 0 1.315-.279 1.768-.732A2.492 2.492 0 006.5 12.5 2.495 2.495 0 004 10a2.496 2.496 0 00-2.5 2.5A2.495 2.495 0 004 15z" />
        </svg>
      ),
    },

    {
      title: "Views",
      statistic: viewCount,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
          <path d="M5 12a1 1 0 00-1 1v8a1 1 0 002 0v-8a1 1 0 00-1-1zm5-10a1 1 0 00-1 1v18a1 1 0 002 0V3a1 1 0 00-1-1zm10 14a1 1 0 00-1 1v4a1 1 0 002 0v-4a1 1 0 00-1-1zm-5-8a1 1 0 00-1 1v12a1 1 0 002 0V9a1 1 0 00-1-1z" />
        </svg>
      ),
    },
    {
      title: "Videos",
      statistic: videoCount,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
          <path d="M4 8H2v12a2 2 0 002 2h12v-2H4z" />
          <path d="M20 2H8a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2zm-9 12V6l7 4z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="youtube-statistics">
      <div className="mx-auto grid grid-cols-3 sm:gap-10 gap-2">
        {statistics.map((statistic, index) => (
          <div className="sm:pb-5 md:pb-0 py-2" key={statistic.title + index}>
            <YoutubeStatisticsWrapper
              icon={statistic.icon}
              title={statistic.title}
              statistic={parseInt(statistic.statistic)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default YoutubeStatistics;
