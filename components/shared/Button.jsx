import styles from "./Shared.module.scss";
function Button({
  fontFamily = "sans-serif",
  fontSize = "",
  text = "Button Text",
  fontWeight = "",
  width = "",
  height = "",
  maxWidth = "",
  margin = "0",
  type = "",
  textTransform,
  borderRadius,
  btnType = "primary",
  btnStyle = "",
  isSubmitting,
  onClick,
  btnLock,
}) {
  let btnClass = "";
  if (btnStyle === "" && btnType === "primary") {
    btnClass = styles.primary;
  } else if (btnStyle === "outline" && btnType === "primary") {
    btnClass = styles.primaryoutline;
  } else if (btnStyle === "outline" && btnType === "secondary") {
    btnClass = styles.secondaryoutline;
  } else if (btnStyle === "" && btnType === "secondary") {
    btnClass = styles.secondary;
  } else if (btnStyle === "outline" && btnType === "danger") {
    btnClass = styles.dangeroutline;
  } else if (btnStyle === "" && btnType === "danger") {
    btnClass = styles.danger;
  }
  return (
    <button
      type={type}
      className={`${btnClass} btn_`}
      disabled={isSubmitting}
      onClick={onClick}
      style={{
        margin,
        fontSize,
        fontWeight,
        fontFamily,
        width,
        maxWidth,
        height,
        fontFamily,
        textTransform,
        borderRadius,
        cursor: "pointer",
      }}
    >
      {btnLock ? (
        <div className="loader" style={{ margin: "0 20px" }}></div>
      ) : (
        ""
      )}
      {text}
    </button>
  );
}

export default Button;
