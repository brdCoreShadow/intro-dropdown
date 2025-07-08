import * as SC from "./HeroStyled";

import heroPicMob from "../../assets/images/image-hero-mobile.png";
import heroPicDesk from "../../assets/images/image-hero-desktop.png"
import { useScreenSize } from "@/hooks/useScreenSize";
import Partners from "../Partners/Partners";

const Hero: React.FC = () => {

const {isDesktop} = useScreenSize()

  return (
    <SC.HeroCon>
      <SC.HeroPicThumb>
        <img src={isDesktop ? heroPicDesk : heroPicMob} alt="hero" />
      </SC.HeroPicThumb>
      <SC.HeroDashboard>
        <SC.HeroContentCon>
          <h3>Make remote work</h3>
          <p>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
        </SC.HeroContentCon>
        <SC.HeroBtn>Learn More</SC.HeroBtn>
        {isDesktop && <Partners/>}
      </SC.HeroDashboard>
    </SC.HeroCon>
  );
};

export default Hero;
