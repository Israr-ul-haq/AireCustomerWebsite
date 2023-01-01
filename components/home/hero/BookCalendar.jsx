import globalStyles from "../../shared/Shared.module.scss";
import styles from "./Hero.module.scss";
import Button from "../../shared/Button";

import Link from "next/link";
import Calendar from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";

function BookCalendar({ swal, router }) {
  const [value, onChange] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const continueBook = () => {
    let count = 0;

    if (value === "") {
      setErrorMessage("Date is required");
      count++;
    }

    if (count > 0) {
      return true;
    }

    let strUser = document.getElementById("timeslot").value;
    let now = new Date();

    let to = value;

    switch (Number(strUser)) {
      case 1:
        now.setHours(8);
        now.setMinutes(0);
        now.setMilliseconds(0);

        to.setHours(9);
        to.setMinutes(0);
        to.setMilliseconds(0);

        if (JSON.parse(sessionStorage.getItem("orderPayload"))) {
          const orderPayload = JSON.parse(
            sessionStorage.getItem("orderPayload")
          );
          orderPayload.startDateTime = now;
          orderPayload.endDateTime = to;
          orderPayload.bookingType = 1;
          sessionStorage.setItem("orderPayload", JSON.stringify(orderPayload));
        } else {
          sessionStorage.setItem(
            "orderPayload",
            JSON.stringify({
              startDateTime: now,
              endDateTime: to,
              bookingType: 1,
            })
          );
        }

        break;
      case 2:
        now.setHours(9);
        now.setMinutes(0);
        now.setMilliseconds(0);

        to.setHours(11);
        to.setMinutes(0);
        to.setMilliseconds(0);

        if (JSON.parse(sessionStorage.getItem("orderPayload"))) {
          const orderPayload = JSON.parse(
            sessionStorage.getItem("orderPayload")
          );
          orderPayload.startDateTime = now;
          orderPayload.endDateTime = to;
          orderPayload.bookingType = 1;
          sessionStorage.setItem("orderPayload", JSON.stringify(orderPayload));
        } else {
          sessionStorage.setItem(
            "orderPayload",
            JSON.stringify({
              startDateTime: now,
              endDateTime: to,
              bookingType: 1,
            })
          );
        }
        break;
      case 2:
        now.setHours(11);
        now.setMinutes(0);
        now.setMilliseconds(0);

        to.setHours(13);
        to.setMinutes(0);
        to.setMilliseconds(0);

        if (JSON.parse(sessionStorage.getItem("orderPayload"))) {
          const orderPayload = JSON.parse(
            sessionStorage.getItem("orderPayload")
          );
          orderPayload.startDateTime = now;
          orderPayload.endDateTime = to;
          orderPayload.bookingType = 1;
          sessionStorage.setItem("orderPayload", JSON.stringify(orderPayload));
        } else {
          sessionStorage.setItem(
            "orderPayload",
            JSON.stringify({
              startDateTime: now,
              endDateTime: to,
              bookingType: 1,
            })
          );
        }
        break;
      case 3:
        now.setHours(13);
        now.setMinutes(0);
        now.setMilliseconds(0);

        to.setHours(15);
        to.setMinutes(0);
        to.setMilliseconds(0);

        if (JSON.parse(sessionStorage.getItem("orderPayload"))) {
          const orderPayload = JSON.parse(
            sessionStorage.getItem("orderPayload")
          );
          orderPayload.startDateTime = now;
          orderPayload.endDateTime = to;
          orderPayload.bookingType = 1;
          sessionStorage.setItem("orderPayload", JSON.stringify(orderPayload));
        } else {
          sessionStorage.setItem(
            "orderPayload",
            JSON.stringify({
              startDateTime: now,
              endDateTime: to,
              bookingType: 1,
            })
          );
        }
        break;
      case 4:
        now.setHours(15);
        now.setMinutes(0);
        now.setMilliseconds(0);

        to.setHours(17);
        to.setMinutes(0);
        to.setMilliseconds(0);

        if (JSON.parse(sessionStorage.getItem("orderPayload"))) {
          const orderPayload = JSON.parse(
            sessionStorage.getItem("orderPayload")
          );
          orderPayload.startDateTime = now;
          orderPayload.endDateTime = to;
          orderPayload.bookingType = 1;
          sessionStorage.setItem("orderPayload", JSON.stringify(orderPayload));
        } else {
          sessionStorage.setItem(
            "orderPayload",
            JSON.stringify({
              startDateTime: now,
              endDateTime: to,
              bookingType: 1,
            })
          );
        }
        break;
      case 5:
        now.setHours(17);
        now.setMinutes(0);
        now.setMilliseconds(0);

        to.setHours(19);
        to.setMinutes(0);
        to.setMilliseconds(0);

        if (JSON.parse(sessionStorage.getItem("orderPayload"))) {
          const orderPayload = JSON.parse(
            sessionStorage.getItem("orderPayload")
          );
          orderPayload.startDateTime = now;
          orderPayload.endDateTime = to;
          orderPayload.bookingType = 1;
          sessionStorage.setItem("orderPayload", JSON.stringify(orderPayload));
        } else {
          sessionStorage.setItem(
            "orderPayload",
            JSON.stringify({
              startDateTime: now,
              endDateTime: to,
              bookingType: 1,
            })
          );
        }
        break;

      default:
        break;
    }
    router.push("/services");
    swal.close();
    const booknowbtn = document.querySelector(
      ".googlesearch > div > span + div > div"
    );
    booknowbtn.click();
  };
  return (
    <div
      className={`${globalStyles.pb_0} ${globalStyles.pt_50} ${globalStyles.pl_25} ${globalStyles.pr_25}`}
    >
      <div>
        <Calendar
          className={"bookcalendar"}
          onChange={onChange}
          onClickDay={() => {
            setErrorMessage("");
          }}
          value={value}
          minDate={new Date()}
        />
      </div>
      {value ? (
        <select id="timeslot" className={styles.inputselect}>
          <option value={1}>8am-9am</option>
          <option value={2}>9am-11am</option>
          <option value={3}>11am-1pm</option>
          <option value={4}>1pm-3pm</option>
          <option value={5}>3pm-5pm</option>
          <option value={6}>5pm-7pm</option>
        </select>
      ) : (
        ""
      )}
      {errorMessage ? (
        <p
          style={{
            marginTop: "10px",
            color: "red",
            textAlign: "left",
            paddingLeft: "15px",
          }}
        >
          {errorMessage}
        </p>
      ) : (
        ""
      )}
      <Button
        onClick={continueBook}
        height="45px"
        width="100%"
        maxWidth="385px"
        text="Continue to book"
        fontWeight="400"
        fontSize={"15px"}
        padding="0"
        borderRadius="30px"
        textTransform={"uppercase"}
        margin="40px auto 0 auto"
        btnType="primary"
      />
    </div>
  );
}

export default BookCalendar;
