import React from "react";
import InViewEffect from "@/components/text-formatting/InViewEffect";
import NumberOdometer from "@/components/text-formatting/NumberOdometer";

type Props = {
  title: string;
  statistic?: number;
  icon: any;
};

const YoutubeStatisticsWrapper = ({ title, statistic, icon }: Props) => {
  return (
    <div className="container w-full">
      <div className="">
        <div className="flex space-x-4 items-center h-24">
          <div>
            <div className="bg-blue-200 rounded-full w-12 h-12 text-red-800 flex justify-center items-center">
              {icon}
            </div>
          </div>
          <div>
            <div className="text-gray-400">{title}</div>
            <div className="text-2xl font-bold text-gray-900">
              <InViewEffect>
                <NumberOdometer numberValue={statistic!} />
              </InViewEffect>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeStatisticsWrapper;
