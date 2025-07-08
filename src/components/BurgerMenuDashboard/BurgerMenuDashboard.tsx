import * as SC from "./BurgerMenuDashboardStyled";

import MenuPortal from "../MenuPortal/MenuPortal";

import arrorIcon from "../../assets/images/icon-arrow-down.svg";
import todoIcon from "../../assets/images/icon-todo.svg";
import calendarIcon from "../../assets/images/icon-calendar.svg";
import remindersIcon from "../../assets/images/icon-reminders.svg";
import planningIcon from "../../assets/images/icon-planning.svg";
import { useToggleFeatures } from "@/hooks/useToggleFeatures";
import { useToggleCompany } from "@/hooks/useToggleCompany";
import AuthBoard from "../AuthBoard/AuthBoard";
import { useEffect } from "react";

type Props = {
  closeMenu:()=>void;
  isMenu:boolean;
}

const BurgerMenuDashboard:React.FC<Props> = ({closeMenu, isMenu}) => {
  const { isFeatures, toggleFeatures } = useToggleFeatures();
  const { isCompany, toggleCompany } = useToggleCompany();

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
        <SC.BurgerMenuDashboardCon>
          <SC.BurgerMenuDashboardBtnCon>
            <SC.CloseBtn onClick={closeMenu}></SC.CloseBtn>
          </SC.BurgerMenuDashboardBtnCon>
          <div>
            <SC.DashboardList>
              <SC.Item>
                <SC.ItemTitleCon isFeatures={isFeatures ?? false}>
                  <h3>Features</h3>
                  <button onClick={toggleFeatures}>
                    <img src={arrorIcon} alt="arrow" />
                  </button>
                </SC.ItemTitleCon>
                <SC.SubList isFeatures={isFeatures ?? false}>
                  <SC.SubItem>
                    <img src={todoIcon} alt="todoIcon" />
                    <a href="#">Todo List</a>
                  </SC.SubItem>
                  <SC.SubItem>
                    <img src={calendarIcon} alt="calendarIcon" />
                    <a href="#">Calendar</a>
                  </SC.SubItem>
                  <SC.SubItem>
                    <img src={remindersIcon} alt="remindersIcon" />
                    <a href="#">Reminders</a>
                  </SC.SubItem>
                  <SC.SubItem>
                    <img src={planningIcon} alt="planningIcon" />
                    <a href="#">Planning</a>
                  </SC.SubItem>
                </SC.SubList>
              </SC.Item>
              <SC.Item>
                <SC.ItemTitleCon isCompany={isCompany ?? false}>
                  <h3>Company</h3>
                  <button onClick={toggleCompany}>
                    <img src={arrorIcon} alt="arrow" />
                  </button>
                </SC.ItemTitleCon>
                <SC.SubList isCompany={isCompany ?? false}>
                  <SC.SubItem>
                    <a href="#">History</a>
                  </SC.SubItem>
                  <SC.SubItem>
                    <a href="#">Our Team</a>
                  </SC.SubItem>
                  <SC.SubItem>
                    <a href="#">Blog</a>
                  </SC.SubItem>
                </SC.SubList>
              </SC.Item>
              <SC.Item>
                <a href="#">Careers</a>
              </SC.Item>
              <SC.Item>
                <a href="#">About</a>
              </SC.Item>
            </SC.DashboardList>
          </div>
          <AuthBoard />
        </SC.BurgerMenuDashboardCon>
      </SC.Wrapper>
    </MenuPortal>
  );
};

export default BurgerMenuDashboard;
