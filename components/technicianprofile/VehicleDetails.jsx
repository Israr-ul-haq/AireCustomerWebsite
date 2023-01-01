import globalStyles from "../shared/Shared.module.scss";
import styles from "./TechnicianProfile.module.scss";
function VehicleDetails({ data }) {
  return (
    <div
      className={`${styles.card} ${globalStyles.pb_30}  ${globalStyles.pt_30} ${globalStyles.pl_55} ${globalStyles.pr_55} ${globalStyles.pb_sm_20}  ${globalStyles.pt_sm_20} ${globalStyles.pr_sm_20} ${globalStyles.pl_sm_20} ${globalStyles.mt_30}`}
    >
      <div className={`${globalStyles.mb_30}`}>
        <h5
          className={`${globalStyles.nero} ${globalStyles.fontSize_18} ${globalStyles.fontBold} ${globalStyles.mb_0} `}
        >
          Vehicle Details
        </h5>
      </div>
      <div className={`${globalStyles.row} `}>
        <div
          className={`${globalStyles.column_33} ${globalStyles.column_md_50} ${globalStyles.mb_md_25} ${globalStyles.column_sm_100} `}
        >
          <h5
            className={`${globalStyles.nero} ${globalStyles.fontSize_16} ${globalStyles.fontBold} ${globalStyles.mb_10} `}
          >
            Vehicle Name
          </h5>
          <h6
            className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_15} ${globalStyles.fontRegular} ${globalStyles.mb_0} `}
          >
            {data?.VehicleName}
          </h6>
        </div>
        <div
          className={`${globalStyles.column_33} ${globalStyles.column_md_50} ${globalStyles.mb_md_25}  ${globalStyles.column_sm_100} `}
        >
          <h5
            className={`${globalStyles.nero} ${globalStyles.fontSize_16} ${globalStyles.fontBold} ${globalStyles.mb_10} `}
          >
            Vehicle Model
          </h5>
          <h6
            className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_15} ${globalStyles.fontRegular} ${globalStyles.mb_0} `}
          >
            {data?.VehicleModel}
          </h6>
        </div>
        <div
          className={`${globalStyles.column_33} ${globalStyles.column_md_50}  ${globalStyles.column_sm_100} `}
        >
          <h5
            className={`${globalStyles.nero} ${globalStyles.fontSize_16} ${globalStyles.fontBold} ${globalStyles.mb_10} `}
          >
            Vehicle Number
          </h5>
          <h6
            className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_15} ${globalStyles.fontRegular} ${globalStyles.mb_0} `}
          >
            {data?.VehicleNumber}
          </h6>
        </div>
      </div>
    </div>
  );
}

export default VehicleDetails;
