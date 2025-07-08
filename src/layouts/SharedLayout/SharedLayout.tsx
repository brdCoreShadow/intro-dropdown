import * as SC from "./SharedLayoutStyled"

import { PropsChildren } from "@/utils/types";

const SharedLayout:React.FC<PropsChildren> = ({ children }) => {
  return <SC.SharedLayoutCon>{children}</SC.SharedLayoutCon>;
};

export default SharedLayout;
