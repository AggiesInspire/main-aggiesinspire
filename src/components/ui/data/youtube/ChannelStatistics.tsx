import React from "react";
import CountUp from "../../text-formatting/CountUp";
import InViewEffect from "../../text-formatting/InViewEffect";

type Props = {
  title: string;
  statistic?: number;
  icon: any;
};

const ChannelStatistics = ({ title, statistic, icon }: Props) => {
  return (
    <div className="container w-full">
      <div className="bg-primary-100 shadow-sm rounded-lg p-5">
        <div className="flex space-x-4 items-center h-24">
          <div>
            <div className="bg-primary-200 rounded-full w-12 h-12 text-primary-500 flex justify-center items-center">
              {icon}
            </div>
          </div>
          <div>
            <div className="text-gray-400">{title}</div>
            <div className="text-2xl font-bold text-gray-900">
              <InViewEffect>
                <CountUp end={statistic} />
              </InViewEffect>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelStatistics;
