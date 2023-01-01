import globalStyles from "../shared/Shared.module.scss";
import styles from "./TechnicianProfile.module.scss";
import Button from "../shared/Button";
import Rating from "react-rating";
import Image from "next/image";
import StarEmpty from "../../assets/images/technician/starempty.svg";
import StarFull from "../../assets/images/technician/starfull.svg";
import { postReviews } from "../ApiServices/payment";
import { useState } from "react";
import Swal from "sweetalert2";
function SubmitModal() {
  const [reviewsData, setReviewsData] = useState({
    technicianId: JSON.parse(localStorage.getItem("AireTechnicianId")),
    customerId: JSON.parse(localStorage.getItem("aireuser")).user.id,
    orderId: JSON.parse(localStorage.getItem("orderId")),
    points: 0,
    remarks: "",
  });
  const [btnLock, setBtnLock] = useState(false);
  const handleSubmit = async () => {
    setBtnLock(true);
    const response = await postReviews(reviewsData);
    if (response.data.code === 1) {
      setBtnLock(false);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Thanks for the feedback",
      });
    }
  };
  return (
    <div
      className={`${globalStyles.pb_60} ${globalStyles.pt_60} ${globalStyles.pl_35} ${globalStyles.pr_35}`}
    >
      <h3
        className={`${globalStyles.black} ${globalStyles.fontSize_35} ${globalStyles.fontBold} ${globalStyles.mb_60}`}
      >
        Customer Reviews
      </h3>
      <Rating
        onChange={(e) => {
          const c = { ...reviewsData };
          c.points = e;
          setReviewsData(c);
        }}
        initialRating={reviewsData.points}
        emptySymbol={
          <div
            style={{
              width: "35px",
              height: "35px",
              marginRight: "10px",
              marginBottom: "30px",
            }}
          >
            <Image
              src={StarEmpty}
              className="iconstar"
              layout="responsive"
              alt="Star Empty"
            />
          </div>
        }
        fullSymbol={
          <div
            style={{
              width: "35px",
              height: "35px",
            }}
          >
            <Image
              src={StarFull}
              className="iconstar"
              layout="responsive"
              alt="Star Full"
            />
          </div>
        }
      />
      <p
        className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_15} ${globalStyles.fontRegular} ${globalStyles.mb_40} `}
      >
        How much you satisfied with the technician?
      </p>
      <textarea
        name=""
        id=""
        placeholder="YOUR REMARKS"
        style={{
          color: "rgb(#515C6F, 0.5)",
        }}
        onChange={(e) => {
          const c = { ...reviewsData };
          c.remarks = e.target.value;
          setReviewsData(c);
        }}
        className={`${styles.modalnote} ${globalStyles.pb_20}  ${globalStyles.pt_20} ${globalStyles.pl_25} ${globalStyles.pr_25} ${globalStyles.cloudygrey} ${globalStyles.fontSize_12} ${globalStyles.fontMedium} `}
      ></textarea>
      <Button
        height="50px"
        width="100%"
        maxWidth="385px"
        text="SUBMIT"
        fontWeight="700"
        fontSize={"15px"}
        padding="0"
        borderRadius="30px"
        textTransform={"uppercase"}
        margin="0 auto"
        btnType="primary"
        onClick={handleSubmit}
        btnLock={btnLock}
      />
    </div>
  );
}
export default SubmitModal;
