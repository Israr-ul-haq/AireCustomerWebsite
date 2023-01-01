import globalStyles from "../shared/Shared.module.scss";
import styles from "./Maintenance.module.scss";
function AdditionalNotes({ handleChange, values }) {
  return (
    <div>
      <h2
        className={`${globalStyles.nero} ${globalStyles.fontSize_18} ${globalStyles.fontBold} ${globalStyles.mb_20}`}
      >
        Additional Notes
      </h2>
      <div className={`${globalStyles.relative} `}>
        <h5
          style={{
            color: "#515c6f80",
            position: "absolute",
            top: "20px",
            left: "25px",
          }}
          className={`${globalStyles.nero} ${globalStyles.fontSize_12} ${globalStyles.fontMedium} ${globalStyles.mb_0} `}
        >
          NOTES
        </h5>
        <textarea
          className={`${styles.cardnote}  ${globalStyles.fullWidth}  ${globalStyles.cloudygrey} ${globalStyles.fontSize_15} ${globalStyles.fontRegular} ${globalStyles.mb_0}`}
          name={"description"}
          onChange={handleChange}
          value={values.description}
          placeholder="gate code 123, say name at the gate, bring tall ladder"
        />
      </div>
    </div>
  );
}

export default AdditionalNotes;
