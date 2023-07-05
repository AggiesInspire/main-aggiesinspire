import React from "react";

const getYoutubeChannelStatistics = async (): Promise<ChannelStatistics> => {
  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/channels?part=statistics&id=UCsnFKowiOYcBpVa5m7HI49g&key=${process.env.YOUTUBE_API_KEY}`
    // { cache: "no-store" }
  );
  const json = await response.json();
  if (!response.ok) throw new Error("failed to fetch data");

  const channelStatistics: ChannelStatistics = json.items[0].statistics;

  return channelStatistics;
};

export default getYoutubeChannelStatistics;
