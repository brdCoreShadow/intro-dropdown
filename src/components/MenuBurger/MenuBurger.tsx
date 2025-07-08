import * as SC from "./MenuBurgerStyled"

import burgerIcon from "../../assets/images/icon-menu.svg"

const MenuBurger:React.FC = () => {
    return ( 
        <div>
            <SC.MenuBtn>
                <img src={burgerIcon} alt="burger" />
            </SC.MenuBtn>
        </div>
     );
}
 
export default MenuBurger;