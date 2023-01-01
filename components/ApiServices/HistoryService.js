import axios from "../../constants/axiosConfig";

export const schedule = async (id) => {
  let config = {
    headers: {
      Authorization: `Bearer  ${
        JSON.parse(localStorage.getItem("aireuser"))?.token
      }`,
    },
  };
  try {
    const response = await axios.get(
      `/api/CustomerAccount/ScheduledOrders?PageNumber=1&PageSize=10&userId=${id}`,
      config
    );
    return response;
  } catch (error) {
    return error.response;
  }
};
export const inprogress = async (id) => {
  let config = {
    headers: {
      Authorization: `Bearer  ${
        JSON.parse(localStorage.getItem("aireuser"))?.token
      }`,
    },
  };
  try {
    const response = await axios.get(
      `/api/CustomerAccount/InProgressOrders?PageNumber=1&PageSize=10&userId=${id}`,
      config
    );
    return response;
  } catch (error) {
    return error.response;
  }
};
export const historyData = async (id) => {
  let config = {
    headers: {
      Authorization: `Bearer  ${
        JSON.parse(localStorage.getItem("aireuser"))?.token
      }`,
    },
  };
  try {
    const response = await axios.get(
      `/api/CustomerAccount/CompletedOrders?PageNumber=1&PageSize=10&userId=${id}`,
      config
    );
    return response;
  } catch (error) {
    return error.response;
  }
};
