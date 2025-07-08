import { useFormik } from "formik";
import { validationAuth } from "../utils/validation";

const RegisterPage: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      user: "",
      password: "",
    },
    validationSchema: validationAuth,
    onSubmit: (values) => {
      console.log("Submitted values:", values);
    },
  });

  return (
    <div>
      <div>
        <h3>Please Register</h3>
        <form>
          <label htmlFor="user">
            User
            <input
              type="text"
              name="user"
              id="user"
              placeholder="e.g. Vsevolodych"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </label>
          <label htmlFor="password">
            Password
            <input type="text" name="password"  id="user"
              placeholder="*******"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}/>
          </label>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
