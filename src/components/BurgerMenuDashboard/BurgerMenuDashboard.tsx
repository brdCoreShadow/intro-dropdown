import * as SC from "./BurgerMenuDashboardStyled";

import MenuPortal from "../MenuPortal/MenuPortal";

import { useEffect } from "react";
import DashBoard from "./Dashboard";

type Props = {
  closeMenu: () => void;
  isMenu: boolean;
};

const BurgerMenuDashboard: React.FC<Partial<Props>> = ({
  closeMenu,
  isMenu,
}) => {

  useEffect(() => {
    if (isMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenu]);

  return (
    <MenuPortal>
      <SC.Wrapper>
       <DashBoard closeMenu={closeMenu}/>
      </SC.Wrapper>
    </MenuPortal>
  );
};

export default BurgerMenuDashboard;
