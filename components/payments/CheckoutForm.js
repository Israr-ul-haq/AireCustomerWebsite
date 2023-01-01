import React, { useState } from "react";
import ReactDOM from "react-dom";
import styles from "../login/Login.module.scss";
import globalStyles from "../shared/Shared.module.scss";
import withReactContent from "sweetalert2-react-content";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useRouter } from "next/router";

import Button from "../shared/Button";

import Swal from "sweetalert2";
import { payment } from "../ApiServices/payment";
import SubmitModal from "../technicianprofile/SubmitModal";

function CheckoutForm({ secretKey }) {
  const SwalModal = withReactContent(Swal);
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();
  const [btnLock, setBtnLock] = useState(false);
  // const [payment, setPayment] = useState({ status: "initial" });
  const [errorMessage, setErrorMessage] = useState("");
  const [secret, setSecret] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setBtnLock(true);
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmCardPayment(secretKey, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      Swal.fire({
        position: "center",
        icon: "error",
        title: result.error.message,
        showConfirmButton: true,
        timer: 5000,
        customClass: "messageshow",
      });
      setBtnLock(false);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
      setBtnLock(true);
      const body = {
        orderId: JSON.parse(localStorage.getItem("orderId")),
        userId: JSON.parse(localStorage.getItem("aireuser")).user.id,
        transectionId: result.paymentIntent.id,
      };
      const response = await payment(body);
      if (response.data.code === 1) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "payment" + " " + result.paymentIntent.status,
        });
        setBtnLock(false);
        router.push("/");
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: response.data.data.message,
          showConfirmButton: true,
          timer: 5000,
          customClass: "messageshow",
        });
        setBtnLock(false);
      }
    }
  };

  const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
      base: {
        iconColor: "#6772e5",
        color: "#6772e5",
        fontWeight: "500",
        fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
        fontSize: "16px",
        fontSmoothing: "antialiased",
        ":-webkit-autofill": {
          color: "#fce883",
        },
        "::placeholder": {
          color: "#6772e5",
        },
      },

      invalid: {
        iconColor: "#ef2961",
        color: "#ef2961",
      },
    },
  };

  return (
    <div
      className={`${styles.container} ${globalStyles.flex} ${globalStyles.flexJustifyCenter} ${globalStyles.flexAlignCenter}`}
    >
      <div
        className={`${styles.content} ${globalStyles.flex} ${globalStyles.flexJustifyCenter}  ${globalStyles.flexColumn}`}
      >
        <form onSubmit={handleSubmit} className={styles.form}>
          {/* <button type="submit" disabled={!stripe || !elements}>
            Pay
          </button> */}
          <div className={globalStyles.row}>
            {/* <div
              className={`${globalStyles.column_100} ${globalStyles.column_sm_100} ${globalStyles.mb_30} ${globalStyles.relative}  `}
            >
              <label
                className={globalStyles.formcontrol__label}
                htmlFor={"email"}
              >
                User Name
              </label>
              <input
                type={"text"}
                placeholder={"Name"}
                id={"email"}
                className={globalStyles.formcontrol__input}
              />
              <p
                style={{
                  marginTop: "5px",
                  color: "red",
                  fontSize: "14px",
                  fontWeight: "500",
                  paddingLeft: "30px",
                }}
              ></p>
            </div>
            <div
              className={`${globalStyles.column_100} ${globalStyles.column_sm_100} ${globalStyles.mb_30} ${globalStyles.relative}  `}
            >
              <label
                className={globalStyles.formcontrol__label}
                htmlFor={"phoneNumber"}
              >
                Phone Number
              </label>
              <input
                type={"number"}
                placeholder={"Number"}
                id={"phoneNumber"}
                className={globalStyles.formcontrol__input}
              />
              <p
                style={{
                  marginTop: "5px",
                  color: "red",
                  fontSize: "14px",
                  fontWeight: "500",
                  paddingLeft: "30px",
                }}
              ></p>
            </div> */}
            <div
              className={`${globalStyles.column_100} ${globalStyles.column_sm_100} ${globalStyles.mb_30} ${globalStyles.relative}  `}
            >
              {/* <PaymentElement
              // options={CARD_OPTIONS}
              // className={globalStyles.formcontrol__input}
              /> */}
              <CardElement />
              {/* <label
                className={globalStyles.formcontrol__label}
                htmlFor={"card"}
              >
                Card Number
              </label> */}
            </div>
            <Button
              height="50px"
              width="100%"
              maxWidth="100%"
              text={
                "Pay" +
                " " +
                "$" +
                JSON.parse(localStorage.getItem("totalAmount"))
              }
              fontWeight="700"
              fontSize={"15px"}
              borderRadius="26px"
              textTransform={"uppercase"}
              type={"submit"}
              margin="0 0 15px 0"
              disabled={!stripe || !elements}
              btnLock={btnLock}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default CheckoutForm;
