import styles from "./TechnicianProfile.module.scss";
import Image from "next/image";
import ChatImage from "../../assets/images/chat/Profile.png";
import moment from "moment";
import { useEffect, useRef } from "react";
function ChatUsersMessages({ item }) {
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [item]);

  return (
    <div
      className={`${styles.chatmessage} ${styles.chatusermessage}`}
      ref={messagesEndRef}
    >
      <div className={styles.chatmessage_image}>
        {/* <Image alt="chat user" src={ChatImage} layout="responsive" /> */}
      </div>
      <div className={styles.chatmessageuser_messagecontainer}>
        <h6 className={styles.chatmessageuser_time}>{item?.timeStamp}</h6>
        <p className={styles.chatmessageuser_message}>{item?.message}</p>
      </div>
    </div>
  );
}

export default ChatUsersMessages;
