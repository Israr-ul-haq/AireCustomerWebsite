import Image from "next/image";
import Locator from "../../../assets/images/home/Search.svg";
import styles from "./Hero.module.scss";
function BookNowButton({ btnLock }) {
  return (
    <div className={`${styles.buttoncontainer}`}>
      <input
        id="booknowbutton"
        className={`${styles.button}`}
        type="submit"
        value={"Book Now"}
      />
      <div className={`${styles.locatorcontainer}`}>
        {btnLock ? (
          <div className="loader" style={{ marginLeft: "-9px" }}></div>
        ) : (
          <Image alt="locater" src={Locator} />
        )}
      </div>
    </div>
  );
}

export default BookNowButton;
