import Image from "next/image";
import styles from "./Footer.module.scss";
import logoImage from "../../assets/images/footer/Logo.png";

function Logo() {
  return (
    <div className={`${styles.logo}`}>
      <Image
        layout="responsive"
        src={logoImage}
        alt="aire logo"
      />
      
    </div>
  );
}

export default Logo;
