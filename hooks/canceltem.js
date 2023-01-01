import Swal from "sweetalert2";
import crossicon from "../assets/images/shared/cancel.png";

const cancelItem = async (id, service, router, cleartime) => {
  Swal.fire({
    title: "Are you sure, you want to cancel this service ",
    showCancelButton: true,
    confirmButtonText: `Yes`,
    showCloseButton: true,
    cancelButtonText: "No",
  }).then(async (result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      try {
        const response = await service(id);
        if (response.data.code === 1) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Order is cancel",
          });
          localStorage.removeItem("AireTechnician");
          localStorage.removeItem("AireTechnicianId");
          router.push("/");
          clearTimeout(cleartime);
        }

        if (response.data.code === 0) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: response.data.data.message,
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
  });
};

export default cancelItem;
