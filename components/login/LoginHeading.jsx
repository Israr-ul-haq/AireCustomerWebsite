import globalStyles from "../shared/Shared.module.scss";
function LoginHeading({ text = "Login" }) {
  return (
    <div className={`${globalStyles.mb_30}`}>
      <h2
        className={`${globalStyles.fontSize_35} ${globalStyles.fontBold} ${globalStyles.nero}`}
      >
        {text}
      </h2>
    </div>
  );
}

export default LoginHeading;
