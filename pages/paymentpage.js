import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/payments/CheckoutForm";
import { getsecretDetails } from "../components/ApiServices/payment";
import NextNProgress from "nextjs-progressbar";

function Payment_page() {
  const [secret2, setSecret] = useState();
  const [btnLock, setBtnLock] = useState(true);
  const stripePromise = loadStripe(
    "pk_test_51Kc0aOB9llV6mrCZV6tvtKY5I6wzX5hw1Vk4YmfrfkXPiYFjEESusIwYg9SvPeUb4Lprgsq8UmCdBBvZvz4GiyzD00OF0NkOA1"
  );
  // const id = "0972cf6c-c91f-4d3b-9633-1e150d33df74";
  const secret =
    "sk_test_51Kc0aOB9llV6mrCZXeYl7yV87GBqq5PdoJlFaaWOYhnpT3kKX3WiDLZJUMPatc25TueuvnDMb1iYcZLLzNnfyZCi00RdDVKKwx";

  const secret1 = async () => {
    setBtnLock(true);
    const response = await getsecretDetails(
      JSON.parse(localStorage.getItem("totalAmount"))
    );
    debugger;
    setSecret(response.data.data.client_secret);
    setBtnLock(false);
  };
  useEffect(() => {
    secret1();
  }, []);
  const options = {
    // passing the client secret obtained from the server

    clientSecret: secret2,
  };

  return (
    <div>
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
        options={{ showSpinner: true }}
      />
      {btnLock ? (
        <div className="payment_contains">
          <div
            className="loader loader_color"
            style={{ margin: "0 20px" }}
          ></div>
        </div>
      ) : secret2 ? (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm secretKey={secret2} />
        </Elements>
      ) : (
        ""
      )}
    </div>
  );
}

export default Payment_page;
