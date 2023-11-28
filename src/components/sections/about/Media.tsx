import LargeHeading from "@/components/text-formatting/LargeHeading";
import Paragraph from "@/components/text-formatting/Paragraph";
import Youtube from "./Youtube";

const Media = () => {
  return (
    <div>
      <LargeHeading className="py-10 text-gray-800" size={"sm"}>
        Media
      </LargeHeading>
      <div className="border border-gray-200"></div>
      {/* Put subscribers with title*/}
      <Youtube />
      {/* insert Youtube component*/}

      <div className="border border-gray-200"></div>
      <LargeHeading className="py-10 text-gray-800" size={"xs"}>
        Inspiring Media
      </LargeHeading>
      <div className="sm:mr-0">
        <Paragraph className="py-3 text-gray-800">Coming Soon...</Paragraph>
      </div>
      {/* insert Inspiring Media component*/}
    </div>
  );
};

export default Media;
