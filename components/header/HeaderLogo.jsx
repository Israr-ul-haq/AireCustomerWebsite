import Image from "next/image";
import styles from "./Header.module.scss";
import logoImage from "../../assets/images/header/Logo.png";
import Link from "next/link";

function HeaderLogo() {
  return (
    <Link href={"/"} passHref>
      <a>
        <div className={`${styles.logo}`}>
          <Image layout="responsive" src={logoImage} alt="aire logo" />
        </div>
      </a>
    </Link>
  );
}

export default HeaderLogo;
