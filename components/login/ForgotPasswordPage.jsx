import styles from "./Login.module.scss";
import globalStyles from "../shared/Shared.module.scss";
import LoginLogo from "./LoginLogo";
import LoginHeading from "./LoginHeading";
import ForgotPasswordForm from "./ForgotPasswordForm";
function ForgotPasswordPage() {
  return (
    <div
      className={`${styles.container} ${globalStyles.flex} ${globalStyles.flexJustifyCenter} ${globalStyles.flexAlignCenter}`}
    >
      <div
        className={`${styles.content} ${globalStyles.flex} ${globalStyles.flexJustifyCenter} ${globalStyles.flexAlignCenter} ${globalStyles.flexColumn}`}
      >
        <LoginLogo />
        <LoginHeading text="Forgot Password" />
        <ForgotPasswordForm />
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
