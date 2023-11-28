import LargeHeading from "@/components/text-formatting/LargeHeading";
import YoutubeStatistics from "./YoutubeStatistics";

const Youtube = () => {
  return (
    <div className="flex sm:flex-row flex-col sm:justify-between">
      <LargeHeading className="sm:py-10 py-5 text-gray-800" size={"xs"}>
        Youtube
      </LargeHeading>
      <YoutubeStatistics />
    </div>
  );
};

export default Youtube;
