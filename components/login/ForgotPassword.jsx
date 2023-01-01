import Image from "next/image";
import globalStyles from "../shared/Shared.module.scss";
import lockImage from "../../assets/images/login/lock.svg";
import Link from "next/link";
function ForgotPassword() {
  return (
    <Link href={"/forgot"} passHref>
      <a className={`${globalStyles.flex} ${globalStyles.flexAlignCenter}`}>
        <Image
          src={lockImage}
          alt="forgot password lock image"
          unoptimized={true}
        />
        <h6
          className={`${globalStyles.fontSize_12} ${globalStyles.fontRegular} ${globalStyles.darkgray} ${globalStyles.ml_10}`}
        >
          Forgot your password
        </h6>
      </a>
    </Link>
  );
}

export default ForgotPassword;
