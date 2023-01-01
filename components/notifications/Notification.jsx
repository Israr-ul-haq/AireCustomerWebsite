import globalStyles from "../shared/Shared.module.scss";
import styles from "./Notifications.module.scss";
import Image from "next/image";
function Notification({ image, title, description }) {
  return (
    <div
      className={`${globalStyles.flex} ${globalStyles.flexAlignStart} ${globalStyles.flexColumn_sm} ${styles.notification}`}
    >
      <div
        style={{ width: "50px", height: "50px", borderRadius: "50px" }}
        className={`${globalStyles.mr_30}`}
      >
        <img alt="Banner" src={image} layout="responsive" />
      </div>
      <div className={`${styles.content}`}>
        <h5
          className={`${globalStyles.nero} ${globalStyles.fontSize_16} ${globalStyles.fontBold} ${globalStyles.mb_10} `}
        >
          {title}
        </h5>
        <p
          className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_14} ${globalStyles.fontRegular} `}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default Notification;
