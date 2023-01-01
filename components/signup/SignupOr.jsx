import globalStyles from "../shared/Shared.module.scss";
function SignupOr() {
  return (
    <div
      className={`${globalStyles.flex} ${globalStyles.flexAlignCenter} ${globalStyles.mt_15} ${globalStyles.mb_15}`}
    >
      <h6
        className={`${globalStyles.fontSize_18} ${globalStyles.fontSemiBold} ${globalStyles.nero} `}
      >
        OR
      </h6>
    </div>
  );
}

export default SignupOr;
