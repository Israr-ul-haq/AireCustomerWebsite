import { Formik } from "formik";
import Button from "../shared/Button";
import globalStyles from "../shared/Shared.module.scss";
import styles from "./Login.module.scss";
import axios from "../../constants/axiosConfig";

import Swal from "sweetalert2";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import EyeIcon from "../../assets/images/login/view.png";
import EyeNotIcon from "../../assets/images/login/notview.png";
import { requestForToken } from "../../constants/Token";

function LoginForm() {
  const router = useRouter();
  const [load, isloading] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  return (
    <Formik
      initialValues={{ email: "", password: "", remberCheckbox: false }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "This field is Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }

        if (!values.password) {
          errors.password = "This field is Required";
        } else if (values.password.length < 6) {
          errors.password = "Invalid Password Length";
        }
        return errors;
      }}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting = true;
        isloading(true);
        try {
          const response = await axios.post(
            "http://3.134.204.160:81/api/Customer/Login",
            {
              email: values.email,
              password: values.password,
              deviceId: "12345",
            }
          );

          if (response.data.code === 1) {
            localStorage.setItem(
              "aireuser",
              JSON.stringify(response.data.data)
            );
            isloading(false);
            // requestForToken();
            setTimeout(() => {
              router.push("/");
            }, 0);
          }

          if (response.data.code === 0) {
            Swal.fire({
              position: "center",
              icon: "error",
              title: response.data.message,
              showConfirmButton: true,
              timer: 5000,
              customClass: "messageshow",
            });
            isloading(false);
          }
        } catch (error) {
          if (error.response.status === 401) {
            Swal.fire({
              position: "center",
              icon: "error",
              title: error.response.data.data.message,
              showConfirmButton: true,
              customClass: "messageshow",
            });
            isloading(false);
          } else {
            Swal.fire({
              position: "center",
              icon: "error",
              title: "An Error Has Occured. Please Try Again Later!",
              showConfirmButton: true,
              customClass: "messageshow",
            });
            isloading(false);
          }
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={globalStyles.row}>
            <div
              className={`${globalStyles.column_100} ${globalStyles.column_sm_100} ${globalStyles.mb_30} ${globalStyles.relative}  `}
            >
              <label
                className={globalStyles.formcontrol__label}
                htmlFor={"email"}
              >
                Email
              </label>
              <input
                type={"text"}
                placeholder={"Email"}
                id={"email"}
                className={globalStyles.formcontrol__input}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <p
                style={{
                  marginTop: "5px",
                  color: "red",
                  fontSize: "14px",
                  fontWeight: "500",
                  paddingLeft: "30px",
                }}
              >
                {errors.email && touched.email && errors.email}
              </p>
            </div>
            <div
              className={`${globalStyles.column_100} ${globalStyles.mb_15} ${globalStyles.relative}`}
            >
              <label
                className={globalStyles.formcontrol__label}
                htmlFor="password"
              >
                Password
              </label>
              <input
                type={"password"}
                placeholder="Password"
                id={"password"}
                className={globalStyles.formcontrol__input}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />

              <p
                style={{
                  marginTop: "5px",
                  color: "red",
                  fontSize: "14px",
                  fontWeight: "500",
                  paddingLeft: "30px",
                }}
              >
                {errors.password && touched.password && errors.password}
              </p>
            </div>
            <div
              className={` ${globalStyles.fullWidth} ${globalStyles.column_100} ${globalStyles.mb_35} ${globalStyles.relative}`}
            >
              <div
                className={`${globalStyles.flex} ${globalStyles.flexAlignCenter} ${globalStyles.flexJustifyEnd}`}
              >
                <input
                  type={"checkbox"}
                  placeholder="Remember Me"
                  id={"remberCheckbox"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.checkbox}
                />
                <label
                  className={`${globalStyles.fontSize_12} ${globalStyles.fontRegular} ${globalStyles.darkgray} ${globalStyles.ml_10}`}
                  htmlFor={"remberCheckbox"}
                >
                  Remember Me
                </label>
              </div>
            </div>
            <div
              className={` ${globalStyles.fullWidth} ${globalStyles.column_100} `}
            >
              <Button
                height="50px"
                width="100%"
                maxWidth="100%"
                text={load ? "Please wait..." : "Login"}
                fontWeight="700"
                fontSize={"15px"}
                borderRadius="26px"
                textTransform={"uppercase"}
                type={"submit"}
                margin="0 0 15px 0"
                isSubmitting={isSubmitting}
              />
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
}

export default LoginForm;
