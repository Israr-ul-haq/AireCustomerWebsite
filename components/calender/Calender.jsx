import globalStyles from "../shared/Shared.module.scss";
import styles from "./Calender.module.scss";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import TimePicker from "./TimePicker";
import Button from "../shared/Button";
import { useRouter } from "next/router";
function Calender() {
  const router = useRouter();
  const events = [
    {
      title: "event1",
      start: "2022-02-01T12:30:00",
      end: "2022-02-02T10:30:00",
    },
    {
      title: "event2",
      start: "2010-01-05",
      end: "2010-01-07",
    },
    {
      title: "event3",
      start: "2010-01-09T12:30:00",
      allDay: false, // will make the time show
    },
  ];

  const goToMaintenece = () => {
    let strUser = document.getElementById("timeslot").value;
    let now = new Date();

    let to = new Date();

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
          sessionStorage.setItem("orderPayload", JSON.stringify(orderPayload));
        } else {
          sessionStorage.setItem(
            "orderPayload",
            JSON.stringify({
              startDateTime: now,
              endDateTime: to,
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
          sessionStorage.setItem("orderPayload", JSON.stringify(orderPayload));
        } else {
          sessionStorage.setItem(
            "orderPayload",
            JSON.stringify({
              startDateTime: now,
              endDateTime: to,
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
          sessionStorage.setItem("orderPayload", JSON.stringify(orderPayload));
        } else {
          sessionStorage.setItem(
            "orderPayload",
            JSON.stringify({
              startDateTime: now,
              endDateTime: to,
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
          sessionStorage.setItem("orderPayload", JSON.stringify(orderPayload));
        } else {
          sessionStorage.setItem(
            "orderPayload",
            JSON.stringify({
              startDateTime: now,
              endDateTime: to,
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
          sessionStorage.setItem("orderPayload", JSON.stringify(orderPayload));
        } else {
          sessionStorage.setItem(
            "orderPayload",
            JSON.stringify({
              startDateTime: now,
              endDateTime: to,
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
          sessionStorage.setItem("orderPayload", JSON.stringify(orderPayload));
        } else {
          sessionStorage.setItem(
            "orderPayload",
            JSON.stringify({
              startDateTime: now,
              endDateTime: to,
            })
          );
        }
        break;

      default:
        break;
    }

    router.push("/");
  };
  return (
    <section
      className={`${globalStyles.fullHeight}  ${globalStyles.pt_175} ${globalStyles.pb_65}`}
    >
      <div className={`${globalStyles.container}`}>
        <FullCalendar
          events={events}
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
        />
        <div
          className={`${globalStyles.flex} ${globalStyles.flexJustifyBetween} ${globalStyles.flexAlignCenter} ${globalStyles.mb_70} ${globalStyles.mt_45} ${styles.timepickercontainer} ${globalStyles.pb_50}  ${globalStyles.pt_50} ${globalStyles.pl_50} ${globalStyles.pr_50} `}
        >
          <h3
            className={`${globalStyles.nero} ${globalStyles.fontSize_18} ${globalStyles.fontBold} ${globalStyles.mb_0}  `}
          >
            Select Time Slot
          </h3>
          {/* <TimePicker /> */}
          <select id="timeslot" className={styles.input}>
            <option value={1}>8am-9am</option>
            <option value={2}>9am-11am</option>
            <option value={3}>11am-1pm</option>
            <option value={4}>1pm-3pm</option>
            <option value={5}>3pm-5pm</option>
            <option value={6}>5pm-7pm</option>
          </select>
        </div>
        <div
          className={`${globalStyles.column_100} ${globalStyles.flex} ${globalStyles.flexJustifyCenter}`}
        >
          <Button
            height="60px"
            width="100%"
            maxWidth="385px"
            text="CONTINUE TO BOOK"
            fontWeight="700"
            fontSize={"15px"}
            borderRadius="30px"
            textTransform={"uppercase"}
            margin=" 0 auto"
            btnType="primary"
            onClick={goToMaintenece}
          />
        </div>
      </div>
    </section>
  );
}

export default Calender;
