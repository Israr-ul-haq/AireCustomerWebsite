import Image from "next/image";
import styles from "./Signup.module.scss";
import globalStyles from "../shared/Shared.module.scss";
import logoImage from "../../assets/images/shared/Logo.svg";

function SignupLogo() {
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

export default SignupLogo;
