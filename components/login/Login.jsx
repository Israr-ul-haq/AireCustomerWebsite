import styles from "./Login.module.scss";
import globalStyles from "../shared/Shared.module.scss";
import GoogleButton from "../shared/GoogleButton";
import LoginForm from "./LoginForm";
import ForgotPassword from "./ForgotPassword";
import LoginOr from "./LoginOr";
import LoginLogo from "./LoginLogo";
import LoginHeading from "./LoginHeading";
import LoginAlready from "./LoginAlready";
function Login() {
  return (
    <div
      className={`${styles.container} ${globalStyles.flex} ${globalStyles.flexJustifyCenter} ${globalStyles.flexAlignCenter}`}
    >
      <div
        className={`${styles.content} ${globalStyles.flex} ${globalStyles.flexJustifyCenter} ${globalStyles.flexAlignCenter} ${globalStyles.flexColumn}`}
      >
        <LoginLogo />
        <LoginHeading />
        <LoginForm />
        <ForgotPassword />
        <LoginOr />
        <GoogleButton />
        <LoginAlready />
      </div>
    </div>
  );
}

export default Login;
