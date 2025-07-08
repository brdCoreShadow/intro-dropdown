import * as SC from "./BurgerMenuDashboard"

import MenuPortal from "../MenuPortal/MenuPortal";

const BurgerMenuDashboard = () => {
  return (
    <MenuPortal>
      <SC.BurgerMenuDashboardCon>
        <SC.BurgerMenuDashboardBtnCon>
          <SC.CloseBtn></SC.CloseBtn>
        </SC.BurgerMenuDashboardBtnCon>
        <div>
          <div>
            <h3>Features</h3>
            <button>
              <img src="" alt="arrow" />
            </button>
          </div>
          <ul>
            <li></li>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
      </SC.BurgerMenuDashboardCon>
    </MenuPortal>
  );
};

export default BurgerMenuDashboard;
