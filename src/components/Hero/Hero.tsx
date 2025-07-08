import * as SC from "./HeroStyled";

import heroPicMob from "../../assets/images/image-hero-mobile.png";

const Hero: React.FC = () => {
  return (
    <SC.HeroCon>
      <SC.HeroPicThumb>
        <img src={heroPicMob} alt="hero" />
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
      </SC.HeroDashboard>
    </SC.HeroCon>
  );
};

export default Hero;
