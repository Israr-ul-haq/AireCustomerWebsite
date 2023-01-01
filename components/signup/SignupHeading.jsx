import globalStyles from "../shared/Shared.module.scss";
function SingupHeading() {
  return (
    <div className={`${globalStyles.mb_30}`}>
      <h2
        className={`${globalStyles.fontSize_35} ${globalStyles.fontBold} ${globalStyles.nero}`}
      >
        Sign Up
      </h2>
    </div>
  );
}

export default SingupHeading;
