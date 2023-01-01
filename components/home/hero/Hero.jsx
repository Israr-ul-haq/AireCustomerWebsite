import globalStyles from "../../shared/Shared.module.scss";
import BannerImage from "./BannerImage";
import Hand from "./Hand";
import HeroBookNow from "./HeroBookNow";
import HeroContent from "./HeroContent";
import Pusher from "pusher-js";
import SubmitModal from "../../technicianprofile/SubmitModal";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { useState } from "react";
function Hero() {
  const [dataCount, setDataCount] = useState(0);
  const SwalModal = withReactContent(Swal);
  const pusher = new Pusher("45f06df00cffc5c4a337", {
    cluster: "ap2",
  });

  const channel = pusher.subscribe(
    "customer-" + JSON.parse(localStorage.getItem("aireuser"))?.user?.id
  );
  channel.bind("Order", async (data1) => {
    if (data1.message.NotificationType === 9) {
      if (dataCount === 0) {
        SwalModal.fire({
          html: <SubmitModal />,
          showConfirmButton: false,
          customClass: "submitmodal",
        });
        setDataCount(1);
      }
    }
  });
  return (
    <section
      className={`${globalStyles.fullHeight} ${globalStyles.culturedbackground} ${globalStyles.pt_35} ${globalStyles.pb_50}`}
    >
      <div
        className={`${globalStyles.container} ${globalStyles.fullHeight} ${globalStyles.flex} ${globalStyles.flexAlignCenter}`}
      >
        {/* <Hand /> */}
        <div
          className={`${globalStyles.row} ${globalStyles.flex}  ${globalStyles.flexColumn_md} ${globalStyles.flexAlignCenter} `}
        >
          <div
            className={`${globalStyles.column_50} ${globalStyles.mb_md_50}   ${globalStyles.column_md_100} ${globalStyles.fullWidth}`}
          >
            <HeroContent />
            <div
              className={` ${globalStyles.flex} ${globalStyles.flexAlignCenter}  ${globalStyles.flexAlignCenter} ${globalStyles.flexAlignEnd_sm}`}
            >
              <HeroBookNow />
            </div>
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
