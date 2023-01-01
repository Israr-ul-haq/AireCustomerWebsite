import Input from "../shared/Input";
import globalStyles from "../shared/Shared.module.scss";
import styles from "./Profile.module.scss";
import { useState } from "react";
import Image from "next/image";
function ProfileForm({
  
  handleSubmit,
  handleChange,
  handleBlur,
  errors,
  values,
  touched,
}){
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={globalStyles.row}>
        <div
          className={`${globalStyles.column_50}  ${globalStyles.column_lg_100} ${globalStyles.column_sm_100} ${globalStyles.mb_30} ${globalStyles.relative} `}
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
          className={`${globalStyles.column_50} ${globalStyles.column_lg_100} ${globalStyles.column_sm_100} ${globalStyles.mb_30} ${globalStyles.relative} `}
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
          className={`${globalStyles.column_50} ${globalStyles.column_lg_100} ${globalStyles.column_sm_100} ${globalStyles.mb_30} ${globalStyles.relative} `}
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
          className={`${globalStyles.column_50} ${globalStyles.column_lg_100} ${globalStyles.column_sm_100} ${globalStyles.mb_30} ${globalStyles.relative} `}
        >
          <label className={globalStyles.formcontrol__label} htmlFor={"email"}>
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
          className={`${globalStyles.column_50} ${globalStyles.column_lg_100} ${globalStyles.column_sm_100} ${globalStyles.mb_30} ${globalStyles.relative} `}
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
            {errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}
          </p>
        </div>
        <div
          className={`${globalStyles.column_50} ${globalStyles.column_lg_100} ${globalStyles.column_sm_100} ${globalStyles.mb_30} ${globalStyles.relative}`}
        >
          <label
            className={globalStyles.formcontrol__label}
            htmlFor={"password"}
          >
            Password
          </label>
          <input
            type="password" 
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
          className={`${globalStyles.column_50} ${globalStyles.column_lg_100} ${globalStyles.column_sm_100} ${globalStyles.mb_30} ${globalStyles.relative}`}
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
          className={`${globalStyles.column_50} ${globalStyles.column_lg_100} ${globalStyles.column_sm_100}  ${globalStyles.relative}`}
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
      </div>
    </form>
  );
}

export default ProfileForm;
