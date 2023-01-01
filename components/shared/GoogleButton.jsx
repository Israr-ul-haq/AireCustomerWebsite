import Image from "next/image";
import styles from "./Shared.module.scss";
import googleLogo from "../../assets/images/login/google_logo.svg";
function GoogleButton() {
  return (
    <button className={styles.googlebtn}>
      <div style={{ width: "30px", height: "30px", marginRight: "10px" }}>
        <Image src={googleLogo} alt="google logo" layout="responsive" />
      </div>
      GOOGLE
    </button>
  );
}

export default GoogleButton;
