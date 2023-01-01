import globalStyles from "../../shared/Shared.module.scss";
import styles from "./Location.module.scss";
import BannerImage from "./BannerImage";
import Content from "./Content";
function Location() {
  return (
    <section
      className={`${globalStyles.pt_100} ${globalStyles.pb_100}  ${globalStyles.pt_md_50} ${globalStyles.pb_md_50}`}
    >
      <div className={`${globalStyles.container} ${globalStyles.fullHeight} `}>
        <div
          className={`${globalStyles.row} ${globalStyles.flex} ${globalStyles.flexAlignCenter}  ${styles.location} ${globalStyles.flexColumn_lg} `}
        >
          <div
            className={`${globalStyles.column_50} ${globalStyles.mb_lg_50} ${globalStyles.column_lg_100} ${globalStyles.fullWidth}`}
          >
            <BannerImage />
          </div>
          <div
            className={`${globalStyles.column_50}  ${globalStyles.column_lg_100} ${globalStyles.fullWidth}`}
          >
            <Content />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;
