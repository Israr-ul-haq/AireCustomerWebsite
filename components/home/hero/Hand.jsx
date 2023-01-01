import Image from "next/image";
import HandImage from "../../../assets/images/home/Hand.png";
import styles from "./Hero.module.scss";

function Hand() {
  return (
    <div className={`${styles.handcontainer}`}>
      <Image alt="hand" src={HandImage} />
    </div>
  );
}

export default Hand;
