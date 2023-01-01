import Image from "next/image";
import styles from "./Footer.module.scss";
import Facebook from "../../assets/images/footer/facebook.svg";
import Twitter from "../../assets/images/footer/twitter.svg";
import Instagram from "../../assets/images/footer/instagram.svg";
import Linkedin from "../../assets/images/footer/linkedin.svg";

function Social() {
  return (
    <div className={`${styles.socialcontainer}`}>
      <div className={`${styles.social}`}>
        <Image layout="responsive" src={Facebook} alt="facebook icon" />
      </div>
      <div className={`${styles.social}`}>
        <Image layout="responsive" src={Twitter} alt="twitter icon" />
      </div>
      <div className={`${styles.social}`}>
        <Image layout="responsive" src={Instagram} alt="instagram icon" />
      </div>
      <div className={`${styles.social}`}>
        <Image layout="responsive" src={Linkedin} alt="linkedin icon" />
      </div>
    </div>
  );
}

export default Social;
