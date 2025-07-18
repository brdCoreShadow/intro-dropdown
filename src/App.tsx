import * as SC from "./AppStyled"

import { Route, Routes } from "react-router-dom";
import Logo from "./components/Logo/Logo";
import Header from "./layouts/Header/Header";
import BurgerMenuDashboard from "./components/BurgerMenuDashboard/BurgerMenuDashboard";
import Home from "./pages/Home/Home";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { useToggleMenu } from "./hooks/useToggleMenu";
import MenuBurger from "./components/MenuBurger/MenuBurger";
import LoginPage from "./pages/LoginPage/LoginPage";
import { useScreenSize } from "./hooks/useScreenSize";
import AuthBoard from "./components/AuthBoard/AuthBoard";
import DashBoard from "./components/BurgerMenuDashboard/Dashboard";

function App() {
  const { isMenu, openMenu, closeMenu } = useToggleMenu();
  const {isDesktop} = useScreenSize()

  return (
    <SC.AppCon>
      <Header>
        <SC.DeskHeaderSubCon>
        <Logo />
        {isDesktop && <DashBoard/>}
        </SC.DeskHeaderSubCon>
        {isDesktop ? <AuthBoard/> :  <MenuBurger openMenu={openMenu} />}
       
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      {isMenu && <BurgerMenuDashboard closeMenu={closeMenu} isMenu={isMenu} />}
    </SC.AppCon>
  );
}

export default App;
