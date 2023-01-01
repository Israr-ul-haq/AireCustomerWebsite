import globalStyles from "../shared/Shared.module.scss";
import styles from "./Maintenance.module.scss";
function TechnicianHeader() {
  return (
    <div
      className={`${globalStyles.flex} ${globalStyles.flexAlignEnd} ${globalStyles.flexAlignStart_md} ${globalStyles.flexColumn_md} `}
    >
      <div className={`${styles.headercontent} ${globalStyles.mb_md_20} `}>
        <h5
          className={`${globalStyles.smalt} ${globalStyles.fontSize_18} ${globalStyles.fontBold} ${globalStyles.mb_0}`}
        >
          SERVICES
        </h5>
        <h1
          className={`${globalStyles.nero} ${globalStyles.fontSize_55} ${globalStyles.fontSize_lg_35} ${globalStyles.fontSize_sm_30} ${globalStyles.black} `}
        >
         MAINTENANCE
        </h1>
      </div>
    </div>
  );
}

export default TechnicianHeader;
