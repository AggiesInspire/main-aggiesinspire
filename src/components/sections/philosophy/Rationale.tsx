import LargeHeading from "@/components/text-formatting/LargeHeading";
import Paragraph from "@/components/text-formatting/Paragraph";

const Rationale = () => {
  return (
    <div className="pt-20 sm:w-39/40 xs:w-11/12 mx-auto text-black pb-32">
      <div className="border border-black"></div>
      <div className="flex md:flex-row flex-col md:gap-36 gap-20 pt-3">
        <div className="flex flex-col ">
          <div className="font-bold">Published</div>
          <div className="whitespace-nowrap">October 20, 2023</div>
        </div>
        {/* Content */}
        <div className="sm:mr-[35%] gap-14 flex flex-col">
          <Paragraph id="introduction">
            The question of motivation is imperative to answer for a society to
            either maintain or achieve prosperity. However, the answer is not so
            simple. Each individual is a conglomeration of various experiences
            and belief patterns. One specific motivator may work for one
            individual, but not the next. Of course there are generalities that
            can be made that the majority of people would agree to be motivators
            such as improved or maintenance of positive well-being. But, how
            long can one remain motivated by a generality? Are there stressors
            or events that may occur that could quench one’s motivation? If so,
            why? Does the degree of emotional impact matter when it comes to
            maintaining motivation, despite the circumstances? The questions are
            endless, yet the answer still remains elusive.
          </Paragraph>
          <div id="identifcation-through-commonalities">
            <LargeHeading size={"xs"} className="text-black">
              Identification through Commonalities
            </LargeHeading>
            {/* First paragraph of ITC */}
            <Paragraph>
              What do we mean by “identification through commonalities”? Before
              answering this question, take some time right now to consider
              those who have influenced you in your current pursuits. Amongst
              them, were there any that you idolized? If there were, ask
              yourself why did I idolize them? Was there a moment that you
              believed you could be just like them? Why did you think that way?
            </Paragraph>
            <Paragraph>
              There are people who most people would dream of becoming. However,
              wishing one was compared to that of wishing one will be are
              different. The implication of the former, is a dream that will not
              manifest itself in the physical reality. On the other hand, the
              latter implies the possibility of that dream coming to fruition.
              When contrasting the characteristics of people that fall into
              these two categories, it is evident that the former has some
              degree of relation to the one dreaming. Whether it is through a
              deep connection, shared experiences, or even superficial
              qualities, there is an identification with that person through
              commonalities.
            </Paragraph>

            <Paragraph>
              It is our belief that seeing individuals from similar backgrounds
              or experiences excel can be a form of inspiration and motivation
              because of their relatability, hence the notion of the
              identification through commonalities.
            </Paragraph>
          </div>
          <div id="bequeath-nuanced-knowledge">
            <LargeHeading size={"xs"} className="text-black">
              Bequeath Nuanced Knowledge
            </LargeHeading>
            <Paragraph>
              Knowledge is imperative for decision making, especially when it
              comes to one&apos;s future. There are many stories of one&apos;s
              who have soul search for so long to finally found a profession
              that matches. Among those searching who were fortunate to find the
              profession that suits them, there was precious time lost
              throughout the journey. This can be an area that can negatively
              affect motivation through demoralization. Thus to decrease the
              amount of &quot;time lost&quot;, we hope to provide easily
              accessible valuable information from those who are in the
              profession of one&apos;s interest.
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rationale;
