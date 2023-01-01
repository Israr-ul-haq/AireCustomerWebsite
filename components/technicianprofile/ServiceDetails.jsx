import globalStyles from "../shared/Shared.module.scss";
import styles from "./TechnicianProfile.module.scss";

function ServiceDetails() {
  return (
    <div
      className={`${styles.card} ${globalStyles.pb_30}   ${globalStyles.pt_30} ${globalStyles.pl_55} ${globalStyles.pr_55} ${globalStyles.pb_sm_20}  ${globalStyles.pt_sm_20} ${globalStyles.pr_sm_20} ${globalStyles.pl_sm_20}`}
    >
      <div className={`${globalStyles.mb_30}`}>
        <h5
          className={`${globalStyles.nero} ${globalStyles.fontSize_18} ${globalStyles.fontBold} ${globalStyles.mb_0} `}
        >
          Service Details
        </h5>
      </div>
      <div
        className={`${globalStyles.row} ${globalStyles.mb_40} ${globalStyles.mb_md_15}`}
      >
        <div
          className={`${globalStyles.column_25} ${globalStyles.column_md_50} ${globalStyles.mb_md_25} ${globalStyles.column_sm_100} `}
        >
          <h5
            className={`${globalStyles.nero} ${globalStyles.fontSize_16} ${globalStyles.fontBold} ${globalStyles.mb_10} `}
          >
            Service Number
          </h5>
          <h6
            className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_15} ${globalStyles.fontRegular} ${globalStyles.mb_0} `}
          >
            #xyon-04
          </h6>
        </div>
        <div
          className={`${globalStyles.column_25} ${globalStyles.column_md_50} ${globalStyles.mb_md_25} ${globalStyles.column_sm_100} `}
        >
          <h5
            className={`${globalStyles.nero} ${globalStyles.fontSize_16} ${globalStyles.fontBold} ${globalStyles.mb_10} `}
          >
            Service Number
          </h5>
          <h6
            className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_15} ${globalStyles.fontRegular} ${globalStyles.mb_0} `}
          >
            #xyon-04
          </h6>
        </div>
        <div
          className={`${globalStyles.column_25} ${globalStyles.column_md_50} ${globalStyles.mb_md_25} ${globalStyles.column_sm_100} `}
        >
          <h5
            className={`${globalStyles.nero} ${globalStyles.fontSize_16} ${globalStyles.fontBold} ${globalStyles.mb_10} `}
          >
            Service Number
          </h5>
          <h6
            className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_15} ${globalStyles.fontRegular} ${globalStyles.mb_0} `}
          >
            #xyon-04
          </h6>
        </div>
        <div
          className={`${globalStyles.column_25} ${globalStyles.column_md_50} ${globalStyles.mb_md_25} ${globalStyles.column_sm_100} `}
        >
          <h5
            className={`${globalStyles.nero} ${globalStyles.fontSize_16} ${globalStyles.fontBold} ${globalStyles.mb_10} `}
          >
            Service Number
          </h5>
          <h6
            className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_15} ${globalStyles.fontRegular} ${globalStyles.mb_0} `}
          >
            #xyon-04
          </h6>
        </div>
      </div>
      <div
        className={`${styles.cardnote} ${globalStyles.pb_20}  ${globalStyles.pt_20} ${globalStyles.pl_25} ${globalStyles.pr_25}`}
      >
        <h5
          style={{ color: "#515c6f80" }}
          className={`${globalStyles.nero} ${globalStyles.fontSize_12} ${globalStyles.fontMedium} ${globalStyles.mb_0} `}
        >
          NOTES
        </h5>
        <h6
          style={{ color: "#515C6F" }}
          className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_15} ${globalStyles.fontRegular} ${globalStyles.mb_0} `}
        >
          Maecenas interdum lorem eleifend orci aliquam mollis. Aliquam non
          rhoncus magna. Suspendisse aliquet
        </h6>
      </div>
    </div>
  );
}

export default ServiceDetails;
