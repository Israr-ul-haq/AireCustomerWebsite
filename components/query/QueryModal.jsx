import Image from "next/image";
import React from "react";
import CrossImage from "../../assets/images/chat/icon_cancel.svg";
import query from "../../assets/images/technician/queryimage.svg";
import globalStyles from "../shared/Shared.module.scss";
import styles from "../../components/technicianprofile/TechnicianProfile.module.scss";
import Swal from "sweetalert2";
import Button from "../shared/Button";
import axios from "../../constants/axiosConfig";
import { useState } from "react";

function QueryModal() {
  const closeSwal = () => {
    Swal.close();
  };

  const [queryData, setQueryData] = useState({
    message: "",
  });
  const [btnLock, setBtnLock] = useState();

  const handleSubmit = async () => {
    if (queryData?.message === "") {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Message field is required",
        showConfirmButton: true,
        timer: 5000,
        customClass: "messageshow",
      });
    } else {
      const body = {
        subject: "Query",
        message: queryData?.message,
        userId: JSON.parse(localStorage.getItem("aireuser")).user.id,
      };

      const response = await axios.post(
        "/api/CustomerQuery/SaveFeedback",
        body
      );

      console.log(response);
      if (response.data.code === 1) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Message Sended Successfully!",
          showConfirmButton: true,
          timer: 5000,
        });
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: response?.errors?.message,
          showConfirmButton: true,
          timer: 5000,
          customClass: "messageshow",
        });
      }
    }
  };
  return (
    <div
      className={`${globalStyles.pb_25} ${globalStyles.pt_25} ${globalStyles.pr_25} ${globalStyles.pl_25}`}
    >
      <div
        className={`${globalStyles.flex} ${globalStyles.flexJustifyBetween} ${globalStyles.flexAlignStart} ${styles.chatheader}`}
      >
        <div
          className={`${globalStyles.flex} ${globalStyles.flexJustifyBetween} ${globalStyles.flexAlignStart}  ${globalStyles.fullWidth} `}
        >
          <div
            className={`${styles.chatcontent} ${globalStyles.flex} ${globalStyles.flexAlignCenter}`}
          >
            <div
              style={{ width: "35px", height: "35px", borderRadius: "35px" }}
              className={`${globalStyles.mr_10}`}
            >
              <Image alt="cross" src={query} layout="responsive" />
            </div>
            <a
              className={`${globalStyles.black}  ${globalStyles.fontSize_18} ${globalStyles.fontBold} ${globalStyles.fontBold} ${globalStyles.mr_40}`}
            >
              Queries
            </a>
          </div>
          <div
            style={{ width: "20px", height: "20px", cursor: "pointer" }}
            onClick={closeSwal}
          >
            <Image alt="cross" src={CrossImage} layout="responsive" />
          </div>
        </div>
      </div>
      <textarea
        name=""
        id=""
        placeholder="Type something"
        style={{
          color: "rgb(#515C6F, 0.5)",
        }}
        onChange={(e) => {
          const c = { ...queryData };
          c.message = e.target.value;
          setQueryData(c);
        }}
        className={`${styles.modalquerynote} ${globalStyles.pb_110}  ${globalStyles.pt_20} ${globalStyles.pl_25} ${globalStyles.pr_25} ${globalStyles.cloudygrey} ${globalStyles.fontSize_12} ${globalStyles.fontMedium} `}
      ></textarea>

      <div style={{ display: "flex", justifyContent: "center", gap: "36px" }}>
        <Button
          height="50px"
          width="50%"
          maxWidth="150px"
          text="Cancel"
          fontWeight="700"
          fontSize={"15px"}
          padding="0"
          borderRadius="30px"
          textTransform={"uppercase"}
          margin="0 0"
          btnType="primary"
          btnStyle="outline"
          onClick={closeSwal}
        />
        <Button
          height="50px"
          width="50%"
          maxWidth="150px"
          text="Send"
          fontWeight="700"
          fontSize={"15px"}
          padding="0"
          borderRadius="30px"
          textTransform={"uppercase"}
          margin="0 0"
          btnType="primary"
          onClick={handleSubmit}
          btnLock={btnLock}
        />
      </div>
    </div>
  );
}

export default QueryModal;
