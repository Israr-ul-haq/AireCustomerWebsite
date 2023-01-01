import Image from "next/image";
import Link from "next/link";
import globalStyles from "../../shared/Shared.module.scss";
import Maintenance from "../../../assets/images/services/icon_maintenance.svg";
import Clock from "../../../assets/images/services/clock.svg";
import Diagnostics from "../../../assets/images/services/icon_diagnostics.svg";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import BookedModal from "./BookedModal";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "../../../constants/axiosConfig";

function Buttons({ data }) {
  const router = useRouter();
  const SwalModal = withReactContent(Swal);
  const [btnLock, setBtnLock] = useState(false);

  const OpenBookedModal = () => {
    SwalModal.fire({
      html: <BookedModal />,
      showConfirmButton: false,
      customClass: "bookedmodal",
    });
  };

  const handleClick = async (id, type) => {
    if (type.trim() === "Maintenance") {
      const orderPayload = JSON.parse(sessionStorage.getItem("orderPayload"));
      orderPayload.serviceType = type;
      orderPayload.serviceId = id;
      sessionStorage.setItem("orderPayload", JSON.stringify(orderPayload));
      router.push("/maintenance");
    } else {
      const orderPayload = JSON.parse(sessionStorage.getItem("orderPayload"));
      orderPayload.serviceType = type;
      try {
        let config = {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("aireuser"))?.token,
          },
        };
        let newDate = new Date();
        let startDateTimeNew = "";
        let endDateTimeNew = "";
        if (JSON.parse(sessionStorage.getItem("orderPayload")).startDateTime) {
          startDateTimeNew = JSON.parse(
            sessionStorage.getItem("orderPayload")
          ).startDateTime;
        } else {
          startDateTimeNew = new Date();
        }
        if (JSON.parse(sessionStorage.getItem("orderPayload")).endDateTime) {
          endDateTimeNew = JSON.parse(
            sessionStorage.getItem("orderPayload")
          ).endDateTime;
        } else {
          endDateTimeNew = new Date();
        }
        setBtnLock(true);
        const orderDetails = {
          customerId: JSON.parse(localStorage.getItem("aireuser")).user.id,
          serviceId: id,
          serviceType: type,
          startDateTime: new Date(),
          endDateTime: new Date(),
          startDateTime: startDateTimeNew,
          endDateTime: endDateTimeNew,
          description: "diagnostics",
          toLatitude: JSON.parse(sessionStorage.getItem("orderPayload"))
            .coordinates.toLatitude,
          toLongitude: JSON.parse(sessionStorage.getItem("orderPayload"))
            .coordinates.toLongitude,
          bookingType: 1,
          location: JSON.parse(sessionStorage.getItem("orderPayload")).location,
        };
        if (
          parseInt(startDateTimeNew.replace(/-/g, ""), 10) ===
          parseInt(endDateTimeNew.replace(/-/g, ""), 10)
        ) {
          orderDetails.bookingType = 0;
        } else {
          orderDetails.bookingType = 1;
        }

        console.log(orderDetails);

        const response = await axios.post(
          "/api/CustomerOrder/Create",
          orderDetails,
          config
        );
        if (
          parseInt(startDateTimeNew.replace(/-/g, ""), 10) ===
            parseInt(endDateTimeNew.replace(/-/g, ""), 10) &&
          response?.data?.code === 1
        ) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Order Created Successfully!",
            showConfirmButton: true,
            timer: 5000,
          });
          router.push("/technician");
          setBtnLock(false);
        } else {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Order Created Successfully!",
            title: `Your request has been sent to the nearest available technician,
            And should be on the way shortly. Thank you for your patience!`,
            showConfirmButton: true,
            timer: 5000,
          });
          setBtnLock(false);
        }
        console.log(orderDetails);
        if (response?.data?.code === 0) {
          Swal.fire({
            position: "center",
            icon: "error",
            title: response?.data?.message,
            showConfirmButton: true,
            timer: 5000,
            customClass: "messageshow",
          });
          setBtnLock(false);
        }
      } catch (error) {
        console.log(error);
        console.log(error.response);
        if (error.response?.status === 401) {
          Swal.fire({
            position: "center",
            icon: "error",
            title: error.response?.data?.data?.message,
            showConfirmButton: true,
            customClass: "messageshow",
          });
          setBtnLock(false);
        } else if (error.response?.status === 400) {
          Swal.fire({
            position: "center",
            icon: "error",
            title: error.response?.data?.data?.message,
            showConfirmButton: true,
            customClass: "messageshow",
          });
          setBtnLock(false);
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "An Error Has Occured. Please Try Again Later!",
            showConfirmButton: true,
            customClass: "messageshow",
          });
          setBtnLock(false);
        }
      }
    }
  };

  return (
    <div
      className={`${globalStyles.row} ${globalStyles.flex}  ${globalStyles.flexColumn_md} ${globalStyles.flexAlignCenter} `}
    >
      <div
        className={`${globalStyles.column_50} ${globalStyles.mb_lg_30}   ${globalStyles.column_lg_100} ${globalStyles.fullWidth}`}
      >
        <div
          onClick={() =>
            handleClick(
              data.data.services?.[0].id,
              data.data.services?.[0].type
            )
          }
          className="Maintenance"
          style={{
            boxShadow: "0px 15px 32px #0000000A",
            borderRadius: "4px",
            padding: "25px",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Image alt="maintenance" src={Maintenance} />
          <div className={`${globalStyles.ml_15}`}>
            <h5
              className={`${globalStyles.black} ${globalStyles.fontSize_18} ${globalStyles.fontBold} ${globalStyles.mb_5}`}
            >
              {data.data.services?.[0].type}
            </h5>
            <h6
              className={`${globalStyles.black} ${globalStyles.fontSize_16} ${globalStyles.fontMedium} ${globalStyles.mb_5}`}
            >
              ${data.data.services?.[0].price}
            </h6>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {/* <Image alt="Clock" src={Clock} />
              <h6
                className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_15} ${globalStyles.fontRegular} ${globalStyles.ml_5}`}
              >
                Time: 35 min
              </h6> */}
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() =>
          handleClick(data.data.services?.[1].id, data.data.services?.[1].type)
        }
        className={`${globalStyles.column_50}    ${globalStyles.column_lg_100} ${globalStyles.fullWidth}`}
      >
        <div
          className="Diagnostics"
          style={{
            boxShadow: "0px 15px 32px #0000000A",
            borderRadius: "4px",
            padding: "25px",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Image alt="Diagnostics" src={Diagnostics} />
          <div className={`${globalStyles.ml_15}`}>
            <h5
              className={`${globalStyles.black} ${globalStyles.fontSize_18} ${globalStyles.fontBold} ${globalStyles.mb_5}`}
            >
              {data.data.services?.[1].type}
            </h5>
            <h6
              className={`${globalStyles.black} ${globalStyles.fontSize_16} ${globalStyles.fontMedium} ${globalStyles.mb_5}`}
            >
              ${data.data.services?.[1].price}
            </h6>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {/* <Image alt="Clock" src={Clock} />
              <h6
                className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_15} ${globalStyles.fontRegular} ${globalStyles.ml_5}`}
              >
                Time: 35 min
              </h6> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buttons;
