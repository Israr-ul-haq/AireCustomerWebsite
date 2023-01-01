import globalStyles from "../../shared/Shared.module.scss";
import Image from "next/image";
import TickImage from "../../../assets/images/services/icon.svg";
import Button from "../../shared/Button";
import Link from "next/link";
function BookedModal() {
  return (
    <div
      className={`${globalStyles.pb_45} ${globalStyles.pt_85} ${globalStyles.pl_45} ${globalStyles.pr_45}`}
    >
      <div
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "35px",
          position: "absolute",
          top: "-45px",
          left: "50%",
          margin: "0",
          transform: "translateX(-50%)",
        }}
        className={`${globalStyles.mr_10}`}
      >
        <Image alt="Tick" src={TickImage} layout="responsive" />
      </div>
      <h3
        className={`${globalStyles.black} ${globalStyles.fontSize_18} ${globalStyles.fontMedium} ${globalStyles.mb_5} ${globalStyles.lineheight_26}`}
      >
        Your Booking Has Been Booked As Soon Any Technician Is Booked, We Notify
        You.
      </h3>
      <p
        className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_15} ${globalStyles.fontRegular} ${globalStyles.mb_25} `}
      >
        This action can’t be undone
      </p>
      <Link passHref href={"/"}>
        <a>
          <Button
            height="45px"
            width="100%"
            maxWidth="385px"
            text="Go To HomePage"
            fontWeight="400"
            fontSize={"15px"}
            padding="0"
            borderRadius="30px"
            textTransform={"uppercase"}
            margin="0 auto"
            btnType="primary"
          />
        </a>
      </Link>
    </div>
  );
}

export default BookedModal;
