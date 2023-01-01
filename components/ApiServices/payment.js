import axios from "../../constants/axiosConfig";

export const getsecretDetails = async (amount) => {
  let config = {
    headers: {
      Authorization: `Bearer  ${
        JSON.parse(localStorage.getItem("aireuser"))?.token
      }`,
    },
  };

  try {
    const response = await axios.get(
      `/api/CustomerOrder/GetStripeCustomerSecret?amount=${amount}`,
      config
    );
    return response;
  } catch (error) {
    return error.response;
  }
};
export const payment = async (body) => {
  let config = {
    headers: {
      Authorization: `Bearer  ${
        JSON.parse(localStorage.getItem("aireuser"))?.token
      }`,
    },
  };

  try {
    const response = await axios.put(`/api/CustomerOrder/PayJob`, body, config);
    return response;
  } catch (error) {
    return error.response;
  }
};
export const postReviews = async (body) => {
  let config = {
    headers: {
      Authorization: `Bearer  ${
        JSON.parse(localStorage.getItem("aireuser"))?.token
      }`,
    },
  };

  try {
    const response = await axios.post(
      `/api/CustomerAccount/Review`,
      body,
      config
    );
    return response;
  } catch (error) {
    return error.response;
  }
};
