import * as SC from "./AuthBoardStyled"

const AuthBoard:React.FC = () => {
    return ( 
        <SC.AuthBoardCon>
            <li>
                <a href="/login">Login</a>
            </li>
            <li>
                <a href="/register">Register</a>
            </li>
        </SC.AuthBoardCon>
     );
}
 
export default AuthBoard;