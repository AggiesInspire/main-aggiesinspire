import Image from "next/image";
import LargeHeading from "@/components/text-formatting/LargeHeading";
import Paragraph from "@/components/text-formatting/Paragraph";

const Mission = () => {
  return (
    <div className="pt-20 sm:w-39/40 w-11/12 mx-auto">
      <div className="border border-red-950"></div>
      <div className="grid sm:grid-cols-2 grid-cols-1 pt-10 gap-10">
        <div>
          <LargeHeading className="text-gray-800" size={"lg"}>
            Our Vision
          </LargeHeading>
          <Paragraph>
            Our goal is to inspire the next generation by providing free
            programs that will be informative and encouraging to young
            audiences. We have particular focus on inspiring those who are in
            the underrepresented categlory in S.T.E.M. based fields, by
            increasing our outreach to those communities.
          </Paragraph>
        </div>
        <Image
          src={
            "https://res.cloudinary.com/main-aggiesinspire/image/upload/v1697678484/home/geordanna-cordero-2Qg4y32pdCc-unsplash_brghrz"
          }
          alt={"geordanna-cordero-abstract-art"}
          height={900}
          width={600}
          className="md:ml-auto pb-10 pt-5"
        />
      </div>
    </div>
  );
};

export default Mission;
