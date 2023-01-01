import globalStyles from "../shared/Shared.module.scss";
import Notification from "./Notification";
import NotificationImage from "../../assets/images/notifications/Notification.png";
import styles from "./Notifications.module.scss";
import { useEffect, useState } from "react";
import { notifications } from "../ApiServices/Notifactions";
import Button from "../shared/Button";

function Notifications() {
  const [notificationList, setNotificationList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [btnLock, setBtnLock] = useState(false);
  const [btnLock1, setBtnLock1] = useState(false);

  useEffect(() => {
    (async () => {
      setBtnLock(true);
      const response = await notifications({
        pageNumber: pageNumber,
        pageSize: pageSize,
        id: JSON.parse(localStorage.getItem("aireuser")).user.id,
      });
      if (response.data.code === 1) {
        setNotificationList(response.data.data.notifications);
        setBtnLock(false);
      }
      if (response.data.code === 0) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: response.data.data.message,
          showConfirmButton: true,
          timer: 5000,
        });
        setBtnLock(false);
      }
    })();
  }, []);

  const pageIndex = async () => {
    setBtnLock1(true);
    const response = await notifications({
      pageNumber: pageNumber + 1,
      pageSize: pageSize + 10,
      id: JSON.parse(localStorage.getItem("aireuser")).user.id,
    });
    setPageNumber(pageNumber + 1);
    setPageSize(pageSize + 10);

    if (response.data.code === 1) {
      setNotificationList(response.data.data.notifications);
      setBtnLock1(false);
    }
  };

  return (
    <section
      className={`${globalStyles.fullHeight} ${globalStyles.culturedbackground} ${globalStyles.pt_45} ${globalStyles.pt_sm_20} ${globalStyles.pb_sm_20} ${globalStyles.pb_35}`}
    >
      <div
        className={`${globalStyles.container} ${globalStyles.fullHeight} ${globalStyles.flex} ${globalStyles.flexAlignCenter}`}
      >
        <div
          className={styles.notificationcontainer}
          style={{
            boxShadow: "0px 0px 18px #00000014",
            borderRadius: "5px",
            width: "100%",
            backgroundColor: "white",
          }}
        >
          {btnLock ? (
            <div
              className="loader loader_color"
              style={{ width: "10em", height: "10em" }}
            ></div>
          ) : (
            <div>
              {notificationList.length === 0 ? (
                <h5
                  className={`${globalStyles.nero} ${globalStyles.fontSize_18} ${globalStyles.fontBold} `}
                >
                  No Data Found
                </h5>
              ) : (
                notificationList.map((item, index) => (
                  <Notification
                    key={index}
                    image={item.senderProfilePic}
                    title={item.title}
                    description={item.description}
                  />
                ))
              )}
            </div>
          )}
        </div>
      </div>
      <Button
        height="50px"
        width="100%"
        maxWidth="385px"
        text="LOAD MORE"
        fontWeight="700"
        fontSize={"15px"}
        borderRadius="30px"
        margin="0 auto"
        btnType="primary"
        onClick={pageIndex}
        btnLock={btnLock1}
      />
    </section>
  );
}

export default Notifications;
