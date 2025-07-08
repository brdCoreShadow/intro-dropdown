import * as SC from "./MenuBurgerStyled"

import burgerIcon from "../../assets/images/icon-menu.svg"

type Props = {
    openMenu:()=>void;
}

const MenuBurger:React.FC<Props> = ({openMenu}) => {
    return ( 
        <div>
            <SC.MenuBtn onClick={openMenu}>
                <img src={burgerIcon} alt="burger" />
            </SC.MenuBtn>
        </div>
     );
}
 
export default MenuBurger;