import styles from "./Signup.module.scss";
import globalStyles from "../shared/Shared.module.scss";
import SignupLogo from "./SignupLogo";
import SingupHeading from "./SignupHeading";
import SignupForm from "./SignupForm";
import SignupOr from "./SignupOr";
import SignupAlready from "./SIgnupAlready";
import GoogleButton from "../shared/GoogleButton";

function Signup() {
  return (
    <div
      className={`${styles.container} ${globalStyles.flex} ${globalStyles.flexJustifyCenter} ${globalStyles.flexAlignCenter}`}
    >
      <div
        className={`${styles.content} ${globalStyles.flex} ${globalStyles.flexJustifyCenter} ${globalStyles.flexAlignCenter} ${globalStyles.flexColumn}  ${styles.image}`}
      >
        <SignupLogo />
        <SingupHeading />
        <SignupForm />
        <SignupOr />
        <div style={{ maxWidth: "385px", margin: "0 auto", width: "100%" }}>
          <GoogleButton />
        </div>
        <SignupAlready />
      </div>
    </div>
  );
}

export default Signup;
