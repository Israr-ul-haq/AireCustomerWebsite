import HeaderMenuLinks from "./HeaderMenuLinks";
import globalStyles from "../shared/Shared.module.scss";
function HeaderMenu() {
  return (
    <ul className={`${globalStyles.ml_70}`} >
      <HeaderMenuLinks />
    </ul>
  );
}

export default HeaderMenu;
