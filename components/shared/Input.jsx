import styles from "./Shared.module.scss";
function Input({
  type = "text",
  placeholder = "",
  id,
  labelName = "",
  handleChange,
  myValue,
  handleBlur,
}) {
  return (
    <div
      className={`${styles.formcontrol} ${styles.flex} ${styles.flexJustifyEnd}`}
    >
      {type === "checkbox" ? (
        <div className={`${styles.flex} ${styles.flexAlignCenter}`}>
          <input
            type={type}
            placeholder={placeholder}
            id={id}
            onChange={handleChange}
            onBlur={handleBlur}
            value={myValue}
          />
          <label
            className={`${styles.fontSize_12} ${styles.fontRegular} ${styles.stylesdarkGray} ${styles.ml_10}`}
            htmlFor={id}
          >
            {labelName}
          </label>
        </div>
      ) : (
        <>
          {" "}
         
        </>
      )}
    </div>
  );
}

export default Input;
