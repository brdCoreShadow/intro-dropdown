import { PropsChildren } from "@/utils/types";
import React from "react";
import ReactDOM from "react-dom";



const MenuPortal: React.FC<PropsChildren> = ({ children }) => {
  const portalRoot = document.getElementById("menu-portal");
  if (!portalRoot) return null;

  return ReactDOM.createPortal(children, portalRoot);
};

export default MenuPortal;
