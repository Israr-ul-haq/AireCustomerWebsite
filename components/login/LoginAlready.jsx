import globalStyles from "../shared/Shared.module.scss";
import Link from "next/link";
function LoginAlready() {
  return (
    <p
      className={`${globalStyles.fontSize_15} ${globalStyles.fontSize_sm_12} ${globalStyles.fontRegular} ${globalStyles.chambray}`}
    >
      Don’t have an account? Tap{" "}
      <span className={` ${globalStyles.fontBold} ${globalStyles.smalt}`}>
        <Link href="/signup">
          <a className={` ${globalStyles.fontBold} ${globalStyles.smalt}`}>
            {" "}
            SIGN UP.
          </a>
        </Link>
      </span>
    </p>
  );
}

export default LoginAlready;
