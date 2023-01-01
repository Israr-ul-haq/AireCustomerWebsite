import globalStyles from "../shared/Shared.module.scss";
import styles from "./TechnicianProfile.module.scss";
import Image from "next/image";
import CrossImage from "../../assets/images/chat/icon_cancel.svg";
import notificationImage from "../../assets/images/technician/notificationproduct.svg";
import Swal from "sweetalert2";
import Button from "../shared/Button";
import { useEffect, useState } from "react";
import { getBillDetails } from "../ApiServices/CancelOrder.Service";
import { useRouter } from "next/router";
import Link from "next/link";

function InvoiceDetails(order) {
  const router = useRouter();
  const closeSwal = () => {
    Swal.close();
  };
  const [orderInvoiceData, setOrderInvoiceData] = useState();

  useEffect(() => {
    billData();
  }, []);

  const billData = async () => {
    const response = await getBillDetails(
      JSON.parse(localStorage.getItem("orderId"))
    );
    setOrderInvoiceData(response.data.data);
    localStorage.setItem(
      "totalAmount",
      JSON.stringify(response.data.data.totalAmount)
    );
  };

  const paypage = () => {
    router.push(
      {
        pathname: "/paymentpage",
      },
      "/paymentpage"
    );
  };
  return (
    <div className={` ${styles.billheader_main}`}>
      <div
        className={`${globalStyles.flex} ${globalStyles.flexJustifyBetween} ${globalStyles.flexAlignStart} ${styles.billborder}`}
      >
        <div
          className={`${globalStyles.flex} ${globalStyles.flexJustifyBetween} ${globalStyles.flexAlignStart}  ${globalStyles.fullWidth} `}
        >
          <div
            className={`${styles.chatcontent} ${globalStyles.flex} ${globalStyles.flexAlignCenter}`}
          >
            <div
              style={{ width: "35px", height: "35px", borderRadius: "35px" }}
              className={`${globalStyles.mr_10}`}
            >
              <Image
                alt="chat user"
                src={notificationImage}
                layout="responsive"
                style={{
                  layout: "responsive",
                  borderRadius: "50%",
                  width: "100px",
                  height: "40px",
                }}
              />
            </div>
            <div
              className={`${globalStyles.flex} ${globalStyles.flexAlignStart} ${globalStyles.flexColumn} ${styles.innerchatcontent} `}
            >
              <h5
                className={`${globalStyles.nero} ${globalStyles.fontSize_18} ${globalStyles.fontBold} ${globalStyles.mb_0} ${globalStyles.chambray} `}
              >
                Notification
              </h5>
            </div>
          </div>
          <div
            style={{ width: "20px", height: "20px", cursor: "pointer" }}
            onClick={closeSwal}
          >
            <Image alt="cross" src={CrossImage} layout="responsive" />
          </div>
        </div>
      </div>
      <div className={`${globalStyles.flex} ${globalStyles.flexJustifyCenter}`}>
        <h5
          className={`${globalStyles.nero} ${globalStyles.fontSize_18}  ${globalStyles.mb_0} ${globalStyles.fontMedium}  `}
        >
          Service Bill
        </h5>
      </div>
      <div
        className={`${globalStyles.flex} ${globalStyles.flexJustifyCenter} ${globalStyles.pt_10}`}
      >
        <h5
          className={`${globalStyles.smalt} ${globalStyles.fontSize_22} ${globalStyles.fontBold} ${globalStyles.mb_0} ${globalStyles.fontMedium}  `}
        >
          $ {orderInvoiceData?.totalAmount}
        </h5>
      </div>
      <div
        className={`${globalStyles.flex} ${globalStyles.flexAlignStart} ${globalStyles.pt_10}`}
      >
        {" "}
        <h5
          className={`${globalStyles.nero} ${globalStyles.fontSize_18}   ${globalStyles.mb_0} ${globalStyles.fontBold}  `}
        >
          Service Details
        </h5>
      </div>
      <div
        className={`${globalStyles.flex} ${globalStyles.flexJustifyBetween} ${globalStyles.pt_15}`}
      >
        {" "}
        <h5
          className={`${globalStyles.nero} ${globalStyles.fontSize_14}  ${globalStyles.chambray}   ${globalStyles.mb_0}   ${globalStyles.fontRegular}  `}
        >
          Service Number
        </h5>
        <h5
          className={`${globalStyles.nero} ${globalStyles.fontSize_14}  ${globalStyles.chambray}   ${globalStyles.mb_0}   ${globalStyles.fontRegular}  `}
        >
          {orderInvoiceData?.orderId}
        </h5>
      </div>
      <div
        className={`${globalStyles.flex} ${globalStyles.flexJustifyBetween} ${globalStyles.pt_10}`}
      >
        {" "}
        <h5
          className={`${globalStyles.nero} ${globalStyles.fontSize_14}  ${globalStyles.chambray}   ${globalStyles.mb_0}   ${globalStyles.fontRegular}  `}
        >
          Service Address
        </h5>
        <h5
          className={`${globalStyles.nero} ${globalStyles.fontSize_14}  ${globalStyles.chambray}   ${globalStyles.mb_0}   ${globalStyles.fontRegular}  `}
        >
          {orderInvoiceData?.address}
        </h5>
      </div>
      <div className={`${styles.billborder}`}></div>
      <div
        className={`${globalStyles.flex} ${globalStyles.flexJustifyBetween} `}
      >
        {" "}
        <h5
          className={`${globalStyles.nero} ${globalStyles.fontSize_15}   ${globalStyles.mb_0} ${globalStyles.fontMedium}  `}
        >
          Service
        </h5>
        <h5
          className={`${globalStyles.nero} ${globalStyles.fontSize_15}   ${globalStyles.mb_0} ${globalStyles.fontMedium}  `}
        >
          Items
        </h5>
        <h5
          className={`${globalStyles.nero} ${globalStyles.fontSize_15}   ${globalStyles.mb_0} ${globalStyles.fontMedium}  `}
        >
          Price
        </h5>
      </div>
      <div
        className={`${globalStyles.flex} ${globalStyles.flexJustifyBetween} ${globalStyles.pt_15}`}
      >
        {" "}
        <h5
          className={`${globalStyles.nero} ${globalStyles.fontSize_14}  ${globalStyles.chambray}   ${globalStyles.mb_0}   ${globalStyles.fontRegular}  `}
        >
          Technician Charges
        </h5>
        <h5
          className={`${globalStyles.nero} ${globalStyles.fontSize_14}  ${globalStyles.chambray}   ${globalStyles.mb_0}   ${globalStyles.fontRegular}  `}
        ></h5>
        <h5
          className={`${globalStyles.nero} ${globalStyles.fontSize_14}  ${globalStyles.chambray}   ${globalStyles.mb_0}   ${globalStyles.fontRegular}  `}
        >
          ${orderInvoiceData?.technicianCharges}
        </h5>
      </div>
      {/* <div
        className={`${globalStyles.flex} ${globalStyles.flexJustifyBetween} ${globalStyles.pt_15}`}
      >
        {" "}
        <h5
          className={`${globalStyles.nero} ${globalStyles.fontSize_14}  ${globalStyles.chambray}   ${globalStyles.mb_0}   ${globalStyles.fontRegular}  `}
        >
          Products
        </h5>
        <h5
          className={`${globalStyles.nero} ${globalStyles.fontSize_14}  ${globalStyles.chambray}   ${globalStyles.mb_0}   ${globalStyles.fontRegular}  `}
        >
          {orderInvoiceData?.products?.length}
        </h5>
        <h5
          className={`${globalStyles.nero} ${globalStyles.fontSize_14}  ${globalStyles.chambray}   ${globalStyles.mb_0}   ${globalStyles.fontRegular}  `}
        >
          $0
        </h5>
      </div> */}
      <div className={`${styles.billdashborder}`}></div>
      <div
        className={`${globalStyles.flex} ${globalStyles.flexJustifyEnd} ${globalStyles.pt_15} ${styles.gap_13} `}
      >
        {" "}
        <h5
          className={`${globalStyles.nero} ${globalStyles.fontSize_15}   ${globalStyles.mb_0} ${globalStyles.fontMedium}  `}
        >
          Grand Total:
        </h5>
        <h5
          className={`${globalStyles.nero} ${globalStyles.fontSize_15}   ${globalStyles.mb_0} ${globalStyles.fontMedium}  `}
        >
          ${orderInvoiceData?.totalAmount}
        </h5>
      </div>
      <div className={`${styles.billdash1border}`}></div>
      <div
        className={`${globalStyles.flex} ${globalStyles.flexAlignStart} ${globalStyles.pt_10} `}
      >
        {" "}
        <h5
          className={`${globalStyles.nero} ${globalStyles.fontSize_15}   ${globalStyles.mb_0} ${globalStyles.fontMedium}  `}
        >
          View Details
        </h5>
      </div>
      {orderInvoiceData?.products?.map((item) => {
        return (
          <>
            <div
              className={`${globalStyles.flex} ${globalStyles.flexJustifyBetween} ${globalStyles.pt_15}`}
            >
              {" "}
              <h5
                className={`${globalStyles.nero} ${globalStyles.fontSize_14}  ${globalStyles.chambray}   ${globalStyles.mb_0}   ${globalStyles.fontRegular}  `}
              >
                {item?.title}
              </h5>
              <h5
                className={`${globalStyles.nero} ${globalStyles.fontSize_14}  ${globalStyles.chambray}   ${globalStyles.mb_0}   ${globalStyles.fontRegular}  `}
              >
                1
              </h5>
              <h5
                className={`${globalStyles.nero} ${globalStyles.fontSize_14}  ${globalStyles.chambray}   ${globalStyles.mb_0}   ${globalStyles.fontRegular}  `}
              >
                ${item?.price}
              </h5>
            </div>
          </>
        );
      })}

      <div className={`${styles.billdash1border}`}></div>
      <div className={`${globalStyles.pt_25} `}>
        <a href="/paymentpage">
          <Button
            height="50px"
            width="100%"
            maxWidth="385px"
            text="Make Payment"
            fontWeight="700"
            fontSize={"15px"}
            padding="0"
            borderRadius="30px"
            textTransform={"uppercase"}
            margin="0 auto"
            btnType="primary"
          />
        </a>
      </div>
    </div>
  );
}

export default InvoiceDetails;
