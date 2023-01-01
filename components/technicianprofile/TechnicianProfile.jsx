import Button from "../shared/Button";
import globalStyles from "../shared/Shared.module.scss";
import Map from "./Map";
import TechnicianHeader from "./TechnicianHeader";
import TechnicianDetails from "./TehnicianDetails";
import VehicleDetails from "./VehicleDetails";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useState } from "react";
import { cancel } from "../ApiServices/CancelOrder.Service";
import cancelItem from "../../hooks/canceltem";
import { useRouter } from "next/router";
import Pusher from "pusher-js";
import { useEffect } from "react";
import InvoiceDetails from "./InvoiceDetailsModal";

function TechnicianProfile(props) {
  const SwalModal = withReactContent(Swal);
  const [dataCount, setDataCount] = useState(0);
  const router = useRouter();
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState();
  const [invoiceData, setInvoiceData] = useState();

  const pusher = new Pusher("45f06df00cffc5c4a337", {
    cluster: "ap2",
  });

  const channel = pusher.subscribe(
    "customer-" + JSON.parse(localStorage.getItem("aireuser")).user.id
  );

  channel.bind("Order", async (data1) => {
    if (data1.message.Data.TechnicianId) {
      localStorage.setItem(
        "AireTechnician",
        JSON.stringify(data1.message.Data)
      );
      localStorage.setItem(
        "AireTechnicianId",
        JSON.stringify(data1.message.Data.TechnicianId)
      );
      localStorage.setItem("orderId", JSON.stringify(data1.message.Data.Id));
      debugger;
      setData(JSON.parse(localStorage.getItem("AireTechnician")));
      setLoader(false);
    } else if (data1.message.NotificationType === 4) {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Technician is" + " " + data1.message.Data,
      });
    } else if (data1.message.NotificationType === 8) {
      setInvoiceData(data1);
      if (dataCount === 0) {
        SwalModal.fire({
          html: <InvoiceDetails {...data} />,
          showConfirmButton: false,
          customClass: "chatmodal",
        });
        setDataCount(1);
      }
    }
  });

  const billpopup = () => {
    SwalModal.fire({
      html: <InvoiceDetails {...invoiceData} />,
      showConfirmButton: false,
      customClass: "chatmodal",
    });
  };

  const finalData = {
    TechnicianId: router?.query?.technicianId,
    TechnicianLiveLatitude: router?.query?.technicianLiveLatitude,
    TechnicianLiveLongitude: router?.query?.technicianLiveLongitude,
    TechnicianFirstName: router?.query?.technicianFirstName,
    TechnicianLastName: router?.query?.technicianLastName,
    TechnicianMiddleName: router?.query?.technicianMiddleName,
    TechnicianEmail: router?.query?.technicianEmail,
    TechnicianPhoneNumber: router?.query?.technicianPhoneNumber,
    TechnicianProfilePicPath: router?.query?.technicianProfilePicPath,
    VehicleName: router?.query?.vehicleName,
    VehicleModel: router?.query?.vehicleModel,
    VehicleNumber: router?.query?.vehicleNumber,
    TechnicianAddress: router?.query?.technicianAddress,
    Id: router?.query?.id,
    TotalAmount: router?.query?.totalAmount,
    CustomerName: router?.query?.customerName,
    CustomerProfilePicPath: router?.query?.customerProfilePicPath,
    ServiceType: router?.query?.serviceType,
    StartDateTime: router?.query?.startDateTime,
    EndDateTime: router?.query?.endDateTime,
    Description: router?.query?.description,
    ToLatitude: router?.query?.toLatitude,
    ToLongitude: router?.query?.toLongitude,
    Location: router?.query?.location,
    OrderType: router?.query?.orderType,
  };

  useEffect(() => {
    router?.query;
    if (router?.query?.technicianId) {
      localStorage.setItem("AireTechnician1", JSON.stringify(finalData));
      localStorage.setItem("orderId", JSON.stringify(finalData.Id));
      localStorage.setItem(
        "totalAmount",
        JSON.stringify(finalData.TotalAmount)
      );
      localStorage.setItem(
        "AireTechnicianId",
        JSON.stringify(router?.query?.technicianId)
      );
      setData(JSON.parse(localStorage.getItem("AireTechnician1")));
      setLoader(false);
    }
  }, []);

  return (
    <>
      {loader ? (
        <div>
          <div className="loader_container">
            {" "}
            <div className="loader loader_color"></div>
            <h1 className="loader_text">Please Wait Finding Technician....</h1>
          </div>
          <div
            className={`${globalStyles.column_100} ${globalStyles.flex} ${globalStyles.flexJustifyCenter}`}
          >
            <Button
              onClick={() =>
                cancelItem(
                  JSON.parse(localStorage.getItem("orderId")),
                  cancel,
                  router
                )
              }
              height="60px"
              width="100%"
              maxWidth="385px"
              text="CANCEL SERVICE"
              fontWeight="700"
              fontSize={"15px"}
              borderRadius="30px"
              textTransform={"uppercase"}
              margin="50px auto 40px auto"
              btnType="danger"
            />
          </div>
        </div>
      ) : (
        <section
          className={`${globalStyles.fullHeight}  ${globalStyles.pt_20} ${globalStyles.pb_65}`}
        >
          <div className={`${globalStyles.container}`}>
            <TechnicianHeader />
            <Map data={data} />
            <TechnicianDetails data={data} />
            {/* <ServiceDetails /> */}
            <VehicleDetails data={data} />
            <div
              className={`${globalStyles.column_100} ${globalStyles.flex} ${globalStyles.flexJustifyCenter}`}
            >
              <Button
                onClick={() => cancelItem(data.Id, cancel, router)}
                height="60px"
                width="100%"
                maxWidth="385px"
                text="CANCEL SERVICE"
                fontWeight="700"
                fontSize={"15px"}
                borderRadius="30px"
                textTransform={"uppercase"}
                margin="55px auto 0 auto"
                btnType="danger"
              />
              {invoiceData?.message.NotificationType === 8 ? (
                <Button
                  height="60px"
                  width="100%"
                  maxWidth="385px"
                  text="Service Bill"
                  fontWeight="700"
                  fontSize={"15px"}
                  padding="0"
                  borderRadius="30px"
                  textTransform={"uppercase"}
                  margin="55px auto 0 auto"
                  btnType="primary"
                  onClick={billpopup}
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default TechnicianProfile;
