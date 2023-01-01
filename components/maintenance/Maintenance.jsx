import { Formik } from "formik";
import Swal from "sweetalert2";
import Button from "../shared/Button";
import globalStyles from "../shared/Shared.module.scss";
import AdditionalNotes from "./AdditionalNotes";
import axios from "../../constants/axiosConfig";
import MaintenanceHeader from "./MaintenanceHeader";
import MaintenenceQuestions from "./MaintenenceQuestions";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
function Maintenance() {
  const router = useRouter();
  useEffect(() => {
    console.log(JSON.parse(sessionStorage.getItem("orderPayload")));
  }, []);

  const [btnLock, setBtnLock] = useState(false);

  return (
    <section
      className={`${globalStyles.fullHeight}  ${globalStyles.pt_20} ${globalStyles.pb_20}`}
    >
      <div className={`${globalStyles.container}`}>
        <MaintenanceHeader />
        <Formik
          enableReinitialize={true}
          validate={(values) => {
            const errors = {};
            if (
              values.question1 === "no" ||
              values.question2 === "no" ||
              values.question3 === "no" ||
              values.question4 === "no"
            ) {
              errors.questions = "All Questions must be yes";
            }

            return errors;
          }}
          initialValues={{
            question1: "yes",
            question2: "yes",
            question3: "yes",
            question4: "yes",
            description: "",
          }}
          onSubmit={async (values, { setSubmitting }) => {
            setSubmitting = true;
            try {
              let config = {
                headers: {
                  Authorization:
                    "Bearer " +
                    JSON.parse(localStorage.getItem("aireuser"))?.token,
                },
              };
              let newDate = new Date();
              let startDateTimeNew = "";
              let endDateTimeNew = "";
              if (
                JSON.parse(sessionStorage.getItem("orderPayload")).startDateTime
              ) {
                startDateTimeNew = JSON.parse(
                  sessionStorage.getItem("orderPayload")
                ).startDateTime;
              } else {
                startDateTimeNew = new Date();
              }
              if (
                JSON.parse(sessionStorage.getItem("orderPayload")).endDateTime
              ) {
                endDateTimeNew = JSON.parse(
                  sessionStorage.getItem("orderPayload")
                ).endDateTime;
              } else {
                endDateTimeNew = new Date();
              }
              setBtnLock(true);
              const orderDetails = {
                customerId: JSON.parse(localStorage.getItem("aireuser")).user
                  .id,
                serviceId: JSON.parse(sessionStorage.getItem("orderPayload"))
                  .serviceId,
                serviceType: JSON.parse(sessionStorage.getItem("orderPayload"))
                  .serviceType,
                startDateTime: new Date(),
                endDateTime: new Date(),
                startDateTime: startDateTimeNew,
                endDateTime: endDateTimeNew,
                description: values.description,
                toLatitude: JSON.parse(sessionStorage.getItem("orderPayload"))
                  .coordinates.toLatitude,
                toLongitude: JSON.parse(sessionStorage.getItem("orderPayload"))
                  .coordinates.toLongitude,

                location: JSON.parse(sessionStorage.getItem("orderPayload"))
                  .location,
              };
              if (
                parseInt(startDateTimeNew.replace(/-/g, ""), 10) ===
                parseInt(endDateTimeNew.replace(/-/g, ""), 10)
              ) {
                orderDetails.bookingType = 0;
              } else {
                orderDetails.bookingType = 1;
              }

              console.log(orderDetails);

              const response = await axios.post(
                "/api/CustomerOrder/Create",
                orderDetails,
                config
              );

              if (
                parseInt(startDateTimeNew.replace(/-/g, ""), 10) ===
                  parseInt(endDateTimeNew.replace(/-/g, ""), 10) &&
                response?.data?.code === 1
              ) {
                localStorage.setItem(
                  "orderId",
                  JSON.stringify(response.data.data.order.id)
                );
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Order Created Successfully!",
                  showConfirmButton: true,
                  timer: 5000,
                });
                router.push("/technician");
                setBtnLock(false);
              } else {
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Order Created Successfully!",
                  title: `Your request has been sent to the nearest available technician,
                  And should be on the way shortly. Thank you for your patience!`,
                  showConfirmButton: true,
                  timer: 5000,
                });
                setBtnLock(false);
              }
              console.log(orderDetails);
              if (response?.data?.code === 0) {
                Swal.fire({
                  position: "center",
                  icon: "error",
                  title: response?.data?.message,
                  showConfirmButton: true,
                  timer: 5000,
                  customClass: "messageshow",
                });
                setBtnLock(false);
              }
            } catch (error) {
              console.log(error);
              console.log(error.response);
              if (error.response?.status === 401) {
                Swal.fire({
                  position: "center",
                  icon: "error",
                  title: error.response?.data?.data?.message,
                  showConfirmButton: true,
                  customClass: "messageshow",
                });
                setBtnLock(false);
              } else if (error.response?.status === 400) {
                Swal.fire({
                  position: "center",
                  icon: "error",
                  title: error.response?.data?.data?.message,
                  showConfirmButton: true,
                  customClass: "messageshow",
                });
                setBtnLock(false);
              } else {
                Swal.fire({
                  position: "center",
                  icon: "error",
                  title: "An Error Has Occured. Please Try Again Later!",
                  showConfirmButton: true,
                  customClass: "messageshow",
                });
                setBtnLock(false);
              }
            }
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <MaintenenceQuestions
                handleChange={handleChange}
                values={values}
                errors={errors}
              />
              <AdditionalNotes values={values} handleChange={handleChange} />
              <div
                className={`${globalStyles.column_100} ${globalStyles.flex} ${globalStyles.flexJustifyCenter}`}
              >
                <Button
                  height="60px"
                  width="100%"
                  maxWidth="385px"
                  text="Book  SERVICE"
                  fontWeight="700"
                  fontSize={"15px"}
                  borderRadius="30px"
                  textTransform={"uppercase"}
                  margin="55px auto 0 auto"
                  btnType="primary"
                  btnLock={btnLock}
                />
              </div>
            </form>
          )}
        </Formik>
      </div>
    </section>
  );
}
export default Maintenance;
