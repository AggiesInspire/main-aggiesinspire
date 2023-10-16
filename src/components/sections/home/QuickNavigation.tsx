import Image from "next/image";

import LargeHeading from "@/components/text-formatting/LargeHeading";

import quickNavigation from "@/data/images/sections/home/quickNavigation";

const QuickNavigation = () => {
  return (
    <section className="w-39/40 mx-auto py-10">
      <div className="mx-auto grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
        <div className="order-first ml-5 pb-5">
          <a
            href="https://www.guidestar.org/profile/shared/c5ebdd2f-9aca-481f-9b2a-5439fc5f8318"
            target="_blank"
          >
            <Image
              alt="guidestar"
              src="https://widgets.guidestar.org/TransparencySeal/10021967"
              width={200}
              height={200}
            />
          </a>
        </div>

        {quickNavigation.map((item, index) => {
          return (
            <div className={` px-5 py-5 md:pb-2 pb-5 `} key={item.title}>
              <LargeHeading size={"xs"}>{item.heading}</LargeHeading>
              <div className="py-3 text-white underline text-lg hover:no-underline">
                <a href={item.link} target="_blank">
                  {item.anchorDescription}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default QuickNavigation;
