import React from "react";

const getYoutubeChannelStatistics = async (): Promise<ChannelStatistics> => {
  const response = await fetch(
    process.env.URL!,
    //{ cache: "no-store" }
  );
  const json = await response.json();
  if (!response.ok) throw new Error("failed to fetch data");

  const channelStatistics: ChannelStatistics = {
    viewCount: json[0].totalViews,
    subscriberCount: json[0].totalSubscribers,
    videoCount: json[0].totalVideos,
  };

  return channelStatistics;
};

export default getYoutubeChannelStatistics;
