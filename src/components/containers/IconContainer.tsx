import { LazyMotion, m, domAnimation } from "framer-motion";
import LargeHeading from "../text-formatting/LargeHeading";

type Props = {
  Icon: any;
  title: string;
  content: string;
  link?: any;
  childVariant?: any;
};

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const IconContainer = ({ Icon, title, content, link }: Props) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div className="flex flex-row" variants={childVariant}>
        <div className="px-2 md:grid md:place-content-center flex justify-between">
          <Icon size={40} />
        </div>
        <div className="flex flex-col md:px-9 px-2 md:justify-center py-5">
          <LargeHeading size={"sm"} className="text-black">
            {title}
          </LargeHeading>
          <div className="md:py-2 py-9">{content}</div>
        </div>
      </m.div>
    </LazyMotion>
  );
};

export default IconContainer;
