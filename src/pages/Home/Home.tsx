import * as SC from "./HomeStyled";

import Hero from "@/components/Hero/Hero";
import Partners from "@/components/Partners/Partners";
import { useScreenSize } from "@/hooks/useScreenSize";

const Home = () => {
  const { isDesktop } = useScreenSize();

  return (
    <SC.HomeCon>
      <Hero />
      {!isDesktop && <Partners />}
    </SC.HomeCon>
  );
};

export default Home;
