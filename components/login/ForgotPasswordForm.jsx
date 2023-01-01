import { Formik } from "formik";
import Button from "../shared/Button";
import globalStyles from "../shared/Shared.module.scss";
import styles from "./Login.module.scss";
import axios from "../../constants/axiosConfig";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
function ForgotPasswordForm() {
  const router = useRouter();
  return (
    <Formik
      initialValues={{ email: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "This field is Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }

        return errors;
      }}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting = true;
        try {
          const response = await axios.post(
            "/api/Customer/ForgotPassword?email=" + values.email
          );

          if (response.data.code === 1) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Email sent successfully!",
              showConfirmButton: true,
              timer: 5000,
            });
            setTimeout(() => {
              router.push("/login");
            }, 0);
          }

          if (response.data.code === 0) {
            Swal.fire({
              position: "center",
              icon: "error",
              title: response.data.message,
              showConfirmButton: true,
              timer: 5000,
            });
          }
        } catch (error) {
          if (error.response.status === 401) {
            Swal.fire({
              position: "center",
              icon: "error",
              title: error.response.data.data.message,
              showConfirmButton: true,
            });
          } else {
            Swal.fire({
              position: "center",
              icon: "error",
              title: "An Error Has Occured. Please Try Again Later!",
              showConfirmButton: true,
            });
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
              className={`${globalStyles.column_100} ${globalStyles.column_100} ${globalStyles.mb_30}  ${globalStyles.relative} `}
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
              className={` ${globalStyles.fullWidth} ${globalStyles.column_100} `}
            >
              <Button
                height="50px"
                width="100%"
                maxWidth="100%"
                text="Submit"
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

export default ForgotPasswordForm;
