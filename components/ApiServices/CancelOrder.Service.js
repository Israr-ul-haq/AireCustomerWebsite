import axios from "../../constants/axiosConfig";

export const cancel = async (body) => {
  let config = {
    headers: {
      Authorization:
        "Bearer " + JSON.parse(localStorage.getItem("aireuser"))?.token,
    },
  };
  try {
    const response = await axios.delete(
      `/api/CustomerOrder/Cancel?orderID=` + body,
      config
    );
    return response;
  } catch (error) {
    return error.response;
  }
};
export const deleteSomething = async (body) => {
  try {
    const response = await axios.delete("/api/Order/Delete?orderID=" + body);
    return response;
  } catch (error) {
    return error.response;
  }
};
export const getReviews = async (orderId) => {
  let config = {
    headers: {
      Authorization: `Bearer  ${
        JSON.parse(localStorage.getItem("aireuser"))?.token
      }`,
    },
  };
  try {
    const response = await axios.get(
      `/api/Order/GetReview?OrderId=${orderId}`,
      config
    );
    return response;
  } catch (error) {
    return error.response;
  }
};
export const getBillDetails = async (orderId) => {
  let config = {
    headers: {
      Authorization: `Bearer  ${
        JSON.parse(localStorage.getItem("aireuser"))?.token
      }`,
    },
  };
  try {
    const response = await axios.get(
      `/api/CustomerOrder/GetBillDetails?orderId=${orderId}`,
      config
    );
    return response;
  } catch (error) {
    return error.response;
  }
};
