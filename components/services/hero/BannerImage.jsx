import Image from "next/image";
import Banner from "../../../assets/images/services/hero.png";
import styles from "./Hero.module.scss";

function BannerImage() {
  return (
    <div className={`${styles.BannerImagecontainer}`}>
      <Image alt="Banner" src={Banner} />
    </div>
  );
}

export default BannerImage;
