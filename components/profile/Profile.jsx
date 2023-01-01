import Image from "next/image";
import globalStyles from "../shared/Shared.module.scss";
import styles from "./Profile.module.scss";
import ProfileImage from "../../assets/images/profile/profileimage.png";
import Button from "../shared/Button";
import Link from "next/link";
import ProfileForm from "./ProfileForm";
import { useState, useEffect } from "react";
import { Formik } from "formik";
import Swal from "sweetalert2";
import axios from "../../constants/axiosConfig";
import { useRouter } from "next/router";

function Hero({ Profiledata }) {
  const router = useRouter();
  const [data, setData] = useState();
  const [btnLock, setBtnLock] = useState(false);
  useEffect(() => {
    setBtnLock(true);
    const localdata = JSON.parse(localStorage.getItem("aireuser"));
    setData(localdata.user);
    setBtnLock(false);
  }, [btnLock]);
  // const url = data.profilePicPath[0]?.url;
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        email: data?.email,
        password: data?.password,
        firstName: data?.firstName,
        lastName: data?.lastName,
        middleName: data?.middleName,
        address: data?.address,
        phoneNumber: data?.phoneNumber,
        password: data?.password,
        confirmPassword: "",
        remberCheckbox: false,
      }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "This field is Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }

        if (!values.firstName) {
          errors.firstName = "This field is Required";
        }
        if (!values.lastName) {
          errors.lastName = "This field is Required";
        }
        if (!values.middleName) {
          errors.middleName = "This field is Required";
        }
        if (!values.address) {
          errors.address = "This field is Required";
        }
        if (!values.phoneNumber) {
          errors.phoneNumber = "This field is Required";
        }

        if (values.password !== values.confirmPassword) {
          errors.confirmPassword = "Password Must be matching";
        }
        return errors;
      }}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting = true;
        try {
          let config = {
            headers: {
              Authorization: `Bearer ${
                JSON.parse(localStorage.getItem("aireuser"))?.token
              }`,
            },
          };
          const response = await axios.put(
            "http://3.134.204.160:81/api/Customer/Update",
            {
              id: JSON.parse(localStorage.getItem("aireuser")).user.id,
              email: values.email,
              password: values.password,
              firstName: values.firstName,
              lastName: values.lastName,
              middleName: values.middleName,
              address: values.address,
              profilePicture: "",
              phoneNumber: values.phoneNumber,
              deviceId: "12345",
            },
            config
          );

          if (response.data.code === 1) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: response.data.message,
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
              title: error.response?.data?.data?.message,
              showConfirmButton: true,
              customClass: "messageshow",
            });
          } else if (error.response?.status === 400) {
            Swal.fire({
              position: "center",
              icon: "error",
              title: error.response?.data?.data?.message,
              showConfirmButton: true,
              customClass: "messageshow",
            });
          } else {
            Swal.fire({
              position: "center",
              icon: "error",
              title: "An Error Has Occured. Please Try Again Later!",
              showConfirmButton: true,
              customClass: "messageshow",
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
        <section
          className={`${globalStyles.fullHeight} ${globalStyles.culturedbackground} ${globalStyles.pt_56} ${globalStyles.pb_40} ${globalStyles.pt_sm_10} ${globalStyles.pb_sm_10}`}
        >
          <div
            className={`${globalStyles.container} ${globalStyles.fullHeight} ${globalStyles.flex} ${globalStyles.flexAlignStart} ${styles.profile}`}
          >
            <div className={`${styles.profileleftcontainer} `}>
              <div className={`${styles.profileleftcontent} `}>
                <div
                  style={{
                    width: "115px",
                    height: "124px",
                    borderRadius: "50%",
                  }}
                >
                  <img
                    src={
                      data?.profilePicPath ? data?.profilePicPath : ProfileImage
                    }
                    style={{
                      height: "120px",
                      width: "120px",
                      layout: "responsive",
                    }}
                    alt="profile image"
                    // height={"15px"}
                    // width={"15px"}
                    // layout="responsive"
                  />
                </div>
                <h5
                  style={{ textAlign: "center" }}
                  className={`${globalStyles.nero} ${globalStyles.fontSize_18} ${globalStyles.fontBold} ${globalStyles.mt_25} ${globalStyles.mb_0} `}
                >
                  Service Details
                </h5>
                <h6
                  style={{ color: "#515C6F", textAlign: "center" }}
                  className={`${globalStyles.fontSize_12} ${globalStyles.fontRegular} ${globalStyles.mb_0} `}
                >
                  {data?.firstName}
                </h6>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "10px",
                  marginTop: "20px",
                }}
              >
                <Link href={"/"} passHref>
                  <a>
                    <Button
                      height="50px"
                      width="100%"
                      maxWidth="385px"
                      text="Cancel"
                      fontWeight="700"
                      fontSize={"15px"}
                      borderRadius="30px"
                      margin="0 auto"
                      btnType="primary"
                      btnStyle="outline"
                    />
                  </a>
                </Link>
                <Button
                  height="50px"
                  width="100%"
                  maxWidth="385px"
                  text="Save"
                  fontWeight="700"
                  fontSize={"15px"}
                  borderRadius="30px"
                  margin="0 auto"
                  btnType="primary"
                  type="submit"
                  isSubmitting={isSubmitting}
                  onClick={handleSubmit}
                />
              </div>
            </div>
            <div className={`${styles.profilerightcontainer} `}>
              <div className={`${styles.profilerightcontent} `}>
                <div className={`${globalStyles.mb_45}`}>
                  <h2
                    style={{ textAlign: "center" }}
                    className={`${globalStyles.fontSize_35} ${globalStyles.fontBold} ${globalStyles.nero}`}
                  >
                    Edit Profile
                  </h2>
                </div>
                <ProfileForm
                  data={data}
                  handleSubmit={handleSubmit}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  values={values}
                  errors={errors}
                  touched={touched}
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </Formik>
  );
}
Hero.getInitialProps = async (ctx) => {
  const res = await axios.get("http://3.134.204.160:81/api/Files");
  const json = await res.json();
  return { Profiledata: json.stargazers_count };
};

export default Hero;
