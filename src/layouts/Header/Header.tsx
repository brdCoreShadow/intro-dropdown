import { PropsChildren } from "@/utils/types";
import * as SC from "./HeaderStyled";



const Header: React.FC<PropsChildren> = ({ children }) => {
  return <SC.HeaderCon>{children}</SC.HeaderCon>;
};

export default Header;
