import { Route, Routes } from "react-router-dom";
import Logo from "./components/Logo/Logo";
import { MenuBtn } from "./components/MenuBurger/MenuBurgerStyled";
import Header from "./layouts/Header/Header";
import SharedLayout from "./layouts/SharedLayout/SharedLayout";
import BurgerMenuDashboard from "./components/BurgerMenuDashboard/BurgerMenuDashboard";

function App() {
  return (
    <div>
      <Header>
        <Logo />
        <MenuBtn />
      </Header>
      <Routes>
        <Route path="/" element={<SharedLayout />} />
      </Routes>
      <BurgerMenuDashboard/>
    </div>
  );
}

export default App;
