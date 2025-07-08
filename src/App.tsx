import { Route, Routes } from "react-router-dom";
import Logo from "./components/Logo/Logo";
import { MenuBtn } from "./components/MenuBurger/MenuBurgerStyled";
import Header from "./layouts/Header/Header";
import BurgerMenuDashboard from "./components/BurgerMenuDashboard/BurgerMenuDashboard";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <Header>
        <Logo />
        <MenuBtn />
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <BurgerMenuDashboard/>
    </div>
  );
}

export default App;
