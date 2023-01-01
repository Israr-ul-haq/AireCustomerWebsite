import Button from "../shared/Button";
import Input from "../shared/Input";
import globalStyles from "../shared/Shared.module.scss";
import styles from "./Signup.module.scss";
import checkSvg from "../../assets/images/signup/check.svg";
import Image from "next/image";
import { Formik } from "formik";
import axios from "../../constants/axiosConfig";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { useState } from "react";
import EyeIcon from "../../assets/images/login/view.png";
import EyeNotIcon from "../../assets/images/login/notview.png";
import {
  collection as fireStoreCollectione,
  getFirestore,
  addDoc,
} from "firebase/firestore";
import { db, firebaseConfig } from "../../constants/Firebase";
import { initializeApp } from "firebase/app";
import { v4 as uuidv4 } from "uuid";
import { ImagesApi } from "./ImageUpload";
import EyeImage from "../../assets/images/shared/cancel.png";
function SignupForm() {
  const appNew = initializeApp(firebaseConfig);
  const dbNew = getFirestore(appNew);
  const [load, isloading] = useState(false);
  const router = useRouter();
  const [imageUploadIcon, setImageUploadIcon] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        middleName: "",
        address: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
        remberCheckbox: false,
        files: [],
      }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "This field is required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }

        if (!values.password) {
          errors.password = "This field is required";
        } else if (
          !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
            values.password
          )
        ) {
          errors.password =
            "Use uppercase,lowercase,symbole and special letters";
        }

        if (!values.firstName) {
          errors.firstName = "This field is required";
        }
        if (!values.lastName) {
          errors.lastName = "This field is required";
        }
        if (!values.middleName) {
          errors.middleName = "This field is required";
        }
        if (!values.address) {
          errors.address = "This field is required";
        }

        if (!values.phoneNumber) {
          errors.phoneNumber = "This field is required";
        }

        if (values.files.length === 0) {
          errors.files = "Image is required";
        }

        if (!values.confirmPassword) {
          errors.confirmPassword = "This field is required";
        } else if (values.confirmPassword.length <= 6) {
          errors.confirmPassword = "Invalid password length";
        } else if (values.password !== values.confirmPassword) {
          errors.confirmPassword = "Password must be matching";
        }
        return errors;
      }}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting = true;
        const userDetails = {};
        userDetails.email = values.email;
        userDetails.password = values.password;
        userDetails.firstName = values.firstName;
        userDetails.lastName = values.lastName;
        userDetails.middleName = values.middleName;
        userDetails.address = values.address;
        userDetails.phoneNumber = values.phoneNumber;
        userDetails.deviceId = "12345";
        try {
          isloading(true);

          const formData = new FormData();
          formData.append("profileImage", values.files[0]);
          const ImageResponse = await axios.post("/api/Files", formData);

          userDetails.profilePicPath = ImageResponse.data.data[0].url;
       
          const response = await axios.post(
            "/api/Customer/Register",
            userDetails
          );
          await addDoc(fireStoreCollectione(dbNew, "Users"), {
            email: values.email,
            id: uuidv4(),
            imageUrl: userDetails.profilePicPath,
            name: values.firstName,
          });
          isloading(false);
          if (response.data.code === 1) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "User Created Successfully",
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
          console.log(error);
          if (error.response?.status === 401) {
            Swal.fire({
              position: "center",
              icon: "error",
              title: error.response.data.data.message,
              showConfirmButton: true,
            });
          } else if (error.response?.status === 400) {
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
        setFieldValue,
        /* and other goodies */
      }) => (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={globalStyles.row}>
            <div
              className={`${globalStyles.column_50} ${globalStyles.column_sm_100} ${globalStyles.mb_30} ${globalStyles.relative} `}
            >
              <label
                className={globalStyles.formcontrol__label}
                htmlFor={"firstName"}
              >
                First Name
              </label>
              <input
                type={"text"}
                placeholder={"First Name"}
                id={"firstName"}
                className={globalStyles.formcontrol__input}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
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
                {errors.firstName && touched.firstName && errors.firstName}
              </p>
            </div>
            <div
              className={`${globalStyles.column_50} ${globalStyles.column_sm_100} ${globalStyles.mb_30} ${globalStyles.relative} `}
            >
              <label
                className={globalStyles.formcontrol__label}
                htmlFor={"middleName"}
              >
                Middle Name
              </label>
              <input
                type={"text"}
                placeholder="Middle Name"
                id={"middleName"}
                className={globalStyles.formcontrol__input}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.middleName}
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
                {errors.middleName && touched.middleName && errors.middleName}
              </p>
            </div>
            <div
              className={`${globalStyles.column_50} ${globalStyles.column_sm_100} ${globalStyles.mb_30} ${globalStyles.relative} `}
            >
              <label
                className={globalStyles.formcontrol__label}
                htmlFor={"lastName"}
              >
                Last Name
              </label>
              <input
                type={"text"}
                placeholder="Last Name"
                id={"lastName"}
                className={globalStyles.formcontrol__input}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
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
                {errors.lastName && touched.lastName && errors.lastName}
              </p>
            </div>
            <div
              className={`${globalStyles.column_50} ${globalStyles.column_sm_100} ${globalStyles.mb_30} ${globalStyles.relative} `}
            >
              <label
                className={globalStyles.formcontrol__label}
                htmlFor={"email"}
              >
                Email
              </label>
              <input
                type={"text"}
                placeholder="Email"
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
              className={`${globalStyles.column_50} ${globalStyles.column_sm_100} ${globalStyles.mb_30} ${globalStyles.relative} `}
            >
              <label
                className={globalStyles.formcontrol__label}
                htmlFor={"phoneNumber"}
              >
                Phone Number
              </label>
              <input
                type={"number"}
                placeholder="Phone Number"
                id={"phoneNumber"}
                className={globalStyles.formcontrol__input}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phoneNumber}
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
                {errors.phoneNumber &&
                  touched.phoneNumber &&
                  errors.phoneNumber}
              </p>
            </div>
            <div
              className={`${globalStyles.column_50} ${globalStyles.column_sm_100} ${globalStyles.mb_30} ${globalStyles.relative}`}
            >
              <label
                className={globalStyles.formcontrol__label}
                htmlFor={"password"}
              >
                Password
              </label>
              <input
                type={passwordShown ? "text" : "password"}
                placeholder="Password"
                id={"password"}
                className={globalStyles.formcontrol__input}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {passwordShown ? (
                <div
                  className={`${globalStyles.absolute} ${styles.image_wrapper}`}
                >
                  <Image
                    src={EyeIcon}
                    width={20}
                    height={20}
                    onClick={togglePassword}
                  />
                </div>
              ) : (
                <div
                  className={`${globalStyles.absolute} ${styles.image_wrapper}`}
                >
                  <Image
                    src={EyeNotIcon}
                    width={20}
                    height={20}
                    onClick={togglePassword}
                  />
                </div>
              )}

              <p
                style={{
                  marginTop: "3px",
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
              className={`${globalStyles.column_50} ${globalStyles.column_sm_100} ${globalStyles.mb_30} ${globalStyles.relative}`}
            >
              <label
                className={globalStyles.formcontrol__label}
                htmlFor={"confirmPassword"}
              >
                Confirm Password
              </label>
              <input
                type={"password"}
                placeholder="Confirm Password"
                id={"confirmPassword"}
                className={globalStyles.formcontrol__input}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
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
                {errors.confirmPassword &&
                  touched.confirmPassword &&
                  errors.confirmPassword}
              </p>
              <Input
                labelName="Confirm Password"
                placeholder="Confirm Password"
                type="password"
              />
            </div>
            <div
              className={`${globalStyles.column_50} ${globalStyles.column_sm_100} ${globalStyles.mb_30} ${globalStyles.relative}`}
            >
              <label
                className={globalStyles.formcontrol__label}
                htmlFor={"address"}
              >
                Address
              </label>
              <input
                type={"text"}
                placeholder="Address"
                id={"address"}
                className={globalStyles.formcontrol__input}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address}
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
                {errors.address && touched.address && errors.address}
              </p>
            </div>
            <div
              className={`${globalStyles.column_50} ${globalStyles.column_sm_100}`}
              style={{ position: "relative" }}
            >
              <label htmlFor={"imageupload"}>
                <label className={globalStyles.formcontrol__label}>
                  Profile Picture
                </label>
                <p
                  className={globalStyles.formcontrol__input}
                  accept=".jpg,.png"
                >
                  {values.files.length === 0 ? "Upload" : "Uploaded"}
                </p>
              </label>

              <input
                style={{
                  position: "absolute",
                  opacity: "0",
                  visibility: "hidden",
                }}
                type={"file"}
                accept=".png,.jpg"
                placeholder="Address"
                id={"imageupload"}
                name={"imageupload"}
                className={globalStyles.formcontrol__input}
                onChange={(event) => {
                  setImageUploadIcon(true);

                  setFieldValue("files", event.currentTarget.files);
                }}
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
                {errors.files && errors.files}
              </p>

              {values.files.length === 0 ? (
                ""
              ) : (
                <div
                  style={{
                    position: "absolute",
                    right: "43px",
                    top: "22px",
                    width: "17px",
                    height: "17px",
                  }}
                >
                  <Image
                    alt="check"
                    src={checkSvg}
                    layout="fill"
                    style={{
                      width: "10px !important",
                      height: "10px !important",
                    }}
                  />
                </div>
              )}
            </div>
            <div
              className={`${globalStyles.column_100} ${globalStyles.flex} ${globalStyles.flexJustifyCenter}`}
            >
              <Button
                height="50px"
                width="100%"
                maxWidth="385px"
                text={load ? "Please wait...  " : "Sign Up"}
                fontWeight="700"
                fontSize={"15px"}
                borderRadius="26px"
                textTransform={"uppercase"}
                type={"submit"}
                isSubmitting={isSubmitting}
                margin="35px auto 15px auto"
              />
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
}

export default SignupForm;
