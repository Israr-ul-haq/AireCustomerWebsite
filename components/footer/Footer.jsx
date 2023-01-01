import globalStyles from "../shared/Shared.module.scss";
import styles from "./Footer.module.scss";
import FooterContent from "./FooterContent";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <div className={`${globalStyles.container}`}>
        <div
          className={`${globalStyles.flexAlignCenter} ${globalStyles.flex} ${globalStyles.flexColumn_md} ${globalStyles.flexAlignStart_md} `}
        >
          <Logo />
          <FooterContent />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
