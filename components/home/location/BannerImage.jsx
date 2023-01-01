import Image from "next/image";
import Banner from "../../../assets/images/home/location.png";
import styles from "./Location.module.scss";

function BannerImage() {
  return (
    <div className={`${styles.BannerImagecontainer}`}>
      <Image alt="Banner" src={Banner} />
    </div>
  );
}

export default BannerImage;
