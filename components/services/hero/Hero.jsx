import { useRouter } from "next/router";
import globalStyles from "../../shared/Shared.module.scss";
import BannerImage from "./BannerImage";
import Buttons from "./Buttons";
import HeroContent from "./HeroContent";
function Hero({ data }) {
  return (
    <section
      className={`${globalStyles.fullHeight}  ${globalStyles.pt_10} ${globalStyles.pb_10}`}
    >
      <div
        className={`${globalStyles.container} ${globalStyles.fullHeight} ${globalStyles.flex} ${globalStyles.flexAlignCenter}`}
      >
        <div
          className={`${globalStyles.row} ${globalStyles.flex}  ${globalStyles.flexColumn_md} ${globalStyles.flexAlignCenter} `}
        >
          <div
            className={`${globalStyles.column_50} ${globalStyles.mb_md_50}   ${globalStyles.column_md_100} ${globalStyles.fullWidth}`}
          >
            <HeroContent />
            <Buttons data={data} />
          </div>
          <div
            className={`${globalStyles.column_50}  ${globalStyles.column_md_100}  ${globalStyles.fullWidth}`}
          >
            <BannerImage />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
