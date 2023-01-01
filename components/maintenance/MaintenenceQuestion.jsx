import globalStyles from "../shared/Shared.module.scss";
import styles from "./Maintenance.module.scss";
function MaintenenceQuestion({
  questionNumber,
  questionText,
  handleChange,
  noText,
  values,
  isNoText,
}) {
  return (
    <div
      className={`${globalStyles.flex} ${globalStyles.flexAlignCenter} ${globalStyles.flexAlignStart_sm} ${globalStyles.flexColumn_sm} ${globalStyles.flexJustifyBetween}   ${styles.question}`}
    >
      <p
        className={`${globalStyles.fontSize_18} ${globalStyles.fontRegular}  ${globalStyles.fontRegular} ${globalStyles.cloudygrey}`}
      >
        {questionText}
        <p style={{ color: "red", marginTop: "5px" }}>
          {values["question" + questionNumber] === isNoText ? noText : ""}
        </p>
      </p>
      {/* <div className={`${styles.questionInput}  ${globalStyles.mt_sm_25}`}>
        <input
          type={"radio"}
          name={"question" + questionNumber}
          id={"question" + questionNumber + "_yes"}
          value="yes"
          onChange={handleChange}
          defaultChecked
        />
        <label htmlFor={"question" + questionNumber + "_yes"}>Yes</label>
        <input
          type={"radio"}
          name={"question" + questionNumber}
          value="no"
          onChange={handleChange}
          id={"question" + questionNumber + "_no"}
        />
        <label htmlFor={"question" + questionNumber + "_no"}>No</label>
      </div> */}
    </div>
  );
}
export default MaintenenceQuestion;
