import globalStyles from "../../shared/Shared.module.scss";
function HeroContent() {
  return (
    <>
      <h5
        className={`${globalStyles.smalt} ${globalStyles.fontSize_18} ${globalStyles.fontBold} ${globalStyles.mb_10}`}
      >
        It's Fast And Easy
      </h5>
      <h1
        className={`${globalStyles.nero} ${globalStyles.fontSize_52} ${globalStyles.fontSize_lg_40} ${globalStyles.fontSize_sm_30} ${globalStyles.fontBold} ${globalStyles.mb_15} ${globalStyles.lineheight_70} ${globalStyles.lineheight_lg_55} ${globalStyles.lineheight_sm_40} ${globalStyles.uppercase}`}
      >
        Connect to the nearest, available technician.
      </h1>
      {/* <p
        className={`${globalStyles.bolddarkgray} ${globalStyles.fontSize_18} ${globalStyles.fontRegular} ${globalStyles.mb_30}`}
      >
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p> */}
    </>
  );
}

export default HeroContent;
