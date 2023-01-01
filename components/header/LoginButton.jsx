import Link from "next/link";
import Button from "../shared/Button";
import styles from "./Header.module.scss";
function LoginButton() {
  return (
    <Link passHref href={"/login"}>
      <div className={`${styles.loginbutton}`}>
        <Button
          height="50px"
          width="100%"
          maxWidth="100%"
          text="Login"
          fontWeight="700"
          fontSize={"15px"}
          borderRadius="26px"
          textTransform={"uppercase"}
          type={"submit"}
          margin="0 0 0 0"
        />
      </div>
    </Link>
  );
}

export default LoginButton;
