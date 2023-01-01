import styles from "./TechnicianProfile.module.scss";
import Image from "next/image";
import ChatImage from "../../assets/images/chat/Profile.png";
import moment from "moment";
function ChatMessages({ item }) {
  return (
    // <div className={styles.chatmessagecontainer}>
    <div className={styles.chatmessage}>
      <div className={styles.chatmessage_image}>
        <img
          alt="chat user"
          src={
            JSON.parse(localStorage.getItem("AireTechnician"))
              .TechnicianProfilePicPath
              ? JSON.parse(localStorage.getItem("AireTechnician"))
                  .TechnicianProfilePicPath
              : ChatImage
          }
          style={{
            layout: "responsive",
            borderRadius: "50%",
            width: "100px",
            height: "35px",
          }}
        />
      </div>
      <div className={styles.chatmessageuser_messagecontainer}>
        <p className={styles.chatmessageuser_message}>{item?.message}</p>
        <h6 className={styles.chatmessageuser_time}>{item?.timeStamp}</h6>
      </div>
    </div>
    // </div>
  );
}

export default ChatMessages;
