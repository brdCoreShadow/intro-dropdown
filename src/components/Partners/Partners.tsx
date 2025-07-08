import * as SC from "./PartnersStyled";

import databizIcon from "../../assets/images/client-databiz.svg";
import audipIcon from "../../assets/images/client-audiophile.svg";
import meetIcon from "../../assets/images/client-meet.svg";
import makerIcon from "../../assets/images/client-maker.svg"

const Partners: React.FC = () => {
  return (
    <SC.PartnersList>
      <li>
        <img src={databizIcon} alt="databiz" width={82}/>
      </li>
      <li>
        <img src={audipIcon} alt="audip" width={53}/>
      </li>
      <li>
        <img src={meetIcon} alt="meet" width={64}/>
      </li>
      <li>
        <img src={makerIcon} alt="maker" width={59}/>
      </li>
    </SC.PartnersList>
  );
};

export default Partners;
