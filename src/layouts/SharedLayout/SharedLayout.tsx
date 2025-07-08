import Hero from "@/components/Hero/Hero";
import * as SC from "./SharedLayoutStyled";
import Partners from "@/components/Partners/Partners";

const SharedLayout: React.FC = () => {
  return (
    <SC.SharedLayoutCon>
      <Hero />
      <Partners />
    </SC.SharedLayoutCon>
  );
};

export default SharedLayout;
