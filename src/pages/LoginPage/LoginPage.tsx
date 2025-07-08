import * as SC from "./LoginPageStyled"

import { useFormik } from "formik";
import { validationAuth } from "../utils/validation";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {

const navigate = useNavigate()

  const formik = useFormik({
    initialValues: { user: "", password: "" },
    validationSchema: validationAuth,
    onSubmit: (values) => {
        const storedUser = JSON.parse(localStorage.getItem("users") || "{}");
if (
  storedUser.user === values.user &&
  storedUser.password === values.password
) {
  alert("Login successful!");
} else {
  alert("Invalid credentials");
}
    navigate("/")
},
  });

  return <SC.LoginPageCon>
    <h3>Please Login</h3>
    <form onSubmit={formik.handleSubmit}>
            <SC.LoginLabel htmlFor="user">
              <span>User</span>
    
              <input
                type="text"
                name="user"
                id="user"
                placeholder="e.g. Vsevolodych"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.user}
              />
            </SC.LoginLabel>
            <SC.LoginLabel htmlFor="password">
              <span> Password</span>
    
              <input
                type="text"
                name="password"
                id="password"
                placeholder="*******"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
            </SC.LoginLabel>
            <SC.SubmitBtn type="submit">Login</SC.SubmitBtn>
          </form>
  </SC.LoginPageCon>;
};

export default LoginPage;
