import globalStyles from "../shared/Shared.module.scss";
import Link from "next/link";
function SignupAlready() {
  return (
    <p
      className={`${globalStyles.fontSize_15} ${globalStyles.fontSize_sm_12} ${globalStyles.fontRegular} ${globalStyles.chambray}`}
    >
      Already have an account? Tap
      <span className={` ${globalStyles.fontBold} ${globalStyles.smalt}`}>
        {" "}
        <Link href="/login">
          <a className={` ${globalStyles.fontBold} ${globalStyles.smalt}`}> LOGIN.</a>
        </Link>
      </span>
    </p>
  );
}

export default SignupAlready;
