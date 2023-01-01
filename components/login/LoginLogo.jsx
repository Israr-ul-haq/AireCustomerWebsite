import Image from "next/image";
import styles from "./Login.module.scss";
import globalStyles from "../shared/Shared.module.scss";
import logoImage from "../../assets/images/shared/Logo.svg";

function LoginLogo() {
  return (
    <div className={`${styles.logo} ${globalStyles.mb_20}`}>
      <Image
        layout="responsive"
        src={logoImage}
        alt="aire logo"
        unoptimized={true}
      />
    </div>
  );
}

export default LoginLogo;
