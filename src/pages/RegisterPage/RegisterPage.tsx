import * as SC from "./RegisterPageStyled";

import { useFormik } from "formik";
import { validationAuth } from "../utils/validation";
import { useNavigate } from "react-router-dom";

const RegisterPage: React.FC = () => {

const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      user: "",
      password: "",
    },
    validationSchema: validationAuth,
    onSubmit: (values) => {
      localStorage.setItem("users", JSON.stringify(values));
      
      navigate("/")
      alert("Registration successful!");
    },
  });

  return (
    <SC.RegisterPageCon>
      <h3>Please Register</h3>
      <form onSubmit={formik.handleSubmit}>
        <SC.RegisterLabel htmlFor="user">
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
        </SC.RegisterLabel>
        <SC.RegisterLabel htmlFor="password">
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
        </SC.RegisterLabel>
        <SC.SubmitBtn type="submit">Register</SC.SubmitBtn>
      </form>
    </SC.RegisterPageCon>
  );
};

export default RegisterPage;
