declare module "*.pdf";
type ChannelStatistics = {
  statistics: {
    viewCount: string;
    subscriberCount: string;
    hiddenSubscriberCount: boolean;
    videoCount: string;
  };
};
/* For testing purposes */
type User = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};