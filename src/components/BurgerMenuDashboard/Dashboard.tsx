import * as SC from "./BurgerMenuDashboardStyled";

import arrorIcon from "../../assets/images/icon-arrow-down.svg";
import todoIcon from "../../assets/images/icon-todo.svg";
import calendarIcon from "../../assets/images/icon-calendar.svg";
import remindersIcon from "../../assets/images/icon-reminders.svg";
import planningIcon from "../../assets/images/icon-planning.svg";
import { useScreenSize } from "@/hooks/useScreenSize";
import { useToggleCompany } from "@/hooks/useToggleCompany";
import { useToggleFeatures } from "@/hooks/useToggleFeatures";
import AuthBoard from "../AuthBoard/AuthBoard";

type Props = {
  closeMenu: () => void;
  isMenu: boolean;
};

const DashBoard: React.FC<Partial<Props>> = ({ closeMenu }) => {
  const { isFeatures, toggleFeatures } = useToggleFeatures();
  const { isCompany, toggleCompany } = useToggleCompany();
  const { isDesktop } = useScreenSize();

  return (
    <SC.BurgerMenuDashboardCon>
      {!isDesktop && (
        <SC.BurgerMenuDashboardBtnCon>
          <SC.CloseBtn onClick={closeMenu}></SC.CloseBtn>
        </SC.BurgerMenuDashboardBtnCon>
      )}
      <div>
        <SC.DashboardList>
          <SC.Item>
            <SC.ItemTitleCon isFeatures={isFeatures ?? false}>
              <button onClick={toggleFeatures}>
                <h3>Features</h3>
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
             
              <button onClick={toggleCompany}>
                 <h3>Company</h3>
                <img src={arrorIcon} alt="arrow" />
              </button>
            </SC.ItemTitleCon>
            <SC.SubList isCompany={isCompany ?? false}style={{transform:"translate(0%, 110%)"}}>
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
      {!isDesktop && <AuthBoard />}
    </SC.BurgerMenuDashboardCon>
  );
};

export default DashBoard;
