import Hero from "./components/Hero/Hero"
import Logo from "./components/Logo/Logo"
import { MenuBtn } from "./components/MenuBurger/MenuBurgerStyled"
import Partners from "./components/Partners/Partners"
import Header from "./layouts/Header/Header"
import SharedLayout from "./layouts/SharedLayout/SharedLayout"


function App() {

  return (
    <div>
    <Header>
      <Logo/>
      <MenuBtn/>
    </Header>
    <SharedLayout>
      <Hero/>
      <Partners/>
    </SharedLayout>
    </div>
  )
}

export default App
