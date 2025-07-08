import { Route, Routes } from "react-router-dom";
import Logo from "./components/Logo/Logo";
import Header from "./layouts/Header/Header";
import BurgerMenuDashboard from "./components/BurgerMenuDashboard/BurgerMenuDashboard";
import Home from "./pages/Home/Home";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { useToggleMenu } from "./hooks/useToggleMenu";
import MenuBurger from "./components/MenuBurger/MenuBurger";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  const { isMenu, openMenu, closeMenu } = useToggleMenu();

  return (
    <div>
      <Header>
        <Logo />
        <MenuBurger openMenu={openMenu} />
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      {isMenu && <BurgerMenuDashboard closeMenu={closeMenu} isMenu={isMenu} />}
    </div>
  );
}

export default App;
